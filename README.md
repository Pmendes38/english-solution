# English Solution — Site Institucional

Site institucional da **English Solution** — escola de inglês em Valparaíso de Goiás.
Construído em **Next.js 15 (App Router) + Tailwind CSS**, com tipografia e cores do brandbook oficial.

> Tagline da marca: _"Você fala inglês desde o primeiro dia."_

## Identidade visual aplicada

- **Cores** (brandbook): navy `#0A1F44`, vermelho `#E11D2A`, creme `#F8F6F2`. Variantes em `tailwind.config.js → theme.extend.colors.brand`.
- **Tipografia**: títulos em **Tinos** (substituto web do Times New Roman Bold do brandbook), corpo em **Montserrat**. Carregadas via `next/font` em [`app/layout.jsx`](app/layout.jsx).
- **Logo**: SVG/PNG oficiais em [`public/brand/`](public/brand/).

## Estrutura

```
DEV/
├── app/
│   ├── globals.css           # Tailwind + classes utilitárias da marca
│   ├── layout.jsx            # HTML, fontes, metadata SEO global
│   └── (site)/               # Route group com Header/Footer comuns
│       ├── layout.jsx
│       ├── page.jsx          # Home
│       ├── cursos/
│       │   ├── page.jsx      # Listagem de cursos
│       │   └── [slug]/page.jsx
│       ├── metodologia/page.jsx
│       ├── diferenciais/page.jsx
│       ├── depoimentos/page.jsx
│       ├── localizacao/page.jsx
│       └── duvidas/page.jsx
├── components/
│   ├── Header.jsx            # Nav sticky com dropdown de Cursos
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── GoogleReviews.jsx     # Avaliações do Google (estático + embed opcional)
│   ├── VideoTestimonials.jsx # Vídeos de alunos
│   ├── Methodology.jsx
│   ├── Courses.jsx
│   ├── Differentials.jsx
│   ├── Experience.jsx
│   ├── LocationPreview.jsx   # Mini-bloco da localização na home
│   ├── CTA.jsx
│   ├── FAQ.jsx               # Accordion (reaproveitável)
│   ├── PageHeader.jsx        # Header padrão de páginas internas
│   └── WhatsAppFloat.jsx
├── data/site.js              # Conteúdo, contatos, cursos e FAQ
├── public/brand/             # Logos
└── files/                    # BrandBook e logos originais
```

## Páginas

| Rota                        | Descrição                                      |
| --------------------------- | ---------------------------------------------- |
| `/`                         | Home com hero, Google Reviews, vídeos, etc.    |
| `/cursos`                   | Listagem de todos os cursos                    |
| `/cursos/intensivo-de-ferias` | Intensivo de Férias                          |
| `/cursos/business-english`  | Business English                               |
| `/cursos/curso-online`      | Curso Online                                   |
| `/cursos/ingles-para-empresas` | Inglês para Empresas (In Company)           |
| `/cursos/aulas-particulares`| Aulas Particulares                             |
| `/cursos/iniciantes`        | Aulas para Iniciantes                          |
| `/cursos/intermediario`     | Aulas Intermediário                            |
| `/cursos/avancado`          | Aulas Avançado                                 |
| `/metodologia`              | Metodologia e pilares                          |
| `/diferenciais`             | Diferenciais competitivos                      |
| `/depoimentos`              | Avaliações + vídeos                            |
| `/localizacao`              | Endereço, mapa, horários                       |
| `/duvidas`                  | FAQ completo                                   |

## Conteúdo dinâmico

Quase todo conteúdo (textos, cursos, depoimentos, contatos, FAQ) vive em [`data/site.js`](data/site.js). Edite lá e o site inteiro reflete.

### Google Reviews — integração real (Places API)

O componente [`GoogleReviews.jsx`](components/GoogleReviews.jsx) é um Server Component que busca avaliações reais do Google via **Places API (New)**. Enquanto as variáveis não estiverem definidas, ele exibe depoimentos de fallback.

Para ativar as avaliações reais:

1. Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/) e habilite a **Places API (New)**.
2. Gere uma API key e restrinja por **Places API**.
3. Encontre o **Place ID** da escola em [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
4. Crie um arquivo `.env.local` na raiz:

```env
GOOGLE_PLACES_API_KEY=AIza...sua-chave
GOOGLE_PLACE_ID=ChIJ...id-do-lugar
```

As avaliações são revalidadas a cada 6 horas (cache do Next.js). A lógica de fetch fica em [`lib/google-reviews.js`](lib/google-reviews.js).

### Depoimentos em vídeo

O componente [`VideoTestimonials.jsx`](components/VideoTestimonials.jsx) aceita qualquer URL de vídeo (`.mp4`, `.webm`). Edite `videoTestimonials` em [`data/site.js`](data/site.js) com `videoSrc` apontando para o vídeo final.

## Rodando localmente

```bash
npm install
npm run dev
```

http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy

Pronto para deploy na Vercel — basta importar o repositório.
