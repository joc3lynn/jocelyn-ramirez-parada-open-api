fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_AKvUElDcWTTellUdqBRSKv4hXbHBoPfQgwimWMC42bhWIPVPviraRMjlnv2Nr8Tt')
    .then((response) => {
            if (!response.ok) {
            throw new Error('Request failed');
            }
            return response.json();
    })
    .then((data) => {;
        console.log(data);

    })
    .catch((error) => {
            console.error('An error occurred:', error);
    });