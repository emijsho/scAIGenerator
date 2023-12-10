function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "494f3181eb1oe9bfae0t4f2214913d5b";
  let prompt = `Please Generate a known film quote about ${instructionInput.value}`;
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=
  ${context}&key=${apiKey}
`;

  console.log("generating quote");
  console.log(`prompt: ${prompt}`);
  axios.get(apiUrl).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
