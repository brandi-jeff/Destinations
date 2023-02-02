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
    e.preventDefault(); // this allows a lag after submitting so page slows down
    console.log("info"); // this should call on a function that collects each input
    document.getElementById().reset(); // add form id in first set of () when known
})