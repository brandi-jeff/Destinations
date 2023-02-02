// movement of words in header... figure out scroll thing
// const words = document.getElementById("moving");
// const section = document.querySelector("#mvmt");

// words.style.right = section.offsetWidth + "px";

// const moveImage = () => {
    
//     words.style.right = parseInt(words.style.right) -1 + "px";

//     if (parseInt(words.style.right) + words.offsetWidth <= 0) {
//         words.style.right = section.offsetWidth + "px"; 
//     }
// };

// const intervalId = setInterval(moveImage, 2); 



// need to send input info somewhere and store it
my_form.addEventListener("submit", (e) => {
    storeUserInput();
    document.getElementById("my_form").reset(); // add form id in first set of () when known
})

function storeUserInput() {
     // const img = document.getElementById("").value;
    // destName.textContent = destInput;

    const destName = document.getElementById("dest-input");
    const dest = document.getElementById("dest-input").value;
    destName.innerHTML = dest;
    console.log(dest);

    const destLoc = document.getElementById("loc-input");
    const loc = document.getElementById("loc-input").value;
    destLoc.innerHTML = loc;
     console.log(loc);

    const destDesc = document.getElementById("dest-input");
    const desc = document.getElementById("dest-input").value;
    destDesc.textContent = desc;
     console.log(desc);

    // return dest, loc, desc; //img
}