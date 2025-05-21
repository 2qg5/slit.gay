const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

const searchDatabase = {
  youtube: {
    alternatives: [
      'https://y2mate.ltd',
      'https://ddownr.com/enab/youtube-video-downloader',
      'https://yout.com',
      'https://cobalt.tools',
      'https://www.socialplug.io/free-tools/youtube-video-downloader'
    ]
  },
  twitter: {
    alternatives: [
      'https://twdown.net',
      'https://twittervideodownloader.com',
      'https://dlpanda.com/twitter',
      'https://pikaso.me'
    ]
  },
  x: {
    alternatives: [
      'https://twdown.net',
      'https://twittervideodownloader.com',
      'https://dlpanda.com/twitter',
      'https://pikaso.me'
    ]
  },
  facebook: {
    alternatives: [
      'https://fdown.net/',
      'https://snapsave.app/',
      'https://dlpanda.com/facebook',
      'https://snapvid.net/en/facebook-downloader'
    ]
  },
  reddit: {
    alternatives: [
      'https://rapidsave.com',
      'https://viddit.red',
      'https://savemp4.red/',
      'https://ripsave.com',
      'https://redvid.io'
    ]
  }
};

function displayResults(siteKey) {
  const site = searchDatabase[siteKey.toLowerCase()];
  if (!site) {
    resultsContainer.innerHTML = `<p>Looks like there are no matches for "${siteKey}".</p>`;
  } else {
    resultsContainer.innerHTML = site.alternatives.map(link => `
      <div class="result-item">
        <a class="result-link" href="${link}" target="_blank">${link}</a>
      </div>
    `).join('');
  }
  resultsContainer.style.display = 'block';
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (query) displayResults(query);
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchButton.click();
  }
});
