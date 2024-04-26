let callAPI = ()=>{

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({"ID":"2"});

    let requestOptions = {

        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'

    };

    fetch("https://0news8eew2.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
    .then(response => response.text())
    .then(result => testSound(result))
    .catch(error => console.log('error', error));

}

function displayLink(res) {

    let body = document.getElementById("body");

    let p = document.createElement("p");
    p.textContent = stripLink(res);
    body.appendChild(p);

}

function testSound(link) {

    let newLink = stripLink(link)
    console.log('test')

    let audio = new Audio();
    audio.play(newLink);

}

function stripLink(link) {

    const data = JSON.parse(link);

    if (data.body) {

        const body = JSON.parse(data.body);

        if (body.Item && body.Item['S3 Bucket Address']) {

            return body.Item['S3 Bucket Address'];

        } else {

            return "Does not exist";

        }

    } else {

        return "Body doesn't exist"

    }

}


function displayBoards() {

    document.getElementById("soundboards").style.display = "inline";

}

function hideBoards() {

    document.getElementById("soundboards").style.display = "none";

}

function displayBites() {

    document.getElementById("soundbites").style.display = "inline";

}

function hideBites() {

    document.getElementById("soundbites").style.display = "none";

}

function createTable(w, h) {

    const boards = document.getElementById("soundboards"),
        tabl = document.createElement('table');
    
    for (let i = 0; i < w; i++) {

        const tr = tabl.insertRow();
        for (let j = 0; j < h; j++) {

            const td = tr.insertCell();
            let button = document.createElement('button');
            button.textContent = "Sound";
            button.classList.add("sound_button${j}");
            button.addEventListener("click", playSound)
            td.appendChild(button);

        }

    }

    const brk = document.createElement('br');

    boards.appendChild(tabl)
    boards.appendChild(brk)

    // for naming, there will be a counter (or a getNumTables() method) in the java that will assign 'n' for soundboard{n} naming convention.


}

function addSoundboard() {

    let div = document.getElementById('addSound');
    let widForm = document.createElement('form');
    let heiForm = document.createElement('form');
    

    
}

function playSound() {

    let audio = new Audio('EXTREMELY LOUD INCORRECT BUZZER.mp3');
    audio.play();

}

function playMonkeySound() {

    let audio = new Audio('Caesar says no.mp3');
    audio.play();

}
