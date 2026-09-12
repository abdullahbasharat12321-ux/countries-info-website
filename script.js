// Get DOM elements
const countriesGrid = document.getElementById('countriesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('countryModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

let currentFilter = 'all';
let filteredCountries = [...COUNTRIES_DATA];

// Initialize the app
function init() {
    renderCountries(COUNTRIES_DATA);
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filteredCountries = COUNTRIES_DATA.filter(country =>
            country.name.toLowerCase().includes(searchTerm) ||
            country.capital.toLowerCase().includes(searchTerm)
        );
        renderCountries(filteredCountries);
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterCountries();
        });
    });

    // Modal close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Filter countries based on selected filter
function filterCountries() {
    let filtered = [...COUNTRIES_DATA];
    const searchTerm = searchInput.value.toLowerCase();

    filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm) ||
        country.capital.toLowerCase().includes(searchTerm)
    );

    if (currentFilter === 'economy') {
        filtered.sort((a, b) => b.gdp - a.gdp);
    } else if (currentFilter === 'population') {
        filtered.sort((a, b) => b.population - a.population);
    }

    renderCountries(filtered);
}

// Render countries grid
function renderCountries(countries) {
    if (countries.length === 0) {
        countriesGrid.innerHTML = `
            <div class="no-results">
                <span class="no-results-emoji">🌍</span>
                <p>No countries found. Try adjusting your search!</p>
            </div>
        `;
        return;
    }

    countriesGrid.innerHTML = countries.map((country, index) => `
        <div class="country-card" style="animation-delay: ${index * 0.1}s" onclick="openCountryModal('${country.code}')">
            <div class="flag">${country.flag}</div>
            <h3 class="country-name">${country.name}</h3>
            <div class="country-info">
                <div class="info-item">
                    <span class="info-label">Capital</span>
                    <span class="info-value">${country.capital}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Population</span>
                    <span class="info-value">${formatNumber(country.population)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">GDP (USD)</span>
                    <span class="info-value">$${formatNumber(country.gdp)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Birth Rate</span>
                    <span class="info-value">${country.birthRate}%</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Death Rate</span>
                    <span class="info-value">${country.deathRate}%</span>
                </div>
            </div>
            <span class="ranking-badge">🏆 Rank #${country.ranking}</span>
        </div>
    `).join('');
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Open country modal
function openCountryModal(countryCode) {
    const country = COUNTRIES_DATA.find(c => c.code === countryCode);
    if (!country) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-flag">${country.flag}</div>
            <h2 class="modal-title">${country.name}</h2>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">📍 Basic Information</h3>
            <div class="modal-section-content">
                <div class="detail-item">
                    <div class="detail-label">Capital</div>
                    <div class="detail-value">${country.capital}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Region</div>
                    <div class="detail-value">${country.region}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Area</div>
                    <div class="detail-value">${formatNumber(country.area)} km²</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Language</div>
                    <div class="detail-value">${country.language}</div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">👥 Demographics</h3>
            <div class="modal-section-content">
                <div class="detail-item">
                    <div class="detail-label">Population</div>
                    <div class="detail-value">${formatNumber(country.population)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Population Density</div>
                    <div class="detail-value">${country.populationDensity} per km²</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Birth Rate</div>
                    <div class="detail-value">${country.birthRate}%</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Death Rate</div>
                    <div class="detail-value">${country.deathRate}%</div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">💰 Economy</h3>
            <div class="modal-section-content">
                <div class="detail-item">
                    <div class="detail-label">GDP</div>
                    <div class="detail-value">$${formatNumber(country.gdp)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">GDP per Capita</div>
                    <div class="detail-value">$${formatNumber(country.gdpPerCapita)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Currency</div>
                    <div class="detail-value">${country.currency}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Unemployment Rate</div>
                    <div class="detail-value">${country.unemploymentRate}%</div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">🌟 Global Importance & Ranking</h3>
            <div class="detail-item">
                <div class="detail-label">World Ranking</div>
                <div class="detail-value">#${country.ranking}</div>
            </div>
            <div class="importance-text">
                <strong>Importance to the World:</strong>
                <p style="margin-top: 10px;">${country.importance}</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize app on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}