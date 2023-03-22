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



input.addEventListenegir("input" , (e) => {

    fetchData(`/autocomplete/data?key1=${e.target.value}` , (data) => {
        console.log(data)
    })
})

