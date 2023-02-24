// movement of words in header
const words = document.getElementById("moving");
const section = document.querySelector("#mvmt");

words.style.right = section.offsetWidth + "px";

const moveImage = () => {
  words.style.right = parseInt(words.style.right) - 1 + "px";

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
});

function setHeader() {
  if (
    document.getElementById("card-head").textContent ===
    "Enter Destination Details"
  ) {
    document.getElementById("card-head").textContent = "My Destination List";
  }
}

function storeUserInput() {
  const img = document.getElementById("img-input").value;

  const dest = document.getElementById("dest-input").value;

  const loc = document.getElementById("loc-input").value;

  const desc = document.getElementById("desc-input").value;

  addToCard(img, dest, loc, desc);
}

const defaultPhoto = "./defaultPic.PNG";
let eventFlag = false; //flag to show card is being created not, edited

function addToCard(img, dest, loc, desc) {
  const groupDiv = document.createElement("div");
  groupDiv.setAttribute("class", "card-group");
  flexDiv.appendChild(groupDiv);

  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("id", "cardDiv");
  cardDiv.setAttribute("class", "card");
  flexDiv.appendChild(cardDiv); // append inside right article under h2 element

  const imgTag = document.createElement("img");
  imgTag.setAttribute("class", "card-img-top");
  // imgTag.setAttribute("class", "flex-grow-1");
  imgTag.setAttribute("alt", dest);
  imgTag.style.width = "15rem";
  imgTag.style.height = "15rem";
  cardDiv.appendChild(imgTag); //append inside div with id=dest-card

  if (img === "") {
    getImg(cardDiv);
    // imgTag.setAttribute("src", defaultPhoto);
  } else {
    imgTag.setAttribute("src", img);
  }

  const cardBody = document.createElement("div");
  cardBody.setAttribute("id", "card-body");
  cardBody.setAttribute("class", "flex-grow-1");
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

  const editBtn = document.createElement("button");
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
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", removeCard);

  return cardDiv;
}

// edit button to change card
function editCard(cardDiv) {

  cardDiv.newDest = prompt("Enter new destination city:");
  cardDiv.newLoc = prompt("Enter new destination state/country:");
  cardDiv.newImg = prompt("Enter new URL:");
  cardDiv.newDesc = prompt("Update description:");

  if (cardDiv.newImg !== null && cardDiv.newImg.length > 0) {
    //find parent element since all the cards have the same id and classes by default since they are dynamically created
    const img = cardDiv.currentTarget.parentElement.parentElement.parentElement;
    img.querySelector("img").setAttribute("src", cardDiv.newImg);
  } else {
    eventFlag = true; //now true because the card exists, and needs to be edited bc the edit event occurred
    getImg(cardDiv, cardDiv.newDest);
  }

  // find parent element so edits correct card
  const oldParentDest = cardDiv.currentTarget.parentElement.parentElement;
  const oldDest = oldParentDest.querySelector("#dest-name");
  if (cardDiv.newDest !== null && cardDiv.newDest.length === 0) {
    oldDest.innerText;
  } else if (cardDiv.newDest.length > 0) {
    oldDest.innerText = cardDiv.newDest;
  }

  const oldParentLoc = cardDiv.currentTarget.parentElement.parentElement;
  const oldLoc = oldParentLoc.querySelector("#dest-loc");
  if (cardDiv.newLoc !== null && cardDiv.newLoc.length === 0) {
    oldLoc.innerText;
  } else if (cardDiv.newLoc.length > 0) {
    oldLoc.innerText = cardDiv.newLoc;
  }

  const oldParentDesc = cardDiv.currentTarget.parentElement.parentElement;
  const oldDesc = oldParentDesc.querySelector("#dest-desc");
  if (cardDiv.newDesc !== null && cardDiv.newDesc.length === 0) {
    oldDesc.innerText;
  } else if (cardDiv.newDesc.length > 0) {
    if (oldDesc.innerText === undefined) { //if user didnt eneter a description when the card was made, need to create that element
      const destDesc = document.createElement("p");
      destDesc.setAttribute("id", "dest-desc");
      cardBody.appendChild(destDesc);
      destDesc.innerText = cardDiv.newDesc;
    }
    oldDesc.innerText = cardDiv.newDesc;
  }
}

// remove button to remove card
function removeCard(cardDiv) {
  const clickedRmv = cardDiv.currentTarget;
  const getParent = clickedRmv.parentElement.parentElement.parentElement;
  getParent.remove();
}

// use API for photos
function getImg(cardDiv, dest) { //figure out why wont work when update photo, or why it updates wrong photo
  
  if (eventFlag) {
      const url = `https://api.unsplash.com/search/photos?query=${dest}&client_id=VrE3yua9qa8PzQJ8uOdw1FPsC5l7IELgHg2fp5yCBqI`;
      fetch(url).then(response => response.json())
      .then(photos=>  {
          editImg = cardDiv.srcElement;
          const newImg = editImg.parentElement.parentElement.parentElement;
          const stockImg = photos.results[5].urls.thumb;
          newImg.querySelector(".card-img-top")
          .setAttribute("src", stockImg);
      });
  } else {
     dest = document.getElementById("dest-input").value;
      const url = `https://api.unsplash.com/search/photos?query=${dest}&client_id=VrE3yua9qa8PzQJ8uOdw1FPsC5l7IELgHg2fp5yCBqI`;
      fetch(url).then(response => response.json())
      .then(photos=>  {
          const stockImg = photos.results[5].urls.thumb;
          cardDiv.querySelector(".card-img-top")
          .setAttribute("src", stockImg);
      });
  }
}
