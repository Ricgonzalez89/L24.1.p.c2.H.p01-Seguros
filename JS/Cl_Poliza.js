export default class Cl_Poliza {
    constructor(id, mtoAsegurar, porcCobertura) {
        this.id = id;
        this.mtoAsegurar = mtoAsegurar;
        this.porcCobertura = porcCobertura;
    }

    set id(i) {
        this._id = i;
    }

    set mtoAsegurar(m) {
        this._mtoAsegurar = +m;
    }

    set porcCobertura(p) {
        this._porcCobertura = +p;
    }

    get id() {
        return this._id;
    }

    get mtoAsegurar() {
        return this._mtoAsegurar;
    }

    get porcCobertura() {
        return this._porcCobertura;
    }

    calcMtoCobertura() {
        return this.mtoAsegurar * (this.porcCobertura / 100);
    }
}