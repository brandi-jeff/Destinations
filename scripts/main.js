// movement of words in header... figure out scroll thing
const words = document.getElementById("moving");
const section = document.querySelector("#mvmt");

words.style.right = section.offsetWidth + "px";

const moveImage = () => {
    
    words.style.right = parseInt(words.style.right) -1 + "px";

    if (parseInt(words.style.right) + words.offsetWidth <= 0) {
        words.style.right = section.offsetWidth + "px"; 
    }
};

const intervalId = setInterval(moveImage, 2); 



// need to send input info somewhere and store it
my_form.addEventListener("submit", (e) => {
     storeUserInput();
    document.getElementById("my_form").reset();
   
     // add form id in first set of () when known
})

function storeUserInput() {
     // const img = document.getElementById("").value;
    // destName.textContent = destInput;

    // const destName = document.getElementById("dest-input");
    const dest = document.getElementById("dest-input").value;
    
    console.log(dest);

    // const destLoc = document.getElementById("loc-input");
    const loc = document.getElementById("loc-input").value;
    
     console.log(loc);

    // const destDesc = document.getElementById("dest-input");
    const desc = document.getElementById("dest-input").value;
    
     console.log(desc);

    addToCard(dest, loc, desc);
}

function addToCard(dest, loc, desc) {


    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "dest-card");
    cardDiv.setAttribute("class", "card");
    cardDiv.setAttribute("style", "width: 18rem;");
    document.getElementById("right-article").appendChild(cardDiv); // append inside right article under h2 element

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", "");
    imgTag.setAttribute("class", "card-img-top");
    imgTag.setAttribute("alt", "location photo");
    document.getElementById("dest-card").appendChild(imgTag); //append inside div with id=dest-card

    const cardBody = document.createElement("div");
    cardBody.setAttribute("id", "card-body")
    document.getElementById("dest-card").appendChild(cardBody); //append inside div with id=dest-card, under img element

    const destName = document.createElement("h5");
    destName.setAttribute("id", "dest-name");
    document.getElementById("card-body").appendChild(destName); // append in div with id=card-body 

    const destLoc = document.createElement("p"); 
    destLoc.setAttribute("id", "dest-loc");
    document.getElementById("card-body").appendChild(destLoc);

    const destDesc = document.createElement("p");
    destDesc.setAttribute("id", "dest-desc");
    document.getElementById("card-body").appendChild(destDesc);

    const btnDiv = document.createElement("div"); 
    btnDiv.setAttribute("id", "card-btns");
    document.getElementById("card-body").appendChild(btnDiv);

    const editBtn = document.createElement("a"); 
    editBtn.setAttribute("href", "#");
    editBtn.setAttribute("id", "edit-btn");
    editBtn.setAttribute("class", "btn");
    editBtn.setAttribute("class", "btn-primary");
    document.getElementById("card-btns").appendChild(editBtn);

    const removeBtn = document.createElement("a"); 
    removeBtn.setAttribute("href", "#");
    removeBtn.setAttribute("id", "remove-btn");
    removeBtn.setAttribute("class", "btn");
    removeBtn.setAttribute("class", "btn-primary");
    document.getElementById("card-btns").appendChild(removeBtn);

    destName.innerHTML = dest;
    destLoc.innerHTML = loc;
    destDesc.innerHTML = desc;
    editBtn.innerHTML = "Edit";
    removeBtn.innerHTML= "Remove";
}