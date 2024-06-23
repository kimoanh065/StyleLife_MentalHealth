window.addEventListener('scroll', function() {
    const image = document.querySelector('.maxim-image');
    const container = document.querySelector('.image-container-maxim');
    const containerRect = container.getBoundingClientRect();
    const scrollPosition = window.scrollY;

    if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        const visibleHeight = window.innerHeight - containerRect.top;
        const imageHeight = image.clientHeight;
        const maxScroll = imageHeight - container.clientHeight;
        const scrollAmount = Math.min(maxScroll, Math.max(0, (visibleHeight / window.innerHeight) * maxScroll));
        image.style.top = `-${scrollAmount}px`;
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Hiển thị thông báo "Thank you"
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';

    // Ẩn thông báo sau 3 giây
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Hiển thị thông báo "Thank you"
    var thankYouMessage = document.getElementById('thankYouMessage2');
    thankYouMessage.style.display = 'inline';

    // Ẩn thông báo sau 3 giây
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
});
