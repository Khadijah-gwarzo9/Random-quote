document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      quote: "Don't let yesterday take up too much of today",
      author: "Will Rogers",
    },
    {
      quote: "You learn more from failure than from success",
      author: "Unknown",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
  ];

  const generateQuoteBtn = document.querySelector(".new-quote-btn");
  const quoteElement = document.querySelector(".quote");
  const authorElement = document.querySelector(".author");
  const copyBtn = document.querySelector(".copy");
  const copyIcon = document.querySelector(".copy i");
  const copyText = document.querySelector(".copy span");
  const speakBtn = document.querySelector(".speak .fa-volume-high");
  const twitterBtn = document.querySelector(".twitter");

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `- ${randomQuote.author}`;
  }

  speakBtn.addEventListener("click", () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `${quoteElement.textContent} by ${authorElement.textContent}`;
    speechSynthesis.speak(speech);
  });

  copyBtn.addEventListener("click", () => {
    const fullQuote = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
      copyIcon.style.display = "none";
      copyText.style.display = "block";
      setTimeout(() => {
        copyIcon.style.display = "block";
        copyText.style.display = "none";
      }, 400);
    });
  });

  twitterBtn.addEventListener("click", () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${quoteElement.textContent} ${authorElement.textContent}`
    )}`;
    window.open(tweetUrl, "_blank");
  });

  generateQuoteBtn.addEventListener("click", displayQuote);

  // Display an initial quote when the page loads
  displayQuote();
});
