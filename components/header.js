function header(el) {
  const component = document.createElement("div");
  component.innerHTML = `<div class="header__content">
        <img class="logo" src="components/Gomez.png" alt="logo" />
        <img
          class="menu_img"
          src="components/menu-svgrepo-com 1.svg"
          alt="hamburguesa"
        />
        <div class="options__content">
          <img
            class="cruz_img"
            src="components/close-svgrepo-com (1) 1.svg"
            alt="cruz"
          />
          <div class="options">
          <a class="portfolio opcion" href="./portfolio.html">Porfolio</a>
          <a class="servicios opcion" href="./servicios.html">Servios</a>
          <a class="contacto opcion" href="./contacto.html">Contacto</a>
        </div>
          </div>
      </div>`;

  const menuEl = component.querySelector(".menu_img");
  const opctionsEl = component.querySelector(".options__content");
  const cerrarEl = component.querySelector(".cruz_img");

  menuEl.addEventListener("click", () => {
    opctionsEl.style.display = "inherit";
  });
  cerrarEl.addEventListener("click", () => {
    opctionsEl.style.display = "";
  });
  el.appendChild(component);
}
