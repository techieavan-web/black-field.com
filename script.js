// Shared script for all pages: active nav, listing filter, scroll-top toggle
document.addEventListener('DOMContentLoaded', () => {
    // 1) Auto mark active nav item based on current filename
    const navLinks = document.querySelectorAll('.navbar a');
    const current = window.location.pathname.split('/').pop().toLowerCase();
    navLinks.forEach(a => {
        const href = a.getAttribute('href').split('/').pop().toLowerCase();
        if ((href && href === current) ||
            (!href && current === '') ||
            (current === '' && (href === 'index.html' || href === '/')) ||
            (current === 'index.html' && href === 'index.html')) {
            a.classList.add('active');
        }
    });

    // 2) Listings filter (if present)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const listingCards = document.querySelectorAll('.listing-card');
    if (filterButtons.length && listingCards.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                listingCards.forEach(card => {
                    if (filter === 'all') card.style.display = 'block';
                    else card.style.display = card.classList.contains(filter) ? 'block' : 'none';
                });
            });
        });
    }

    // 3) scroll-top show/hide + handler
    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) scrollBtn.style.display = 'block';
            else scrollBtn.style.display = 'none';
        });
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});