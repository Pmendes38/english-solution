# Setup: Google Business Profile API (até 30+ reviews reais)

A Places API retorna no máximo ~5 reviews por chamada. Com multi-chamada chega a ~8-10. Pra ler **todos** os reviews do negócio (sem limite, com paginação real), precisamos da **Business Profile API** + OAuth 2.0.

O código já está pronto em [`lib/google-business-profile.js`](lib/google-business-profile.js) e [`lib/reviews-source.js`](lib/reviews-source.js). Só falta plugar as credenciais.

---

## Passo 1 — Solicitar acesso à API (1-7 dias úteis)

A Google revisa cada projeto manualmente. Preencha o formulário:

🔗 https://developers.google.com/my-business/content/prereqs

No formulário:
- **Project ID:** ID do seu projeto do Google Cloud (vê em Cloud Console)
- **Use case:** "Exibir reviews da nossa escola de inglês no site institucional próprio"
- **Quota request:** Você pode pedir o padrão (sem volumes altos)

Você recebe um e-mail quando aprovam.

---

## Passo 2 — Habilitar as APIs no Cloud Console

Em https://console.cloud.google.com/apis/library, habilitar:

- ✅ **My Business Account Management API**
- ✅ **My Business Business Information API**
- ✅ (opcional) **Business Profile Performance API**

---

## Passo 3 — Criar OAuth 2.0 Client ID

1. Em `APIs & Services > Credentials`, clicar `+ CREATE CREDENTIALS > OAuth client ID`
2. Tipo: **Web application**
3. **Authorized redirect URIs**: adicione exatamente
   ```
   https://developers.google.com/oauthplayground
   ```
4. Anote o `Client ID` e `Client Secret`

---

## Passo 4 — Gerar Refresh Token via OAuth Playground

1. Abra https://developers.google.com/oauthplayground/
2. Engrenagem (⚙) no canto direito → marque **"Use your own OAuth credentials"** e cole `Client ID` + `Client Secret` (do Passo 3)
3. Na esquerda, em "Step 1", role até **Google My Business API v4** (ou pesquise "My Business") e selecione TODOS os scopes:
   - `https://www.googleapis.com/auth/business.manage`
4. Clique **"Authorize APIs"** → faça login com a conta dona/admin do GBP do English Solution → autorize
5. Na "Step 2", clique **"Exchange authorization code for tokens"**
6. Copie o `Refresh token` que aparece (ele só aparece uma vez!)

---

## Passo 5 — Descobrir accountId e locationId

Com o refresh token em mãos, no próprio OAuth Playground:

1. Em "Step 3" cole no campo Request URI:
   ```
   https://mybusinessaccountmanagement.googleapis.com/v1/accounts
   ```
   Clique "Send the request" → copie o `name` do objeto (ex: `accounts/12345678901234567890`)

2. Depois:
   ```
   https://mybusinessbusinessinformation.googleapis.com/v1/accounts/12345678901234567890/locations?readMask=name,title
   ```
   Encontre a location da English Solution Valparaíso e copie o `name` (ex: `locations/9876543210`)

---

## Passo 6 — Configurar as env vars

**Local** (arquivo `.env`):

```env
GBP_CLIENT_ID=seu-client-id.apps.googleusercontent.com
GBP_CLIENT_SECRET=GOCSPX-xxxxxxxxxxx
GBP_REFRESH_TOKEN=1//xxxxxxxxxxxxxxxxxxxxxxxxxxx
GBP_ACCOUNT_ID=accounts/12345678901234567890
GBP_LOCATION_ID=locations/9876543210987654321
```

**Vercel** (Settings → Environment Variables, ou via CLI):

```bash
vercel env add GBP_CLIENT_ID production
vercel env add GBP_CLIENT_SECRET production
vercel env add GBP_REFRESH_TOKEN production
vercel env add GBP_ACCOUNT_ID production
vercel env add GBP_LOCATION_ID production
# Redeploy depois pra pegar as novas envs
vercel deploy --prod
```

---

## Como o site vai se comportar

O orchestrator [`lib/reviews-source.js`](lib/reviews-source.js) tenta as fontes nessa ordem:

1. **Business Profile API** — se as 5 envs `GBP_*` existem e o OAuth está válido, retorna todos os reviews (paginados, até 300 por padrão)
2. **Places API multi-chamada** — fallback automático para ~8-10 reviews únicos
3. Se ambos falham, o marquee fica vazio (a seção continua exibindo pills com rating)

Reviews "extras" colados manualmente em [`data/extra-reviews.js`](data/extra-reviews.js) são SEMPRE mesclados, mesmo quando a API funciona. Dedup por autor+texto evita duplicatas.

---

## Renovação do refresh token

O refresh token do Google não expira sob uso normal. Mas pode ser invalidado se:
- A senha da conta admin mudar
- A conta revogar o acesso ao app
- Ficar 6 meses sem ser usado

Se isso acontecer, refaça o **Passo 4** (gerar novo refresh token) e atualize no Vercel.
