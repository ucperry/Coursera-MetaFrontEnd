/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

let items=[]
const inputFieldEl = document.getElementById("input-field")
const addBtnEl = document.getElementById("add-button")

addBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})