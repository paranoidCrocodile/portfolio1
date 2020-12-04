const $ = (elem, context = document) => context.querySelector(elem);

const $$ = (elem, context = document) => context.querySelectorAll(elem);

const scrollTo = (selector) =>
  scroll({
    top: $(`${selector}`).offsetTop,
    behavior: "smooth"
  });

const replaceClass = ({ elem, trueClass, falseClass, condFunc }) =>
  elem.classList.replace(
    ...(condFunc() ? [falseClass, trueClass] : [trueClass, falseClass])
  );

export { $, $$, scrollTo, replaceClass };
