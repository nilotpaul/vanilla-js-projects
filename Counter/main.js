const counter = document.querySelector("#counter")
const btn = document.querySelectorAll(".btn")

let count = 0;


btn.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        if(e.currentTarget.classList.contains("decrease")) {
            count--
        } else if(e.currentTarget.classList.contains("increase")) {
            count++
        } else {
            count = 0
        }
        counter.textContent = count
        if(count < 0) {
            counter.style.color = "red"
        }else if (count > 0) {
            counter.style.color = "green"
        }else {
            counter.style.color = "black"
        }
        
    })
})
