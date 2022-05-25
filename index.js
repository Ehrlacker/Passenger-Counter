let countEl = document.getElementById("count-el") //This is asking for the HTML element. countEl is JS convention, count-el is HTML convention.
let saveEl = document.getElementById("save-el")

console.log(countEl) //console.log after every step to make sure that you're not introducing any bugs.
//once you ask for the hHTML element, you can manipulate it in JS
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count //This manipulates the HTML element.
    //now we can use the variable countEl and pair it with innerText. innerText gets or sets an HTML element. innerText is the text that's insoide the HTML tags.
    console.log(count)
}

//Adding something within the parenthesis of a function is called passing an argument.
//This means that we're giving the function data to work with. This is shown in line 1.



function save() {
    let entries = count + " - "
     
    saveEl.textContent += entries
    console.log(count)
    countEl.textContent = 0
    count = 0
}
