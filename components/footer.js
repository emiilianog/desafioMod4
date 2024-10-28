function footer(el) {
  const component = document.createElement("div");

  component.innerHTML = `<div class="footer_content">
        <img src="components/Gomez.png" alt="logo" class="logo" />
        <div class="footer_sections">
          <a class="opcion" href="./index.html"
            ><img class="middle" src="components/home.svg" alt="home" />Home</a
          >
          <a class="opcion" href="./servicios.html"
            ><img
              class="middle"
              src="components/user.svg"
              alt="servicios"
            />Servicios</a
          >
          <a class="opcion" href="./contacto.html"
            ><img
              class="middle"
              src="components/phone.svg"
              alt="contacto"
            />contacto</a
          >
        </div>
        <div class="footer_redes">
          <a href="https://www.linkedin.com/in/emilianofgomez/">
            <img src="components/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/emiilianog">
            <img src="components/github.svg" alt="github" />
          </a>
          <a href="">
            <img src="components/twitter.svg" alt="twitter" />
          </a>
        </div>
        <h3 class="derechos">©2024 - https://apx.school</h3>
      </div>`;

  el.appendChild(component);
}
