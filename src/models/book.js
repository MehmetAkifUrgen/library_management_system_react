export default class Book {
    constructor(book = {
        author : "",
        bookType : "NORMAL",
        borrowed : true,
        category:	"",
        isbn: "",
        pressDate: "2022-12-25",
        publisher: "",
        reserved:true,

    }) {
        this.author = book.author;
        this.bookType = book.bookType;
        this.borrowed = book.borrowed;
        this.category = book.category;
        this.isbn = book.isbn;
        this.pressDate = book.pressDate;
        this.publisher = book.publisher;
        this.reserved = book.reserved;

    }
};