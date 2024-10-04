import Cl_Poliza from "./Cl_Poliza.js";

export default class Cl_PVida extends Cl_Poliza {
    constructor(id, mtoAsegurar, porcCobertura, edad) {
        super(id, mtoAsegurar, porcCobertura);
        this.edad = edad;
    }

    set edad(e) {
        this._edad = +e;
    }

    get edad() {
        return this._edad;
    }

    calcMtoPagar() {
        if (this.edad < 18)
            return this.mtoAsegurar * 0.05;
        else
            return this.mtoAsegurar * 0.1;
    }
}