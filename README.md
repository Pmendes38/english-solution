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

### Google Reviews — integração real

A home usa um bloco estático com depoimentos manuais como fallback. Para puxar reviews reais do Google, defina a variável de ambiente:

```env
NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED='<iframe src="..."></iframe>'
```

Funciona com qualquer widget de terceiros (Elfsight, Trustindex, EmbedSocial, etc). Para usar a API oficial do Google (Places API), crie uma chave no Google Cloud e troque o componente [`GoogleReviews.jsx`](components/GoogleReviews.jsx) para fazer fetch dos reviews.

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
