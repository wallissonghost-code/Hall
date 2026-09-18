// Catálogo do Hall. Mantenha somente jogos realmente publicados.
// URLs de jogos não são segredo: a autorização de cada jogo deve continuar sendo validada pelo ecossistema NOT.
export const GAMES=Object.freeze([]);
export function visibleGames(plan){return GAMES.filter(game=>!game.plans||game.plans.includes(plan))}
