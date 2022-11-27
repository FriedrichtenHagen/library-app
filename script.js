let myLibrary = [{author: "tarzan", title : "The ballad of bear fred", pagenum: 23, readstatus:true}];

const addbutton = document.querySelector(".inputbutton>button")
                            .addEventListener("click", displayInput);
const inputForm = document.querySelector(".inputForm");

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
        newCard.textContent = 
            `This is 
            ${myLibrary[i].title},
            ${myLibrary[i].author},
            ${myLibrary[i].pagenum}
            ${myLibrary[i].readstatus}`
        content.appendChild(newCard)
    }
}
function displayInput(){
    inputForm.classList.toggle("active")
}