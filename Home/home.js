const buttonTextId = [
  {
    buttonId: "generalitati-button",
    textId: "generalitati"
  },
  {
    buttonId: "etimologie-button",
    textId: "etimologie"
  },
  {
    buttonId: "clima-button",
    textId: "clima"
  },
  {
    buttonId: "istorie-button",
    textId: "istorie"
  }
]

function setAgain() {
  document.getElementById("generalitati").style.height = "auto"
  document.getElementById("etimologie").style.height = "auto"
  document.getElementById("clima").style.height = "auto"
  document.getElementById("istorie").style.height = "auto"
}

function afisareContinut(id) {
  setAgain()
  for(let i = 0; i < buttonTextId.length; i++){
    if(buttonTextId[i].buttonId === id) {
      document.getElementById(buttonTextId[i].textId).style.visibility = "visible" 
    } else {
      document.getElementById(buttonTextId[i].textId).style.visibility = "hidden"
      document.getElementById(buttonTextId[i].textId).style.height = "0px"
    }
  }
}
