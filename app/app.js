const form = document.querySelector("#book-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")

//add new uı 
const ui = new UI()
//add new storage
const storage = new Storage()
eventlistener()

function eventlistener(){
    form.addEventListener("submit",addBook)
    document.addEventListener("DOMContentLoaded",()=>{
        let books = storage.getBookToStorage()
        console.log(books)
        ui.loadedAllBooks(books)
    })
}
function addBook(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title == "" || director == "" || url == ""){
        //error
        ui.alertMessage("Fill all fields","danger")
    }
    else{
        const newBook = new Book(title,director,url)
        ui.addBookToUI(newBook)
        storage.addBookToStorage(newBook)
        ui.alertMessage("Add book succesful","success")


    }

    ui.clearInputs(titleElement,directorElement,urlElement)

    e.preventDefault()
}