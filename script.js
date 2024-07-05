let generateBtn = document.getElementById("submitButton")
let inputTag = document.getElementById("numOfColor")
let mainColorDiv = document.getElementById("main-div")

generateBtn.onclick = () => {
    let inputValue = inputTag.value
    if (inputValue === "" && !isNumeric(inputValue)) {
        alert("Please Enter Proper Value!!")
    } else {
        let totalColor = parseInt(inputValue);
        generateColor(totalColor);
    }
}

function isNumeric(str) {
    return str.split('').every(char => !isNaN(char));
}

function generateColor(n) {
    for(let i = 0; i < n; i++) {

        let randomColorString = generateRandomColorString();

        let div = document.createElement("div");
        div.className = "color";
        
        let p = document.createElement("p");
        p.textContent = `#${randomColorString}`;
        p.style.color = "white"
        
        div.appendChild(p);
        div.style.backgroundColor = `#${randomColorString}`;
        
        mainColorDiv.appendChild(div)

    }
}

function generateRandomColorString() {
    let number = '0123456789';
    let alpha = 'abcdef';
    
    let charArray = (alpha + number).split('');
    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    return charArray.join('').slice(0, 6)
}