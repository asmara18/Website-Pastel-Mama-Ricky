document.addEventListener('DOMContentLoaded', () => {
    const isVisible = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.90
        );
    };

    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            if (isVisible(element)) {
                element.classList.add('reveal-visible');
            }
        });
    };

    revealElements();
    window.addEventListener('scroll', revealElements);
    window.addEventListener('resize', revealElements);
});