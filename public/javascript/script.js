

const searchList = document.querySelector(".search-list");
const resultGrid = document.querySelector(".result-grid")

const fetchData = (api, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            cb(response)
        }
    }
    xhr.open("GET", api, true)
    xhr.send()
}
const input = document.querySelector(".form-control")


input.addEventListener("input", (e) => {
    if (e.target.value == "") {
        searchList.innerHTML = "";
    }
    if (e.target.value != "") {
        fetchData(`/autocomplete/data?key1=${e.target.value}`, (returnData) => {
                searchList.textContent = "";
                for (let i = 0; i < returnData.length; i++) {
                    const searchListItem = document.createElement("div");
                    searchListItem.className = "search-list-item";
                    const searchItem = document.createElement("div");
                    searchItem.className = "search-item-info";
                    const h3Ele = document.createElement("h3");
                    h3Ele.textContent = `${returnData[i].name}`;
                    h3Ele.className = "titleName";
                    searchItem.appendChild(h3Ele);
                    searchListItem.appendChild(searchItem);
                    searchList.appendChild(searchListItem);
                    searchListItem.addEventListener("click", () => {
                        input.value = "";
                        searchList.innerHTML = "";
                        fetchData(`https://omdbapi.com/?s=${h3Ele.textContent}&page=1&apikey=fc1fef96`, (data) => {
                            resultGrid.innerHTML = ""
                            const divMoviePoster = document.createElement("div");
                            divMoviePoster.className = 'movie-poster';
                            const img = document.createElement("img");
                            img.src = `${data.Search[0].Poster}`;
                            console.log(data.Search[0].Poster);
                            const movieInfo = document.createElement("div");
                            movieInfo.className = 'movie-info';
                            const movieTitle = document.createElement("h3");
                            movieTitle.className = 'movie-title';
                            movieTitle.textContent = `${data.Search[0].Title}`
                            const ul = document.createElement("ul");
                            ul.className = `movie-misc-info`;
                            const li = document.createElement("li");
                            li.className = "year";
                            li.innerText = `Year: ${data.Search[0].Year} `
                            console.log(data.Search[0].Year);
                            const p = document.createElement("p");
                            p.className = 'language';
                            p.textContent = "English";
                            const b = document.createElement("b");
                            b.textContent = "Language:";
                            divMoviePoster.appendChild(img);
                            movieInfo.appendChild(movieTitle);
                            ul.appendChild(li);
                            movieInfo.appendChild(ul);
                            b.appendChild(p);
                            movieInfo.appendChild(p);
                            resultGrid.appendChild(divMoviePoster);
                            resultGrid.appendChild(movieInfo);



                        })

                    })
                }


        })


    }
})

