const items = [
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        item: 1,
        content: "content 1"
    },
    {
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        item: 2,
        content: "content 2"
    },
    {
        img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        item: 3,
        content: "content 3"
    }
]

const img = document.querySelector("#img")
const item = document.querySelector("#item")
const content = document.querySelector("#content")

const btnBack = document.querySelector("#back")
const btnForward = document.querySelector("#forward")

let currItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showCurrItems(currItem);
})

const showCurrItems = (index) => {
    img.src = items[index].img
    item.textContent = items[index].item
    content.textContent = items[index].content 
}

btnForward.addEventListener("click", () => {
    currItem++;
    if (currItem > items.length - 1) {
        currItem = 0;
    }
    showCurrItems(currItem)
})

btnBack.addEventListener("click", () => {
    currItem--;
    if(currItem < 0){     
        currItem = items.length - 1;
    }
    showCurrItems(currItem)
})