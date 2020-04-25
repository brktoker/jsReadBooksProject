//UI module
class UI {

}

//add book UI
    UI.prototype.addBookToUI = function(newbook) {

    const booklist = document.querySelector("#books")
    booklist.innerHTML += `
                    <tr>
                        <td><img src="${newbook.url}" class="img-fluid img-thumbnail w-25 p-3"></td>
                        <td>${newbook.title}</td>
                        <td>${newbook.director}</td>
                    <td><a href="#" id = "delete-book" class = "btn btn-danger">Delete Book</a></td>
                        </tr>
                        
                                          `
}

//clear inputs
UI.prototype.clearInputs = function(e1,e2,e3){
    e1.value = ""
    e2.value = ""
    e3.value = ""
}

UI.prototype.loadedAllBooks = function(books){
    const booklist = document.querySelector("#books")
    books.forEach(book => {
        booklist.innerHTML += `
                    <tr>
                        <td><img src="${book.url}" class="img-fluid img-thumbnail w-25 p-3"></td>
                        <td>${book.title}</td>
                        <td>${book.director}</td>
                    <td><a href="#" id = "delete-book" class = "btn btn-danger">Delete Book</a></td>
                        </tr>
                        `
    });
    
}   

UI.prototype.alertMessage = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0]
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message
    console.log(div)
    cardBody.appendChild(div)

    setTimeout(()=>{
        div.remove()
    },2000)

}