// Main JavaScript for Research Paper Site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Print functionality
    window.printPaper = function() {
        window.print();
    };
    
    // Share functionality
    window.sharePaper = function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Check out this research paper',
                url: window.location.href
            });
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('URL copied to clipboard!');
            });
        }
    };
    
    // Copy citation functionality
    window.copyCitation = function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const text = element.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const button = element.nextElementSibling;
                if (button) {
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    button.style.backgroundColor = '#28a745';
                    button.style.color = 'white';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 2000);
                }
            });
        }
    };
    
    // Table of Contents generation
    generateTableOfContents();
    
    // Initialize tooltips for figures
    initializeFigureTooltips();
});

// Generate table of contents
function generateTableOfContents() {
    const content = document.querySelector('.paper-content');
    if (!content) return;
    
    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) return;
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.className = `toc-${heading.tagName.toLowerCase()}`;
        
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.className = 'toc-link';
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // Insert TOC after the first paragraph or at the beginning
    const firstElement = content.querySelector('p, h2');
    if (firstElement) {
        content.insertBefore(toc, firstElement);
    } else {
        content.insertBefore(toc, content.firstChild);
    }
}

// Initialize figure tooltips
function initializeFigureTooltips() {
    const figures = document.querySelectorAll('figure');
    
    figures.forEach(figure => {
        const img = figure.querySelector('img');
        if (img) {
            img.addEventListener('click', function() {
                openImageModal(this.src, this.alt);
            });
        }
    });
}

// Open image in modal
function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${src}" alt="${alt}">
            <div class="modal-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }
}

// Add CSS for modal and TOC
const additionalCSS = `
<style>
.table-of-contents {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
}

.table-of-contents h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.table-of-contents ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.table-of-contents li {
    margin-bottom: 0.25rem;
}

.table-of-contents .toc-h3 {
    padding-left: 1rem;
}

.table-of-contents .toc-link {
    color: #007bff;
    text-decoration: none;
    font-size: 0.9rem;
}

.table-of-contents .toc-link:hover {
    text-decoration: underline;
}

.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.modal-close {
    position: absolute;
    top: -30px;
    right: 0;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10001;
}

.modal-content img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 0.5rem;
}

.modal-caption {
    color: white;
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy.loaded {
    opacity: 1;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalCSS);
