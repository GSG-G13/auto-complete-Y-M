const fs = require("fs")

const getDataFromFile = (filePath , cb)  => {
    fs.readFile(filePath , (err , data) => {
        if(err){
            cb(err)
        }else{
            data = Buffer.from(data).toString();
            cb(data)
        }
    })
}

const filterData = (data , value) => {
    let filteredArray = JSON.parse(data).filter((ele) => {
        if(ele.name.startsWith(value)){
            return ele
        }
    })
    return filteredArray

}

module.exports = {getDataFromFile , filterData}