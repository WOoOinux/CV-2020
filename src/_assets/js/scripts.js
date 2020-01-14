/*jshint esversion: 6 */

const threshold = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold
};

const callback = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
};

document.documentElement.classList.add('reveal-loaded');

window.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.reveal');

    targets.forEach(function(target) {
        observer.observe(target);
    });
});
