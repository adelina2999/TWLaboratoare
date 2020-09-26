const correctAnswers = ["answer1a", "answer2a", "answer3a", "answer4a", "answer5a", "answer6a", "answer7a", "answer8a", "answer9a", "answer10a"]
const spaceForTextIds = ["text-answer1", "text-answer2", "text-answer3", "text-answer4", "text-answer5", "text-answer6", "text-answer7", "text-answer8", "text-answer9", "text-answer10"]

const answerIds = [
    ["answer1a", "answer1b", "answer1c", "answer1d", "answer1e"],
    ["answer2a", "answer2b", "answer2c", "answer2d", "answer2e"],
    ["answer3a", "answer3b", "answer3c", "answer3d", "answer3e"],
    ["answer4a", "answer4b", "answer4c", "answer4d", "answer4e"],
    ["answer5a", "answer5b", "answer5c", "answer5d", "answer5e"],
    ["answer6a", "answer6b", "answer6c", "answer6d", "answer6e"],
    ["answer7a", "answer7b", "answer7c", "answer7d", "answer7e"],
    ["answer8a", "answer8b", "answer8c", "answer8d", "answer8e"],
    ["answer9a", "answer9b", "answer9c", "answer9d", "answer9e"],
    ["answer10a", "answer10b", "answer10c", "answer10d", "answer10e"]
]

let arrayWithCheckedItems = []
let raspunsuriCorecte = 0

function showResults(){
    for(let i = 0; i < answerIds.length; i++) {
        for(let j = 0; j < answerIds[i].length; j++) {
            if(document.getElementById(answerIds[i][j]).checked == true) {
                arrayWithCheckedItems.push(answerIds[i][j])
            }
        }
        document.getElementById(spaceForTextIds[i]).innerHTML = document.getElementById(arrayWithCheckedItems[i]).value
        document.getElementById(spaceForTextIds[i]).style.fontWeight = "Bold"
    }

    colorSpaces()
    document.getElementById("grade").innerHTML = raspunsuriCorecte
}

function colorSpaces() {
    for(let i = 0; i < arrayWithCheckedItems.length; i++) {
        if(arrayWithCheckedItems[i] == correctAnswers[i]) {
            document.getElementById(spaceForTextIds[i]).style.color = "green"
            raspunsuriCorecte++
        } else {
            document.getElementById(spaceForTextIds[i]).style.color = "red"
        }
    }
}


function stergere() {

    for(let i = 0; i < answerIds.length; i++) {
        for(let j = 0; j < answerIds[i].length; j++) {
            document.getElementById(answerIds[i][j]).checked = false
        }
        document.getElementById(spaceForTextIds[i]).innerHTML = "_______________"
        document.getElementById(spaceForTextIds[i]).style.color = "black"
    }

    arrayWithCheckedItems = []
}
