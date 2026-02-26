// Quiz Data
const quizData = {
    general: [
        { question: "What is the capital of Pakistan?", opt1: "Karachi", opt2: "Lahore", opt3: "Islamabad", opt4: "Peshawar", correct: "Islamabad" },
        { question: "Who is the founder of Pakistan?", opt1: "Allama Iqbal", opt2: "Quaid-e-Azam", opt3: "Liaquat Ali Khan", opt4: "Fatima Jinnah", correct: "Quaid-e-Azam" },
        { question: "Which is the national flower of Pakistan?", opt1: "Rose", opt2: "Jasmine", opt3: "Lily", opt4: "Tulip", correct: "Jasmine" },
        { question: "Which is the national bird of Pakistan?", opt1: "Eagle", opt2: "Parrot", opt3: "Chakor", opt4: "Peacock", correct: "Chakor" },
        { question: "What is the national game of Pakistan?", opt1: "Cricket", opt2: "Football", opt3: "Hockey", opt4: "Squash", correct: "Hockey" },
        { question: "Which city is known as the 'City of Lights'?", opt1: "Lahore", opt2: "Islamabad", opt3: "Karachi", opt4: "Multan", correct: "Karachi" },
        { question: "Who wrote the national anthem of Pakistan?", opt1: "Allama Iqbal", opt2: "Hafeez Jalandhari", opt3: "Faiz Ahmed Faiz", opt4: "Josh Malihabadi", correct: "Hafeez Jalandhari" },
        { question: "Which is the highest mountain peak in Pakistan?", opt1: "Nanga Parbat", opt2: "K2", opt3: "Broad Peak", opt4: "Rakaposhi", correct: "K2" },
        { question: "Which is the longest river in Pakistan?", opt1: "Ravi", opt2: "Chenab", opt3: "Indus", opt4: "Jhelum", correct: "Indus" },
        { question: "How many provinces are there in Pakistan?", opt1: "3", opt2: "4", opt3: "5", opt4: "6", correct: "4" }
    ],
    web: [
        { question: "What does HTML stand for?", opt1: "Hyperlinks and Text Markup Language", opt2: "Hyper Text Markup Language", opt3: "Home Tool Markup Language", opt4: "Hyper Text Machine Language", correct: "Hyper Text Markup Language" },
        { question: "What does CSS stand for?", opt1: "Colorful Style Sheets", opt2: "Creative Style Sheets", opt3: "Cascading Style Sheets", opt4: "Computer Style Sheets", correct: "Cascading Style Sheets" },
        { question: "Which HTML tag is used to define an internal style sheet?", opt1: "<css>", opt2: "<script>", opt3: "<style>", opt4: "<span>", correct: "<style>" },
        { question: "Which is the correct CSS syntax?", opt1: "{body:color=black;}", opt2: "body {color: black;}", opt3: "body:color=black;", opt4: "{body;color:black;}", correct: "body {color: black;}" },
        { question: "How do you insert a comment in a CSS file?", opt1: "// this is a comment", opt2: "/* this is a comment */", opt3: "' this is a comment", opt4: "// this is a comment //", correct: "/* this is a comment */" },
        { question: "Which property is used to change the background color?", opt1: "color", opt2: "bgcolor", opt3: "background-color", opt4: "canvas-color", correct: "background-color" },
        { question: "Which HTML attribute is used to define inline styles?", opt1: "styles", opt2: "font", opt3: "class", opt4: "style", correct: "style" },
        { question: "Which property is used to change the text color of an element?", opt1: "fgcolor", opt2: "text-color", opt3: "color", opt4: "font-color", correct: "color" },
        { question: "Which CSS property controls the text size?", opt1: "font-style", opt2: "text-size", opt3: "font-size", opt4: "text-style", correct: "font-size" },
        { question: "How do you display hyperlinks without an underline?", opt1: "a {text-decoration:none;}", opt2: "a {underline:none;}", opt3: "a {text-decoration:no-underline;}", opt4: "a {decoration:no-underline;}", correct: "a {text-decoration:none;}" }
    ],
    math: [
        { question: "What is 5 + 7?", opt1: "10", opt2: "11", opt3: "12", opt4: "13", correct: "12" },
        { question: "What is 15 - 9?", opt1: "5", opt2: "6", opt3: "7", opt4: "8", correct: "6" },
        { question: "What is 8 x 4?", opt1: "28", opt2: "30", opt3: "32", opt4: "34", correct: "32" },
        { question: "What is 81 / 9?", opt1: "7", opt2: "8", opt3: "9", opt4: "10", correct: "9" },
        { question: "What is the square root of 64?", opt1: "6", opt2: "7", opt3: "8", opt4: "9", correct: "8" },
        { question: "What is 12 x 12?", opt1: "124", opt2: "134", opt3: "144", opt4: "154", correct: "144" },
        { question: "What is 100 - 45?", opt1: "45", opt2: "55", opt3: "65", opt4: "75", correct: "55" },
        { question: "What is 7 x 6?", opt1: "42", opt2: "44", opt3: "46", opt4: "48", correct: "42" },
        { question: "What is 20% of 150?", opt1: "20", opt2: "25", opt3: "30", opt4: "35", correct: "30" },
        { question: "What is 2 to the power of 5?", opt1: "16", opt2: "25", opt3: "32", opt4: "64", correct: "32" }
    ],
    iq: [
        { question: "Which number comes next in the series: 2, 4, 8, 16, ...?", opt1: "20", opt2: "24", opt3: "30", opt4: "32", correct: "32" },
        { question: "If 'BOOK' is 43, what is 'PEN'?", opt1: "30", opt2: "35", opt3: "40", opt4: "45", correct: "35" },
        { question: "Which is the odd one out?", opt1: "Apple", opt2: "Banana", opt3: "Carrot", opt4: "Orange", correct: "Carrot" },
        { question: "If Friday is the 4th day of the month, what day is the 11th?", opt1: "Thursday", opt2: "Friday", opt3: "Saturday", opt4: "Sunday", correct: "Friday" },
        { question: "Find the missing number: 1, 4, 9, 16, ?, 36", opt1: "20", opt2: "24", opt3: "25", opt4: "30", correct: "25" }
    ],
    quran: [
        { question: "How many Surahs are in the Holy Quran?", opt1: "110", opt2: "114", opt3: "120", opt4: "124", correct: "114" },
        { question: "Which is the longest Surah in the Quran?", opt1: "Al-Imran", opt2: "Al-Nisa", opt3: "Al-Baqarah", opt4: "Al-Maida", correct: "Al-Baqarah" },
        { question: "Which Surah is known as the 'Heart of the Quran'?", opt1: "Surah Rahman", opt2: "Surah Yasin", opt3: "Surah Fatiha", opt4: "Surah Ikhlas", correct: "Surah Yasin" },
        { question: "How many Para (Juz) are there in the Quran?", opt1: "20", opt2: "25", opt3: "30", opt4: "35", correct: "30" },
        { question: "In which month was the Quran first revealed?", opt1: "Muharram", opt2: "Rajab", opt3: "Ramadan", opt4: "Shaban", correct: "Ramadan" }
    ],
    islamic: [
        { question: "Who was the first Prophet of Allah?", opt1: "Prophet Nuh (AS)", opt2: "Prophet Ibrahim (AS)", opt3: "Prophet Adam (AS)", opt4: "Prophet Musa (AS)", correct: "Prophet Adam (AS)" },
        { question: "What is the first pillar of Islam?", opt1: "Salah", opt2: "Shahadah", opt3: "Zakat", opt4: "Sawm", correct: "Shahadah" },
        { question: "Which city is the birthplace of Prophet Muhammad (SAW)?", opt1: "Madina", opt2: "Makkah", opt3: "Taif", opt4: "Jeddah", correct: "Makkah" },
        { question: "How many times is Salah mentioned in the Quran?", opt1: "500", opt2: "600", opt3: "700", opt4: "800", correct: "700" },
        { question: "Who was the first Caliph of Islam?", opt1: "Hazrat Umar (RA)", opt2: "Hazrat Abu Bakr (RA)", opt3: "Hazrat Usman (RA)", opt4: "Hazrat Ali (RA)", correct: "Hazrat Abu Bakr (RA)" }
    ]
};

const categoryIcons = {
    general: "🌍",
    web: "💻",
    math: "➗",
    iq: "🧠",
    quran: "📖",
    islamic: "🕌"
};

// Global Variables
let currentSet = [], currentIdx = 0, score = 0, timer, timeLeft = 360;
let studentName = "Guest";
let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];

// Create Animated Background Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (5 + Math.random() * 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.width = (2 + Math.random() * 6) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// SPRINKLE CONFETTI ANIMATION - CUTE AND COLORFUL
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create sprinkle particles
    const particles = [];
    const colors = [
        '#FFD700', // Gold
        '#FF6B6B', // Coral
        '#4ECDC4', // Turquoise
        '#45B7D1', // Sky Blue
        '#96CEB4', // Sage
        '#FFEAA7', // Cream
        '#D4A5A5', // Dusty Rose
        '#9B59B6', // Purple
        '#3498DB', // Blue
        '#E67E22'  // Orange
    ];

    // Create 200 small particles
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height, // Start above screen
            size: Math.random() * 6 + 2, // Small particles 2-8px
            speedY: Math.random() * 3 + 2, // Falling speed
            speedX: (Math.random() - 0.5) * 1.5, // Gentle sideways drift
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 2
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            
            // Draw different shapes for variety
            if (p.size > 5) {
                // Draw small stars for larger particles
                ctx.fillStyle = p.color;
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const angle = (i * 72 - 90) * Math.PI / 180;
                    const x = Math.cos(angle) * p.size;
                    const y = Math.sin(angle) * p.size;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();
            } else {
                // Draw circles for smaller particles
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }
            
            ctx.restore();
            
            // Update position
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            
            // Reset if off screen
            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
            if (p.x < 0 || p.x > canvas.width) {
                p.x = Math.random() * canvas.width;
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop after 5 seconds
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}


// Show Leaderboard
function showLeaderboard() {
    const modal = document.createElement('div');
    modal.className = 'leaderboard-modal';
    
    let leaderboardHTML = `
        <div class="leaderboard-content">
            <h2 class="leaderboard-title">🏆 LEADERBOARD</h2>
    `;
    
    if (leaderboard.length === 0) {
        leaderboardHTML += `<p style="color: #888; text-align: center;">No scores yet. Be the first!</p>`;
    } else {
        leaderboard.sort((a, b) => b.score - a.score).slice(0, 10).forEach((entry, index) => {
            const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
            leaderboardHTML += `
                <div class="leaderboard-item ${rankClass}" style="animation-delay: ${index * 0.1}s">
                    <div class="rank-badge">${index + 1}</div>
                    <div class="player-info">
                        <div class="player-name">${entry.name}</div>
                        <div class="player-score">Score: ${entry.score}/${entry.total} (${entry.percentage}%)</div>
                    </div>
                </div>
            `;
        });
    }
    
    leaderboardHTML += `<button class="close-btn" onclick="this.closest('.leaderboard-modal').remove()">Close</button></div>`;
    
    modal.innerHTML = leaderboardHTML;
    document.body.appendChild(modal);
}

// Welcome Sweet Alert
window.onload = function() {
    createParticles();
    
    Swal.fire({
        title: '<p style="font-size: 25px; margin-top: 5px;">🎯 Let’s Start the Quiz!',
        html: `<p style="font-size: 14px; margin-top: 5px;">Answer smart. Learn fast. Have fun!</p>`,
        background: '#0a0a0a',
        width: 400,
        padding: '20px',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' },
        confirmButtonText: '🚀 Start Quiz',
        confirmButtonColor: '#D4AF37',
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            showNameForm();
        }
    });
};

// Show Name Form
function showNameForm() {
    Swal.fire({
        title: '👤 Enter Your Name',
        html: `
            <input type="text" id="student-name" class="swal2-input" placeholder="Your name" autocomplete="off">
        `,
        background: '#0a0a0a',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#D4AF37',
        preConfirm: () => {
            const name = document.getElementById('student-name').value.trim();
            if (!name) {
                Swal.showValidationMessage('Please enter your name');
                return false;
            }
            return name;
        }
    }).then((result) => {
        if (result.value) {
            studentName = result.value;
            
            // Show profile
            document.getElementById('user-profile').classList.remove('hidden');
            document.getElementById('leaderboard-btn').classList.remove('hidden');
            document.getElementById('profile-name').textContent = studentName;
            document.getElementById('profile-avatar').textContent = studentName.charAt(0).toUpperCase();
            
            loadCategories();
        }
    });
}

// Load Categories
function loadCategories() {
    const grid = document.getElementById('category-grid');
    Object.keys(quizData).forEach(cat => {
        grid.innerHTML += `<div class="category-card" onclick="startQuiz('${cat}')">
            <h3>
                <div class="cat-icon">${categoryIcons[cat]}</div>
                <div class="cat-name">${cat.toUpperCase()}</div>
            </h3>
        </div>`;
    });
}

// Start Quiz
function startQuiz(cat) {
    Swal.fire({
        title: `📚 ${cat.toUpperCase()} QUIZ`,
        text: `You have 6 minutes to complete ${quizData[cat].length} questions`,
        icon: 'info',
        background: '#0a0a0a',
        confirmButtonColor: '#D4AF37',
        confirmButtonText: 'Start Now'
    }).then(() => {
        currentSet = quizData[cat];
        currentIdx = 0; score = 0; timeLeft = 360;
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');
        startTimer();
        showQuestion();
    });
}

// Show Question with Typing Effect
function showQuestion() {
    const q = currentSet[currentIdx];
    document.getElementById('progress').style.width = ((currentIdx + 1) / currentSet.length * 100) + "%";
    document.getElementById('q-counter').innerText = `Question ${currentIdx + 1}/${currentSet.length}`;
    
    document.getElementById('question-container').innerHTML = `
        <h2 class="typing-effect">${q.question}</h2>
        <div class="options-container">
            ${[q.opt1, q.opt2, q.opt3, q.opt4].map(opt => `
                <label class="option-label">
                    <input type="radio" name="opt" value="${opt}" style="display:none"> ${opt}
                </label>
            `).join('')}
        </div>
    `;
    
    document.getElementById('action-btn').innerText = "Submit Answer";
    document.getElementById('action-btn').onclick = validateAnswer;
}

// Validate Answer
function validateAnswer() {
    const selected = document.querySelector('input[name="opt"]:checked');
    if (!selected) {
        Swal.fire({
            title: '⚠️ Oops!',
            text: 'Please select an answer!',
            icon: 'warning',
            background: '#0a0a0a',
            confirmButtonColor: '#D4AF37',
            width: 280,
            padding: '12px'
        });
        return;
    }

    const q = currentSet[currentIdx];
    const isCorrect = selected.value === q.correct;
    if (isCorrect) score++;

    document.querySelectorAll('.option-label').forEach(label => {
        label.classList.add('disabled');
        const val = label.innerText.trim();
        if (val === q.correct) label.classList.add('correct');
        if (val === selected.value && !isCorrect) label.classList.add('wrong');
    });

    const btn = document.getElementById('action-btn');
    btn.innerText = (currentIdx === currentSet.length - 1) ? "Finish Quiz" : "Next Question";
    btn.onclick = () => {
        currentIdx++;
        currentIdx < currentSet.length ? showQuestion() : showResult();
    };
}

// Start Timer
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft/60), s = timeLeft%60;
        document.getElementById('timer').innerHTML = `⏳ ${m}:${s<10?'0':''}${s}`;
        if(timeLeft <= 0) {
            clearInterval(timer);
            Swal.fire({
                title: '⏰ Time\'s Up!',
                text: 'Quiz is automatically submitting...',
                icon: 'info',
                background: '#0a0a0a',
                confirmButtonColor: '#D4AF37',
                timer: 1500,
                showConfirmButton: false
            }).then(() => showResult());
        }
    }, 1000);
}

// Show Result
function showResult() {
    clearInterval(timer);
    const percent = Math.round((score / currentSet.length) * 100);
    const circumference = 565.48;
    const offset = circumference - (circumference * percent / 100);

    // Save to leaderboard
    leaderboard.push({
        name: studentName,
        score: score,
        total: currentSet.length,
        percentage: percent,
        date: new Date().toLocaleDateString()
    });
    
    // Keep only last 20 scores
    if (leaderboard.length > 20) {
        leaderboard = leaderboard.slice(-20);
    }
    
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));

    // Show confetti for high scores
    if (percent >= 80) {
        startConfetti();
    }

    document.getElementById('quiz-screen').innerHTML = `
        <div style="text-align:center" class="animate__animated animate__zoomIn">
            <h2 style="margin-bottom:15px; color:var(--gold); font-size:2rem;">🎉 CONGRATULATIONS! 🎉</h2>
            <p style="color:#888; margin-bottom:20px;">You have completed the assessment</p>
            
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#b88b1f;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#f7d560;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
            
            <div class="chart-container">
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle class="bg-circle" cx="100" cy="100" r="90"></circle>
                    <circle id="final-circle" class="score-circle" cx="100" cy="100" r="90" style="stroke-dashoffset:${circumference}"></circle>
                </svg>
                <div class="percentage-text">${percent}%</div>
            </div>
            
            <p style="font-size:1.3rem; margin:25px 0 15px;">Your Score: <span style="color:var(--gold); font-weight:800;">${score}</span> / ${currentSet.length}</p>
            <p style="color:#888; margin-bottom:30px;">${percent >= 80 ? '🌟 Excellent Performance!' : percent >= 60 ? '📚 Good Attempt!' : '💪 Keep Practicing!'}</p>
            <button onclick="restartPortal()" class="btn-next" style="max-width:250px; margin:0 auto;">🔄 Back to Categories</button>
        </div>
    `;
    
    setTimeout(() => {
        document.getElementById('final-circle').style.strokeDashoffset = offset;
    }, 100);
}

// Restart Portal
function restartPortal() {
    location.reload();
}