function contacto(el) {
  const contactoEl = document.createElement("div");

  contactoEl.innerHTML = `
    <form class="contact">
          <h2 class="titulo">Escribime</h2>
          <div class="contact__form">
            <div class="input_container">
            <label class="label" for="nombre">Nombre <input class="input-name" id="campo" type="text" /></label
            >
            <label class="label" for="email"> Email <input class="input-email" type="email" id="campo" type="text" /></label
            ></div>
            <label class="label" for="mensaje">Mensaje </label>
            <textarea class="input-textarea" name="Mensaje" id="mensaje"></textarea>
            <button class="button">Enviar</button>
          </div>
        </form>
    `;

  // contactoEl.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   console.log("el form se envió");
  // });

  el.appendChild(contactoEl);
}
const contactoEl = document.querySelector(".contacto__content");
contacto(contactoEl);

function enviarForm() {
  const formEl = document.querySelector(".contact");
  formEl.addEventListener("submit", async (f) => {
    f.preventDefault();

    let nombre = f.target.querySelector(".input-name").value;
    let email = f.target.querySelector(".input-email").value;
    let message = f.target.querySelector(".input-textarea").value;

    const datos = {
      to: "gomez.emiiliano@gmail.com",
      message: `Nombre: ${nombre}, <br> Email: ${email}, <br> Mensaje: ${message}`,
    };
    await fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(datos),
    });
    formEl.reset();
  });
}
enviarForm();

// const formulario = document.querySelector(".contact");
// console.log(formulario);

// formulario.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const url = "https://apx.school/api/utils/email-to-student";
//   const email = `gomez.emiiliano@gmail.com`;
//   const message = `mensaje a enviar`;

//   const formName = await document.querySelector(".input-name").value;
//   const formEmail = await document.querySelector(".input-email").value;
//   const fd = await document.querySelector(".input-textarea").value;

//   try {
//     const respuesta = await fetch(url, {
//       method: `POST`,
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         to: email,
//         message: {
//           name: formName,
//           message: `Nombre: ${formName}\nEmail: ${formEmail}\nMensaje: ${message}`,
//         },
//       }),
//     });
//     const respuestaDos = await respuesta.json();
//     console.log(respuestaDos.message);
//     if (respuestaDos) {
//       const spanCorrect = document.createElement("span");
//       spanCorrect.textContent = `Mensaje enviado correctamente`;
//       spanCorrect.classList.add("spanCorrect");
//       e.target.appendChild(spanCorrect);
//     } else {
//       throw new Error("Error al enviar el email");
//     }

//     // alert(console.log("tu mensaje fue enviado con exito"));
//   } catch (error) {
//     console.log("Ha surgido un error:", error);
//     const spanError = document.createElement("span");
//     spanError.textContent = `Ha ocurrido un error intente nuevamente`;
//     spanError.classList.add("spanError");
//     e.target.appendChild(spanError);
//   }
// });
