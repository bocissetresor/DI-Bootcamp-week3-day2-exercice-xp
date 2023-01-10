// 1. Write a JavaScript program to calculate the volume of a sphere.
document.querySelector('#MyForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let r = document.querySelector('#radius').value
    if (isNaN(r)) {
        alert('Please enter a number')
        return
    }
    r = Number(r)
    // Volume_Sphere = 4/3 π r³
    let v = 4 / 3 * Math.PI * Math.pow(r, 3)
    document.querySelector('#volume').value = v.toFixed(3)
})