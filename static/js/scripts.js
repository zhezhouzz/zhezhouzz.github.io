window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Load config from inline data
    Object.keys(SITE_CONFIG).forEach(key => {
        try {
            document.getElementById(key).innerHTML = SITE_CONFIG[key];
        } catch {
            console.log("Unknown id: " + key);
        }
    });

    // Load sections from inline data
    marked.use({ mangle: false, headerIds: false });
    Object.keys(SITE_SECTIONS).forEach(name => {
        const html = marked.parse(SITE_SECTIONS[name]);
        document.getElementById(name + '-md').innerHTML = html;
    });
    MathJax.typeset();

});
