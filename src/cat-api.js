const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ifYEKjAPHTIh5Jo0el1oTPVTiBdDHxjjlUD6ithjbmMrCDu08ALmrMtNGMSBMhwi'
 function fetchBreeds() {
   return fetch(`${BASE_URL}/breeds?aeepi_key=${API_KEY}`).then(res => {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
});
};
function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`).then(resp => {
    if (!resp.ok) {
        throw new Error(res.statusText);
    }
    return resp.json();

});
};
export { fetchBreeds, fetchCatByBreed }




