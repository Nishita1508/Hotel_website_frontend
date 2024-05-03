const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.filter = 'blur(5px)';
            }
        });
    });
    card.addEventListener('mouseleave', () => {
        cards.forEach(otherCard => {
            otherCard.style.filter = 'none';
        });
    });
});
