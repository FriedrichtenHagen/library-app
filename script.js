let myLibrary = [{author: "tarzan", title : "The ballad of bear fred", pagenum: 23, readstatus:true}];

// querySelectors
const addButton = document.querySelector(".inputButton>button")
                            .addEventListener("click", displayInput);
const inputForm = document.querySelector(".inputForm");
const inputScreen = document.querySelector(".inputScreen");
inputScreen.addEventListener("click", displayInput);

// form and inputs
const form = document.querySelector("form")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pageNumInput = document.querySelector("#pageNum")
const readStatusInput = document.querySelector("#readStatus")
const submitButton = document.querySelector("button[type]")
// eventlisteners
// add event listener to submit (prevent default)
form.addEventListener("submit", e => {
    e.preventDefault(); 
    acceptInput();
    createCard();
})

// create book object
function Book(author, title, pageNum, readStatus){
    this.author = author;
    this.title = title;
    this.pageNum = pageNum; 
    this.readStatus = readStatus;
}
// push to library array
function addBookToLibrary(newBook){
    myLibrary.push(newBook)
}
const content = document.querySelector(".content")
function createCard(){
    let newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.textContent = 
        `Title: ${myLibrary[myLibrary.length-1].title}
        Author: ${myLibrary[myLibrary.length-1].author}
        Pages: ${myLibrary[myLibrary.length-1].pageNum}
        Read? ${myLibrary[myLibrary.length-1].readStatus}`
    content.appendChild(newCard)
}
function displayInput(){
    inputForm.classList.toggle("active")
    inputScreen.classList.toggle("active")

}


// get content of input fields
function acceptInput(){
    let title = titleInput.value
    let author = authorInput.value
    let pageNum = pageNumInput.value
    let readStatus = readStatusInput.value
    let newBook = new Book(author, title, pageNum, readStatus)
    addBookToLibrary(newBook);
}


// Create new book object
// push object to array
// createCard()

// add buttons to Card for deleting and changing read status