const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://hariomkumarray2021:Bq64dPous36ucqFk@cluster0.yxwqd3o.mongodb.net/?codo-file=Cluster0")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log('failed');
  })


const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection