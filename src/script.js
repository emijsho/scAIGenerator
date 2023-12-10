function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "hello",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
