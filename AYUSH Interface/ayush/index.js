const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
        }
    });
});

// Observe all plant cards
document.querySelectorAll('.plant-card').forEach(card => {
    observer.observe(card);
});

const searchInput = document.querySelector('.search-bar input');
const gardenContainer = document.querySelector('.garden-container');

// Create floating particles
const particlesContainer = document.querySelector('.floating-particles');
const orbsContainer = document.querySelector('.glow-orbs');

// Create particles
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `orbFloat ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`;
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particlesContainer.appendChild(particle);
}

// Create glowing orbs
for (let i = 0; i < 5; i++) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    orb.style.width = `${100 + Math.random() * 200}px`;
    orb.style.height = orb.style.width;
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animation = `orbFloat ${15 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 5}s`;
    orbsContainer.appendChild(orb);
}

// Add click handlers for like buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    if (btn.querySelector('.fa-heart')) {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const likesCount = this.querySelector('.likes-count');
            const currentLikes = parseInt(likesCount.textContent);
            
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                icon.style.color = '#2ecc71';
                likesCount.textContent = currentLikes + 1;
            } else {
                icon.classList.replace('fas', 'far');
                icon.style.color = '';
                likesCount.textContent = currentLikes - 1;
            }
        });
    }
});