// write func that triggers sound URL based on keydown and click events
// func play() => {
//     onclick && keydown of specific key play sound
//         ?log to console the name of the key triggered?
//     }

function play(str) {
    // document.querySelector("#display").innerHTML = "weasel";
    if (str === "q" || str === "Q") {
        document.querySelector("#display").innerHTML = "tack";
    } else if (str === "w" || str === "W") {
        document.querySelector("#display").innerHTML = "teck";
    } else if (str === "e" || str === "E") {
        document.querySelector("#display").innerHTML = "tick";
    } else if (str === "a" || str === "A") {
        document.querySelector("#display").innerHTML = "boop";
    } else if (str === "s" || str === "S") {
        document.querySelector("#display").innerHTML = "boooooop";
    } else if (str === "d" || str === "D") {
        document.querySelector("#display").innerHTML = "boooooob";
    } else if (str === "z" || str === "Z") {
        document.querySelector("#display").innerHTML = "baap";
    } else if (str === "x" || str === "X") {
        document.querySelector("#display").innerHTML = "bing";
    } else if (str === "c" || str === "C") {
        document.querySelector("#display").innerHTML = "dub";
    }
    // console.log(str)
    let audio = document.getElementById(str);   // won't work with querySelector?   // 
    audio.play();
}

window.document.onkeyup = function(event) {
    // console.log(event.key);
    let keyBoardKeys = event.key
    if (keyBoardKeys === "q" || keyBoardKeys === "Q") {
        play("Q");
    } else if (keyBoardKeys === "w" || keyBoardKeys === "W") {
        play("W");
    } else if (keyBoardKeys === "e" || keyBoardKeys === "E") {
        play("E");
    } else if (keyBoardKeys === "a" || keyBoardKeys === "A") {
        play("A");
    } else if (keyBoardKeys === "s" || keyBoardKeys === "S") {
        play("S");
    } else if (keyBoardKeys === "d" || keyBoardKeys === "D") {
        play("D");
    } else if (keyBoardKeys === "z" || keyBoardKeys === "Z") {
        play("Z");
    } else if (keyBoardKeys === "x" || keyBoardKeys === "X") {
        play("X");
    } else if (keyBoardKeys === "c" || keyBoardKeys === "C") {
        play("C");
    }
}


/* can refactor to an object representing the 9 required elems as keys:
    keyname: name, keytrigger: keyboard "Q", display: str name, url: sampleSoundURL
    
const drumPadLogic = [
    {
        name: someName,
        keytrigger: "Q",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "W",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "E",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "A",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "S",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "D",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "Z",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "X",
        display: "sound clip name",
        url: "www.someURL.com",
    },
    {
        name: someName,
        keytrigger: "C",
        display: "sound clip name",
        url: "www.someURL.com",
    }
];

can also refactor event listeners to be less obtrusive:

<input type="text" name="date" id="date" />

window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('date').addEventListener("change", validateDate);
});
*/

