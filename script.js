
window.onload = function () {
    let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    
    if (savedQuotes.length > 0) {
        document.getElementById("quoteDisplay").innerText = savedQuotes[0].text;
    } else {
        document.getElementById("quoteDisplay").innerText = "No quotes available.";
    }
};


function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };


        let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

        
        savedQuotes.push(newQuote);

    
        localStorage.setItem("quotes", JSON.stringify(savedQuotes));


        document.getElementById("quoteDisplay").innerText = newQuoteText;


        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        alert("Quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}


function showRandomQuote() {
    let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    if (savedQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * savedQuotes.length);
        document.getElementById("quoteDisplay").innerText = savedQuotes[randomIndex].text;
    } else {
        document.getElementById("quoteDisplay").innerText = "No quotes available.";
    }
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

