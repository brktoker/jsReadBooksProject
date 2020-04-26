class Storage {

    //add Book Storage
    static addBookToStorage(newbook) {
        let books = this.getBookToStorage()
        books.push(newbook)
        localStorage.setItem("books", JSON.stringify(books))
    }
    //get Book Storage
    static getBookToStorage() {
        let books
        if (localStorage.getItem("books") == null) {

            books = []
        }
        else {
            books = JSON.parse(localStorage.getItem("books"))

        }

        return books
    }

    static deleteBookToStorage(bookTitle) {

        let books = this.getBookToStorage()

        books.forEach((book, index) => {
            if (book.title == bookTitle) {
                books.splice(index, 1)
            }
        });

        localStorage.setItem("books", JSON.stringify(books))
    }

    static deleteAllBooksFromStorage() {
        localStorage.removeItem("books")
    }

}
