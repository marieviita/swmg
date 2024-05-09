
let callAPI = (id)=>{

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({"ID":String(id)});

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
//hi naphin, this is jackson, no idea if any of this will work but i think this is a step in the right direciton
//we need to convert .mp3 files intp binary data, and upload it with a post request using the html within req.open POST
function uploadbinarymp3(id2) {
    const req = new XMLHttpRequest();
req.open("POST", 'https://ghsdi7jahb.execute-api.us-east-1.amazonaws.com/dev/swmg-bocket/placeholder.mp3', true);
req.onload = (event) => {
  // Uploaded
};

const blob = new Blob(['binary'], { type: "audio/mpeg" });

req.send(blob);
}

function audioToBase64(e) {	
    console.log("audioTOBase64 called");
    var create_url = 'https://ghsdi7jahb.execute-api.us-east-1.amazonaws.com/dev/swmg-bocket';

	var form = document.uploadFile;
	var segments = document.uploadFile.base64Encoding.value.split(",");
	var encodedContents = segments[1];
	console.log("here is the form for uploading" + form.actor);


	var data = {};
	data["encodedContents"] = encodedContents;
	

	var js = JSON.stringify(data);
	console.log("JS:" + js);
	var xhr = new XMLHttpRequest();

    xhr.open("PUT", create_url, true);
    xhr.setRequestHeader(
            'Content-type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.onload = function() {
          // Callback function (Error, response text)
          callback(null, this.responseText);
        }
       
        // Since the data is an object so
        // we need to stringify it
//    xhr.send(JSON.stringify(data));
	// send the collected data as JSON
	xhr.send(js);

	// This will process results and update HTML as appropriate. 
	

}

let uploadbinarymp32 = (mp3)=>{
    console.log("upload executed");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let base64 = audioToBase64(mp3);
    
    let requestOptions = {

        method: 'POST',
        headers: myHeaders,
        body: base64,
        redirect: 'follow'

    };
    fetch('https://ghsdi7jahb.execute-api.us-east-1.amazonaws.com/dev/swmg-bocket/placeholder.mp3', requestOptions)
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
    console.log(newLink)

    let audio = new Audio(newLink);
    audio.play();

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

document.addEventListener('keydown', function(event) {

    if (event.key === 'p') {

        callAPI(5);

    }

});
