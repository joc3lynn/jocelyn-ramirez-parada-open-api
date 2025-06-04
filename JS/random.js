const url = `https://api.thecatapi.com/v1/images/search`;
const api_key = "live_ndojZZio4SivuR9W6atp7yRs6VIFZhi487lrlabx87i9K3hULVeyQRuLtLX5DZ7S"

function randomCat(){
let imageGenerator = document.getElementById("rando_image")

fetch(url, {headers: {
    'x-api-key': api_key
    }})
.then((response) => {
    return response.json();
    })
.then((imageLibrary) => {
    imageGenerator.src = imageLibrary[0].url
    })     
.catch(function(error) {
    console.log(error);
    });
}

function imageButton(){
    let generator = document.getElementById("getCat")
    generator.addEventListener("click", randomCat)
}

randomCat()
imageButton()

//Footer
const myFooter = document.createElement("FOOTER");
myFooter.setAttribute("id", "foot");
document.body.appendChild(myFooter);
console.log(myFooter);

//Copyright Text - Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const copySymbol = '\u00A9';

const copyrightText = copySymbol + "Jocelyn Ramirez-Parada " + thisYear;
copyright.innerHTML=copyrightText;
footer.appendChild(copyright);
console.log(copyright);
