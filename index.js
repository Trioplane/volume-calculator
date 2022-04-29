 const submitButton = document.getElementById('submit')
 const answerText = document.getElementById('answer')

 submitButton.addEventListener('click', () => {
     const baseLenVal = document.getElementById('base-length').value
     const baseWidthVal = document.getElementById('base-width').value
     const heightVal = document.getElementById('height').value
     const measure = document.getElementById('measure').value  
     if (baseLenVal === "" || baseWidthVal === "" || heightVal === "") {
         document.getElementById("answer").innerHTML = "Please add a number to the input fields"
     } else if(/^[a-zA-Z]+$/.test(baseLenVal) || /^[a-zA-Z]+$/.test(baseWidthVal) || /^[a-zA-Z]+$/.test(heightVal)) {
        document.getElementById("answer").innerHTML = "Letters are not allowed"
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

 function isGood(elem, elem2) {
     if (document.getElementById(elem).value === "" || /^[a-zA-Z]+$/.test(document.getElementById(elem).value)) {
         document.getElementById(elem).classList.remove('success')
        document.getElementById(elem).classList.add('danger')
        document.getElementById(elem2).innerText = 'Number needed'
        document.getElementById(elem2).classList.remove('success-text')
        document.getElementById(elem2).classList.add('danger-text')
    } else {
        document.getElementById(elem).classList.remove('danger')
        document.getElementById(elem).classList.add('success')
        document.getElementById(elem2).innerText = 'Ready to calculate'
        document.getElementById(elem2).classList.remove('danger-text')
        document.getElementById(elem2).classList.add('success-text')
     }
 }

// --------------------------------------------------------------------------------------------

const dropdownButton = document.getElementById('dropdown')
const dropdownBody = document.getElementById('dropdown-body')
const arrow = document.getElementById('arrow')


dropdownButton.addEventListener('click', () => {
    dropdownBody.classList.toggle('hide')
    dropdownBody.classList.toggle('fadeIn')
    arrow.classList.toggle('rotate180')
})
