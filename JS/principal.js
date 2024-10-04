/* 1. - SEGURÍSIMOS
|* Una empresa Aseguradora requiere un
|* programa para el control de sus pólizas. Cada
|* póliza posee un número de identificación
|* único, monto a asegurar y el porcentaje de
|* cobertura. El monto a pagar por las pólizas de
|* Vida depende la edad del cliente: menores de
|* 18 años la póliza es el 5% del monto a
|* asegurar, caso contrario el 10%. Para los
|* vehículos, el monto a pagar por la póliza es el
|* 7% si el año es menor que el 2000, y el 12%
|* en otros casos. Mostrar el Monto a Pagar por
|* cada Póliza y el monto de la cobertura, y por
|* la Aseguradora el Promedio de Monto Pagado.
*/
import Cl_Aseguradora from "./Cl_Aseguradora.js";
import Cl_PVehiculo from "./Cl_PVehiculo.js";
import Cl_PVida from "./Cl_PVida.js";

let pol1 = new Cl_PVida(22, 1000, 80, 15);
let pol2 = new Cl_PVida(11, 500, 90, 22);
let pol3 = new Cl_PVida(55, 2000, 70, 18);
let pol4 = new Cl_PVida(88, 1500, 90, 30);
let pol5 = new Cl_PVehiculo(33, 2000, 80, 2000);
let pol6 = new Cl_PVehiculo(90, 1500, 90, 2005);
let pol7 = new Cl_PVehiculo(77, 1000, 90, 1995);
let pol8 = new Cl_PVehiculo(44, 2500, 85, 2010);
let aseg = new Cl_Aseguradora();

aseg.procesarPoliza(pol1);
aseg.procesarPoliza(pol2);
aseg.procesarPoliza(pol3);
aseg.procesarPoliza(pol4);
aseg.procesarPoliza(pol5);
aseg.procesarPoliza(pol6);
aseg.procesarPoliza(pol7);
aseg.procesarPoliza(pol8);

let salida = document.getElementById("salida");

let mostrarPoliza = (poliza) => {
    return `
    <tr>
        <td>${poliza.id}</td>
        <td>$${poliza.calcMtoPagar().toFixed(2)}</td>
        <td>$${poliza.calcMtoCobertura().toFixed(2)}</td>
    </tr>
    `;
}

salida.innerHTML += `
<table>
    <tr>
        <th>ID</th>
        <th>Monto a Pagar</th>
        <th>Monto de la Cobertura</th>
    </tr>
    ${mostrarPoliza(pol1)}
    ${mostrarPoliza(pol2)}
    ${mostrarPoliza(pol3)}
    ${mostrarPoliza(pol4)}
    ${mostrarPoliza(pol5)}
    ${mostrarPoliza(pol6)}
    ${mostrarPoliza(pol7)}
    ${mostrarPoliza(pol8)}
</table>
<br>
Promedio de monto pagado: $${aseg.calcPromMtoPagar().toFixed(2)}
`;