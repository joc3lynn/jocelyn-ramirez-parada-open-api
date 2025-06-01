
//Cat Homepage

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_AKvUElDcWTTellUdqBRSKv4hXbHBoPfQgwimWMC42bhWIPVPviraRMjlnv2Nr8Tt"
let breedLibrary = []

function breedPhoto(index) { 
    document.getElementById("breedImage").src= breedLibrary[index].image.url; 
    document.getElementById("breed_char").textContent= breedLibrary[index].temperament
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
//filter to only include those with an `image` object
    data = data.filter(img=> img.image?.url!=null)
    breedLibrary = data;
    for (let i = 0; i < breedLibrary.length; i++) {
        const breed = breedLibrary[i];
        let option = document.createElement('option');
    
         //skip any breeds that don't have an image
        if(!breed.image)continue
         
        //use the current array index
        option.value = i;
        option.innerHTML = `${breed.name}`;
        document.getElementById('breedType').appendChild(option);
        }
       //show the first breed by default
       breedPhoto(0)
    })
.catch(function(error) {
    console.log(error);
    });