// Load quotes from local storage when the page loads
window.onload = function () {
    let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    
    if (savedQuotes.length > 0) {
        document.getElementById("quoteDisplay").innerText = savedQuotes[0].text;
    }
};

// Function to add a new quote and save it locally
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };

        // Get existing quotes or initialize an empty array
        let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

        // Add new quote
        savedQuotes.push(newQuote);

        // Save updated quotes back to local storage
        localStorage.setItem("quotes", JSON.stringify(savedQuotes));

        // Show the newly added quote
        document.getElementById("quoteDisplay").innerText = newQuoteText;

        // Clear input fields
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        alert("Quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}

// Function to display a random quote from local storage
function showRandomQuote() {
    let savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    if (savedQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * savedQuotes.length);
        document.getElementById("quoteDisplay").innerText = savedQuotes[randomIndex].text;
    } else {
        document.getElementById("quoteDisplay").innerText = "No quotes available.";
    }
}

// Attach event listener to the button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

