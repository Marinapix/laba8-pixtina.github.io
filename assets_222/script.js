const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");
const searchList  = document.getElementById("searchmenu");
const listItems   = searchList.getElementsByTagName("li");

searchInput.addEventListener("focus", () => {
    searchList.classList.remove("hidden");
});

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    let matches = 0;

    for (let li of listItems) {
        const linkText = li.innerText.toLowerCase();
        if (linkText.includes(text)) {
            li.style.display = "block";
            matches++;
        } else {
            li.style.display = "none";
        }
    }
});

document.getElementById("searchform").addEventListener("submit", function(e) {
    e.preventDefault();
    runSearch();
});

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    runSearch();
});

function runSearch() {
    const text = searchInput.value.toLowerCase();
    let found = null;

    for (let li of listItems) {
        const link = li.querySelector("a");
        if (link.innerText.toLowerCase().includes(text)) {
            found = link.href;
            break;
        }
    }

    if (found) {
        window.location.href = found;
    } else {
        alert("Такой страницы нет");
    }
}

document.addEventListener("click", function(e) {
    const isClickInside =
        searchInput.contains(e.target) ||
        searchBtn.contains(e.target) ||
        searchList.contains(e.target);

    if (!isClickInside) {
        searchList.classList.add("hidden");
    }
});