// include db
const db= require('./db');
const bodyparser= require('body-parser')

const api= require('./api/v1')

// include all middleware in a services
// used to connect all server


const connectToDatabase= ()=>{
    db.createMongoConnection();
    dbConnection= db.getMongoConnection();
}

// set the middleware required for app

const setMiddleWare=(app)=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}))
}

// set the application middleware

const apiSetUp=(app)=>{
    app.use('/api/v1/', api);
}


module.exports={
    connectToDatabase,
    setMiddleWare,
    apiSetUp
}