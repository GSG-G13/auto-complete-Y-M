const input = document.querySelector(".form-control")



input.addEventListener("input" , (e) => {

    fetchData(`/autocomplete/data?key1=${e.target.value}` , (data) => {
        console.log(data)
    })
})

