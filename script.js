// Matrix rain effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "LAURA PHONE MIAMI BRICKELL SHOPIFY INDECISIVE TEXT CALL OTHER GUYS";
const matrixArray = matrix.split(" ");

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Decision tree logic
const scenarios = {
    start: {
        question: "Should I text you back right now or in 3-5 business days?",
        now: "tooMuchComm",
        later: "ghosting"
    },
    tooMuchComm: {
        question: "Wait, you want me to communicate MORE? But you text paragraphs!",
        now: "emojiDebate",
        later: "phoneBusy"
    },
    ghosting: {
        question: "Oh so now you're fine with me being on the phone with my other guys?",
        now: "jealous",
        later: "shopifyTime"
    },
    emojiDebate: {
        question: "Should I use emojis or will you judge my emoji choices? 🤔",
        now: "miamiPlans",
        later: "indecisive"
    },
    phoneBusy: {
        question: "Can't text rn, on a 3-hour call about which Brickell brunch spot to hit. Help me decide?",
        now: "brunchDebate",
        later: "stillDeciding"
    },
    jealous: {
        question: "Are you jealous of my phone? It gets more attention than you 😂",
        now: "apologize",
        later: "shopifyTime"
    },
    shopifyTime: {
        question: "New Shopify order just came in! Should I ship it today or procrastinate?",
        now: "productive",
        later: "netflixTime"
    },
    miamiPlans: {
        question: "Wanna come to Miami? Or is that too much commitment for you?",
        now: "booking",
        later: "typical"
    },
    indecisive: {
        question: "I can't decide over all my guys , just considering all options thoroughly...",
        now: "philosophical",
        later: "start"
    },
    brunchDebate: {
        question: "Should we get bottomless mimosas or is that too basic?",
        now: "basic",
        later: "sophisticated"
    },
    stillDeciding: {
        question: "Still thinking... Should I keep thinking or just pick something?",
        now: "start",
        later: "indecisive"
    },
    apologize: {
        question: "Fine, I'll put my phone down... after this one last call. Deal?",
        now: "lies",
        later: "honest"
    },
    productive: {
        question: "Look at me being productive! Should I celebrate or keep working?",
        now: "celebrate",
        later: "grind"
    },
    netflixTime: {
        question: "Netflix and procrastinate? I have 47 shows to catch up on...",
        now: "binge",
        later: "responsible"
    },
    booking: {
        question: "Great! But first, let me call 17 people to see if this weekend works...",
        now: "typical",
        later: "efficient"
    },
    typical: {
        question: "This is why I need better communication from you! Try again?",
        now: "start",
        later: "start"
    },
    philosophical: {
        question: "Is anyone truly decisive? Or are we all just pretending? 🤯",
        now: "deep",
        later: "start"
    },
    basic: {
        question: "Basic is my middle name! Laura Basic Brickell. Like it?",
        now: "love",
        later: "meh"
    },
    sophisticated: {
        question: "You're right, let's get overpriced coffee instead. $47 lattes?",
        now: "bougie",
        later: "reasonable"
    },
    lies: {
        question: "You know I'm lying right? This phone is surgically attached to my hand.",
        now: "honest",
        later: "denial"
    },
    honest: {
        question: "At least I'm honest about my phone addiction! Points for that?",
        now: "points",
        later: "noPoints"
    },
    grind: {
        question: "Shopify grind never stops! Unless... should it stop?",
        now: "workLife",
        later: "hustle"
    },
    binge: {
        question: "13 hours of Netflix later... was that productive procrastination?",
        now: "yes",
        later: "no"
    },
    responsible: {
        question: "Who are you and what did you do with indecisive Laura?",
        now: "evolved",
        later: "sameMe"
    },
    efficient: {
        question: "Efficient? Me? Must be the Miami heat getting to you...",
        now: "start",
        later: "start"
    },
    deep: {
        question: "Too deep! Quick, make a shallow decision: Pizza or sushi?",
        now: "both",
        later: "neither"
    },
    love: {
        question: "You love it? Finally, a decision we agree on! Text me about it?",
        now: "start",
        later: "start"
    },
    meh: {
        question: "Meh? Your communication style is showing again...",
        now: "start",
        later: "start"
    },
    bougie: {
        question: "Bougie and proud! Brickell lifestyle baby! 💅",
        now: "start",
        later: "start"
    },
    reasonable: {
        question: "Reasonable? That's not very Miami of you...",
        now: "start",
        later: "start"
    },
    denial: {
        question: "I can quit anytime! *receives 73 notifications* Hold that thought...",
        now: "start",
        later: "start"
    },
    points: {
        question: "Points awarded! Your total: 1. My other guys: 847. Keep trying?",
        now: "start",
        later: "start"
    },
    noPoints: {
        question: "No points? This is why I don't text back immediately...",
        now: "start",
        later: "start"
    },
    workLife: {
        question: "Work-life balance? In this economy? In Miami? Be serious.",
        now: "start",
        later: "start"
    },
    hustle: {
        question: "Hustle mode activated! But first, let me take this call...",
        now: "start",
        later: "start"
    },
    yes: {
        question: "You get it! Procrastination is an art form. Wanna procrastinate together?",
        now: "start",
        later: "start"
    },
    no: {
        question: "Don't judge my process! Speaking of... should I judge yours?",
        now: "start",
        later: "start"
    },
    evolved: {
        question: "I've evolved! Into an even more indecisive version with better merch.",
        now: "start",
        later: "start"
    },
    sameMe: {
        question: "Same me, just with more Shopify orders and phone calls!",
        now: "start",
        later: "start"
    },
    both: {
        question: "Both? You're learning my indecisive ways! I'm so proud 🥲",
        now: "start",
        later: "start"
    },
    neither: {
        question: "Neither? Now who's being indecisive? 🤔",
        now: "start",
        later: "start"
    }
};

let currentScenario = 'start';

function makeDecision(choice) {
    const scenario = scenarios[currentScenario];
    const notification = document.getElementById('notification');
    
    // Show notification
    notification.style.display = 'block';
    notification.innerHTML = `<p>*Phone rings*</p><p style="font-size: 12px; margin-top: 10px;">BRB, someone's calling...</p>`;
    
    setTimeout(() => {
        notification.style.display = 'none';
        
        // Update to next scenario
        currentScenario = scenario[choice] || 'start';
        const nextScenario = scenarios[currentScenario];
        document.getElementById('question').textContent = nextScenario.question;
        
        // Random updates
        updateRandomElements();
    }, 2000);
}

function updateRandomElements() {
    // Update other guys counter
    document.getElementById('other-guys').textContent = Math.floor(Math.random() * 50) + 10;
    
    // Update battery (always low because always on phone)
    document.getElementById('battery').textContent = `🔋 ${Math.floor(Math.random() * 15) + 1}%`;
    
    // Update time
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    document.getElementById('time').textContent = `${hours}:${minutes.toString().padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`;
}

// Initial random updates
updateRandomElements();
setInterval(updateRandomElements, 10000);

// Window resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Make makeDecision function globally accessible
window.makeDecision = makeDecision; 