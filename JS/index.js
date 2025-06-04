
//Cat Homepage

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_AKvUElDcWTTellUdqBRSKv4hXbHBoPfQgwimWMC42bhWIPVPviraRMjlnv2Nr8Tt"
let breedLibrary = []

function breedPhoto(index) { 
    document.getElementById("breedImage").src= breedLibrary[index].image.url; 
    document.getElementById("breed_char").textContent= "Temperament: " + breedLibrary[index].temperament
    document.getElementById("breed_info").textContent= breedLibrary[index].description   
    document.getElementById("info_link").href= breedLibrary[index].wikipedia_url
    document.getElementById("info_link").innerHTML= breedLibrary[index].wikipedia_url 
    }
    
fetch(url,{headers: {
    'x-api-key': api_key
    }})
.then((response) => {
    return response.json();
    })
.then((data) => {      
    data = data.filter(img=> img.image?.url!=null)
    breedLibrary = data;
    for (let i = 0; i < breedLibrary.length; i++) {
        const breed = breedLibrary[i];
        let option = document.createElement('option');
        if(!breed.image)continue
        option.value = i;
        option.innerHTML = `${breed.name}`;
        document.getElementById('breedType').appendChild(option);
        }

       breedPhoto(0)
    })
.catch(function(error) {
    console.log(error);
    });

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