import {Locator, Page, expect} from "@playwright/test";

export class Home {
    private readonly inicio:Locator;
    private readonly moneda:Locator;
    private readonly idioma:Locator;
    private readonly ayuda:Locator;
    private readonly registrarAlojamiento:Locator;
    private readonly registro:Locator;
   private readonly login:Locator;
    private readonly alojamiento: Locator;
    private readonly vuelos: Locator;
    private readonly alquilerDeCoches: Locator;
    private readonly atracciones: Locator;
    private readonly taxisAeropuerto: Locator;
    //private readonly reservaYa: Locator;
    private readonly lugar: Locator;
    private readonly fechaEntrada: Locator;
    private readonly fechaSalida: Locator;
    private readonly opciones: Locator;
    private readonly buscar: Locator;

    constructor(page:Page){
        this.inicio = page.locator('div[id="main_container"]');
        this.moneda = page.locator('button[data-testid="header-currency-picker-trigger"]');
        this.idioma = page.locator('button[data-testid="header-language-picker-trigger"]');
        this.ayuda = page.locator('a[data-testid="header-help-center"]');
        this.registrarAlojamiento = page.locator('a[data-testid="header-custom-action-button"]');
        this.registro = page.locator('a[data-testid="header-sign-up-button"]');
        this.login = page.locator('a[data-testid="header-sign-in-button"]');
        this.alojamiento = page.locator('a[id="accommodations"]');
        this.vuelos = page.locator('a[id="flights"]');
        this.alquilerDeCoches = page.locator('a[id="cars"]');
        this.atracciones = page.locator('a[id="attractions"]');
        this.taxisAeropuerto = page.locator('a[id="airport_taxis"]');
        //this.reservaYa = page.locator('text=Reserva ya');
        this.lugar = page.locator('input[id=":r9:"]');
        this.fechaEntrada = page.locator('time[data-testid="date-display-field-start"]');
        this.fechaSalida = page.locator('time[data-testid="date-display-field-end"]');
        this.opciones = page.locator('button[data-testid="occupancy-config"]');
        this.buscar = page.locator('button[data-testid="search-button"]');  
    }
    async IniciarRegistro(){
}

}