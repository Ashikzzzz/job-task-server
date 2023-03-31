function dbConnect() {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0zgm21v.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    console.log("DBConnected");
    console.log(uri)
}


module.exports = dbConnect;