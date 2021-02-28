const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchInput = searchForm.elements.query.value;
    const config = { params: { q: searchInput } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    searchForm.elements.query.value = '';
})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}


