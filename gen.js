function bonnify() {

    deleteShit()

    document.body.style.backgroundImage = "url('unnamed.jpg')";
    document.body.style.backgroundSize = "100% 100%";


    let bonn = new Audio('josh-hutcherson-whistle-made-with-Voicemod.mp3');
    bonn.play();


}

function deleteShit() {

    let buttons = document.getElementById("top-buttons");
    buttons.style.display = "none";

    let head = document.getElementsByClassName("header");
    head.style.display = "none"

    let soun = document.getElementById("addSound");
    soun.style.display = "none";

    let soundboard = document.getElementById("soundboards");
    soundboard.style.display = "none";

    let soundbite = document.getElementById("soundbites");
    soundbite.style.display = "none"

    let int = document.getElementById("input")
    int.style.display = "none";

}