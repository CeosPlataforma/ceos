import mongoose from "mongoose"

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_CONN, () => {
    console.log('conectado ao banco de dados');
});