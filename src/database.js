import MongoClient from 'mongodb';
const { config } = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

export async function connect() {
    try {
        const client = await MongoClient.connect(MONGO_URI,
        { useUnifiedTopology: true });
        const db = client.db('studentsInfo');
        console.log('DB is connected');

        return db;
    }catch (e){
        console.log(e);
    }

}