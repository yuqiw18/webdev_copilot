function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox effect
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Form validation and real-time feedback
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessages = document.getElementById('form-messages');

    let isValid = true;
    formMessages.innerHTML = '';

    if (name === '') {
        isValid = false;
        formMessages.innerHTML += '<p>Please enter your name.</p>';
    }

    if (email === '') {
        isValid = false;
        formMessages.innerHTML += '<p>Please enter your email.</p>';
    } else if (!validateEmail(email)) {
        isValid = false;
        formMessages.innerHTML += '<p>Please enter a valid email address.</p>';
    }

    if (message === '') {
        isValid = false;
        formMessages.innerHTML += '<p>Please enter your message.</p>';
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        const formMessages = document.getElementById('form-messages');
        formMessages.innerHTML = '<p class="success">Thank you for your message. We will get back to you soon.</p>';
        document.getElementById('contact-form').reset();
    }
}

// Real-time feedback
document.getElementById('name').addEventListener('input', function() {
    const formMessages = document.getElementById('form-messages');
    if (this.value.trim() === '') {
        formMessages.innerHTML = '<p>Please enter your name.</p>';
    } else {
        formMessages.innerHTML = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const formMessages = document.getElementById('form-messages');
    if (this.value.trim() === '') {
        formMessages.innerHTML = '<p>Please enter your email.</p>';
    } else if (!validateEmail(this.value.trim())) {
        formMessages.innerHTML = '<p>Please enter a valid email address.</p>';
    } else {
        formMessages.innerHTML = '';
    }
});

document.getElementById('message').addEventListener('input', function() {
    const formMessages = document.getElementById('form-messages');
    if (this.value.trim() === '') {
        formMessages.innerHTML = '<p>Please enter your message.</p>';
    } else {
        formMessages.innerHTML = '';
    }
});