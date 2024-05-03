function bonnify() {


    document.body.style.backgroundImage = "url('bonn.jpg')";
    document.body.style.backgroundSize = "100% 100%";


    let bonn = new Audio('josh-hutcherson-whistle-made-with-Voicemod.mp3');
    bonn.play();


}
function monkeyify() {
    document.body.style.backgroundImage = "url('monkey.jpg')";
    document.body.style.backgroundSize = "100% 100%";


    let monkey = new Audio('Caesar says no.mp3');
    monkey.play();

}

function upload() {

    let fileName = ""
    let files = []

    const getFileName = (event) => {
        files = event.target.files;
        fileName = files[0].name;
        console.log("file name: ", fileName)
    }


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "audio/mpeg");

    const file = files[0];

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: file,
    redirect: "follow"
    };

    fetch("https://ghsdi7jahb.execute-api.us-east-1.amazonaws.com/dev/swmg-bocket/${fileName}", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}