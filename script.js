const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

// Sample search data - this should be replaced with a proper backend API
const searchDatabase = {
    'youtube': {
        alternatives: [
            'https://peertube.social',
            'https://odysee.com',
            'https://lbry.tv',
            'https://vid.puffyan.us',
            'https://vid.piracy.moe'
        ]
    },
    'twitter': {
        alternatives: [
            'https://mastodon.social',
            'https://lemmy.ml',
            'https://friendica.social',
            'https://pleroma.social',
            'https://gab.com'
        ]
    },
    'facebook': {
        alternatives: [
            'https://mastodon.social',
            'https://lemmy.ml',
            'https://diaspora.software',
            'https://friendica.social',
            'https://pleroma.social'
        ]
    },
    'google': {
        alternatives: [
            'https://duckduckgo.com',
            'https://searx.me',
            'https://startpage.com',
            'https://qwant.com',
            'https://ecosia.org'
        ]
    },
    'reddit': {
        alternatives: [
            'https://lemmy.ml',
            'https://reddit.com',
            'https://v.redd.it',
            'https://voat.co',
            'https://libreddit.net'
        ]
    },
    'instagram': {
        alternatives: [
            'https://pixelfed.social',
            'https://friendica.social',
            'https://mastodon.social',
            'https://lemmy.ml',
            'https://gab.com'
        ]
    },
    'tiktok': {
        alternatives: [
            'https://pixelfed.social',
            'https://peertube.social',
            'https://odysee.com',
            'https://lbry.tv',
            'https://vid.puffyan.us'
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
    
    // Add loading state
    resultsContainer.innerHTML = `
        <div class="result-item">
            <p>Loading alternatives...</p>
        </div>
    `;

    // Show results after a small delay
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="result-item">
                <div class="alternative-links">
                    ${alternatives.map(url => `
                        <a href="${url}" class="alternative-link" target="_blank">${new URL(url).hostname}</a>
                    `).join('')}
                </div>
            </div>
        `;
    }, 300);
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
