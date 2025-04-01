
let currentIndex = 0;{
                const slides = document.querySelectorAll(".slide");
                const dots = document.querySelectorAll(".dot");
        
                function showSlide(index) {
                    if (index >= slides.length) currentIndex = 0;
                    else if (index < 0) currentIndex = slides.length - 1;
                    else currentIndex = index;
        
                    slides.forEach(slide => slide.style.display = "none");
                    dots.forEach(dot => dot.classList.remove("active"));
        
                    slides[currentIndex].style.display = "block";
                    dots[currentIndex].classList.add("active");
                }
        
                function changeSlide(step) {
                    showSlide(currentIndex + step);
                }
        
                function goToSlide(index) {
                    showSlide(index);
                }
        
                function autoPlay() {
                    changeSlide(1);
                    setTimeout(autoPlay, 3000);
                }
        
                showSlide(currentIndex);
                setTimeout(autoPlay, 3000);
}
function showSignUp(){
    document.getElementById("signupForm").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("checkbox").value = "";
    form.reset();
}
function submitSignUp() {
    alert("Sign-up successful!");
    document.getElementById("signupForm").style.display = "none";
}
function cancelSignUp() {
    document.getElementById("signupForm").style.display = "none"; // Hide the form
}

let index = 0; // Track current image
const images = document.querySelectorAll('.news-image img');
let autoSlide = setInterval(slideImages, 2000); // Auto-slide every 2 seconds

// Function to slide images
function slideImages() {
    images[index].classList.remove('active');
    images[index].classList.add('hidden');
    index = (index + 1) % images.length;
    images[index].classList.remove('hidden');
    images[index].classList.add('active');
}

// Function to manually switch images
function switchImage() {
    clearInterval(autoSlide); // Stop auto-slide on manual click
    slideImages();
    autoSlide = setInterval(slideImages, 5000); // Restart auto-slide after click
}

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navItems = document.querySelectorAll('.nav-item');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const newsItems = document.querySelector('.news-items');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const newsItemElements = document.querySelectorAll('.news-item');

    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');

            if (this.textContent === 'loginform') {
                loginForm.classList.add('active');
                newsItems.style.display = 'none';
                seeMoreBtn.style.display = 'none';
            } else if (this.textContent === 'registerform') {
                registerForm.classList.add('active');
                newsItems.style.display = 'none';
                seeMoreBtn.style.display = 'none';
            } else {
                newsItems.style.display = 'block';
                seeMoreBtn.style.display = 'block';
            }
        });
    });

    // Switch between login and register forms
    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        updateNavHighlight('registerform');
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        updateNavHighlight('loginform');
    });

    function updateNavHighlight(formType) {
        navItems.forEach(nav => {
            nav.classList.remove('active');
            if (nav.textContent === formType) {
                nav.classList.add('active');
            }
        });
    }

    // News item click handler
    newsItemElements.forEach(item => {
        item.addEventListener('click', function() {
            console.log('News item clicked:', this.querySelector('.news-item-title').textContent);
        });
    });

    // See more button click handler
    seeMoreBtn.addEventListener('click', function() {
        console.log('Loading more news items...');
        setTimeout(() => {
            const newItem = document.createElement('div');
            newItem.className = 'news-item';
            newItem.innerHTML = `
                <div class="news-item-title">New "Star Resonance" character reveal!</div>
                <div class="news-item-desc">Check out the latest character joining the Star Resonance universe...</div>
            `;
            newItem.addEventListener('click', function() {
                console.log('News item clicked:', this.querySelector('.news-item-title').textContent);
            });
            newsItems.appendChild(newItem);
        }, 500);
    });
});