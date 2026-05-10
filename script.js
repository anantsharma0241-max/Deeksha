const yesBtn =
document.getElementById('yes-btn');

const noBtn =
document.getElementById('no-btn');

const celebrationBox =
document.getElementById('celebration-box');

const confirmBtn =
document.getElementById('confirm-btn');

const roastMessages = [

    "Jhooth bol rahi ho 😭",

    "Mummy ko bataun? 😏",

    "Soch lo dobara 😂",

    "Dil tod diya 💔",

    "Favorite toh main hi hoon 😎"
];

let roastIndex = 0;

noBtn.addEventListener('click', () => {

    noBtn.innerText =
        roastMessages[roastIndex];

    roastIndex++;

    if (roastIndex >= roastMessages.length) {

        roastIndex = 0;
    }

    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 200 - 100;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', () => {

    document.body.style.background =
        "linear-gradient(to right, #ffd6e0, #ffeaa7)";

    celebrationBox.classList.remove('hidden');

    yesBtn.style.display = "none";

    noBtn.style.display = "none";
});

confirmBtn.addEventListener('click', () => {

    const choice =
        document.getElementById('treat-choice').value;

    const msg =

`Oye bhai 😭❤️

Maine officially maan liya ki tu mera favorite bhai hai 🏆

Treat fixed:
${choice} 😎🔥`;

    window.open(

`https://wa.me/917249971152?text=${encodeURIComponent(msg)}`,

'_blank'
    );
});