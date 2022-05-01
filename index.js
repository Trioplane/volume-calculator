const pi = 3.1415926535898

function basicCalc() {
    const baseLenVal = document.getElementById('base-length').value
    const baseWidthVal = document.getElementById('base-width').value
    const heightVal = document.getElementById('height').value
    const measureB = document.getElementById('measure-b').value  
    if (baseLenVal === "" || baseWidthVal === "" || heightVal === "") {
        document.getElementById("answer-b").innerHTML = "Please add a number to the input fields"
    } else if(/^[a-zA-Z]+$/.test(baseLenVal) || /^[a-zA-Z]+$/.test(baseWidthVal) || /^[a-zA-Z]+$/.test(heightVal)) {
       document.getElementById("answer-b").innerHTML = "Letters are not allowed"
    }
     else {
        var base = baseLenVal * baseWidthVal
        var height = heightVal
        var measureCubed = `${measureB}³`
        var answer = base * height      
        if (measureB === "") {
            document.getElementById("answer-b").innerHTML = `${answer}`
        } else {
            document.getElementById("answer-b").innerHTML = `${answer}${measureCubed}`
        }
    }
}

function sphereCalc() {
    const radiusVal = document.getElementById('radius').value
    const measureS = document.getElementById('measure-s').value  

    if (radiusVal === "") {
        document.getElementById("answer-s").innerHTML = "Please add a number to the input fields"
    } else if(/^[a-zA-Z]+$/.test(radiusVal)) {
       document.getElementById("answer-s").innerHTML = "Letters are not allowed"
    }
     else {
        var measureCubed = `${measureS}³`
        var radiusCubed = radiusVal * radiusVal * radiusVal
        var answer = 4/3 * pi * radiusCubed    
        if (measureS === "") {
            document.getElementById("answer-s").innerHTML = `${answer}`
        } else {
            document.getElementById("answer-s").innerHTML = `${answer}${measureCubed}`
        }
    }
    
}
 
function coneCalc() {
    const radiusVal = document.getElementById('c-radius').value
    const measureC = document.getElementById('measure-c').value 
    const heightVal = document.getElementById('c-height').value 

    if (radiusVal === "") {
        document.getElementById("answer-c").innerHTML = "Please add a number to the input fields"
    } else if(/^[a-zA-Z]+$/.test(radiusVal)) {
       document.getElementById("answer-c").innerHTML = "Letters are not allowed"
    }
     else {
        var radiusSquared = radiusVal * radiusVal
        var answer = 1/3 * heightVal * pi * radiusSquared    
        if (measureC === "") {
            document.getElementById("answer-c").innerHTML = `${answer}`
        } else {
            document.getElementById("answer-c").innerHTML = `${answer}${measureC}`
        }
    }
    
}

function pyramidCalc() {
    const measureP = document.getElementById('measure-p').value 
    const heightVal = document.getElementById('p-height').value 
    const lengthVal = document.getElementById('length').value 
    const widthVal = document.getElementById('width').value 

    if (heightVal === "" || lengthVal === "" || widthVal === "") {
        document.getElementById("answer-p").innerHTML = "Please add a number to the input fields"
    } else if(/^[a-zA-Z]+$/.test(heightVal) || /^[a-zA-Z]+$/.test(lengthVal) || /^[a-zA-Z]+$/.test(widthVal)) {
       document.getElementById("answer-p").innerHTML = "Letters are not allowed"
    }
     else {
        var answer = 1/3 * lengthVal * heightVal * widthVal   
        if (measureP === "") {
            document.getElementById("answer-p").innerHTML = `${answer}`
        } else {
            document.getElementById("answer-p").innerHTML = `${answer}${measureP}`
        }
    }
    
}

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

 document.getElementById('submit-b').addEventListener('click', basicCalc)
 document.getElementById('submit-s').addEventListener('click', sphereCalc)
 document.getElementById('submit-c').addEventListener('click', coneCalc)
 document.getElementById('submit-p').addEventListener('click', pyramidCalc)

// --------------------------------------------------------------------------------------------

const dropdownButton = document.getElementById('dropdown')
const dropdownBody = document.getElementById('dropdown-body')
const arrow = document.getElementById('arrow')


dropdownButton.addEventListener('click', () => {
    dropdownBody.classList.toggle('hide')
    dropdownBody.classList.toggle('fadeIn')
    arrow.classList.toggle('rotate180')
})
   

    


// --------------------------------------------------------------------------------------------

document.getElementById('d-sphere').addEventListener('click', () => {
    document.getElementById('s-sphere').classList.remove('hide')
    document.getElementById('s-basic').classList.add('hide')
    document.getElementById('s-cone').classList.add('hide')
    document.getElementById('s-pyramid').classList.add('hide')
})

document.getElementById('d-basic').addEventListener('click', () => {
    document.getElementById('s-basic').classList.remove('hide')
    document.getElementById('s-sphere').classList.add('hide')
    document.getElementById('s-cone').classList.add('hide')
    document.getElementById('s-pyramid').classList.add('hide')

})

document.getElementById('d-cone').addEventListener('click', () => {
    document.getElementById('s-cone').classList.remove('hide')
    document.getElementById('s-basic').classList.add('hide')
    document.getElementById('s-sphere').classList.add('hide')
    document.getElementById('s-pyramid').classList.add('hide')
})

document.getElementById('d-pyramid').addEventListener('click', () => {
    document.getElementById('s-pyramid').classList.remove('hide')
    document.getElementById('s-basic').classList.add('hide')
    document.getElementById('s-sphere').classList.add('hide')
    document.getElementById('s-cone').classList.add('hide')
})
