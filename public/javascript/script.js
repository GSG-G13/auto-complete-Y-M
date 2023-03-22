const searchList = document.querySelector(".search-list");

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

            fetchData(`https://omdbapi.com/?s=${e.target.value}&page=1&apikey=fc1fef96`, (apiData) => {
                searchList.textContent = "";
                for (let i = 0; i < returnData.length; i++) {

                    const searchlistItem = document.createElement("div");
                    searchlistItem.className = "search-list-item";

                    const searchItem = document.createElement("div");
                    searchItem.className = "search-item-info";

                    const h3Ele = document.createElement("h3");
                    h3Ele.textContent = `${returnData[i].name}`;
                    h3Ele.className = "titleName";

                    searchItem.appendChild(h3Ele);
                    searchlistItem.appendChild(searchItem);
                    searchList.appendChild(searchlistItem);

                    searchlistItem.addEventListener("click", () => {
                        console.log(h3Ele.textContent);

                        input.value = "";
                        searchList.innerHTML = "";
                    })
                }

            })

        })


    }
})

