const { connect } = require("mongoose");

// const uri = "mongodb://localhost:27017/test-db"
const uri = "mongodb+srv://pallavi:kCEp94ZsgHlSDpBu@cluster0.zqzwh.mongodb.net/Brillio-DB?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)