const {
    MongoClient
} = require('mongodb');
const {
    config
} = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;
let db = null 

export async function connect() {

    if(db != null){
        return db
    }
    const client = MongoClient(MONGO_URI, {useUnifiedTopology: true }, {useNewUrlParser: true}, {connectTimeoutMS: 30000 }, { keepAlive: 1});
    
    try {
        
        await client.connect();
        db = client.db('studentsInfo');
        console.log('DB is connected');
        
        return db;
    } catch (e) {
        console.log(e);
    } 
  
}