let myLibrary = [{author: "tarzan", title : "The ballad of bear fred", pagenum: 23, readstatus:true}];

// querySelectors
const addButton = document.querySelector(".inputButton>button")
                            .addEventListener("click", displayInput);
const inputForm = document.querySelector(".inputForm");
const submitButton = document.querySelector("button[type]")
const form = document.querySelector("form")
// eventlisteners
form.addEventListener("submit", e => {e.preventDefault(); alert("maral!")})


function Book(author, title, pageNum, readStatus){
    this.author = author;
    this.title = title;
    this.pageNum = pageNum; 
    this.readStatus = readStatus;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
}
const content = document.querySelector(".content")
function createCard(){
    for(let i=0; i<myLibrary.length; i++){
        let newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.textContent = 
            `This is 
            ${myLibrary[i].title},
            ${myLibrary[i].author},
            ${myLibrary[i].pageNum}
            ${myLibrary[i].readStatus}`
        content.appendChild(newCard)
    }
}
function displayInput(){
    inputForm.classList.toggle("active")
}

// add event listener to submit (prevent default)
// get content of input fields
// create new book object
// push object to array
// createCard()

// add buttons to Card for deleting and changing read status