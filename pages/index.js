function addBienvenida(params = {}) {
  const bienvenidaTemplate = document.querySelector("#bienvenida__template");
  const bienvenidaCont = document.querySelector(".bienvenida__content");

  bienvenidaTemplate.content.querySelector(".bienvenida_img-uno").src =
    "https:" + params.imagen;
  bienvenidaTemplate.content.querySelector(".bienvenida_img-dos").src =
    "https:" + params.imagenDos;

  const clone = document.importNode(bienvenidaTemplate.content, true);
  bienvenidaCont.appendChild(clone);
}
function getBienvenida() {
  return fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=bienvenidaMod4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // console.log(json);

      const fieldsCollection = json.items.map((item) => {
        // console.log(item);
        return {
          imagen: json.includes.Asset[1].fields.file.url,
          imagenDos: json.includes.Asset[0].fields.file.url,
        };
      });

      return fieldsCollection;
    });
}

function addPresentacion(params = {}) {
  const presTemplate = document.querySelector("#presentacion__template");
  const presContent = document.querySelector(".presentacion__content");

  presTemplate.content.querySelector(".presentacion__img").src =
    "https:" + params.imagen;
  presTemplate.content.querySelector(".presentacion__nombre").textContent =
    params.titulo;
  presTemplate.content.querySelector(".presentacion__texto").textContent =
    params.descripcion;

  const clone = document.importNode(presTemplate.content, true);
  presContent.appendChild(clone);
}

function getPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=presentacionMod4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const fieldsCollection = json.items.map((item) => {
        return {
          imagen: json.includes.Asset[0].fields.file.url,
          titulo: item.fields.titulo,
          descripcion: item.fields.texto,
        };
      });

      return fieldsCollection;
    });
}

function main() {
  const headerEl = document.querySelector(".header");
  header(headerEl);

  const footerEl = document.querySelector(".footer");
  footer(footerEl);

  getBienvenida().then(function (works) {
    for (const w of works) {
      addBienvenida(w);
    }
  });

  getPresentacion().then(function (works) {
    for (const w of works) {
      addPresentacion(w);
    }
  });
}

main();
