const $ = (elem, context = document) => context.querySelector(elem);
const $$ = (elem, context = document) => context.querySelectorAll(elem);

export { $, $$ }