# Correção da Home — English Solution

## Por que o resultado está aquém do Figma

Comparando o screenshot do Figma (node `20:5`) com a implementação atual, encontrei **seis divergências estruturais** entre o código e o design. Nenhuma delas é "MCP não foi consultado" ou "Claude Code não viu o Figma". Todas são decisões erradas que entraram em arquivos específicos e que precisam ser desfeitas. Lista completa:

### 1. Componentes a mais e na ordem errada na Home

**Figma:** Hero → Métricas → Reviews Marquee (faixa horizontal estreita) → Vídeos de depoimento → Metodologia → Cursos → Diferenciais → Comunidade → Localização → CTA Final → FAQ.

**Código atual (`app/(site)/page.jsx`):** Hero → Métricas → GoogleReviews → VideoTestimonials → Methodology → FeaturedCourses → Differentials → Community → LocationPreview → CTA → FAQ.

A ordem em si está correta, mas o componente `<GoogleReviews>` que você tem hoje renderiza um bloco completo com headline "A escola de inglês mais bem avaliada da região" + 3 badges (Google 5.0, Mais de 200, Nota máxima) + marquee + botão "Ver no Google". No Figma esse bloco existe inteiro, então OK. **O problema é que existe um `<FeaturedTestimonial>` órfão em `components/FeaturedTestimonial.jsx` que NÃO está sendo usado pela home mas existe no projeto** — apaga, é lixo visual que confunde.

### 2. Cards de curso com estrutura visualmente errada

**Figma:** cada card é uma imagem ocupando o card inteiro (aspect 4:5), com gradiente escuro na metade de baixo, e o texto sobreposto na parte inferior (tag pill vermelha "BUSINESS ENGLISH" pequena + título branco em duas linhas + link "Saiba mais →" em vermelho).

**Código atual (`components/FeaturedCourses.jsx`):** a imagem está no topo com `aspect-[4/5]`, depois um `<div className="p-5 -mt-12 relative">` tenta puxar texto pra cima com margin negativo de -48px. A tag está dentro desse div como bloco, não como pill sobre a imagem. O resultado: o texto fica num "rodapé" que parece colado no card, não flutuando sobre a imagem como no design.

A correção é fazer o card ser **uma única `div relative` com a imagem como `absolute inset-0` e o conteúdo de texto também `absolute bottom-0 left-0 right-0`** sobre o gradiente, com `padding` interno. Não usa mais `-mt-12`.

### 3. Diferenciais com 4 itens, deveria ter 5

**Figma:** 5 ícones em linha horizontal: Professores nativos e certificados | Turmas reduzidas e personalizadas | Ambiente moderno e acolhedor | Resultados rápidos e comprovados | Atendimento próximo e humanizado.

**Código atual (`data/site.js` → `differentialsHome`):** só 4 itens (falta "Professores nativos e certificados") e o array usa chaves de ícone que NÃO existem em `lib/assets.js` (`ambiente`, `resultados`, `atendimento`). Isso quebra silenciosamente — os ícones renderizam como caminhos quebrados ou caem em `undefined`.

A correção é colocar os 5 itens no array e usar **só os ícones reais que existem no `ASSETS.icons`**: pessoas, conversas, local, alvo, shield. Mapeamento sugerido:

```js
export const differentialsHome = [
  { icon: "pessoas",    label: "Professores nativos e certificados" },
  { icon: "conversas",  label: "Turmas reduzidas e personalizadas" },
  { icon: "local",      label: "Ambiente moderno e acolhedor" },
  { icon: "alvo",       label: "Resultados rápidos e comprovados" },
  { icon: "shield",     label: "Atendimento próximo e humanizado" },
];
```

E no `Differentials.jsx` o grid muda de `grid-cols-4` para `grid-cols-5` no desktop.

### 4. LocationPreview com mapa duplicado

**Figma:** apenas um cartão Google branco sobreposto a uma imagem estática estilizada de mapa.

**Código atual (`components/LocationPreview.jsx`):** tem um `<iframe>` do Google Maps **e** um card branco posicionado `absolute top-5 left-5` por cima dele. Visualmente os dois mapas brigam. O Figma só tem o card branco estilizado, com o mapa atrás sendo decorativo.

Correção: ou (a) remove o iframe e usa só uma imagem PNG do mapa como background do container, ou (b) mantém o iframe mas remove o card branco flutuante. **Recomendo (a)** porque o design do Figma claramente é um mock decorativo, não um mapa interativo. Salva o mapa real para a página `/localizacao` dedicada.

### 5. Hero com headline diferente

**Figma:** três linhas — "Você fala inglês desde o primeiro dia." (branco) / "Seja Imersivo." (vermelho).

**Código atual (`components/Hero.jsx`):** três linhas — "Você fala inglês / desde o primeiro dia. / Seja Imersivo." Correto. **Esse está certo, não mexer.** (Estou listando aqui apenas para confirmar que o anterior prompt que sugeria "Domine o inglês. Expanda o mundo. Seja Imersivo." foi descartado e o BrandBook oficial venceu, como você decidiu.)

### 6. Faixa de métricas com card escuro, no Figma é claro

**Figma:** faixa de métricas horizontal logo abaixo do hero é um **card BRANCO** com bordas suaves, texto escuro, ícones coloridos. Contrasta intencionalmente com o fundo dark do site.

**Código atual (`components/MetricsStrip.jsx`):** `bg-[var(--bg-elevated)] border border-white/5` — um card ESCURO. Visualmente quase invisível.

Correção: trocar o fundo do card para `bg-white text-[var(--brand-gray-dark)]`, divisores verticais em `divide-gray-200`, número grande em `text-[var(--brand-blue)] font-serif font-bold`, label em `text-gray-500`. Isso resgata o contraste premium da referência.

> Observação importante: olhando de novo o Figma com cuidado, **o card de métricas no design oficial é escuro também** (eu tinha errado na análise inicial olhando o screenshot da implementação que parecia escuro demais). Quem leu o prompt anterior viu eu pedindo "card branco" — isso era baseado em uma versão antiga da referência. O Figma `20:5` mostra o card escuro com cinza translúcido bem similar ao que está no código. **Mantém o card escuro como está.** O problema visual desse bloco é só que os ícones estão muito pequenos. Aumenta de `h-12 w-12` para `h-14 w-14` e adiciona mais espaçamento horizontal.

---

## Patch (arquivos exatos a alterar)

### A. Apagar `components/FeaturedTestimonial.jsx`

Está órfão, não é importado por nada. Remove pra limpar o projeto.

```bash
rm components/FeaturedTestimonial.jsx
```

### B. Corrigir `data/site.js` — `differentialsHome`

Substituir o bloco existente por:

```js
export const differentialsHome = [
  { icon: "pessoas",   label: "Professores nativos e certificados" },
  { icon: "conversas", label: "Turmas reduzidas e personalizadas" },
  { icon: "local",     label: "Ambiente moderno e acolhedor" },
  { icon: "alvo",      label: "Resultados rápidos e comprovados" },
  { icon: "shield",    label: "Atendimento próximo e humanizado" },
];
```

### C. Corrigir `components/Differentials.jsx`

Trocar `grid-cols-2 lg:grid-cols-4` por `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` e aumentar o ícone para `width={56} height={56} className="h-14 w-14"`.

```jsx
<StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
  {differentialsHome.map((item) => (
    <StaggerItem key={item.label}>
      <div className="flex flex-col items-center text-center">
        <Image
          src={ASSETS.icons[item.icon]}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 mb-3"
        />
        <div className="text-xs text-white leading-tight max-w-[140px]">
          {item.label}
        </div>
      </div>
    </StaggerItem>
  ))}
</StaggerGroup>
```

### D. Reescrever `components/FeaturedCourses.jsx` por inteiro

Esse é o que mais aparece "errado" na sua referência. Substitui o arquivo todo por:

```jsx
import Link from "next/link";
import { featuredCourses } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function FeaturedCourses() {
  return (
    <section id="cursos" className="py-16 lg:py-20">
      <div className="container-x">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="eyebrow">NOSSOS CURSOS</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
              Um inglês que funciona<br />para sua realidade
            </h2>
          </div>

          <Link href="/cursos" className="btn-secondary text-sm self-start">
            Ver todos os cursos →
          </Link>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCourses.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/cursos/${c.slug}`}
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all"
              >
                {/* Imagem ocupa o card inteiro */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradiente escuro na parte de baixo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-[var(--bg-base)]/70 to-transparent" />

                {/* Conteúdo flutuando sobre a parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    {c.tag}
                  </span>
                  <h3 className="text-white font-bold text-base lg:text-lg leading-snug">
                    {c.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
```

A diferença-chave é: o `<Link>` agora é `relative aspect-[4/5]`, imagem é `absolute inset-0`, gradiente é `absolute inset-0` por cima da imagem, e o conteúdo de texto é `absolute bottom-0 left-0 right-0 p-5`. Nada de `-mt-12`.

### E. Simplificar `components/LocationPreview.jsx`

Remove o iframe e mantém só o card mockup. Substitui o bloco da segunda coluna por:

```jsx
<Reveal delay={0.1}>
  <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl overflow-hidden h-full min-h-[420px] relative">
    {/* Imagem decorativa de mapa estático como background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-50"
      style={{ backgroundImage: `url('/brand/photos/map-placeholder.png')` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)]/40 to-[var(--brand-blue)]/30" aria-hidden="true" />

    {/* Card branco mockup do Google */}
    <div className="absolute top-5 left-5 right-5 z-10 bg-white rounded-xl p-4 shadow-2xl max-w-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-bold text-[var(--brand-gray-dark)] text-sm leading-tight">
            English Solution Valparaíso
          </div>
          <p className="text-[var(--brand-gray-dark)]/60 text-xs mt-1 leading-snug">
            Ed. Bulgainville centro - Etapa A, Quadra 06, Lote 2, Sala 202 -
            Valparaizo I, Valparaíso de Goiás - GO, 72876-640, Brasil
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[var(--brand-gray-dark)] font-bold text-xs">5.0</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
              </svg>
            ))}
            <span className="text-[var(--brand-gray-dark)]/60 text-xs ml-1">(200)</span>
          </div>
        </div>
        <a
          href={contact.mapsQuery}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir no Google Maps"
          className="w-7 h-7 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center flex-shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 11l8-8M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>

    {/* Pin vermelho central simulando localização */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-2xl ring-4 ring-white/20">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
        </svg>
      </div>
    </div>
  </div>
</Reveal>
```

Você vai precisar adicionar `/public/brand/photos/map-placeholder.png` — pode ser um screenshot do Google Maps da sua localização, salvo como imagem estática para servir de background decorativo. **O mapa real interativo deve viver em `/localizacao`**, não na home.

### F. Limpeza extra: aumentar ícones em `MetricsStrip.jsx`

Trocar `width={48} height={48} className="h-12 w-12"` por `width={56} height={56} className="h-14 w-14"` e adicionar `gap-5` em vez de `gap-4` na div do item.

---

## Sobre usar o MCP do Figma para isso

O `Figma:get_design_context` está disponível e dá uma representação JSON do node, com paddings exatos, font-sizes, line-heights e cores. Vale a pena usar quando você precisa replicar **um componente novo do zero**. Para corrigir um projeto já em andamento, como o seu, ele entrega muito mais ruído que sinal — o JSON tem centenas de nodes aninhados e o Claude Code, em vez de focar nas 6 correções específicas que listei acima, vai tentar regenerar tudo do zero e provavelmente vai introduzir novos bugs.

**Recomendação:** entregue ao Claude Code apenas este documento de correções (não o link do Figma + MCP). Diga "aplique exatamente estas 6 mudanças no projeto existente, sem refatorar mais nada". Isso vai te levar do estado atual ao estado correto sem novo retrabalho.

Se depois disso ainda restarem divergências menores (espaçamentos, font-size de 2px diferente, raio de borda 1px diferente), aí sim faz sentido o Claude Code abrir o MCP do Figma em modo de inspeção e ajustar item por item. Mas só depois das correções estruturais terem aterrissado.

---

## Comando exato para colar no Claude Code

```
Aplique as 6 correções descritas em CORRECOES_HOME_ENGLISH_SOLUTION.md (anexado).
Não refatore mais nada. Não adicione novas seções. Não troque a paleta.
Após aplicar, rode `npm run build` e me mostre o screenshot da home renderizada.
Se algum import quebrar, corrija apenas o necessário para o build passar.
```
