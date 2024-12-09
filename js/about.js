
// FOR NAVBAR START
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    let scrollThreshold = 50; // CONTROL THRESHOLD FOR NAVBAR SCROLLING

    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            scrollDirection = 'down';
        } else if (currentScrollTop < lastScrollTop) {
            scrollDirection = 'up';
        }

        if (currentScrollTop > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollDirection === 'down' && currentScrollTop > scrollThreshold) {
            navbar.classList.add('hidden');
        } else if (scrollDirection === 'up') {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
});
// FOR NAVBAR END