let my_image = document.querySelector("img");
my_image.onclick = function () {
    let my_src = my_image.getAttribute("src");
    if (my_src === "images/firefox-icon.png") {
        my_image.setAttribute("src", "images/firefox2.png");
    } else {
        my_image.setAttribute("src", "images/firefox-icon.png");
    }
};

let my_button = document.querySelector("button");
let my_heading = document.querySelector("h1");

function setUserName() {
    let my_name = prompt("Please enter your name.");
    if (!my_name) {
        setUserName();
    } else {
        localStorage.setItem("name", my_name);
        my_heading.textContent = "Mozilla is cool, " + my_name;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let stored_name = localStorage.getItem("name");
    my_heading.textContent = "Mozilla is cool, " + stored_name;
}

my_button.onclick = function () {
    setUserName();
};
