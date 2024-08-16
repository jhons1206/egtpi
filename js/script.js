// Header y Footer dinámico
const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
    <header class="tablero-head">
        <section class="top-head">
            <div class="container d-flex justify-content-between logos">
                <img src="images/logo-midis.svg" alt="Ministerio de Desarrollo e Inclusión Social" class="logo-midis" />
                <img src="images/logo-egtpi.png" alt="Estrategia de Gestión Territorial Primero la Infancia" class="logo-egtpi" />
            </div>
            <div class="container-fluid top-head-title">
                <h1 class="m-0">BIENVENIDOS AL TABLERO DE SEGUIMIENTO DE LA ESTRATEGIA DE GESTIÓN TERRITORIAL PRIMERO LA INFANCIA</h1>
            </div>
        </section>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <button class="navbar-toggler d-flex d-lg-none justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="select-page-text">Seleccionar página</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SEGUIMIENTO IAL</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">IAL 2023</a></li>
                                <li><a class="dropdown-item" href="https://egtpi.netlify.app/">IAL 2024</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SEGUIMIENTO IAR</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">IAR 2023</a></li>
                                <li><a class="dropdown-item" href="iar-2024.html">IAR 2024</a></li>
                            </ul>
                        </li>
                        <li class="nav-item navi-level1">
                            <a class="nav-link" href="producto-2-sm.html">PRODUCTO 2 - SM</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
`;

// Collapse Dropdown Menu (items)
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
