// 1. Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.body.firstElementChild.firstElementChild
console.log(h1)
// 2. Using DOM methods, remove the last paragraph in the <article> tag.
document.body.firstElementChild.lastElementChild.remove()
// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
document.querySelector('h2').addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
})
// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
document.querySelector('h3').addEventListener('click', (e) => {
    e.target.style.display = 'none'
})
// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('p').forEach(p => p.style.fontWeight = 'bold')
})
// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = Math.floor(Math.random() * 100).toString() + 'px'
})
// 7. BONUS : When you hover on the 2nd paragraph, it should fade out
let p2 = document.querySelectorAll('p')[1]
p2.addEventListener('mouseover', () => {
    p2.style.transition = 'opacity 1s'
    p2.style.opacity = '0%'
})