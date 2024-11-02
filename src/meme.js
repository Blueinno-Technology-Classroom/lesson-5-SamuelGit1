let field1 = document.getElementById("input1")
let field2 = document.getElementById("input2")
let field3 = document.getElementById("input3")
let outputText = document.getElementById("button-generate")
let outputCaption1 = document.getElementById("output-caption1")
let outputCaption2 = document.getElementById("output-caption2")
let img1 = document.getElementById("img1")

function onBtnGenerateClicked() {
    outputCaption1.innerHTML = field1.value
    outputCaption2.innerHTML = field2.value
    img1.src = field3.value
}

outputText.addEventListener("click", onBtnGenerateClicked)
