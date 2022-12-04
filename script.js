let myLibrary = [];

// querySelectors
const addButton = document.querySelector(".inputButton>button.add")
                            .addEventListener("click", displayInput);
const sortButton = document.querySelector(".inputButton>button.sort")
sortButton.addEventListener("click", e => {
                                clearAllCards()
                                sortByReadStatusFalse()
                                repopulateCards(myLibrary)
                            });
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
    // fill in the information on the new card
    let newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.setAttribute("data-libindex", `${myLibrary.length-1}`)

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
    readStatusB.classList.add("readButton")
    // set read status
    if(myLibrary[myLibrary.length-1].readStatus){
        readStatusB.classList.add("trueGreen")
        readStatusB.textContent = "Read"
    }
    else{
        readStatusB.textContent = "Unread"
    }
    // toggle read status on click
    readStatusB.addEventListener("click", e => {
        readStatusB.classList.toggle("trueGreen")
        
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

    // remove card from field and object from array
    let removeB = document.createElement("button")
    removeB.textContent = "remove"
    removeB.classList.add("removeButton")
    removeB.addEventListener("click", e => {
        content.removeChild(newCard)
        //remove book from library
        myLibrary.splice(`${newCard.dataset.libindex}`, 1)

        // reassign newCard.dataset.libindex
        const cardNodeList = document.querySelectorAll(".card")

        for(let i=0; i<myLibrary.length; i++){
            cardNodeList[i].setAttribute("data-libindex", `${i}`)
        }
    })
    newCard.appendChild(removeB)

    // add card to grid
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



// sort by pagenumber
function sortByPageNumAsc(){
    myLibrary = myLibrary.sort((a, b) => a.pageNum - b.pageNum)
}
function sortByPageNumDes(){
    myLibrary = myLibrary.sort((a, b) => b.pageNum - a.pageNum)
}
// sort by read status
function sortByReadStatusTrue(){
    myLibrary = myLibrary.sort((a, b) => b.readStatus - a.readStatus)
}
function sortByReadStatusFalse(){
    myLibrary = myLibrary.sort((a, b) => a.readStatus - b.readStatus)
}
// function that removes all cards from DOM (not from myLibrary)
function clearAllCards(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}


// function that rearranges them according the sorted array
function repopulateCards(sortedLib){
    for(let i=0; i<sortedLib.length; i++){
        // fill in the information on the new card
        let newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.setAttribute("data-libindex", `${i}`)

        let titleP = document.createElement("p")
        titleP.textContent = `${sortedLib[i].title}`
        newCard.appendChild(titleP)

        let authorP = document.createElement("p")
        authorP.textContent = `${sortedLib[i].author}`
        newCard.appendChild(authorP)

        let pageNumP = document.createElement("p")
        pageNumP.textContent = `${sortedLib[i].pageNum}`
        newCard.appendChild(pageNumP)

        let readStatusB = document.createElement("button")
        readStatusB.classList.add("readButton")
        // set read status
        if(sortedLib[i].readStatus){
            readStatusB.classList.add("trueGreen")
            readStatusB.textContent = "Read"
        }
        else{
            readStatusB.textContent = "Unread"
        }
        // toggle read status on click
        readStatusB.addEventListener("click", e => {
            readStatusB.classList.toggle("trueGreen")
            
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

        // remove card from field and object from array
        let removeB = document.createElement("button")
        removeB.textContent = "remove"
        removeB.classList.add("removeButton")
        removeB.addEventListener("click", e => {
            content.removeChild(newCard)
            //remove book from library
            myLibrary.splice(`${newCard.dataset.libindex}`, 1)

            // reassign newCard.dataset.libindex
            const cardNodeList = document.querySelectorAll(".card")

            for(let i=0; i<myLibrary.length; i++){
                cardNodeList[i].setAttribute("data-libindex", `${i}`)
            }
        })
        newCard.appendChild(removeB)

        // add card to grid
        content.appendChild(newCard)
    }
}


// create a input select to access different sort functions
// add input limitations (min character, just numbers etc) 
// work on css
// create grid for new books