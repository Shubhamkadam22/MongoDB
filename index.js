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

User.find({age:{$gt:4}}).then((res) => {
    console.log(res[0].name);
}).catch((err) => {    
    console.log(err);
});


//findone

User.findOne({age:{$gt:4}}).then((res) => {
    console.log(res.name);
}).catch((err) => {    
    console.log(err);
});


//upadate
User.updateOne({name: "sat"}, {age: 6}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//update many
User.updateMany({age:{$gt:4}}, {age: 6}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//model.findByoneAndUpdate
User.findOneAndUpdate({name: "sat"}, {age: 7}, {new: true}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}); 

//model.findByIdAndUpdate
User.findByIdAndUpdate("64a9c8e5b1d9c0f1e8b4567", {age: 8}, {new: true}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//deleteone
User.deleteOne({name: "sat"}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//deleteMany
User.deleteMany({name: "sat"}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//findOneAndDelete  
User.findOneAndDelete({name: "sat"}).then((res) => {
    console.log(res);
}   ).catch((err) => {
    console.log(err);
});

//findByIdAndDelete
User.findByIdAndDelete("64a9c8e5b1d9c0f1e8b4567").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});             
//find
User.find({age:{$gt:4}}).then((res) => {
    console.log(res);
}).catch((err) => {    
    console.log(err);
});

//                                                                