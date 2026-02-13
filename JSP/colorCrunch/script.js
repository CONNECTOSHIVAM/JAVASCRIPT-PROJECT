const yellowBtn = document.querySelector('.yellow');
const orangeBtn = document.querySelector('.orange');
const randomBtn = document.querySelector('.random');
const greenBtn = document.querySelector('.green');
const box = document.querySelector('.box');
const h2 = document.querySelector('h2');

const colorGenerator = () => {

    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

const lines = [
    "From the moment I met you, my heart knew it had found its home. Will you be mine forever?",
    "You are not just my love, you are my life. Will you marry me?",
    "I don’t want perfect days, I just want every day with you. Will you be my forever?",
    "My heart beats your name every second. Will you hold it for a lifetime?",
    "I found my happiness in you. Will you make it forever?",
    "I promise to love you in every moment, every season, every lifetime. Will you marry me?",
    "You are my today, my tomorrow, and my forever. Will you be mine?",
    "I don’t need the world, I just need you beside me. Will you marry me?",
    "My life started the day you came into it. Will you stay forever?",
    "I want to grow old laughing with you. Will you marry me?",
    "You are my dream come true. Now let’s make it forever. Will you be mine?",
    "I choose you today, tomorrow, and always. Will you marry me?",
    "My heart is incomplete without you. Will you complete my life?",
    "Every love story is beautiful, but I want ours to be endless. Will you marry me?",
    "You are the reason I believe in love. Will you be my forever?",
    "I don’t promise a perfect life, but I promise to love you perfectly. Will you marry me?",
    "With you, forever doesn’t feel long enough. Will you be mine?",
    "My heart has only one wish — you, forever. Will you marry me?",
    "I want to hold your hand through every phase of life. Will you marry me?",
    "You are my peace, my happiness, my everything. Will you be my life partner?",
    "I want every sunrise and sunset to be with you. Will you marry me?",
    "I never knew what forever meant until I met you. Will you be mine?",
    "My soul found its home in you. Will you marry me?",
    "I want to turn every moment into a lifetime with you. Will you be mine?",
    "You are my favorite person, my safe place, my love. Will you marry me?",
    "I promise to stand by you in every joy and every storm. Will you marry me?",
    "My future looks beautiful because you are in it. Will you be mine?",
    "I don’t want a life without you in it. Will you marry me?",
    "You are the best decision my heart ever made. Will you be my forever?",
    "I want to love you more with every passing year. Will you marry me?",
    "My heart chose you long ago. Today, I’m just asking you to choose me too.",
    "You are the reason my life feels complete. Will you marry me?",
    "I want to write the rest of my life story with you.",
    "With you, I found love, peace, and home. Will you be mine forever?",
    "I want to wake up every day knowing you are mine. Will you marry me?",
    "My world begins and ends with you. Will you be my life partner?",
    "I promise to love you endlessly and unconditionally. Will you marry me?",
    "I want to build a life full of love and memories with you.",
    "You are the missing piece of my forever. Will you marry me?",
    "I want your hand in mine for the rest of my life.",
    "My heart belongs to you — today, tomorrow, always. Will you marry me?",
    "You are my once-in-a-lifetime love. Will you be mine forever?",
    "I want to turn our love into a lifetime promise.",
    "You are my dream, my love, my forever. Will you marry me?",
    "I don’t just want you now, I want you always.",
    "My love for you grows every day. Let it grow forever — marry me?",
    "I promise to make you smile for the rest of your life.",
    "You are my heart’s favorite person. Will you be my forever?",
    "I want to spend every chapter of life with you.",
    "You + Me + Forever — Will you marry me?"
]


yellowBtn.addEventListener('click', () => {
    let randomlines = lines[Math.floor(Math.random() * lines.length)];
    h2.innerText = randomlines +  '❤️';
    box.style.backgroundColor = '#E5BA41';
    yellowBtn.style.color = '#E5BA41';
})


orangeBtn.addEventListener('click', () => {
    const randomlines = lines[Math.floor(Math.random() * lines.length)];
    h2.innerText = randomlines + '❤️';
    box.style.backgroundColor = '#F16D34';
    orangeBtn.style.color = '#F16D34';
})

randomBtn.addEventListener('click', () => {
    const randomlines = lines[Math.floor(Math.random() * lines.length)];
    h2.innerText = randomlines + '❤️';
    const randomColor = colorGenerator();
    box.style.backgroundColor = randomColor;
    randomBtn.style.color = randomColor;
})

greenBtn.addEventListener('click', () => {
    const randomlines = lines[Math.floor(Math.random() * lines.length)];
    h2.innerText = randomlines + '❤️';
    box.style.backgroundColor = '#F57799';
    greenBtn.style.color = '#F57799';
})