# Prompt Definitivo — Refatoração Visual English Solution (Dark Mode Premium Oficial)

Você é um Engenheiro Front-end Sênior trabalhando no projeto existente da English Solution. O projeto atual está publicado em `https://english-solution-sigma.vercel.app/` com um layout claro institucional. Sua missão é refatorar toda a interface aplicando o novo **tema dark premium oficial da marca**, baseado no BrandBook que está dentro da pasta de assets, sem perder rotas, conteúdo, SEO ou funcionalidade existente.

---

## 0. PRIMEIRO PASSO OBRIGATÓRIO: LER O BRANDBOOK

Antes de qualquer linha de código, você precisa fazer DUAS coisas, nessa ordem:

**Passo 0.1.** Localize a pasta `IMAGES` no projeto. Ela pode estar na raiz, em `/public`, em `/src` ou em `/assets`. Procure pelo nome exato. Liste todo o conteúdo dela.

A pasta contém esta estrutura confirmada:

```
IMAGES/
├── BrandBook.pdf
├── ICONS/
│   ├── ALVO ICON.png
│   ├── CALENDARIO ICON.png
│   ├── CONVERSAS ICON.png
│   ├── ESTRELA ICON.png
│   ├── LIVRO ICON.png
│   ├── LOCAL ICON.png
│   ├── PESSOAS ICON.png
│   ├── REDE ICON.png
│   ├── SHIELD ICON.png
│   └── WHATSAPP ICON.png
├── LAYOUT EXAMPLE/
│   └── (referência visual do novo layout)
├── LOGOS/
│   ├── LOGO + BG.jpg
│   ├── LOGO SEM BG.png
│   └── LOGO SEM BG.svg
└── PHOTOS/
    ├── HOME IMAGE.png          (hero principal, já com elementos flutuantes embutidos)
    ├── ChatGPT Image ...10_31_43.png   (depoimento/CTA #1)
    ├── ChatGPT Image ...10_38_48 (2).png   (depoimento #2)
    ├── ChatGPT Image ...10_38_48 (3).png   (depoimento #3)
    ├── ChatGPT Image ...10_38_49 (4).png   (depoimento #4)
    ├── ChatGPT Image ...10_38_49 (5).png   (comunidade — sala de aula)
    ├── ChatGPT Image ...10_38_50 (6).png   (comunidade — reunião business)
    ├── ChatGPT Image ...10_38_50 (7).png   (comunidade — aeroporto/viagens)
    ├── ChatGPT Image ...10_38_52 (8).png   (estudante estudando)
    ├── ChatGPT Image ...10_38_52 (9).png   (grupo casual)
    ├── ChatGPT Image ...10_38_53 (10).png  (aluno recortado — uso em CTA final)
    └── CURSOS/
        ├── ...10_55_06 (1).png   (Inglês para Viagens — mulher na praia com mochila)
        ├── ...10_55_07 (2).png   (Business English — homem de terno com laptop)
        ├── ...10_55_07 (3).png   (Curso Online — mulher com headphones)
        ├── ...10_55_07 (4).png   (Inglês para Empresas / In Company — reunião)
        ├── ...10_55_07 (5).png   (Aulas Particulares — dois estudando juntos)
        ├── ...10_55_08 (6).png   (Iniciantes — mulher escrevendo cards com bandeira UK)
        ├── ...10_55_08 (7).png   (Intermediário/Avançado — mulher estudando)
        └── ...10_55_08 (8).png   (Preparatórios — apresentador em reunião)
```

**Passo 0.2.** ABRA E LEIA o arquivo `BrandBook.pdf`. Esse documento contém a paleta oficial de cores em hex, a tipografia oficial, os usos corretos e incorretos da logo, o tom de voz e a estrutura de copy. Todas as decisões visuais devem respeitá-lo.

Os tokens da seção 1 abaixo já estão extraídos do BrandBook e prontos para uso, mas leia o PDF para validar e para entender o tom de voz que precisa estar refletido em qualquer copy nova que você precisar redigir.

**Passo 0.3.** Mova/copie os assets para uma estrutura utilizável pelo framework. Se o projeto for Next.js, espelhe em `/public/brand/`:

```
/public/brand/
├── logo.svg                              (de LOGOS/LOGO SEM BG.svg)
├── logo.png                              (de LOGOS/LOGO SEM BG.png)
├── icons/alvo.png
├── icons/calendario.png
├── icons/conversas.png
├── icons/estrela.png
├── icons/livro.png
├── icons/local.png
├── icons/pessoas.png
├── icons/rede.png
├── icons/shield.png
├── icons/whatsapp.png
├── photos/hero-home.png                  (de HOME IMAGE.png)
├── photos/depoimento-1.png ... 4.png
├── photos/comunidade-1.png ... 3.png
├── photos/cta-final-aluno.png            (de PHOTOS/...(10).png — fundo transparente)
└── photos/cursos/
    ├── viagens.png
    ├── business.png
    ├── online.png
    ├── empresas.png
    ├── particulares.png
    ├── iniciantes.png
    ├── intermediario-avancado.png
    └── preparatorios.png
```

**Passo 0.4.** Crie um arquivo `src/lib/assets.ts` (ou equivalente no framework) mapeando esses caminhos a constantes nomeadas. Toda referência a asset no projeto deve passar por esse arquivo, nunca string hardcoded.

```ts
export const ASSETS = {
  logo: '/brand/logo.svg',
  icons: {
    alvo: '/brand/icons/alvo.png',
    calendario: '/brand/icons/calendario.png',
    conversas: '/brand/icons/conversas.png',
    estrela: '/brand/icons/estrela.png',
    livro: '/brand/icons/livro.png',
    local: '/brand/icons/local.png',
    pessoas: '/brand/icons/pessoas.png',
    rede: '/brand/icons/rede.png',
    shield: '/brand/icons/shield.png',
    whatsapp: '/brand/icons/whatsapp.png',
  },
  photos: {
    heroHome: '/brand/photos/hero-home.png',
    depoimentos: [
      '/brand/photos/depoimento-1.png',
      '/brand/photos/depoimento-2.png',
      '/brand/photos/depoimento-3.png',
      '/brand/photos/depoimento-4.png',
    ],
    comunidade: [
      '/brand/photos/comunidade-1.png',
      '/brand/photos/comunidade-2.png',
      '/brand/photos/comunidade-3.png',
    ],
    ctaFinalAluno: '/brand/photos/cta-final-aluno.png',
    cursos: {
      viagens: '/brand/photos/cursos/viagens.png',
      business: '/brand/photos/cursos/business.png',
      online: '/brand/photos/cursos/online.png',
      empresas: '/brand/photos/cursos/empresas.png',
      particulares: '/brand/photos/cursos/particulares.png',
      iniciantes: '/brand/photos/cursos/iniciantes.png',
      intermediarioAvancado: '/brand/photos/cursos/intermediario-avancado.png',
      preparatorios: '/brand/photos/cursos/preparatorios.png',
    },
  },
} as const;
```

---

## 1. DESIGN TOKENS (EXTRAÍDOS DO BRANDBOOK OFICIAL)

### Paleta oficial da marca

```css
:root {
  /* Cores oficiais do BrandBook */
  --brand-blue: #002D60;        /* Azul Principal — confiança, credibilidade, estabilidade */
  --brand-red: #E31E24;         /* Vermelho Principal — ação, energia, entusiasmo */
  --brand-white: #FFFFFF;       /* Branco — clareza, leveza */
  --brand-gray-dark: #222222;   /* Cinza Escuro — textos principais */
  --brand-gray-light: #F2F2F2;  /* Cinza Claro — divisores sutis */

  /* Sistema dark derivado da identidade (NÃO inventar cores genéricas) */
  --bg-base: #04122B;           /* Fundo principal — Azul Principal escurecido ~70% */
  --bg-elevated: #07204A;       /* Cards, painéis — Azul Principal escurecido ~50% */
  --bg-overlay: #0A2D63;        /* Hover, elevações — quase o Azul Principal puro */
  --border-subtle: rgba(120, 160, 255, 0.10);
  --border-default: rgba(120, 160, 255, 0.18);

  /* Texto sobre fundo escuro */
  --text-primary: #F8FAFC;
  --text-secondary: #AAB6C8;
  --text-muted: #6F7C91;

  /* Acentos */
  --accent: var(--brand-red);
  --accent-hover: #B81722;
  --accent-glow: rgba(227, 30, 36, 0.30);
  --blue-glow: rgba(0, 45, 96, 0.45);
}
```

Exponha esses tokens no `tailwind.config` se o projeto usa Tailwind. **Não use cores hex hardcoded em componentes.**

### Tipografia oficial

O BrandBook define exatamente duas fontes:

- **Fonte principal:** `Times New Roman Bold` — para títulos institucionais, headlines do hero, lettering principal da marca. Quando o projeto for web e Times New Roman tiver renderização inconsistente entre browsers, use **`Times New Roman` via stack `'Times New Roman', Times, serif`** com `font-weight: 700`. Se quiser garantia visual idêntica em todos os browsers, importe do Adobe Fonts ou use uma alternativa free próxima: **`'Tinos'`** (Google Fonts, métrica idêntica a Times) com `font-weight: 700`.
- **Fonte secundária:** `Montserrat` (Google Fonts), pesos 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold). Usada para navegação, botões, corpo de texto, cards, FAQ, footer.

**Hierarquia:**
- H1 (hero, headlines principais): Times New Roman Bold, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.0–1.1.
- H2 (seções): Times New Roman Bold, `clamp(2rem, 4vw, 3rem)`, line-height 1.1.
- H3 (cards, blocos): Montserrat Bold, 1.25rem–1.5rem, line-height 1.3.
- Eyebrow labels ("NOSSOS PROGRAMAS", "NOSSA METODOLOGIA"): Montserrat Semibold, uppercase, `letter-spacing: 0.16em`, 12–13px, cor `--accent` (vermelho), precedido de uma barra vermelha vertical de 3px à esquerda.
- Body: Montserrat Regular, 16px, line-height 1.6, cor `--text-secondary`.
- Botões: Montserrat Semibold, 14–15px.

**Destaque tipográfico do hero (regra do BrandBook):** uma das linhas do H1 deve aparecer em **vermelho** (`--accent`) para criar o contraste característico da marca. No layout de referência é a linha "Seja imersivo." Mantenha esse padrão.

### Espaçamento e container

- Container máximo: `1200px`, padding lateral `px-6` mobile / `px-8` desktop.
- Espaçamento vertical entre seções: `py-20` mobile / `py-28` desktop.
- Border-radius padrão: cards `rounded-2xl` (16px), botões `rounded-xl` (12px), pills/tags `rounded-full`.

### Botões

```tsx
// Primário (CTA principal — agendar aula)
className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3.5 rounded-xl
           font-semibold shadow-[0_8px_24px_var(--accent-glow)]
           hover:bg-accent-hover hover:shadow-[0_12px_32px_var(--accent-glow)]
           transition-all duration-200"

// Secundário (outline)
className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.02]
           text-white px-6 py-3.5 rounded-xl font-semibold
           hover:bg-white/[0.06] hover:border-white/25
           transition-all duration-200"

// Branco (usado em cards translúcidos sobre fundo escuro)
className="inline-flex items-center gap-2 bg-white text-brand-blue px-5 py-2.5
           rounded-xl font-semibold hover:bg-white/90 transition"
```

Todo CTA de conversão aponta para `https://wa.me/5561994359936`.

### Iconografia

Os 10 ícones da pasta `ICONS` são line-art em duas cores (azul-marinho e vermelho) com fundo transparente. Funcionam perfeitamente sobre fundo escuro. **Use-os diretamente como `<Image>` ou `<img>`**, não substitua por ícones de bibliotecas. Mapeamento canônico:

| Ícone | Uso |
|---|---|
| `alvo.png` | Método exclusivo, foco, objetivo |
| `calendario.png` | Agendar aula, datas, horários |
| `conversas.png` | Conversação, "foco em conversação" |
| `estrela.png` | Avaliação 5.0 Google, excelência |
| `livro.png` | Material próprio, aprendizado, sem livros caros |
| `local.png` | Localização, "onde estamos" |
| `pessoas.png` | Alunos transformados, comunidade |
| `rede.png` | Inglês para o mundo, globo, internacional |
| `shield.png` | Garantia, confiança, "sem compromisso" |
| `whatsapp.png` | Botão flutuante WhatsApp, contato direto |

Para detalhes de UI não cobertos pelos 10 ícones (setas, play, chevron, plus do FAQ, ícone de hamburger menu mobile), use `lucide-react` em cor `--text-primary` ou `--accent`.

---

## 2. TOM DE VOZ E COPY (DO BRANDBOOK)

Sempre que precisar redigir copy nova (subtítulos, microcopy, descrições de cursos), siga estas regras do BrandBook:

**Como falamos:** humano, direto, energético, motivador, conversacional, simples.
**Como NÃO falamos:** acadêmico tradicional, corporativo, elitista, engessado, marketing exagerado.

**Estrutura de copy de seção:** Dor real → Solução prática → Segurança → CTA direto.

**Palavras-chave a usar:** conversação, confiança, resultado, fluência, prática, evolução, transformação, experiência.

**Frases-âncora oficiais da marca (reutilizar quando couber):**
- "Você fala inglês desde o primeiro dia."
- "Aprenda inglês falando."
- "Chega de travar no inglês."
- "Aqui você pratica de verdade."
- "Seu inglês começa agora."
- "Fale inglês com confiança."

---

## 3. HOME — RECONSTRUÇÃO INTEGRAL

A home deve seguir o `LAYOUT EXAMPLE/ChatGPT Image 23 de mai. de 2026, 10_31_51.png` como referência visual oficial. Abra esse arquivo antes de começar.

### 3.1. Navbar (sticky com blur)

`bg-base/80 backdrop-blur-md border-b border-white/5`, altura 72px.

- **Esquerda:** logo English Solution (ASSETS.logo). A logo oficial tem fundo transparente e funciona bem sobre fundo escuro.
- **Centro:** nav com `Cursos` (com dropdown), `Metodologia`, `Diferenciais`, `Depoimentos`, `Blog`, `Contato`. Texto em `--text-secondary`, hover em `--text-primary`.
- **Direita:** botão primário "Agendar Aula Experimental" com seta `→`.
- **Mobile:** menu hamburger que abre drawer dark de tela cheia.

### 3.2. Hero

Layout em duas colunas no desktop, empilhado no mobile.

**Coluna esquerda (texto):**
- Eyebrow vermelho: `INGLÊS QUE TRANSFORMA` com barra vermelha vertical 3px à esquerda.
- H1 em três linhas (use Times New Roman Bold):
  - Linha 1: "Domine o inglês."
  - Linha 2: "Expanda o mundo."
  - Linha 3: "Seja imersivo." **em vermelho `--accent`**.
- Parágrafo descritivo (`--text-secondary`):
  *"Na English Solution, você aprende inglês de verdade: com fluência, confiança e resultados que se refletem na vida real."*
- Dois botões lado a lado:
  - Primário: "Agendar Aula Experimental →"
  - Secundário com ícone play: "Como funciona"

**Coluna direita (composição visual):**
- Use diretamente `ASSETS.photos.heroHome` (`HOME IMAGE.png`). **ATENÇÃO:** essa imagem já vem com os elementos flutuantes "Inglês para o mundo real" e "Conversação desde a 1ª aula" embutidos. NÃO crie divs absolute sobrepostos com esses textos. Apenas posicione a imagem.
- Adicione apenas um card branco flutuante no canto inferior direito da composição, sobreposto à imagem:
  - Fundo branco sólido, `rounded-2xl`, shadow forte.
  - Conteúdo: pequeno quadrado vermelho com ícone calendário à esquerda, label "AULA EXPERIMENTAL" em vermelho com fonte pequena, texto "Gratuita e sem compromisso" em preto, botão "Quero experimentar →" abaixo.
- Aplique um glow vermelho sutil atrás da composição: `box-shadow: 0 0 120px var(--blue-glow)` ou um `radial-gradient` no container.

### 3.3. Faixa de métricas

Logo abaixo do hero. **Card BRANCO** (sim, branco mesmo, contrastando com o fundo escuro, igual ao LAYOUT EXAMPLE), `rounded-2xl`, padding generoso, sombra sutil.

Quatro colunas separadas por divisores verticais cinza-claros. Cada coluna tem ícone + número grande em preto + descrição cinza:

1. Ícone `pessoas.png` + **+5.000** + "alunos transformados"
2. Ícone `estrela.png` + **5.0** + "no Google"
3. Ícone `conversas.png` + **100%** + "foco em conversação"
4. Ícone `shield.png` + **Método exclusivo** + "com resultados comprovados"

> Nota: o número "+5.000" é um placeholder. O site atual menciona "+190 avaliações reais" e "200+ avaliações" para o Google. Confirme com Pedro qual número usar antes de publicar; se houver dúvida, use **+190 alunos** que está validado no BrandBook.

### 3.4. Programas / Cursos em destaque

Eyebrow vermelho: `NOSSOS PROGRAMAS` (com linha vertical vermelha + bolinhas decorativas verticais à esquerda do bloco de texto, como no LAYOUT EXAMPLE).

H2 em Times New Roman Bold, duas linhas:
*"O inglês certo para cada fase da sua jornada."*

Subtexto em `--text-secondary`:
*"Cursos completos, flexíveis e práticos para você evoluir com consistência."*

CTA secundário: "Ver todos os cursos →"

**À direita do bloco de texto:** carrossel/grid de 4 cards de curso em destaque, com setas de navegação acima (botões circulares dark `< >`).

Cada card de curso (em `bg-elevated rounded-2xl`, hover sobe levemente com transição):
- Imagem no topo, aspect-ratio 4:5.
- Eyebrow vermelho com tag do curso (ex: "INGLÊS GERAL").
- Título branco bold ("Do básico ao avançado com foco em fluência.").
- Botão circular vermelho com seta `→` no canto inferior do card.
- **Um dos cards (o 2º, "Inglês para Viagens") tem badge "MAIS PROCURADO" no canto superior esquerdo da imagem**, em fundo vermelho com texto branco.

Cards em destaque na home:
1. **INGLÊS GERAL** — `cursos.iniciantes` ou `cursos.intermediarioAvancado` — "Do básico ao avançado com foco em fluência."
2. **INGLÊS PARA VIAGENS** — `cursos.viagens` — "Viaje com confiança e aproveite cada experiência." [BADGE "MAIS PROCURADO"]
3. **INGLÊS PARA NEGÓCIOS** — `cursos.business` — "Comunicação eficaz para o ambiente corporativo."
4. **PREPARATÓRIOS** — `cursos.preparatorios` — "Prepare-se para exames e conquiste novas oportunidades."

### 3.5. Depoimento em destaque

Card horizontal grande, `bg-elevated rounded-2xl`, padding generoso. Duas colunas:

**Esquerda (texto):**
- Aspas vermelhas gigantes decorativas no canto superior esquerdo.
- Texto do depoimento em Times New Roman, regular, tamanho 1.5rem, line-height 1.4:
  *"A metodologia da English Solution fez eu destravar meu inglês e abrir portas que antes pareciam distantes."*
- Nome do aluno em Montserrat Bold branco: *"Lucas Andrade"*
- Cargo em vermelho `--accent`: *"Aluno English Solution"*

**Direita:**
- Imagem do aluno (use `ASSETS.photos.depoimentos[0]` ou similar — rosto sorrindo, fundo escurecido).
- Pequeno overlay com botão play circular vermelho + texto "Assista ao depoimento" em letra clara.

### 3.6. Métricas adicionais e prova social Google

Bloco com headline central serifada:
*"A escola de inglês mais bem avaliada da região."*

Três cards horizontais em `bg-elevated`:
1. Logo Google + "5.0" + 5 estrelas vermelhas
2. Ícone `estrela.png` + "+190 avaliações" + "reais e verificadas"
3. Ícone `shield.png` + "Nota máxima" + "em atendimento"

### 3.7. Metodologia

Duas colunas.

**Esquerda:**
- Eyebrow vermelho: `NOSSA METODOLOGIA`
- H2 Times New Roman Bold: *"Inglês vivido na prática."*
- Parágrafo descritivo.
- CTA secundário: "Entenda como funciona →"

**Direita:**
Lista vertical de 5 itens, cada um em uma linha com:
- Ícone vermelho em quadrado `bg-accent/10 rounded-lg p-2.5` (use os ícones da pasta).
- Título Montserrat Bold branco.
- Descrição em `--text-secondary`.

Itens (use exatamente esta copy):
1. `conversas.png` — **Conversação desde a primeira aula** — "Você fala inglês desde o início do curso."
2. `rede.png` — **Experiências práticas e imersivas** — "Aulas dinâmicas com temas do mundo real."
3. `pessoas.png` — **Professores especialistas e próximos** — "Acompanhamento humanizado."
4. `livro.png` — **Sem dependência de livros caros** — "Todo o material incluso e atualizado."
5. `alvo.png` — **Aulas ao vivo em pequenos grupos** — "Mais prática, mais atenção, mais resultados."

### 3.8. Diferenciais

Eyebrow: `POR QUE SOMOS REFERÊNCIA NA REGIÃO?`
H2: *"Mais que uma escola, uma escolha inteligente."*

Grid horizontal de 5 ícones em círculos `border border-white/10 bg-white/[0.02] rounded-full p-5`, com texto curto abaixo em duas linhas centralizadas:
1. `pessoas.png` — Professores nativos e certificados
2. `conversas.png` — Turmas reduzidas e personalizadas
3. `local.png` — Ambiente moderno e acolhedor
4. `alvo.png` — Resultados rápidos e comprovados
5. `shield.png` — Atendimento próximo e humanizado

### 3.9. Comunidade

Duas colunas.

**Esquerda:** mosaico de 3 fotos da comunidade. Use:
- `ASSETS.photos.comunidade[0]` (sala de aula) — imagem grande no topo, ocupando largura cheia.
- `ASSETS.photos.comunidade[1]` (reunião) — imagem menor à esquerda inferior.
- `ASSETS.photos.comunidade[2]` (grupo casual) — imagem menor à direita inferior.
Todas em `rounded-2xl overflow-hidden`.

**Direita:**
- Eyebrow: `MUITO ALÉM DA SALA DE AULA`
- H2 serifado: *"Uma comunidade que te inspira a ir mais longe."*
- Lista de 3 itens com check vermelho:
  1. **Eventos e conversação toda semana** — Pratique, faça amigos e perca o medo.
  2. **Imersão cultural** — Atividades que aproximam você do mundo real.
  3. **Ambiente que motiva** — Energia positiva para você evoluir sempre.

### 3.10. Localização

Duas colunas.

**Esquerda:** card `bg-elevated rounded-2xl` com:
- Eyebrow: `VENHA CONHECER A ESCOLA`
- H2: *"Estamos esperando por você!"*
- Endereço com ícone `local.png`: "Valparaíso de Goiás - GO" (mantenha o endereço real do site atual).
- Telefone com ícone de fone: "(61) 99435-9936"
- WhatsApp com ícone `whatsapp.png`: "Fale no WhatsApp"
- Dois botões: "Agendar visita" (primário) e "Como chegar" (secundário).

**Direita:** embed do Google Maps existente, em container `rounded-2xl overflow-hidden border border-white/10`. Aplique o tema dark do Google Maps via parâmetro de URL ou wrap visual.

### 3.11. CTA Final

Faixa full-width com background composto:
- Fundo `bg-elevated` com gradiente sutil de azul-marinho para preto.
- Ornamentos sutis de linhas curvas/rede (pode ser SVG inline ou um overlay `opacity-10` com o ícone `rede.png` ampliado).
- **À direita:** `ASSETS.photos.ctaFinalAluno` (foto recortada do aluno com livro/café, fundo transparente) posicionada `absolute right-0 bottom-0`.

**Conteúdo central-esquerda:**
- Eyebrow vermelho: `SUA NOVA HISTÓRIA COMEÇA AGORA`
- H2 Times New Roman Bold: *"Seu inglês começa agora."*
- Texto: *"Comece hoje com uma aula experimental gratuita. Sem compromisso. 100% online ou presencial."*
- Dois botões: "Agendar Aula Experimental" (primário) e "Falar no WhatsApp" (secundário com ícone WhatsApp).
- Microcopy de prova social abaixo: ícones de avatar empilhados (3 mini avatares circulares) + "+200 pessoas agendaram essa semana".

### 3.12. FAQ

Eyebrow: `DÚVIDAS FREQUENTES`
H2: *"Perguntas que recebemos sempre."*

Accordion com fundos `bg-elevated rounded-xl mb-3`, padding generoso, ícone `+` à direita que rotaciona para `×` quando aberto. Mantenha as 8 perguntas existentes no site atual:

- Precisa comprar livro?
- Em quanto tempo eu começo a falar?
- Tem aula experimental?
- Como funciona a metodologia?
- Atendem alunos online?
- Vocês atendem empresas?
- Quais níveis vocês cobrem?
- Onde fica a escola?

CTA "Ver todas as perguntas →" centralizado abaixo.

### 3.13. Footer

`bg-base` com top-border sutil `border-t border-white/5`, padding `py-16`.

Quatro colunas (mobile: 2x2 ou empilhado):

**Coluna 1 (Brand):**
- Logo English Solution.
- Tagline: *"Inglês que transforma. Resultados que te levam mais longe."*
- Ícones sociais (Instagram, Facebook, LinkedIn) em círculos `border border-white/10`.

**Coluna 2 (Institucional):** Quem somos, Nossa metodologia, Diferenciais, Depoimentos, Blog, Trabalhe conosco.

**Coluna 3 (Cursos):** Inglês Geral, Inglês para Negócios, Inglês para Viagens, Preparatórios, Todos os cursos.

**Coluna 4 (Suporte):** Central do aluno, Perguntas frequentes, Política de privacidade, Termos de uso.

**Coluna 5 (Contato):** Telefone clicável, email, endereço.

Linha inferior com divisor sutil: "© 2026 English Solution. Todos os direitos reservados."

**Botão WhatsApp flutuante** no canto inferior direito (`fixed bottom-6 right-6 z-50`), círculo verde WhatsApp clássico com ícone branco. Aparece em todas as páginas. Link para `https://wa.me/5561994359936`.

---

## 4. ADAPTAÇÃO DE TODAS AS PÁGINAS INTERNAS

Para cada rota interna, preserve conteúdo, hierarquia semântica, links, metadata e funcionalidade. Apenas aplique a nova linguagem visual usando os mesmos componentes da home.

### 4.1. `/cursos` (catálogo)

- PageHero dark com eyebrow `NOSSOS CURSOS`, H1 *"Um caminho para cada objetivo."*, subtexto *"Do iniciante absoluto ao profissional em reuniões internacionais."*, CTA "Falar com a equipe".
- Grid 3 colunas (desktop) / 1 coluna (mobile) com TODOS os 8 cursos existentes, usando o mesmo componente `CourseCard` da home.
- Mapeamento curso → imagem da pasta CURSOS:
  - Intensivo de Férias → `cursos.viagens` (ou criar variação)
  - Business English → `cursos.business`
  - Curso Online → `cursos.online`
  - Inglês para Empresas → `cursos.empresas`
  - Aulas Particulares → `cursos.particulares`
  - Aulas para Iniciantes → `cursos.iniciantes`
  - Aulas Intermediário → `cursos.intermediarioAvancado`
  - Aulas Avançado → `cursos.preparatorios` (ou criar variação)
- Bloco de CTA final replicado da home.

**Não adicione filtros, chips ou tabs.** O conteúdo é compacto o suficiente para um grid simples.

### 4.2. `/cursos/[slug]`

Template único para todos os cursos. Estrutura:

1. Hero dark com imagem do curso de fundo (com overlay `bg-base/70` para legibilidade), breadcrumb (`Home › Cursos › Nome do curso`), tag/eyebrow do curso, H1 com nome do curso, subheadline específica, dois botões (Quero esse curso / Falar no WhatsApp).
2. Bloco de info em 3 cards horizontais: **Para quem é**, **Duração**, **Formato**. Use os ícones da pasta (`pessoas`, `calendario`, `local`).
3. Seção "O que você vai vivenciar" com lista de 4–6 benefícios em cards escuros (use ícones diversos da pasta).
4. Bloco "Como funciona" com 4 passos numerados (estilo timeline horizontal no desktop, vertical no mobile).
5. Seção "Outros cursos relacionados" com 3 cards de curso (use o componente `CourseCard`).
6. FAQ compacto com 4–5 perguntas específicas do curso.
7. CTA final replicado da home.

### 4.3. `/metodologia`

1. PageHero dark com eyebrow `NOSSA METODOLOGIA`, H1 *"Inglês vivido na prática."*, subtexto descritivo.
2. Bloco com os 5 pilares expandidos (mesmos da home, mas com descrições mais longas e imagens da pasta). Layout alternado: pilar 1 imagem-esquerda/texto-direita, pilar 2 texto-esquerda/imagem-direita, e assim por diante.
3. Bloco "Jornada do aluno" em timeline horizontal/vertical: **Diagnóstico → Imersão → Prática → Acompanhamento → Vivência**. Cada etapa com ícone da pasta, título e descrição curta.
4. CTA intermediário ("Quero experimentar essa metodologia").
5. Seção "Diferenciais da metodologia" reaproveitando o grid de 5 ícones da home.
6. CTA final.

### 4.4. `/depoimentos`

1. PageHero dark com eyebrow `DEPOIMENTOS`, H1 *"Quem viveu a English Solution conta."*, badge Google "5.0 · +190 avaliações".
2. Bloco destacado com 3 cards de depoimento em vídeo (mesmo padrão da home).
3. Grid de avaliações reais do Google em cards `bg-elevated rounded-2xl`. Cada card tem avatar circular (use os do site atual quando existirem), nome, tempo, 5 estrelas vermelhas, texto da avaliação. Layout em grid `md:grid-cols-2 lg:grid-cols-3`.
4. Paginação visual ou "Carregar mais" no final (se houver muitas avaliações).
5. CTA final.

### 4.5. `/diferenciais`

1. PageHero dark com eyebrow `DIFERENCIAIS`, H1 *"Por que somos referência na região."*
2. Bloco expandido dos 5 diferenciais da home, cada um com sua seção dedicada: ícone grande, título, descrição longa, imagem da pasta (use as fotos de comunidade/estudante).
3. Tabela comparativa (se já existir no site atual) "English Solution vs. escolas tradicionais", em estilo dark com checks vermelhos e X cinza.
4. CTA final.

### 4.6. `/localizacao`

1. PageHero dark com eyebrow `LOCALIZAÇÃO`, H1 *"Venha conhecer a escola."*
2. Grid de 3 cards horizontais: **Endereço**, **Horários**, **Contato direto**. Cada um com ícone da pasta.
3. Bloco grande do mapa em container `rounded-2xl overflow-hidden border border-white/10` ocupando largura cheia.
4. Galeria de fotos da escola/ambiente (use `comunidade-1`, `comunidade-2`, `comunidade-3` ou fotos específicas se houver).
5. Dois CTAs: "Como chegar" e "Agendar aula experimental".

### 4.7. `/duvidas`

1. PageHero dark com eyebrow `FAQ`, H1 *"Perguntas que recebemos sempre."*
2. FAQ accordion com TODAS as perguntas existentes no site atual, agrupadas por categoria (Aulas, Material, Online, Empresas, Pagamento). Cada categoria é uma seção com seu próprio título.
3. CTA fixo lateral (ou no final) "Não encontrou sua dúvida? Fale no WhatsApp".

### 4.8. `/blog` e `/contato`

- `/blog`: mesma linguagem visual. Hero + grid de cards de post (imagem, categoria em tag vermelha, título, data, "Leia mais →"). Se não houver posts ainda, mostre uma página "Em breve" elegante.
- `/contato`: hero + formulário em tema escuro (`bg-elevated`, inputs com `bg-base/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted`), botão primário "Enviar mensagem", informações de contato à direita em cards.

---

## 5. ORDEM DE EXECUÇÃO

Execute nessa sequência, sem pular passos:

1. **Auditoria do projeto.** Liste framework, estrutura de pastas, rotas existentes (`/cursos`, `/cursos/[slug]`, `/metodologia`, `/depoimentos`, `/diferenciais`, `/localizacao`, `/duvidas`, `/blog`, `/contato`), localização dos dados de cursos/FAQ/depoimentos, e onde está a pasta `IMAGES`. Apresente o inventário em formato de log.
2. **Leia o BrandBook.pdf.** Confirme tokens e tipografia oficiais antes de codificar.
3. **Mova/copie os assets** para `/public/brand/` (ou estrutura equivalente) e crie `src/lib/assets.ts`.
4. **Defina os design tokens** em `globals.css` e `tailwind.config.{js,ts}`.
5. **Configure as fontes** (Times New Roman ou Tinos + Montserrat) via `next/font` ou link Google Fonts.
6. **Construa os componentes base globais** em `/components/ui/` e `/components/sections/`:
   - `NavbarDark`, `FooterDark`, `FloatingWhatsAppButton`
   - `Button` (primário, secundário, branco)
   - `Eyebrow`, `SectionTitle`
   - `Card`, `CourseCard`, `MetricCard`, `TestimonialCard`, `FeatureRow`
   - `PageHero` (template de hero das páginas internas)
   - `FaqAccordion`
   - `CtaFinal` (CTA final reutilizável)
7. **Reescreva a Home** seção por seção, na ordem 3.1 → 3.13.
8. **Adapte as páginas internas** uma a uma, na ordem 4.1 → 4.8.
9. **Rode `npm install`** se necessário, **`npm run lint`** e **`npm run build`**. Corrija qualquer erro de TypeScript, import ou caminho de asset.
10. **Validação manual.** Abra cada rota localmente e confirme:
    - Visual condiz com a referência dark premium.
    - Todos os assets carregam corretamente.
    - WhatsApp e links externos funcionam.
    - Mobile (< 768px) está fluido sem overflow horizontal.
    - Tabs/dropdowns/accordions abrem corretamente.
11. **Commit final** com mensagem descritiva. Relate na resposta: arquivos alterados, assets usados em cada seção, e qualquer pendência real.

---

## 6. CRITÉRIOS DE ACEITE (CHECKLIST DE ENTREGA)

A entrega só está correta se TODOS estes critérios forem verdadeiros:

- [ ] O site inteiro abandonou a estética branca anterior.
- [ ] Todas as páginas usam o tema dark premium oficial (background derivado de #002D60).
- [ ] A Home reproduz fielmente o LAYOUT EXAMPLE/ChatGPT Image 23 de mai. de 2026, 10_31_51.png.
- [ ] Os 10 ícones da pasta ICONS estão sendo usados em suas seções correspondentes (mapeamento da tabela na seção 1).
- [ ] As 8 fotos da pasta CURSOS estão sendo usadas nos cursos correspondentes.
- [ ] A imagem HOME IMAGE.png é usada no hero da home SEM elementos flutuantes duplicados.
- [ ] A logo da pasta LOGOS é usada no header e no footer.
- [ ] Times New Roman Bold (ou Tinos) está aplicado em todas as headlines H1 e H2.
- [ ] Montserrat está aplicado em toda navegação, botões, corpo de texto, cards, FAQ.
- [ ] Os destaques tipográficos em vermelho seguem o padrão da marca (uma linha do hero em vermelho, eyebrows em vermelho).
- [ ] Nenhuma imagem externa do Unsplash, Pexels ou similar permanece no projeto.
- [ ] Nenhum placeholder genérico aparece onde existe asset da pasta IMAGES.
- [ ] Todas as rotas existentes continuam funcionando.
- [ ] Todos os CTAs apontam para https://wa.me/5561994359936.
- [ ] O site é totalmente responsivo (mobile-first sem overflow horizontal).
- [ ] `npm run build` completa sem erros.
- [ ] Componentes globais (Navbar, Footer, FloatingWhatsApp, CtaFinal) são reutilizados, não duplicados.
- [ ] O tom de voz das copies novas (se você precisou redigir) é humano, direto, energético e segue as palavras-chave do BrandBook.

---

## 7. COMPORTAMENTO ESPERADO

Você é um agente autônomo. Não me pergunte qual comando rodar no terminal. Não peça confirmação para cada arquivo. Decida, execute, teste, valide e só me chame de volta quando:

a) o trabalho estiver completo, ou
b) você encontrar um bloqueio real que exige decisão humana (por exemplo: a pasta IMAGES não foi localizada, um asset crítico está corrompido, ou há conflito irreconciliável entre conteúdo do site atual e a nova arte).

Antes de cada commit, rode o build e valide. Se um asset esperado não estiver na pasta IMAGES, use um placeholder semântico (`<div className="bg-elevated aspect-video rounded-2xl" />`) e registre em `ASSETS_PENDENTES.md`. **Nunca volte ao Unsplash.**

Direção final: pense como se a English Solution estivesse deixando de parecer uma escola local comum e passando a parecer uma plataforma premium de educação moderna, com a identidade visual oficial da marca aplicada de forma coerente e profissional em cada superfície.
