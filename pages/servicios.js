function addServicios(params = {}) {
  const seriviceTemplate = document.querySelector("#servicios__template");
  const serviceContent = document.querySelector(".servicios__card-content");

  seriviceTemplate.content.querySelector(".servicios__img").src =
    "https:" + params.imagen;
  seriviceTemplate.content.querySelector(".servicios__card-title").textContent =
    params.titulo;
  seriviceTemplate.content.querySelector(
    ".servicios__card-descripcion"
  ).textContent = params.descripcion;

  const clone = document.importNode(seriviceTemplate.content, true);
  serviceContent.appendChild(clone);
}

function getServicios() {
  fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=fondoMod4"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json.includes.Asset[0].fields.file.url);
      const fondoUrl = json.includes.Asset[0].fields.file.url;

      const contenedor = document.querySelector(".servicios-content");
      contenedor.style.backgroundImage = `url(${fondoUrl})`;
    });

  fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=maletinMod4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // console.log(json);
      const maletinCont = document.querySelector(".maletin__servicios");
      maletinCont.src = json.includes.Asset[1].fields.file.url;
      const sombraCont = document.querySelector(".sombra__servicios");
      sombraCont.src = json.includes.Asset[0].fields.file.url;
    });

  return fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=serviciosMod4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // console.log(json);
      let i = json.items.length - 1;
      const fieldsCollection = json.items.map((item) => {
        let imagen = json.includes.Asset[i].fields.file.url;

        return (
          i--,
          {
            imagen: imagen,
            titulo: item.fields.titulo,
            descripcion: item.fields.descripcion,
          }
        );
      });

      return fieldsCollection;
    });
}

getServicios().then(function (services) {
  for (const s of services) {
    addServicios(s);
  }
});
