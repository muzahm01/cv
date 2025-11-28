/**
 * CV Portfolio Website - Enhanced Navigation Script
 * Features: Section navigation, URL hash support, keyboard navigation, accessibility
 */

(function() {
    'use strict';

    // Constants
    const ACTIVE_CLASS = 'active';
    const DEFAULT_SECTION = 'introduction';
    const ANIMATION_DURATION = 500; // matches CSS animation

    // DOM Elements (cached for performance)
    let navLinks = [];
    let sections = [];
    let currentSection = DEFAULT_SECTION;

    /**
     * Initialize the application
     */
    function init() {
        // Ensure DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setup);
        } else {
            setup();
        }
    }

    /**
     * Setup function - called when DOM is ready
     */
    function setup() {
        try {
            // Cache DOM elements
            navLinks = Array.from(document.querySelectorAll('.nav-link'));
            sections = Array.from(document.querySelectorAll('section'));

            // Validate that we have the required elements
            if (navLinks.length === 0) {
                console.warn('No navigation links found. Navigation will not work.');
                return;
            }

            if (sections.length === 0) {
                console.warn('No sections found. Navigation will not work.');
                return;
            }

            // Setup event listeners
            setupNavigationListeners();
            setupKeyboardNavigation();
            setupHashNavigation();

            // Enhance DOM structure for modern styling
            enhanceDOM();

            // Handle initial section from URL hash or show default
            const initialSection = getHashSection() || DEFAULT_SECTION;
            showSection(initialSection);

        } catch (error) {
            console.error('Error initializing CV navigation:', error);
        }
    }

    /**
     * Enhance DOM structure for modern styling (Cards, Pills, etc.)
     */
    function enhanceDOM() {
        // 1. Experience Section: Wrap items in cards
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
            // Find all P tags (Company/Date) and UL tags (Details)
            const companies = Array.from(experienceSection.querySelectorAll('p'));
            
            companies.forEach(company => {
                const details = company.nextElementSibling;
                if (details && details.tagName === 'UL') {
                    // Create wrapper
                    const card = document.createElement('div');
                    card.className = 'experience-card';
                    
                    // Insert wrapper before company
                    company.parentNode.insertBefore(card, company);
                    
                    // Move elements into wrapper
                    card.appendChild(company);
                    card.appendChild(details);
                }
            });

            // Remove HRs in experience section as cards provide separation
            const hrs = experienceSection.querySelectorAll('hr');
            hrs.forEach(hr => hr.remove());
        }

        // 2. Skills Section: Convert DL/DT/DD to pills
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const dl = skillsSection.querySelector('dl');
            if (dl) {
                dl.classList.add('skills-grid');
                const dds = dl.querySelectorAll('dd');
                
                dds.forEach(dd => {
                    const text = dd.textContent;
                    // Split by comma, but handle potential lack of commas
                    const items = text.split(',').map(item => item.trim()).filter(item => item);
                    
                    // Clear current content
                    dd.innerHTML = '';
                    
                    // Create pills
                    const pillContainer = document.createElement('div');
                    pillContainer.className = 'pill-container';
                    
                    items.forEach(item => {
                        const pill = document.createElement('span');
                        pill.className = 'skill-pill';
                        pill.textContent = item;
                        pillContainer.appendChild(pill);
                    });
                    
                    dd.appendChild(pillContainer);
                });
            }
        }

        // 3. Education & Certifications: Grid Layout
        ['education', 'certifications', 'publications'].forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const ul = section.querySelector('ul');
                if (ul) {
                    ul.classList.add('card-grid');
                    
                    // For certifications, try to add icons based on content
                    if (id === 'certifications') {
                        const lis = ul.querySelectorAll('li');
                        lis.forEach(li => {
                            // Check for known keywords to add icons (optional enhancement)
                            if (li.textContent.includes('Docker')) {
                                li.classList.add('icon-docker');
                            } else if (li.textContent.includes('AI')) {
                                li.classList.add('icon-ai');
                            }
                        });
                    }
                }
            }
        });
    }

    /**
     * Setup click listeners for navigation links
     */
    function setupNavigationListeners() {
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    }

    /**
     * Handle navigation link clicks
     * @param {Event} event - Click event
     */
    function handleNavClick(event) {
        event.preventDefault();

        const sectionId = this.dataset.section;
        if (!sectionId) {
            console.warn('Navigation link missing data-section attribute');
            return;
        }

        showSection(sectionId);
        updateURL(sectionId);
    }

    /**
     * Setup keyboard navigation (Arrow keys, Enter, Space)
     */
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(event) {
            const activeLink = document.activeElement;

            // Check if a nav link is focused
            if (!activeLink || !activeLink.classList.contains('nav-link')) {
                return;
            }

            const currentIndex = navLinks.indexOf(activeLink);

            switch(event.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault();
                    focusPreviousLink(currentIndex);
                    break;

                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault();
                    focusNextLink(currentIndex);
                    break;

                case 'Home':
                    event.preventDefault();
                    if (navLinks.length > 0) {
                        navLinks[0].focus();
                    }
                    break;

                case 'End':
                    event.preventDefault();
                    if (navLinks.length > 0) {
                        navLinks[navLinks.length - 1].focus();
                    }
                    break;
            }
        });
    }

    /**
     * Focus previous navigation link
     * @param {number} currentIndex - Current link index
     */
    function focusPreviousLink(currentIndex) {
        if (currentIndex > 0) {
            navLinks[currentIndex - 1].focus();
        } else {
            // Wrap to last item
            navLinks[navLinks.length - 1].focus();
        }
    }

    /**
     * Focus next navigation link
     * @param {number} currentIndex - Current link index
     */
    function focusNextLink(currentIndex) {
        if (currentIndex < navLinks.length - 1) {
            navLinks[currentIndex + 1].focus();
        } else {
            // Wrap to first item
            navLinks[0].focus();
        }
    }

    /**
     * Setup URL hash navigation (deep linking and browser back/forward)
     */
    function setupHashNavigation() {
        window.addEventListener('hashchange', function() {
            const sectionId = getHashSection();
            if (sectionId) {
                showSection(sectionId);
            }
        });
    }

    /**
     * Get section ID from URL hash
     * @returns {string|null} Section ID or null
     */
    function getHashSection() {
        const hash = window.location.hash.slice(1); // Remove the '#'
        return hash || null;
    }

    /**
     * Update URL hash without triggering hashchange event
     * @param {string} sectionId - Section ID to set in URL
     */
    function updateURL(sectionId) {
        if (window.history && window.history.pushState) {
            // Use pushState to avoid triggering hashchange
            const newURL = window.location.pathname + '#' + sectionId;
            window.history.pushState({ section: sectionId }, '', newURL);
        } else {
            // Fallback for older browsers
            window.location.hash = sectionId;
        }
    }

    /**
     * Show a specific section and update navigation
     * @param {string} sectionId - ID of section to show
     */
    function showSection(sectionId) {
        // Validate section ID
        if (!sectionId) {
            console.warn('showSection called with invalid section ID');
            return;
        }

        // Find the target section
        const targetSection = document.getElementById(sectionId);

        if (!targetSection) {
            console.warn(`Section with ID "${sectionId}" not found. Falling back to default.`);
            if (sectionId !== DEFAULT_SECTION) {
                showSection(DEFAULT_SECTION);
            }
            return;
        }

        // Update sections visibility using document fragment for better performance
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add(ACTIVE_CLASS);
                // Set ARIA attributes for screen readers
                section.setAttribute('aria-hidden', 'false');
            } else {
                section.classList.remove(ACTIVE_CLASS);
                section.setAttribute('aria-hidden', 'true');
            }
        });

        // Update navigation links active state
        navLinks.forEach(link => {
            if (link.dataset.section === sectionId) {
                link.classList.add(ACTIVE_CLASS);
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove(ACTIVE_CLASS);
                link.removeAttribute('aria-current');
            }
        });

        // Update current section
        currentSection = sectionId;

        // Announce section change to screen readers
        announceToScreenReader(`Showing ${sectionId} section`);
    }

    /**
     * Announce message to screen readers using ARIA live region
     * @param {string} message - Message to announce
     */
    function announceToScreenReader(message) {
        // Create or update ARIA live region
        let liveRegion = document.getElementById('aria-live-region');

        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.position = 'absolute';
            liveRegion.style.left = '-10000px';
            liveRegion.style.width = '1px';
            liveRegion.style.height = '1px';
            liveRegion.style.overflow = 'hidden';
            document.body.appendChild(liveRegion);
        }

        // Update message
        liveRegion.textContent = message;
    }

    /**
     * Fix external links security (add rel attributes)
     * This prevents window.opener exploitation
     */
    function fixExternalLinks() {
        try {
            const allLinks = document.querySelectorAll('a[href]');

            allLinks.forEach(link => {
                const href = link.getAttribute('href');

                // Check if link is external (starts with http:// or https:// and different domain)
                if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                    const linkDomain = new URL(href).hostname;
                    const currentDomain = window.location.hostname;

                    if (linkDomain !== currentDomain) {
                        // Add security attributes
                        const currentRel = link.getAttribute('rel') || '';
                        const relValues = currentRel.split(' ').filter(v => v);

                        if (!relValues.includes('noopener')) {
                            relValues.push('noopener');
                        }
                        if (!relValues.includes('noreferrer')) {
                            relValues.push('noreferrer');
                        }

                        link.setAttribute('rel', relValues.join(' '));

                        // Optionally open in new tab if not already set
                        if (!link.hasAttribute('target')) {
                            link.setAttribute('target', '_blank');
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error fixing external links:', error);
        }
    }

    /**
     * Public API (if needed for external interaction)
     */
    window.CVNavigation = {
        showSection: showSection,
        getCurrentSection: function() { return currentSection; },
        getSections: function() { return sections.map(s => s.id); }
    };

    // Initialize when script loads
    init();

    // Fix external links after DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixExternalLinks);
    } else {
        fixExternalLinks();
    }

})();
