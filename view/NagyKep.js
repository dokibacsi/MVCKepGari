class NagyKepView {
  #pikcsor;
  constructor(kep, szuloElem) {
    this.#pikcsor = kep;
    this.szuloElem = szuloElem;
    this.#htmlOsszepakol();
    this.balGombElem = $("#left");
    this.jobbGombElem = $("#right");
    this.nagyKepHelye = $("#nagykephelye")
    
    this.balGombElem.on("click", () => {
      this.#sajatEsemenykezelo("bal");
    });

    this.jobbGombElem.on("click", () => {
      this.#sajatEsemenykezelo("jobb");
    });
  }
  nagykepCsere(kep){
    this.nagyKepHelye.attr("src", kep)
  }

  #sajatEsemenykezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev);
    window.dispatchEvent(esemenyem);
  }
  #htmlOsszepakol() {
    let txt = "<button id='left'> LEFT </button>";
    txt += `
        <div class="card">
          <div class="card-header">Főkép</div>
          <div class="card-body"><img id="nagykephelye" src="${
            this.#pikcsor
          }" class="img-thumbnail" alt="Cinque Terre"></div>
          <div class="card-footer">Leírás</div>
        </div>
        `;

    txt += "<button id='right'> RIGHT </button>";

    this.szuloElem.html(txt);
  }
}

export default NagyKepView;
