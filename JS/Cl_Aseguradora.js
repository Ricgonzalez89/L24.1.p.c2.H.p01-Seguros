export default class Cl_Aseguradora {
    constructor() {
        this.acMtoPagar = 0;
        this.cntPoliza = 0;
    }

    procesarPoliza(pol) {
        this.acMtoPagar += pol.calcMtoPagar();
        this.cntPoliza++;
    }

    calcPromMtoPagar() {
        if (this.cntPoliza > 0)
            return this.acMtoPagar / this.cntPoliza;
        else
            return 0;
    }
}