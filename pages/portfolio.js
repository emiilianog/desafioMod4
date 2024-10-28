function addPortfolio(params = {}) {
  const portfolioTemplate = document.querySelector("#portfolio__template");
  const portfolioContent = document.querySelector(".portfolio__card-content");

  portfolioTemplate.content.querySelector(".portfolio__img").src =
    "https:" + params.imagen;
  portfolioTemplate.content.querySelector(
    ".portfolio__card-title"
  ).textContent = params.titulo;
  portfolioTemplate.content.querySelector(
    ".portfolio__card-descripcion"
  ).textContent = params.descripcion;

  const clone = document.importNode(portfolioTemplate.content, true);
  portfolioContent.appendChild(clone);
}

function getPortfolio() {
  fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=fondoMod4"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      //   console.log(json.includes.Asset[0].fields.file.url);
      const fondoUrl = json.includes.Asset[0].fields.file.url;

      const contenedor = document.querySelector(".portfolio-content");
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
      const maletinCont = document.querySelector(".maletin__portfolio");
      maletinCont.src = json.includes.Asset[1].fields.file.url;
      const sombraCont = document.querySelector(".sombra__portfolio");
      sombraCont.src = json.includes.Asset[0].fields.file.url;
    });

  return fetch(
    "https://cdn.contentful.com/spaces/693kozyak68g/environments/master/entries?access_token=b6tkmgju9KBz--Y3Ppzq-71cH8fdiSYhLv4FXhs2Tho&content_type=portDesafioMod4"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // console.log(json);

      const fieldsCollection = json.items.map((item) => {
        return {
          imagen: json.includes.Asset[0].fields.file.url,
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
        };
      });

      return fieldsCollection;
    });
}

getPortfolio().then(function (w) {
  for (const s of w) {
    addPortfolio(s);
  }
});
