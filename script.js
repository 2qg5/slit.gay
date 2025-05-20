const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

// Sample search data - this should be replaced with a proper backend API
const searchDatabase = {
    'youtube': {
        alternatives: [
            'https://peertube.social',
            'https://odysee.com',
            'https://lbry.tv'
        ]
    },
    'twitter': {
        alternatives: [
            'https://mastodon.social',
            'https://lemmy.ml',
            'https://friendica.social'
        ]
    },
    'facebook': {
        alternatives: [
            'https://mastodon.social',
            'https://lemmy.ml',
            'https://diaspora.software'
        ]
    },
    'google': {
        alternatives: [
            'https://duckduckgo.com',
            'https://searx.me',
            'https://startpage.com'
        ]
    }
};

function displayResults(query) {
    const queryLower = query.toLowerCase();
    const result = searchDatabase[queryLower];
    
    if (!result) {
        resultsContainer.innerHTML = `
            <div class="result-item">
                <p>No results found for "${query}"</p>
            </div>
        `;
        return;
    }

    const alternatives = result.alternatives;

    resultsContainer.innerHTML = `
        <div class="result-item">
            <div class="alternative-links">
                ${alternatives.map(url => `
                    <a href="${url}" class="alternative-link" target="_blank">${new URL(url).hostname}</a>
                `).join('<br>')}
            </div>
        </div>
    `;
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        displayResults(query);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            displayResults(query);
        }
    }
});
