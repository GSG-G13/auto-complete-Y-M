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
const divMoviePoster = document.createHtmlElement("div" , "movie-poster");
const img = document.createHtmlElement("img");
img.src = `${data.Search[0].Poster}`;
const movieInfo = document.createHtmlElement("div" , "movie-info");
const movieTitle = document.createHtmlElement("h3" , "movie-title" );
movieTitle.textContent = `${data.Search[0].Title}`
const ul = document.createHtmlElement("ul" , "movie-misc-info");
const li = document.createHtmlElement("li" , "year");
li.innerText = `Year: ${data.Search[0].Year} `
const p = document.createHtmlElement("p" , "language");
p.textContent = "English";
divMoviePoster.appendChild(img);
ul.appendChild(li);
b.appendChild(p);
resultGrid.appendChild(divMoviePoster);
resultGrid.appendChild(movieInfo);









