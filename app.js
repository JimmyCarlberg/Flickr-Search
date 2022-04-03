const searchForm = document.querySelector('form'); // Formuläret
const searchInput = document.querySelector('#query'); // Sökfältet
const displayItem = document.querySelector('main'); // Där resultatet ska visas

const apiKey = 'c407ea095fafc9f534cbf5d40414e74d';
// URL https://api.unsplash.com/



searchForm.addEventListener('submit', e => {
    e.preventDefault();
    let query = searchInput.value;
    fetchData(query);
    console.log(query);
});
// tag = input.value ${tags}

const fetchData = async (query) => {
    const response = await fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1`);
    const result = await response.json();
    renderData(result);
    
};

const renderData = data => {
    for( i = 0; i < data.photos.photo.length ; i++) {
        let getPhoto = data.photos.photo[i];
        let div = document.createElement('div');               //http://farm/${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret.jpg
        div.innerHTML = `<h5>${getPhoto.title}</h5><img src="https://live.staticflickr.com/${getPhoto.server}/${getPhoto.id}_${getPhoto.secret}.jpg" >`;
        displayItem.appendChild(div);
    }
    console.log(data);
};

