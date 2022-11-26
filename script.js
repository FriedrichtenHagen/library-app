let myLibrary = ["maral", "dirk", "hans"];

function Book(author, title, pagenum, readstatus){
    this.author = author;
    this.title = title;
    this.pagenum = pagenum; 
    this.readstatus = readstatus;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
}
const content = document.querySelector(".content")
function createCard(){
    for(let i=0; i<myLibrary.length; i++){
        let newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.textContent = `This is ${myLibrary[i]}`
        content.appendChild(newCard)
        }
}
