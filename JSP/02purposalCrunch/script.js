const buttons = {
    love: document.querySelector('.love'),
    heaven: document.querySelector('.heaven'),
    this: document.querySelector('.this')
}

const musicTracks = [
    document.getElementById('music1'),
    document.getElementById('music2'),
    document.getElementById('music3'),
    document.getElementById('music4'),
    document.getElementById('music5')
];



const box = document.querySelector('.box');
const h2 = document.querySelector('h2')
const img = document.querySelector('.imge img')

const colorGenerator = () => {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
const loveLines = [
    "In a world full of choices, my heart chose you without thinking twice ❤️",
    "You are not just part of my life, you are the reason it feels beautiful ✨",
    "My heart feels at home whenever I think of you 🏡💖",
    "Loving you is the most natural thing my soul has ever done ❤️",
    "You are my peace in chaos and my calm in every storm 🌙",
    "My soul didn’t fall for you… it recognized you ♾️",
    "If love has a face, for me, it looks like you 💕",
    "Every heartbeat of mine quietly whispers you ❤️",
    "With you, even ordinary moments feel magical ✨",
    "You are the answer to prayers I never knew I made 🙏❤️",
    "I don’t need the world, as long as I have you 🌍💖",
    "Your love feels like the safest place I’ve ever known 🤍",
    "I didn’t find love… I found you ❤️",
    "You are the calm my heart was searching for all along 🌸",
    "In your smile, I see my forever 😊♾️",
    "You make my soul feel understood without words 💫",
    "My today is beautiful because you are in it ☀️",
    "If destiny is real, then you are mine by design ✨",
    "You turned my simple life into a beautiful story 📖💕",
    "With you, love feels effortless and real ❤️",
    "Your presence is my favorite comfort 🕊️",
    "I never believed in forever, until you came into my life ♾️",
    "You are not just special — you are my everything 💖",
    "My heart rests in the warmth of your love ❤️",
    "Even silence feels perfect when I’m with you 🌙",
    "You are the reason my heart believes in love 💕",
    "I don’t want a perfect life, I just want you beside me 🤍",
    "Every day with you feels like a blessing ✨",
    "You make my world softer, brighter, and kinder 🌸",
    "My heart found its home the day it found you 🏡❤️",
    "I see my dreams walking beside me when I see you 🌙",
    "Your love is the light that guides my heart ✨",
    "If love is a journey, I want to walk every step with you 👣",
    "You are the calm my soul was searching for 🌙💫",
    "I don’t just love you, I feel you in every part of me ❤️",
    "You make my heart feel safe, seen, and loved 🤍",
    "With you, forever doesn’t feel long enough ⏳💕",
    "Your love is the most beautiful chapter of my life 📖",
    "I found my happiness in your existence 😊",
    "You are the reason my heart smiles without a reason ❤️",
    "If I could choose again, I would choose you every time ♾️",
    "You are my comfort, my strength, my home 🏡💖",
    "Loving you feels like the purpose of my heart ❤️",
    "You are the calm after every storm in my life 🌧️✨",
    "My world feels complete when you are near 💕",
    "You didn’t just enter my life, you became its meaning ❤️",
    "In your love, I found the best version of myself 🌸",
    "You are the dream my heart never wants to wake from 🌙",
    "My forever begins and ends with you ♾️❤️",
    "I don’t just love you — I choose you every single day 💖",

    // Deep proposal lines
    "I don’t just want your love for a moment, I want your hand for a lifetime 💍",
    "I’m not asking for a perfect future… I’m asking for a forever with you ♾️❤️",
    "Let’s turn our love into a promise that time can never break ✨",
    "I want to grow old with the one who already feels like home 🏡",
    "My heart has made its decision — it belongs with you, always ❤️",
    "I don’t want a fairytale life, I just want a real life with you beside me 🤍",
    "If forever exists anywhere, I want it to begin with us 💕",
    "I choose you today, tomorrow, and for every lifetime after this ♾️",
    "Let’s make our love a journey that never ends 🌍❤️",
    "I’m ready to make you my always, my forever, my every beginning and every end 💖",

    // Emoji romantic set
    "In a world full of temporary things, my heart chose you forever ♾️💫",
    "Loving you feels like the most beautiful destiny of my soul ✨❤️",
    "With you, even silence feels warm and complete 🕊️💖",
    "My heart feels safe in a way it never knew before… because of you 🏡❤️",
    "Your presence turns my ordinary days into something magical ✨",
    "My forever begins the moment I think of you 💕",
    "If love has a home, mine is wherever you are 🏡💖",
    "I don’t want the world… I just want you in my world 🌍❤️",
    "My heart rests peacefully in the warmth of your love 🕊️💖",
    "Even my toughest days feel lighter because of you ☀️",
    "My soul recognized yours long before words ever did ✨❤️",

    // Cinematic lines
    "I don’t know what the future holds… but I know I want every tomorrow to begin with you ❤️🎬",
    "If life is a story, I want you to be my every chapter, every page, every ending and every beginning 📖✨",
    "I’m not promising a perfect life… I’m promising a heart that will never stop choosing you 💍❤️",
    "In every lifetime, in every world, my soul would still find its way to you ♾️🌙",
    "I don’t want a moment of love… I want a forever that grows old with you ⏳💕",
    "When everything feels uncertain, one thing is clear — my heart belongs with you, always ❤️",
    "Let’s not just fall in love… let’s build a forever that time can never break 🏡💫",
    "I don’t need a fairytale ending… I just need you beside me through every reality 🌍💕",
    "So here is my heart, my love, my forever — will you walk this life with me? 💖♾️"
];


const imageFiles = [];
for (let i = 2; i <= 652; i++) {
    imageFiles.push(`pic${i}.jpg`)
}



const getRandomLines = () => {
    return loveLines[Math.floor(Math.random() * loveLines.length)]
}

const getRandomImage = ()=>{
    let randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    return "images/"+randomImage;
}

const applyTheme = (color, button) => {
    h2.innerText = "“ " + getRandomLines() + " ”";
    h2.style.color = color;
    button.style.borderColor = color;
    box.style.boxShadow = `0 0 20px ${color}`;
    img.style.border = `10px solid ${color}`;
    img.src = getRandomImage();
};


buttons.love.addEventListener('click', () => {
    const color = colorGenerator();
    applyTheme(color, buttons.love)


    //stop any currently playing track.
    musicTracks.forEach((track) => {
        track.pause();
        track.currentTime = 0;
    });

    //pick a random music
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    randomTrack.play()

    //stop after 5 seconds
    setTimeout(() => {
        randomTrack.pause();
        randomTrack.currentTime = 0;
    }, 3000);
})

buttons.heaven.addEventListener('click', () => {
    const color = colorGenerator();
    applyTheme(color, buttons.heaven)

    //stop any currently playing track.
    musicTracks.forEach((track) => {
        track.pause();
        track.currentTime = 0;
    });

    //pick a random music
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    randomTrack.play()

    //stop after 5 seconds
    setTimeout(() => {
        randomTrack.pause();
        randomTrack.currentTime = 0;
    }, 3000);
})

buttons.this.addEventListener('click', () => {
    const color = colorGenerator();
    applyTheme(color, buttons.this)


    //stop any currently playing track.
    musicTracks.forEach((track) => {
        track.pause();
        track.currentTime = 0;
    });

    //pick a random music
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    randomTrack.play()

    //stop after 5 seconds
    setTimeout(() => {
        randomTrack.pause();
        randomTrack.currentTime = 0;
    }, 3000);
})