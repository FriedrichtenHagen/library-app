let myLibrary = [];

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
const content = document.querySelector(".content")

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


function createCard(){
    let newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.setAttribute("data-libindex", `${myLibrary.length-2}`)

    let titleP = document.createElement("p")
    titleP.textContent = `${myLibrary[myLibrary.length-1].title}`
    newCard.appendChild(titleP)

    let authorP = document.createElement("p")
    authorP.textContent = `${myLibrary[myLibrary.length-1].author}`
    newCard.appendChild(authorP)

    let pageNumP = document.createElement("p")
    pageNumP.textContent = `${myLibrary[myLibrary.length-1].pageNum}`
    newCard.appendChild(pageNumP)

    let readStatusB = document.createElement("button")
    if(myLibrary[myLibrary.length-1].readStatus){
        readStatusB.classList.add("trueGreen")
        readStatusB.textContent = "Read"
    }
    else{
        readStatusB.textContent = "Unread"
    }

    readStatusB.addEventListener("click", e => {
        readStatusB.classList.toggle("trueGreen")
        
        //toggle the readStatus in object?
        
        if(myLibrary[`${newCard.dataset.libindex}`].readStatus){
            myLibrary[`${newCard.dataset.libindex}`].readStatus = false
            readStatusB.textContent = "Unread"
        }
        else{
            myLibrary[`${newCard.dataset.libindex}`].readStatus = true
            readStatusB.textContent = "Read"
        }
            

    })

    newCard.appendChild(readStatusB)

    let removeB = document.createElement("button")
    removeB.textContent = "remove"
    newCard.appendChild(removeB)

 
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
    let readStatus = readStatusInput.checked 
    let newBook = new Book(author, title, pageNum, readStatus)
    addBookToLibrary(newBook);
}



// fix card layout
// check read status
// add buttons to Card for deleting and changing read status