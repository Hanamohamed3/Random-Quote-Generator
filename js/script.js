
var quotes = [
  
  { content: "“You only live once, but if you do it right, once is enough.” ― Mae West"},
    { content: "“Be the change that you wish to see in the world.” ― Mahatma Gandhi" },
    { content: "“Without music, life would be a mistake.”― Friedrich Nietzsche" },
    { content: " “Life is what happens to us while we are making other plans.”― Allen Saunders "},
    { content: " “I have not failed. I've just found 10,000 ways that won't work.”― Thomas A. Edison"},
    { content: " “For every minute you are angry you lose sixty seconds of happiness.”― Ralph Waldo Emerson"},
    { content: "“If you can't explain it to a six year old, you don't understand it yourself.” ― Albert Einstein"},
    { content: "“Everything you can imagine is real.”― Pablo Picasso"},
    { content: "“Do what you can, with what you have, where you are.”― Theodore Roosevelt "},
    { content: " “Do one thing every day that scares you.” ― Eleanor Roosevelt"},

  ];
  function getRandomQuote() {
    var quoteDisplay = document.getElementById('quoteDisplay');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote.content;
  }
  