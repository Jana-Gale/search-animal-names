// select element

const accesskey = "bVOhhSxl4ltahY9RL0YYGdrlMgi0K5cE06Wh-7UZVMk"

const form = document.getElementById("search-form")

const inpu_box = document.getElementById("input-box")
const search_result = document.getElementById("result-div")
const show_btn = document.getElementById("show-more-btn")




// ipa address

let keyword = "";
let page = 1;


async function searchimages() {
    keyword = inpu_box.value;


    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`
    let response = await fetch(url)

    let data = await response.json()



    if (page == 1) {
        search_result.innerHTML = "";
    }

    //make  sure to be not added another images

    //access arrays
    let results = data.results

    console.log(results);

    results.map((result) => {
        let image = document.createElement("img");
        image.src = result.urls.small

        //Link images from unsplash
        let ImageLink = document.createElement("a");
        ImageLink.href = result.links.html;

        ImageLink.appendChild(image)

        search_result.appendChild(ImageLink)
    })

    show_btn.style = "display:block"

    console.log(data);

}




form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchimages()
})



//display more images when user click show more button

show_btn.addEventListener("click", () => {
    page++
    searchimages()
})