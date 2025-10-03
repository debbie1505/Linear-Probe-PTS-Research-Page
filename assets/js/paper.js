// Paper-specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize paper-specific features
    initializeCitationTools();
    initializeFigureNavigation();
    initializeSearchFunctionality();
    initializeProgressTracking();
});

// Citation tools
function initializeCitationTools() {
    // Add citation numbers to in-text citations
    const citations = document.querySelectorAll('[data-citation]');
    citations.forEach((citation, index) => {
        const citationNumber = index + 1;
        citation.innerHTML = `<sup><a href="#ref-${citationNumber}" class="citation-link">${citationNumber}</a></sup>`;
    });
    
    // Add reference anchors
    const references = document.querySelectorAll('.reference-item');
    references.forEach((ref, index) => {
        const refId = `ref-${index + 1}`;
        ref.id = refId;
    });
}

// Figure navigation
function initializeFigureNavigation() {
    const figures = document.querySelectorAll('figure');
    
    figures.forEach((figure, index) => {
        const figureNumber = index + 1;
        const caption = figure.querySelector('figcaption');
        
        if (caption) {
            caption.innerHTML = `<strong>Figure ${figureNumber}.</strong> ${caption.textContent}`;
        }
        
        // Add figure navigation
        const nav = document.createElement('div');
        nav.className = 'figure-nav';
        nav.innerHTML = `
            <button class="nav-btn prev-btn" ${index === 0 ? 'disabled' : ''} onclick="navigateFigure(${index - 1})">← Previous</button>
            <span class="figure-counter">Figure ${figureNumber} of ${figures.length}</span>
            <button class="nav-btn next-btn" ${index === figures.length - 1 ? 'disabled' : ''} onclick="navigateFigure(${index + 1})">Next →</button>
        `;
        
        figure.appendChild(nav);
    });
}

// Navigate between figures
window.navigateFigure = function(index) {
    const figures = document.querySelectorAll('figure');
    if (figures[index]) {
        figures[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// Search functionality
function initializeSearchFunctionality() {
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="paper-search" placeholder="Search paper content..." class="search-input">
        <button id="search-btn" class="search-btn">Search</button>
        <div id="search-results" class="search-results"></div>
    `;
    
    // Insert search after the paper header
    const paperHeader = document.querySelector('.paper-header');
    if (paperHeader) {
        paperHeader.appendChild(searchContainer);
    }
    
    // Search functionality
    const searchInput = document.getElementById('paper-search');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const content = document.querySelector('.paper-content');
        const text = content.textContent.toLowerCase();
        const results = [];
        
        // Simple text search
        let index = text.indexOf(query);
        while (index !== -1) {
            const context = text.substring(Math.max(0, index - 50), index + query.length + 50);
            results.push({
                context: context,
                position: index
            });
            index = text.indexOf(query, index + 1);
        }
        
        displaySearchResults(results, query);
    }
    
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
            return;
        }
        
        const resultsHTML = results.slice(0, 10).map((result, index) => `
            <div class="search-result" onclick="highlightSearchResult(${index})">
                <p>${result.context.replace(new RegExp(query, 'gi'), `<mark>$&</mark>`)}</p>
            </div>
        `).join('');
        
        searchResults.innerHTML = `
            <h4>Search Results (${results.length} found)</h4>
            ${resultsHTML}
        `;
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Highlight search results
window.highlightSearchResult = function(index) {
    const results = document.querySelectorAll('.search-result');
    if (results[index]) {
        results[index].scrollIntoView({ behavior: 'smooth' });
        results[index].style.backgroundColor = '#fff3cd';
        setTimeout(() => {
            results[index].style.backgroundColor = '';
        }, 2000);
    }
};

// Progress tracking
function initializeProgressTracking() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-bar"></div>';
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', updateProgress);
    
    function updateProgress() {
        const article = document.querySelector('.paper-content');
        if (!article) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const progress = Math.min(
            Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
            1
        );
        
        const progressBarElement = document.querySelector('.progress-bar');
        if (progressBarElement) {
            progressBarElement.style.width = `${progress * 100}%`;
        }
    }
}

// Add CSS for paper-specific features
const paperCSS = `
<style>
.search-container {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    border: 1px solid #e9ecef;
}

.search-input {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
}

.search-btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}

.search-btn:hover {
    background-color: #0056b3;
}

.search-results {
    margin-top: 1rem;
    max-height: 300px;
    overflow-y: auto;
}

.search-result {
    padding: 0.5rem;
    border-bottom: 1px solid #e9ecef;
    cursor: pointer;
}

.search-result:hover {
    background-color: #f8f9fa;
}

.search-result mark {
    background-color: #ffeb3b;
    padding: 0.1em 0.2em;
}

.figure-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
}

.nav-btn {
    padding: 0.25rem 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}

.nav-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.figure-counter {
    font-weight: 500;
    color: #495057;
}

.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #e9ecef;
    z-index: 1000;
}

.progress-bar {
    height: 100%;
    background-color: #007bff;
    width: 0%;
    transition: width 0.3s ease;
}

.citation-link {
    color: #007bff;
    text-decoration: none;
}

.citation-link:hover {
    text-decoration: underline;
}

@media print {
    .search-container,
    .figure-nav,
    .reading-progress {
        display: none;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', paperCSS);
