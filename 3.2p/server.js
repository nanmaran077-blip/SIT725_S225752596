const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

const books = [
    {
        title: "Atomic Habits",
        image: "images/book1.jpg",
        link: "About Atomic Habits",
        description: "A practical book about building good habits and breaking bad ones."
    },
    {
        title: "Rich Dad Poor Dad",
        image: "images/book2.jpg",
        link: "About Rich Dad Poor Dad",
        description: "A popular personal finance book about money and mindset."
    },
    {
        title: "The Alchemist",
        image: "images/book3.jpg",
        link: "About The Alchemist",
        description: "A novel about following dreams and discovering purpose."
    }
];

app.get('/api/books', (req, res) => {
    res.json({ statusCode: 200, data: books, message: "Books fetched successfully" });
});

app.listen(port, () => {
    console.log("App listening to: " + port);
});