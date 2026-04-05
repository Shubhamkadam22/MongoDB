const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("comnnection successfull")
    })
    .catch((err) => console.log(err));

    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
    }

const userSchema = new mongoose.Schema({
  
    name: String,
    email: String,
    age: Number,

});

const User = mongoose.model("user" , userSchema);

const user2 = new User({
    name: "sat",
    email: "satth@example.com",
    age: 5,
});

user2
 .save()
 .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});