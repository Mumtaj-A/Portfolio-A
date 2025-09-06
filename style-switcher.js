document.addEventListener('DOMContentLoaded', () => {
    // Style Switcher Toggler
    const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
    const styleSwitcher = document.querySelector('.style-switcher');
    
    styleSwitcherToggler.addEventListener('click', () => {
        styleSwitcher.classList.toggle('open');
    });

    // Day/Night Mode
    const dayNight = document.querySelector('.day-night');
    dayNight.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        dayNight.querySelector('i').classList.toggle('fa-sun');
        dayNight.querySelector('i').classList.toggle('fa-moon');
        localStorage.setItem('themeMode', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Load saved theme mode
    if (localStorage.getItem('themeMode') === 'dark') {
        document.body.classList.add('dark');
        dayNight.querySelector('i').classList.add('fa-sun');
        dayNight.querySelector('i').classList.remove('fa-moon');
    }

    // ===========================
    // Theme Colors (class-based)
    // ===========================
    window.setTheme = function(themeClass) {
        document.body.classList.remove('theme-red','theme-orange','theme-green','theme-blue','theme-pink');
        document.body.classList.add(themeClass);
        localStorage.setItem('themeClass', themeClass);
    };

    // Load saved theme
    const savedThemeClass = localStorage.getItem('themeClass');
    if (savedThemeClass) {
        document.body.classList.add(savedThemeClass);
    }
});
