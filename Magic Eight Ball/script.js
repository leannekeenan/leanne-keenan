//Function Variables

/* The variable 'input' will get the user's input using a querySelector - a method that returns the first element within a document that matches a specified selector.  .question is the selector*/
let input = document.querySelector(".question");

/* The 'button'variable will use getElementById to identify an HTML element by ID name to provide it functionality.  the getElementById method will return/generate an object/response that represents an HTML element that matches the specified string when clicked.  In this instance 'ask' is the string ID that identifies the HTML button element, and will be defined as 'button' here*/
let button = document.getElementById('ask');

/* The variable 'output' will print one of the pre-determined responses as an answer to the user input.  .answer is the selector*/
let output = document.querySelector(".answer");

/* The variable 'option' will hold an array of available responses the magic eight ball can produce.*/
let  options= [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Absolutely",
  "Definately, yes",
  "You can count on it",
  "As I see it, yes",
  "Yes",
  "Signs point to yes",
  "It is best I not answer now",
  "Perhaps",
  "Cannot predict now",
  "Concentrate and ask again",
  "Outlook hazy, ask again",
  "It is best you do not ask now",
  "Possibly",
  "Maybe",
  "???",
  "No",
  "Never",
  "It is not likely",
  "Outlook is not good",
  "Doubtful",
  "My sources say no",
  "Not now",
  "Unfortunately, no",
  "Out of the question",
  "By no means",
  "Not now",
];

//Event Handlers


/*Use 'addEventListener' to button to create click functionality.*/
button.addEventListener("click", function (){
  /*If the length of the input (user question) is zero (no question has been asked):*/
   if (input.value.length < 1) {
  /*This response will print*/
  alert ("You must first ask a question before receiving answers");
  /*but*/
}else{
  /*The 'choice' variable will be a random whole number representing one of the many array options*/
  let choice = Math.floor(Math.random() * Math.floor(options.length));
  /*The output or answer will contain text from the options array based on a random choice that is generated for the answer*/
  output.innerText = options[choice];
}
});

