// 1. Declare a global variable named allBoldItems.
var allBoldItems
// 2. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
(function getBold_items() {
    allBoldItems = document.querySelectorAll('strong')
})()
// 3. Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    allBoldItems.forEach(el => el.style.color = 'blue')
}
// 4. Create a function called return_normal() that changes the color of all the bold text back to black. 
function return_normal() {
    allBoldItems.forEach(el => el.style.color = 'black')
}
// 5. Call the function highlight() on mouseover on the paragraph
let p = document.querySelector('p')
p.addEventListener('mouseover', highlight)
// ...and the function return_normal() on mouseout 
p.addEventListener('mouseout', return_normal)