// const form = document.querySelector("#searchForm");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     const value = form.elements.query.value;

//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`)

// })

const form = document.querySelector('#searchForm');
const d = document.querySelector('div')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    //  /   const inputText=form
    const inputText = form.elements.q.value;
    const config = { params: { q: inputText } }
    await cleardiv();
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    mkinmg(res.data);
    // console.log(res.data)
    form.elements.q.value = '';


})

const cleardiv = async () => {
    d.innerHTML = '';
}
const mkinmg = (res) => {
    for (let r of res) {
        if (r.show.image) {
            const img = document.createElement('IMG');
            img.src = r.show.image.medium;
            const element = document.createElement('DIV')
            element.classList.add('.ele')
            element.append(img);
            d.append(element);
        }
    }
}