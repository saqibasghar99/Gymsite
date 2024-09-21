
    // Smooth scrolling for navigation links
    document.querySelectorAll('#menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - 50, // Adjusted for header height
                    behavior: 'smooth'
                });
            }
        });
    });



    // Highlight the active menu item based on the current section
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#menu a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; // Adjusted for header height
            const sectionBottom = sectionTop + section.offsetHeight;
            const id = section.getAttribute('id');

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const togglerButton = document.querySelector('.navbar-toggler');
        const navbarItems = document.querySelector('#menuCollapse');

        togglerButton.addEventListener('click', function() {
            navbarItems.classList.toggle('show');
        });
    });






