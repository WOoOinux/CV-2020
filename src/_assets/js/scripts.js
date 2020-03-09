/*jshint esversion: 6 */

const threshold = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
};

document.documentElement.classList.add('reveal-loaded');

window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.reveal');

    targets.forEach(target => {
        observer.observe(target);
    });
});
