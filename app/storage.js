class Storage {

}

Storage.prototype.addBookToStorage = function(newbook){
    let books = this.getBookToStorage()
    books.push(newbook)
    localStorage.setItem("books",JSON.stringify(books))
}

Storage.prototype.getBookToStorage = function(){
    let books
    if(localStorage.getItem("books") == null){
        
        books = []
    }
    else{
        books = JSON.parse(localStorage.getItem("books"))

    }

    return books
}