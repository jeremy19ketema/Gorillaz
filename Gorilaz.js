document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('header img');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'scale(1.03)';
        hero.style.transition = 'opacity 1.6s ease, transform 8s ease-out';

        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'scale(1)';
        }, 400);
    }
});