let h1 = document.createElement("h1")

h1.textContent = prompt("Ism kiriting : ");

let body = document.querySelector("body")

body.appendChild(h1)

body.style = "color: yellow; background-color: blue; text-align: center; padding: 10px 0";