import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-t88hhwe-shard-00-00.c5kge1g.mongodb.net:27017,ac-t88hhwe-shard-00-01.c5kge1g.mongodb.net:27017,ac-t88hhwe-shard-00-02.c5kge1g.mongodb.net:27017/?ssl=true&replicaSet=atlas-wd1syw-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};
mongoose.set('strictQuery', true);
export default Connection;