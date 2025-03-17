/**
 * Teacher Tools Intranet - Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (currentPage === linkHref || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Ensure all categories are visible when the page first loads
    // This makes sure the "All Tools" view works correctly from the beginning
    toggleCategory('all');

    // Placeholder for future authentication functionality
    const authPlaceholder = document.querySelector('.auth-placeholder');
    if (authPlaceholder) {
        authPlaceholder.addEventListener('click', function() {
            alert('Authentication system coming soon!');
        });
    }

    // Tool card click handling
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        const cardAction = card.querySelector('.tool-card-action');
        if (cardAction.getAttribute('href') === '#') {
            cardAction.addEventListener('click', function(e) {
                e.preventDefault();
                const toolName = card.querySelector('.tool-card-header').textContent;
                alert(`The tool "${toolName}" will be available soon!`);
            });
        }
    });
});

// Function to toggle tool sections by category
function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    
    if (categoryId === 'all') {
        categories.forEach(cat => {
            cat.style.display = 'block';
        });
    } else {
        categories.forEach(cat => {
            if (cat.id === categoryId) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    }
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === categoryId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Placeholder for future tool embedding functionality
function loadTool(toolId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '<div class="loading">Loading tool...</div>';
    
    // This will be replaced with actual tool loading code in the future
    setTimeout(() => {
        container.innerHTML = `<div class="tool-message">Tool ${toolId} loaded successfully!</div>`;
    }, 1500);
}