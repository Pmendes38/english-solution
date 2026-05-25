/**
 * REVIEWS COMPLEMENTARES — VERIFICADOS DO GOOGLE MAPS
 *
 * A API do Google Places retorna no máximo ~5 reviews por chamada.
 * Com multi-chamada (sort + idiomas) chegamos a ~8-10 únicos.
 *
 * Para complementar até 30, você pode COPIAR manualmente do seu
 * Google Maps oficial e colar aqui. Cada review deve corresponder a
 * um review REAL existente na sua página do Google — não invente.
 *
 * Como copiar:
 * 1. Abra: https://www.google.com/maps/search/?api=1&query=English+Solution+Valpara%C3%ADso
 * 2. Clique no card da escola → "Avaliações"
 * 3. Para cada review novo, copie: nome do autor, texto, estrelas, tempo
 *
 * O `relativeTime` pode ser livre ("há 3 meses") porque o Google calcula
 * com base na data atual. O `rating` é o número de estrelas (1-5).
 *
 * Ordem aqui é livre — o componente embaralha junto com os reviews da API.
 */

export const extraReviews = [
  // Cole reviews abaixo seguindo o formato:
  // {
  //   author: "Nome Completo",
  //   text: "Texto do review copiado integralmente do Google Maps",
  //   rating: 5,
  //   relativeTime: "há 3 meses",
  //   photo: null, // pode deixar null; uma inicial colorida será gerada
  // },
];
