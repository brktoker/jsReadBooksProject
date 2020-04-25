const form = document.querySelector("#book-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")

//start uı 
const ui = new UI()

eventlistener()

function eventlistener(){
    form.addEventListener("submit",addBook)
}
function addBook(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title == "" || director == "" || url == ""){
        //error
    }
    else{
        const newBook = new Book(title,director,url)
        ui.addBookToUI(newBook)
    }

    ui.clearInputs(titleElement,directorElement,urlElement)

    e.preventDefault()
}