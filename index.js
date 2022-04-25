const submitButton = document.getElementById('submit')
const answerText = document.getElementById('answer')

submitButton.addEventListener('click', () => {
    const baseLenVal = document.getElementById('base-length').value
    const baseWidthVal = document.getElementById('base-width').value
    const heightVal = document.getElementById('height').value
    const measure = document.getElementById('measure').value
    
    if (baseLenVal === "", baseWidthVal === "", heightVal === "") {
        document.getElementById("answer").innerHTML = "Please add a number to the input fields"
    }
     else {
        var base = baseLenVal * baseWidthVal
        var height = heightVal
        var measureCubed = `${measure}³`
        var answer = base * height
        
        if (measure === "") {
            document.getElementById("answer").innerHTML = `${answer}`
        } else {
            document.getElementById("answer").innerHTML = `${answer}${measureCubed}`
        }
    }
})

