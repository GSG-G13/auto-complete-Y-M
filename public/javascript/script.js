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


input.addEventListener("input", (e) => {
    if (e.target.value == "") {
        searchList.innerHTML = "";
    }
    if (e.target.value != "") {
        fetchData(`/autocomplete/data?key1=${e.target.value}`, (returnData) => {
                searchList.textContent = "";
                returnData.forEach((element ) => {
                    const searchListItem = document.createElement("div");
                    const h3Ele = document.createElement("h3");
                    searchBarMenu(searchList ,searchListItem, h3Ele,element);
                    searchListItem.addEventListener("click", () => {
                        input.value = "";
                        searchList.innerHTML = "";
                        fetchData(`https://omdbapi.com/?s=${h3Ele.textContent}&page=1&apikey=fc1fef96`, (data) => {
                            resultGrid.innerHTML = ""
                            card(resultGrid , data.Search[0].Poster , data.Search[0].Title , data.Search[0].Year)
                        })
                    })
                    
                });
        })


    }
})

