// Collapse Menu Movil
const navLinks = document.querySelectorAll('.dropdown-item, .navi-level1');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false,
});
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (bsCollapse._isShown()) {
            bsCollapse.hide();
        }
    });
});
