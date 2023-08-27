
// Start the game
document.querySelector(".control-button span").onclick = () => {
    let yourName = prompt("what is your name?");
    if (yourName === null || yourName === "") {
        document.querySelector(".name span").innerHTML = "unKnown";
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }
    let beginGame= document.querySelector(".control-button");
    beginGame .remove();
};

// Set the global variables
let duration = 1000;
let blockContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blockContainer.children);
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

// CSS style flex order
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener("click", function () {
        flip(block);
    });
});

// Create the flip function
function flip(block) {
    block.classList.add("is-flipped");
    
    // How many blocks are flipped
    let flippedBlocks = blocks.filter((block) => block.classList.contains("is-flipped"));

    // Check if two blocks have class is-flipped
    if (flippedBlocks.length === 2) {
        // Trigger stop clicking function
        stopClicking();

        // Trigger check matched function
        matched(flippedBlocks[0], flippedBlocks[1]);
    }
}

// Create stop function
function stopClicking() {
    blockContainer.classList.add("no-clicking");
    setTimeout(() => {
        blockContainer.classList.remove("no-clicking");
    }, duration);
}

// Create matched function
function matched(firstBlock, secondBlock) {
    let tries = document.querySelector(".tries span");

    if (firstBlock.dataset.icon === secondBlock.dataset.icon) {
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");
    } else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
        }, duration);
    }
}

// Create the shuffle function
function shuffle(arr) {
    let current = arr.length;
    let temp;
    let random;

    while (current > 0) {
        random = Math.floor(Math.random() * current);

        current--;

        // Swapping
        temp = arr[current];
        arr[current] = arr[random];
        arr[random] = temp;
    }
    return arr;
}