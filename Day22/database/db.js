let books = [{
        ISBN: "12345ONE",
        title: "Getting Started With MERN",
        authors: [1, 2],
        language: "en",
        pubDate: "2021-09-24",
        numOfPage: 225,
        category: ["fiction", "programming", "tech", "web dev"],
        publication: 1,
        },

    {
        ISBN: "12345TWO",
        title: "Getting Started With Python",
        authors: [1, 3],
        language: "en",
        pubDate: "2021-09-24",
        numOfPage: 225,
        category: ["fiction", "tech", "web design"],
        publication: 1,
    },
];

let authors = [{
        id: 1,
        name: "ankit",
        books: ["12345ONE", "12345TWO"],
    },
    {
        id: 2,
        name: "jaydeep",
        books: ["12345ONE"]

    },
    {
        id: 3,
        name: "akshat",
        books: ["12345TWO"]

    },
];

let publications = [{
        id: 1,
        name: "chakra",
        books: ["12345ONE"],
    },
    {
        id: 2,
        name: "vickie",
        books: ["12345TWO"],
    },
];


module.exports = {
        books,
        authors,
        publications
};