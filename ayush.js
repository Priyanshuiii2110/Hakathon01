// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Initialize page functionality
function initializePage() {
    setupSearchFunctionality();
    setupButtonInteractions();
    setupSmoothAnimations();
    setupGardenImageInteractions();
    setupPlantCards();
    setupPlantModal();
}
function openModal(plantId) {
    // Your logic to open the modal for the selected plant
    // e.g., document.getElementById(plantId + '-modal').style.display = 'block';
}
function downloadPlant(name) {
    alert("Downloading " + name + " data...");
  }
  function sharePlant(name) {
    alert("Sharing " + name);
  }
  function commentPlant(name) {
    alert("Commenting on " + name);
  }
// Search functionality
function setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchInput) {
        // Focus effect
        searchInput.addEventListener('focus', function() {
            searchIcon.style.color = '#4CAF50';
        });
        
        searchInput.addEventListener('blur', function() {
            searchIcon.style.color = '#999';
        });
        
        // Search functionality
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            performSearch(searchTerm);
        });
        
        // Enter key search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(e.target.value.toLowerCase());
            }
        });
    }
}

// Perform search
function performSearch(searchTerm) {
    console.log('Searching for:', searchTerm);
    
    if (searchTerm.length > 0) {
        showSearchResults(searchTerm);
    } else {
        hideSearchResults();
    }
}

// Show search results (placeholder)
function showSearchResults(searchTerm) {
    let resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            max-height: 300px;
            overflow-y: auto;
        `;
        document.querySelector('.search-container').appendChild(resultsContainer);
    }
    
    const herbs = [
        'Tulsi (Holy Basil)',
        'Ashwagandha',
        'Turmeric',
        'Cinnamon',
        'Cardamom',
        'Clove',
        'Ginger',
        'Mint',
        'Lavender',
        'Rosemary'
    ];
    
    const filteredHerbs = herbs.filter(herb => 
        herb.toLowerCase().includes(searchTerm)
    );
    
    resultsContainer.innerHTML = filteredHerbs.map(herb => 
        `<div class="search-result-item" onclick="selectHerb('${herb}')">
            <i class="fas fa-leaf"></i>
            <span>${herb}</span>
        </div>`
    ).join('');
    
    const style = document.createElement('style');
    style.textContent = `
        .search-result-item {
            padding: 12px 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: background-color 0.2s ease;
        }
        .search-result-item:hover {
            background-color: #f5f5f5;
        }
        .search-result-item i {
            color: #4CAF50;
        }
    `;
    document.head.appendChild(style);
}

// Hide search results
function hideSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.remove();
    }
}

// Select herb from search
function selectHerb(herbName) {
    console.log('Selected herb:', herbName);
    alert(`You selected: ${herbName}`);
    hideSearchResults();
}

// Button interactions
function setupButtonInteractions() {
    // Filter button
    const filterBtn = document.querySelector('.btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            showFilterOptions();
        });
    }
    
    // Quiz button
    const quizBtn = document.querySelector('.btn-quiz');
    if (quizBtn) {
        quizBtn.addEventListener('click', function() {
            startQuiz();
        });
    }
    
    // Get Started button
    const getStartedBtn = document.querySelector('.btn-primary');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            navigateToExplore();
        });
    }
    
    // Chat icon
    const chatIcon = document.querySelector('.chat-icon');
    if (chatIcon) {
        chatIcon.addEventListener('click', function() {
            openChat();
        });
    }
    
    // Profile icon
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            openProfile();
        });
    }
}

// Show filter options
function showFilterOptions() {
    const filterOptions = [
        'Medicinal Properties',
        'Growing Season',
        'Climate Zone',
        'Plant Type',
        'Difficulty Level'
    ];
    
    const filterModal = createModal('Filter Options', filterOptions);
    document.body.appendChild(filterModal);
}

// Start quiz
function startQuiz() {
    const quizQuestions = [
        'What type of herbal remedy are you looking for?',
        'What is your experience level with herbs?',
        'What climate do you live in?'
    ];
    
    const quizModal = createModal('Herbal Quiz', quizQuestions);
    document.body.appendChild(quizModal);
}

// Navigate to explore page
function navigateToExplore() {
    console.log('Navigating to explore page...');
    showNotification('Welcome to the Virtual Herbal Garden!', 'success');
}

// Open chat
function openChat() {
    showNotification('Chat feature coming soon!', 'info');
}

// Open profile
function openProfile() {
    showNotification('Profile feature coming soon!', 'info');
}

// Create modal
function createModal(title, options) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    modalContent.innerHTML = `
        <h3 style="margin-bottom: 20px; color: #4CAF50;">${title}</h3>
        ${options.map(option => `
            <div class="modal-option" style="
                padding: 12px;
                margin: 8px 0;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            " onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='white'">
                ${option}
            </div>
        `).join('')}
        <button onclick="this.closest('.modal').remove()" style="
            margin-top: 20px;
            padding: 10px 20px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        ">Close</button>
    `;
    
    modal.appendChild(modalContent);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    return modal;
}

// Smooth animations
function setupSmoothAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.hero-content, .hero-illustration');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Garden image interactions
function setupGardenImageInteractions() {
    const gardenImage = document.querySelector('.herbal-garden-image');
    
    if (gardenImage) {
        gardenImage.addEventListener('click', function() {
            showGardenInfo();
        });
        
        gardenImage.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    }
}

// Show garden information
function showGardenInfo() {
    showNotification('Welcome to our Virtual Herbal Garden! Explore the natural healing properties of medicinal plants.', 'success');
}

// Plant Cards Data
const plantData = [
    {
        id: 'tulsi',
        name: 'Tulsi',
        classification: 'Herb',
        image: 'images/Tulsi.jpg',
        model3d: 'models/tulsi.glb',
        description: 'Tulsi, also known as holy basil, is a revered plant in Ayurveda known for its healing properties.',
        region: 'Tropical',
        type: 'Herb',
        habitat: 'Tropical, Subtropical'
    },
    {
        id: 'ashwagandha',
        name: 'Ashwagandha',
        classification: 'Herb',
        image: 'images/Ashwagandha.jpeg',
        model3d: 'models/Ahwagandha.glb',
        description: 'Ashwagandha is an ancient medicinal herb that has been used for thousands of years in Ayurvedic medicine.',
        region: 'Arid',
        type: 'Herb',
        habitat: 'Dry, Arid regions'
    },
    {
        id: 'turmeric',
        name: 'Turmeric',
        classification: 'Rhizome',
        image: 'images/turmeric.jpg',
        model3d: 'models/Turmeric.glb',
        description: 'Turmeric is a bright yellow-orange spice that has been used for centuries in traditional medicine.',
        region: 'Tropical',
        type: 'Rhizome',
        habitat: 'Warm, Humid climates'
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon',
        classification: 'Tree',
        image: 'images/cinnamon.jpeg',
        model3d: 'models/Cinnamon.glb',
        description: 'Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum.',
        region: 'Tropical',
        type: 'Tree',
        habitat: 'Tropical climates'
    },
    {
        id: 'cardamom',
        name: 'Cardamom',
        classification: 'Herb',
        image: 'images/Cardamom.jpg',
        model3d: 'models/Cardamom.glb',
        description: 'Cardamom is a spice made from the seeds of several plants in the genera Elettaria and Amomum.',
        region: 'Tropical',
        type: 'Herb',
        habitat: 'Tropical, Subtropical'
    },
    {
        id: 'clove',
        name: 'Clove',
        classification: 'Tree',
        image: 'images/clove.jpg',
        model3d: 'models/clove.glb',
        description: 'Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum.',
        region: 'Tropical',
        type: 'Tree',
        habitat: 'Tropical climates'
    }
];

// Setup Plant Cards
function setupPlantCards() {
    const plantGrid = document.getElementById('plant-grid');
    if (!plantGrid) return;

    // Generate plant cards
    plantData.forEach(plant => {
        const card = createPlantCard(plant);
        plantGrid.appendChild(card);
    });

    // Setup search functionality
    const searchInput = document.getElementById('plant-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterPlants(this.value.toLowerCase());
        });
    }
}

// Create Plant Card
function createPlantCard(plant) {
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.setAttribute('data-plant-id', plant.id);
    
    card.innerHTML = `
        <div class="plant-image">
            <img src="${plant.image}" alt="${plant.name}">
        </div>
        <div class="plant-card-content">
            <h3 class="plant-name">${plant.name}</h3>
            <p class="plant-classification">${plant.classification}</p>
            <div class="plant-actions">
                <button class="action-btn bookmark-btn" title="Bookmark">
                    <i class="fas fa-bookmark"></i>
                </button>
                <button class="action-btn share-btn" title="Share">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
    `;

    // Add click event to open modal
    card.addEventListener('click', function() {
        openPlantModal(plant);
    });

    // Add bookmark functionality
    const bookmarkBtn = card.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleBookmark(this, plant.id);
    });

    // Add share functionality
    const shareBtn = card.querySelector('.share-btn');
    shareBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sharePlant(plant);
    });

    return card;
}

// Filter Plants
function filterPlants(searchTerm) {
    const cards = document.querySelectorAll('.plant-card');
    
    cards.forEach(card => {
        const plantName = card.querySelector('.plant-name').textContent.toLowerCase();
        const plantClassification = card.querySelector('.plant-classification').textContent.toLowerCase();
        
        if (plantName.includes(searchTerm) || plantClassification.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle Bookmark
function toggleBookmark(button, plantId) {
    button.classList.toggle('active');
    const isBookmarked = button.classList.contains('active');
    
    if (isBookmarked) {
        showNotification(`${plantId} added to bookmarks!`, 'success');
    } else {
        showNotification(`${plantId} removed from bookmarks!`, 'info');
    }
}

// Share Plant
function sharePlant(plant) {
    const shareData = {
        title: `Check out ${plant.name}`,
        text: `Learn about ${plant.name} - ${plant.description}`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`Check out ${plant.name} - ${plant.description}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
}

// Setup Plant Modal
function setupPlantModal() {
    const modal = document.getElementById('plant-modal');
    const closeBtn = document.getElementById('close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closePlantModal();
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePlantModal();
            }
        });
    }

    setupAudioPlayer();
}

// Open Plant Modal
function openPlantModal(plant) {
    const modal = document.getElementById('plant-modal');
    const modalName = document.getElementById('modal-plant-name');
    const modalImage = document.getElementById('modal-plant-image');
    const modal3dModel = document.getElementById('modal-3d-model');
    const modalDescription = document.getElementById('modal-plant-description');
    const modalRegion = document.getElementById('modal-plant-region');
    const modalType = document.getElementById('modal-plant-type');
    const modalHabitat = document.getElementById('modal-plant-habitat');

    if (modal && modalName && modalImage && modal3dModel) {
        modalName.textContent = plant.name;
        modalImage.src = plant.image;
        modal3dModel.src = plant.model3d;
        modalDescription.textContent = plant.description;
        modalRegion.textContent = plant.region;
        modalType.textContent = plant.type;
        modalHabitat.textContent = plant.habitat;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Plant Modal
function closePlantModal() {
    const modal = document.getElementById('plant-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Setup Audio Player
function setupAudioPlayer() {
    const playBtn = document.querySelector('.play-btn');
    const progressFill = document.querySelector('.progress-fill');
    const timeDisplay = document.querySelector('.time-display');

    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                simulateAudioPlayback(progressFill, timeDisplay);
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                clearInterval(window.audioInterval);
            }
        });
    }
}

// Simulate Audio Playback
function simulateAudioPlayback(progressFill, timeDisplay) {
    let progress = 0;
    const duration = 39;
    
    window.audioInterval = setInterval(() => {
        progress += 1;
        const percentage = (progress / duration) * 100;
        progressFill.style.width = percentage + '%';
        
        const currentTime = Math.floor(progress);
        timeDisplay.textContent = `${Math.floor(currentTime / 60)}:${(currentTime % 60).toString().padStart(2, '0')} / 0:39`;
        
        if (progress >= duration) {
            clearInterval(window.audioInterval);
            const playBtn = document.querySelector('.play-btn i');
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
            progressFill.style.width = '0%';
            timeDisplay.textContent = '0:00 / 0:39';
        }
    }, 1000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10001;
        animation: slideIn 0.3s ease;
    `;
    
    const colors = {
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FF9800',
        error: '#F44336'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Export functions for global access
window.selectHerb = selectHerb; 