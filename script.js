function handleYes() {
    const response = document.getElementById('response');
    response.innerHTML = '🎉 Yay! You made my day! 💕';
    
    // Create floating hearts
    createFloatingHearts();
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const response = document.getElementById('response');
    
    // Change button text
    const responses = [
        'Are you sure? 🥺',
        'Please? 💝',
        'Pretty please? 🌹',
        'I promise to be sweet! 🍫',
        'Just say yes! 💖'
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    response.innerHTML = randomResponse;
    
    // Make the "No" button move around
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animation = 'float 3s ease-in-out';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
