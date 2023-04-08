//  Coding By CodingNepal

const button = document.querySelector("button");
const p = document.querySelector("p");

const API = "http://api.quotable.io/random";

button.addEventListener("click", () => {
// Fetch a random quote from API & parse response
// as JSON
fetch(API).then(res => res.json()).then(data => {
// Update paragraph text with new fetched quote
p.innerText = data.content;
}).catch(() => alert("Error fetching quote!"));
});

