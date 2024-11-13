const navBtns = document.querySelectorAll(".nav-btn");
const zapBtns = document.querySelectorAll(".zap-btn")
const textInterface = document.querySelector(".text");
const videoInterface = document.querySelector(".video");
const audioInterface = document.querySelector(".audio");

for (let button of navBtns) {
    button.addEventListener("click", ()=>{
        if (button.classList.contains("text-sect")) {
            textInterface.style.display = "block";
            videoInterface.style.display = "none";
            audioInterface.style.display = "none";
        } else if (button.classList.contains("vid-sect")) {
            textInterface.style.display = "none";
            videoInterface.style.display = "block";
            audioInterface.style.display = "none";
        } else if (button.classList.contains("audio-sect")) {
            textInterface.style.display = "none";
            videoInterface.style.display = "none";
            audioInterface.style.display = "block";
        }
    })
}

for (let button of zapBtns) {
    button.addEventListener("click", ()=>{
        if (button.classList.contains("text-sect")) {
            ScrapeText();
        } else if (button.classList.contains("vid-sect")) {

        } else if (button.classList.contains("audio-sect")) {

        }
    })
}

function ScrapeText() {
    chrome.tabs.query({active:true, currentWindow:true})
    .then((tabs)=>{
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;

        return chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            func: DOMtoText
        });
    }).then ((results) => {
        const paragraphText = results[0].result;
        console.log(paragraphText);
        console.log(paragraphText.length);
    });
}

function DOMtoText() {
    const paragraphs = Array.from(document.querySelectorAll("p"));
    const paragraphsText = paragraphs.map((paragraph) => paragraph.textContent.trim());
    return paragraphsText.filter(text => text.length > 20);
}