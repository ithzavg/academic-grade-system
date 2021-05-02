import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb+srv://abeja123:o0ETY4bDzpRQ9PrK@cluster0.hahqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useUnifiedTopology: true });
        const db = client.db('studentsInfo');
        console.log('DB is connected');

        return db;
    }catch (e){
        console.log(e);
    }

}