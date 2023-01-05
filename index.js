const clClass = console.log
const cl = clClass

const checkBoxesGroup1 = document.querySelectorAll('.checkboxGroup1')
const totalPointsPerSession = document.querySelectorAll('.totalPoints1')
const displayResult = document.querySelectorAll('.result')

let total = [
    [0, 00], // [int, float]
    [0, 00],
    [0, 00],
    [0, 00],
]

const checkIfGreaterThanOneHundred = () => {
    for (let i = 0; i < total.length; i++) {
        if (total[i][1] > 99) {
            total[i][0] += 1
            total[i][1] -= 100

            displayResult[0].innerHTML = `${total[i][0]}.${total[i][1]}`
        }
    }
}

const checkIfLessThanZero = () => {
    for (let i = 0; i < total.length; i++) {
        if (total[i][1] < 0) {
            total[i][0] -= 1
            total[i][1] += 99

            displayResult[0].innerHTML = `${total[i][0]}.${total[i][1]}`
        }
    }
}

for (let i = 0; i < 18; i++) {
    checkBoxesGroup1[i].selected = 0
}

for (let i = 0; i < checkBoxesGroup1.length; i++) {
    checkBoxesGroup1[i].addEventListener('click', () => {
        if (checkBoxesGroup1[i].checked == true) {
            let selectIterator = null
            let editedValue = null
            
            switch (checkBoxesGroup1[i].selected) {
                case 0:
                    selectIterator = 0
                    break;
                
                case 1:
                    selectIterator = 1
                    break;
            }

            totalPointsPerSession[i].innerHTML = checkBoxesGroup1[i].value
            totalPointsPerSession[i].value = "0."
            totalPointsPerSession[i].value =+ checkBoxesGroup1[i].value
            
            editedValue = checkBoxesGroup1[i].value
            editedValue.replace('0.', '')

            total[selectIterator][1] += Number(editedValue)
            checkIfGreaterThanOneHundred()
            displayResult[selectIterator].innerHTML = `${total[selectIterator][0]}.${total[selectIterator][1]}`

            cl(totalPointsPerSession[i].value)
        } else {
            let selectIterator = null
            let editedValue = null
            
            switch (checkBoxesGroup1[i].selected) {
                case 0:
                    selectIterator = 0
                    break;
                
                case 1:
                    selectIterator = 1
                    break;
            }
            
            totalPointsPerSession[i].innerHTML = "0.0"
            totalPointsPerSession[i].value = 0.0

            editedValue = checkBoxesGroup1[i].value
            editedValue.replace('0.', '')

            total[selectIterator][1] -= Number.parseFloat(checkBoxesGroup1[i].value)
            checkIfLessThanZero()
            displayResult[selectIterator].innerHTML = `${total[selectIterator][0]}.${total[selectIterator][1]}`
        }
    })
}