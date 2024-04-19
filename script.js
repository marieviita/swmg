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

    var audio = new Audio('EXTREMELY LOUD INCORRECT BUZZER.mp3');
    audio.play();

}
