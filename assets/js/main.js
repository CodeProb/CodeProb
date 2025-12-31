/**
 * CodeProb - Main JavaScript Module
 * Handles general site functionality and utilities
 */

(function () {
    'use strict';

    // Main application object
    const CodeProb = {
        // Initialize the application
        init: function () {
            this.setupNavigation();
            this.setupFilters();
            this.setupAccessibility();
            this.setupProfileLinking(); // Existing call
            // Initialize Community Dashboard
            if (document.querySelector('.community-dashboard')) {
                this.setupCommunityDashboard();
            }
        },

        // Setup navigation functionality
        setupNavigation: function () {
            // Highlight current page in navigation
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-link');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && currentPath.includes(href.replace('/', ''))) {
                    link.classList.add('nav-link--active');
                }
            });
        },

        // Setup content filtering functionality
        setupFilters: function () {
            const filterSelects = document.querySelectorAll('.content-filters select');

            filterSelects.forEach(select => {
                select.addEventListener('change', this.handleFilterChange.bind(this));
            });
        },

        // Handle filter changes
        handleFilterChange: function (event) {
            const filterType = event.target.id;
            const filterValue = event.target.value;

            // Get all content items
            const contentItems = document.querySelectorAll('.content-item');

            contentItems.forEach(item => {
                const shouldShow = this.itemMatchesFilters(item);
                item.style.display = shouldShow ? 'block' : 'none';
            });
        },

        // Check if content item matches current filters
        itemMatchesFilters: function (item) {
            const filters = this.getCurrentFilters();

            // Check each active filter
            for (const [filterType, filterValue] of Object.entries(filters)) {
                if (!filterValue) continue; // Skip empty filters

                const itemValue = item.dataset[filterType];
                if (!itemValue || !itemValue.includes(filterValue)) {
                    return false;
                }
            }

            return true;
        },

        // Get current filter values
        getCurrentFilters: function () {
            const filters = {};
            const filterSelects = document.querySelectorAll('.content-filters select');

            filterSelects.forEach(select => {
                const filterName = select.id.replace('-filter', '');
                filters[filterName] = select.value;
            });

            return filters;
        },

        // Setup accessibility features
        setupAccessibility: function () {
            // Add keyboard navigation for cards
            const cards = document.querySelectorAll('.category-card, .content-item');

            cards.forEach(card => {
                const link = card.querySelector('a');
                if (link) {
                    card.setAttribute('tabindex', '0');
                    card.setAttribute('role', 'button');

                    card.addEventListener('keydown', function (e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            link.click();
                        }
                    });
                }
            });
        },

        // Utility function to format dates
        formatDate: function (dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        // Utility function to create content item HTML
        createContentItemHTML: function (item, type) {
            const metadata = this.getMetadataHTML(item, type);

            // Determine the correct path based on current location
            const currentPath = window.location.pathname;
            let linkPath = `${type}/${item.filename}`;
            if (currentPath.includes('/problems/') || currentPath.includes('/concepts/') || currentPath.includes('/articles/')) {
                linkPath = `../${type}/${item.filename}`;
            }

            return `
                <div class="content-item" data-type="${type}" ${this.getDataAttributes(item, type)}>
                    <h3><a href="${linkPath}">${item.title}</a></h3>
                    <div class="content-metadata">
                        ${metadata}
                    </div>
                    <p>${item.description || 'No description available.'}</p>
                </div>
            `;
        },

        // Generate metadata HTML based on content type
        getMetadataHTML: function (item, type) {
            const metadata = [];

            switch (type) {
                case 'problems':
                    metadata.push(`<span class="difficulty">${item.difficulty}</span>`);
                    if (item.topics && item.topics.length > 0) {
                        metadata.push(`<span class="topics">${item.topics.join(', ')}</span>`);
                    }
                    break;

                case 'concepts':
                    metadata.push(`<span class="category">${item.category}</span>`);
                    metadata.push(`<span class="complexity">${item.complexity}</span>`);
                    break;

                case 'articles':
                    metadata.push(`<span class="author">${item.author}</span>`);
                    if (item.tags && item.tags.length > 0) {
                        metadata.push(`<span class="tags">${item.tags.join(', ')}</span>`);
                    }
                    break;
            }

            metadata.push(`<span class="date">${this.formatDate(item.dateAdded)}</span>`);

            return metadata.join('');
        },

        // Generate data attributes for filtering
        getDataAttributes: function (item, type) {
            const attributes = [];

            switch (type) {
                case 'problems':
                    attributes.push(`data-difficulty="${item.difficulty}"`);
                    if (item.topics) {
                        attributes.push(`data-topic="${item.topics.join(' ')}"`);
                    }
                    break;

                case 'concepts':
                    attributes.push(`data-category="${item.category}"`);
                    attributes.push(`data-complexity="${item.complexity}"`);
                    break;

                case 'articles':
                    attributes.push(`data-author="${item.author}"`);
                    if (item.tags) {
                        attributes.push(`data-tag="${item.tags.join(' ')}"`);
                    }
                    break;
            }

            return attributes.join(' ');
        },

        // Setup profile linking for static pages
        setupProfileLinking: async function () {
            try {
                // Determine path to profiles.json based on location
                let prefix = './';
                const mainScript = document.querySelector('script[src*="assets/js/main.js"]');
                if (mainScript) {
                    const src = mainScript.getAttribute('src');
                    prefix = src.replace('assets/js/main.js', '');
                }

                const response = await fetch(`${prefix}profiles.json`);
                if (!response.ok) return;

                const data = await response.json();
                const validProfiles = data.profiles; // Array of {username, displayName}

                if (!validProfiles || validProfiles.length === 0) return;

                // Link Author names in Metadata
                // Selectors for different contexts (Article header, list items)
                const authorElements = document.querySelectorAll('.metadata .author, .content-metadata .author');

                authorElements.forEach(el => {
                    const authorName = el.textContent.trim();
                    // Check against Display Name or Username
                    const profile = validProfiles.find(p => p.displayName === authorName || p.username === authorName);

                    if (profile) {
                        // Avoid double wrapping
                        if (el.querySelector('a')) return;
                        el.innerHTML = `<a href="${prefix}profiles/${profile.username}/index.html" class="profile-link" style="color: inherit; text-decoration: underline;">${authorName}</a>`;
                    }
                });

            } catch (e) {
                console.warn('Profile linking skipped:', e);
            }
        },

        // Setup Community Dashboard (Contributors & Activity)
        setupCommunityDashboard: function () {
            const contributorsList = document.getElementById('contributors-list');
            const activityFeed = document.getElementById('activity-feed');

            if (!contributorsList || !activityFeed) return;

            // Determine path handling similar to profile linking
            let prefix = './';
            const mainScript = document.querySelector('script[src*="assets/js/main.js"]');
            if (mainScript) {
                const src = mainScript.getAttribute('src');
                prefix = src.replace('assets/js/main.js', '');
            }

            // Fetch Data concurrently
            Promise.all([
                fetch(`${prefix}profiles.json`).then(r => r.json()).catch(() => ({ profiles: [] })),
                fetch(`${prefix}contributor-config.json`).then(r => r.json()).catch(() => ({ content: {} }))
            ]).then(([profilesData, contentData]) => {
                this.renderContributors(profilesData.profiles, contributorsList, prefix);
                this.renderActivity(contentData.content, activityFeed, prefix);
            });
        },

        renderContributors: function (profiles, container, prefix) {
            if (!profiles || profiles.length === 0) {
                container.innerHTML = '<div class="empty-state">No contributors yet. Be the first!</div>';
                return;
            }

            const html = profiles.map(profile => {
                // Simplified Design: Always use Initials in a Circle
                // Generate initials from Display Name (e.g. "John Doe" -> "JD")
                const initials = profile.displayName
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2);

                return `
                    <a href="${prefix}profiles/${profile.username}/index.html" class="contributor-card" title="${profile.displayName}">
                        <div class="contributor-avatar">
                            ${initials}
                        </div>
                    </a>
                `;
            }).join('');

            container.innerHTML = html;
        },

        renderActivity: function (content, container, prefix) {
            const activities = [];

            // Flatten content
            if (content.problems) content.problems.forEach(i => activities.push({ ...i, type: 'Problem', typeIcon: '🧩', url: `${prefix}problems/${i.filename}` }));
            if (content.concepts) content.concepts.forEach(i => activities.push({ ...i, type: 'Concept', typeIcon: '📚', url: `${prefix}concepts/${i.filename}` }));
            if (content.articles) content.articles.forEach(i => activities.push({ ...i, type: 'Article', typeIcon: '✍️', url: `${prefix}articles/${i.filename}` }));

            // Sort by Date (Desc)
            activities.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

            // Take top 20
            const recent = activities.slice(0, 20);

            if (recent.length === 0) {
                container.innerHTML = '<div class="empty-state">No recent activity.</div>';
                return;
            }

            const html = recent.map(item => `
                <div class="activity-card">
                    <div class="activity-icon">${item.typeIcon}</div>
                    <div class="activity-content">
                        <div class="activity-header">
                            <span class="activity-date" style="color:var(--text-muted); font-size: 0.8em; margin-right:5px;">${new Date(item.dateAdded).toLocaleDateString()}</span>
                            ${item.type} by <strong>${item.author}</strong>
                        </div>
                        <a href="${item.url}" class="activity-title">${item.title}</a>
                        <div class="activity-meta">
                            ${this.getDescriptionPreview(item)}
                        </div>
                    </div>
                </div>
            `).join('');

            container.innerHTML = html;
        },

        getDescriptionPreview: function (item) {
            if (item.difficulty) return `Difficulty: ${item.difficulty} • Topics: ${item.topics ? item.topics.join(', ') : 'General'}`;
            if (item.category) return `Category: ${item.category} • Complexity: ${item.complexity}`;
            if (item.tags) return `Tags: ${item.tags.join(', ')}`;
            return '';
        }
    };

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        CodeProb.init();
    });

    // Make CodeProb available globally
    window.CodeProb = CodeProb;

})();