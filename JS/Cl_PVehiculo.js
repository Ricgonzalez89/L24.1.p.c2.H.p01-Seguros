import Cl_Poliza from "./Cl_Poliza.js";

export default class Cl_PVehiculo extends Cl_Poliza {
    constructor(id, mtoAsegurar, porcCobertura, anno) {
        super(id, mtoAsegurar, porcCobertura);
        this.anno = anno;
    }

    set anno(a) {
        this._anno = +a;
    }

    get anno() {
        return this._anno;
    }

    calcMtoPagar() {
        if (this.anno < 2000)
            return this.mtoAsegurar * 0.07;
        else
            return this.mtoAsegurar * 0.12;
    }
}