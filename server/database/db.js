import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = "mongodb+srv://tirth:tirth03@cluster0.htfnhnp.mongodb.net/blog";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;