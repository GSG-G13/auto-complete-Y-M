const searchList = document.querySelector(".search-list");
const resultGrid = document.querySelector(".result-grid");
const input = document.querySelector(".form-control");


const createHtmlElement = (element , className , id , textContent) => {
    const ele = document.createElement(element)
    if(className){
        ele.className = className ;
    }
    if(id){
        ele.id = id
    }
    if(textContent){
        ele.textContent = textContent
    }
    return ele
}

const appendChildren = (parent , ...Children) => {
    Children.forEach((child) => {
        parent.appendChild(child)
    })
}

const card = (resultGrid,poster,title , year) => {
    const divMoviePoster = createHtmlElement("div" , "movie-poster");
    const img = createHtmlElement("img");
    img.src = `${poster}`;
    const movieInfo = createHtmlElement("div" , "movie-info");
    const movieTitle = createHtmlElement("h3" , "movie-title" );
    movieTitle.textContent = `${title}`
    const ul = createHtmlElement("ul" , "movie-misc-info");
    const li = createHtmlElement("li" , "year");
    li.textContent = `Year: ${year} `
    const p = createHtmlElement("p" , "language");
    p.textContent = "English";
    divMoviePoster.appendChild(img);
    ul.appendChild(li);
    appendChildren(movieInfo ,movieTitle ,li , p)
    appendChildren(resultGrid, divMoviePoster, movieInfo)
}



const searchBarMenu = (searchList ,searchListItem, h3Ele , element) => {
    searchListItem.className = "search-list-item";
    const searchItem = createHtmlElement("div");
    searchItem.className = "search-item-info";
    h3Ele.textContent = `${element.name}`;
    h3Ele.className = "titleName";
    searchItem.appendChild(h3Ele);
    searchListItem.appendChild(searchItem);
    searchList.appendChild(searchListItem);
}








