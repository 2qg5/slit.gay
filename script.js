const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

// Sample search data - this should be replaced with a proper backend API
const searchDatabase = {
    'youtube': {
        alternatives: [
            'https://y2mate.ltd',
            'https://ddownr.com/enab/youtube-video-downloader',
            'https://yout.com',
            'https://cobalt.tools',
            'https://www.socialplug.io/free-tools/youtube-video-downloader'
        ]
    },
    'twitter': {
        alternatives: [
            'https://twdown.net',
            'https://twittervideodownloader.com',
            'https://dlpanda.com/twitter',
            'https://pikaso.me'
        ]
    },
    'facebook': {
        alternatives: [
            'https://fdown.net/',
            'https://snapsave.app/',
            'https://dlpanda.com/facebook',
            'https://snapvid.net/en/facebook-downloader'
        ]
    },
    'reddit': {
        alternatives: [
            'https://rapidsave.com',
            'https://viddit.red',
            'https://savemp4.red/',
            'https://ripsave.com',
            'https://redvid.io'
        ]
    },
    'instagram': {
        alternatives: [
            'https://storiesig.info/en/',
            'https://downloadgram.org',
            'https://snapinsta.to',
            'https://igram.world',
            'https://indown.io'
        ]
    },
    'tiktok': {
        alternatives: [
            'https://snaptik.app',
            'https://ssstik.io/',
            'https://ttdownloader.com/',
            'https://tikmate.cc'
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
