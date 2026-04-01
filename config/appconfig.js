// confifure my server

const serverConfiguration = {
    port : 8080,
    host:'127.0.0.1'
}

// define the db 
const dbConfig = {
    mongoDbUrl:"mongodb://localhost:27017/ExpanseManagers"
}

// accsing 3rd party api
// api keys, 
// AUthentication Mechanicaionm
// logger

module.exports={
    serverConfiguration,
    dbConfig
}