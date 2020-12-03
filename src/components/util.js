const $ = (elem, context = document) => context.querySelector(elem);
const $$ = (elem, context = document) => context.querySelectorAll(elem);
const scrollTo = (selector) =>
  scroll({
    top: $(`${selector}`).offsetTop,
    behavior: "smooth"
  });

export { $, $$, scrollTo };
