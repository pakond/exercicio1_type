class Coche {
    private marca: string;
    private modelo: string;
    private matricula: string;
    private cv: number;
    private color: string;
    private tuneado: boolean;
    private velocidadMaxima?: number;
    protected divCoche: HTMLUListElement;
    constructor(marca: string, modelo: string, matricula: string, cv: number, color: string, tuneado: boolean, velocidadMaxima?: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
        this.cv = cv;
        this.color = color;
        this.tuneado = tuneado;
        this.velocidadMaxima = velocidadMaxima
        this.divCoche = document.getElementById("coche");
    }
    detalleCoche(): void {
        this.divCoche.textContent = ''

        let divMarca: HTMLDivElement = document.createElement("div");
        divMarca.classList.add('card-body');
        divMarca.textContent = "Marca: " + this.marca;
        this.divCoche.appendChild(divMarca)

        let divModelo: HTMLDivElement = document.createElement("div");
        divModelo.classList.add('card-body');
        divModelo.textContent = "Modelo: " + this.modelo;
        this.divCoche.appendChild(divModelo)

        let divMatricula: HTMLDivElement = document.createElement("div");
        divMatricula.classList.add('card-body');
        divMatricula.textContent = "Matrícula: " + this.matricula;
        this.divCoche.appendChild(divMatricula)

        let divCv: HTMLDivElement = document.createElement("div");
        divCv.classList.add('card-body');
        divCv.textContent = "Caballos: " + this.cv;
        this.divCoche.appendChild(divCv)

        let divColor: HTMLDivElement = document.createElement("div");
        divColor.classList.add('card-body');
        divColor.textContent = "Color: " + this.color;
        this.divCoche.appendChild(divColor)

        let divTuneado: HTMLDivElement = document.createElement("div");
        divTuneado.classList.add('card-body');
        divTuneado.textContent = "Tuneado: " + this.tuneado;
        this.divCoche.appendChild(divTuneado)

        let divVelocidadMaxima: HTMLDivElement = document.createElement("div");
        divVelocidadMaxima.classList.add('card-body');
        divVelocidadMaxima.textContent = "Velocidad máxima: " + this.velocidadMaxima;
        this.divCoche.appendChild(divVelocidadMaxima)
    }
    getMarca() {
        return this.marca
    }
    getModelo() {
        return this.modelo
    }
}

class ListaCoches {
    private coches: Coche[];
    private ulCoches: HTMLUListElement;
    constructor() {
        this.ulCoches = document.getElementById("coches");
        this.coches = []
    }
    addCoche(coche: Coche): void {
        this.coches.push(coche)
    }
    listCoches(): void {
        this.coches.forEach(coche => {
            let li: HTMLLIElement = document.createElement("li");
            li.classList.add('list-group-item')
            li.textContent = coche.getMarca() + ' ' + coche.getModelo();
            li.addEventListener('click', (e:Event) => coche.detalleCoche());
            this.ulCoches.appendChild(li);
        });
    }
}

let coche1 = new Coche('Seat', 'León FR', '39L94X', 150, 'negro', true, 220)
let coche2 = new Coche('Audi', 'M3', '11L9FX', 120, 'blanco', false)
let coche3 = new Coche('Mercedes', 'EQS', '11L43X', 125, 'rojo', true, 210)

let listaCoches = new ListaCoches()

listaCoches.addCoche(coche1)
listaCoches.addCoche(coche2)
listaCoches.addCoche(coche3)

listaCoches.listCoches()