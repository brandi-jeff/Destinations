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
    e.preventDefault();
    setHeader();
    storeUserInput();
    document.getElementById("my_form").reset();
   
     // add form id in first set of () when known
})

function setHeader(){
    if (document.getElementById("card-head").textContent === "Enter Destination Details") {
        document.getElementById("card-head").textContent = "My Destination List";
    }
}

function storeUserInput() {

    const img = document.getElementById("img-input").value;
   
    const dest = document.getElementById("dest-input").value;
    
    const loc = document.getElementById("loc-input").value;
    
    const desc = document.getElementById("dest-input").value;

    addToCard(img, dest, loc, desc);
}

let defaultPhoto = "./defaultPic.PNG";

function addToCard(img, dest, loc, desc) {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "dest-card");
    cardDiv.setAttribute("class", "card");
    cardDiv.setAttribute("class", "card");
    cardDiv.style.width = "18rem";
    cardDiv.style.height = "fit-content";
    cardDiv.style.margin = "20px;";
    document.getElementById("right-article").appendChild(cardDiv); // append inside right article under h2 element

    const imgTag = document.createElement("img");
    imgTag.setAttribute("class", "card-img-top");
    imgTag.setAttribute("alt", dest);
    cardDiv.appendChild(imgTag); //append inside div with id=dest-card

    if (img.length === 0) {
        imgTag.setAttribute("src", defaultPhoto);
    } else {
        imgTag.setAttribute("src", img);
    }

    const cardBody = document.createElement("div");
    cardBody.setAttribute("id", "card-body")
    cardDiv.appendChild(cardBody); //append inside div with id=dest-card, under img element

    const destName = document.createElement("h5");
    destName.setAttribute("id", "dest-name");
    cardBody.appendChild(destName); // append in div with id=card-body 
    destName.innerText = dest;

    const destLoc = document.createElement("p"); 
    destLoc.setAttribute("id", "dest-loc");
    cardBody.appendChild(destLoc);
    destLoc.innerText = loc;

    const destDesc = document.createElement("p");
    destDesc.setAttribute("id", "dest-desc");
    cardBody.appendChild(destDesc);
    destDesc.innerText = desc;

    const btnDiv = document.createElement("div"); 
    btnDiv.setAttribute("id", "card-btns");
    cardBody.appendChild(btnDiv);

    const editBtn = document.createElement("button"); // change this to a button
    editBtn.setAttribute("id", "edit-btn");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("class", "btn");
    editBtn.setAttribute("class", "btn-primary");
    btnDiv.appendChild(editBtn);
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editCard);

    const removeBtn = document.createElement("button"); 
    removeBtn.setAttribute("id", "remove-btn");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("class", "btn");
    removeBtn.setAttribute("class", "btn-primary");
    btnDiv.appendChild(removeBtn); 
    removeBtn.textContent= "Remove";
    removeBtn.addEventListener("click", removeCard);
}

// edit button to change card
function editCard(event) { 
        const newDest = prompt("What do you want to change the destination to?");
        const newLoc = prompt("What do you want to change the location to?");
        const newImg= prompt("What do you want to change the image URL to?");
        const newDesc = prompt("What do you want to change the description to?");
    
        
        document.getElementById("dest-name").value = newDest;
        document.getElementById("dest-loc").value = newLoc;
        document.querySelector("img").value = newImg; // need to set attribute
        document.getElementById("dest-desc").value = newDesc;
    
        if (newDest !== null || newDest.length !== 0) {
            const editDest = document.getElementById("dest-name");
            const getDestParent = editDest.parentElement.parentElement;
            getDestParent.innerText = newDest;
        }
    
        // if (newLoc !== null || newLoc.length !== 0) {
        //     const editLoc = document.getElementById("dest-loc");
        //     console.log(editLoc);
        //     const getLocParent = editLoc.parentElement.parentElement;
        //     getParent.innerText = newLoc;
        // }
    
        // if (newImg !== null || newimg.length !== 0) {
        //     const editImg = document.getElementsByTagName("img");
        //     const getImgParent = editImg.parentElement.parentElement.parentElement;
        //     getParent = newImg.setAttribute("src", newImg); 
        // } else {
        //     getParent = newImg.setAttribute("src", defaultPhoto);
        // }
         // else if (newImg === 0) {
         //        // keep same photo
         //    }
        if (newDesc !== null || newDesc.length !== 0) {
            const ediDesc = document.getElementById("dest-desc");
            const getDescParent = editDesc.parentElement.parentElement;
            getParent.innerText = newDesc;
        }
}


// remove button to remove card
function removeCard() {
    const clickedRmv = document.getElementById("card-body");
    const getParent = clickedRmv.parentElement;
    getParent.remove();
}