const form = document.querySelector("#book-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.querySelector("#clear-books")

eventlistener()

function eventlistener() {
    form.addEventListener("submit", addBook)
    document.addEventListener("DOMContentLoaded", () => {
        let books = Storage.getBookToStorage()
        UI.loadedAllBooks(books)
    })
    cardBody.addEventListener("click", deleteBook)
    clear.addEventListener("click", clearBooks)
}
function addBook(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title == "" || director == "" || url == "") {
        //error
        UI.alertMessage("Fill all fields", "danger")
    }
    else {
        const newBook = new Book(title, director, url)
        UI.addBookToUI(newBook)
        Storage.addBookToStorage(newBook)
        UI.alertMessage("Add book succesful", "success")


    }

    UI.clearInputs(titleElement, directorElement, urlElement)

    e.preventDefault()
}

function deleteBook(e) {

    if (e.target.id == "delete-book") {
        UI.deleteBookToUI(e.target)
        Storage.deleteBookToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.alertMessage("Delete Book Successful", "success")
    }
}

function clearBooks(e) {
    if (confirm("Clear All Books ??")) {
        UI.deleteAllBooksFromUI()
        Storage.deleteAllBooksFromStorage()
    }
}   