document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => {
    header.textContent = "Hello from the content script!";
});