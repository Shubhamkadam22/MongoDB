const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("comnnection successfull")
    })
    .catch((err) => console.log(err));

     async function main() {
            await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
        }

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
    }, 
    author: {
        type: String,
    },
}); 

const Book = mongoose.model("Book", bookSchema)

const book1 = new Book ({
    title: "book1",
    price: 100,
    author: "author1",
});

book1.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});