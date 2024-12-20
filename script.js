let generateBtn = document.getElementById("submitButton")
let inputTag = document.getElementById("numOfColor")
let mainColorDiv = document.getElementById("main-div")
let alerts = document.querySelector(".alerts")

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

        let innerDiv = document.createElement("div");
        innerDiv.className = "svg";
        innerDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" fill="#fff"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>`
        innerDiv.onclick = () => {
            window.navigator.clipboard.writeText(`#${randomColorString}`);

            let innerAlertDiv = document.createElement("div");
            innerAlertDiv.className = "alert";

            let innerP = document.createElement("p");
            innerP.textContent = "Copied To Clipboard"

            innerAlertDiv.appendChild(innerP)
            alerts.innerHTML = "";
            alerts.prepend(innerAlertDiv)
            
            setTimeout(() => {
                let alertsDivs = document.querySelectorAll(".alert");
                alertsDivs.forEach((ele) => {
                    if (ele == innerAlertDiv) {
                        alerts.removeChild(ele)
                    }
                })
            }, 2000);
        }
        div.appendChild(p);
        div.appendChild(innerDiv);
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