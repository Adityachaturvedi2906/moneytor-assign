const slider = document.querySelector('.volume-slider');
const volumeValue = document.getElementById('volume-value');

slider.addEventListener('input', function() {
    volumeValue.textContent = slider.value;
});

// FAQ section
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        parent.classList.toggle('active');
        
        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== parent) {
                faq.classList.remove('active');
            }
        });
    });
});


