function calcularPropina(montoCuenta, porcentajePropina) {
    return montoCuenta * (porcentajePropina / 100);
}

const montoCuenta = parseFloat(prompt("Ingrese el monto de la cuenta:"));
const porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina:"));

const montoPropina = calcularPropina(montoCuenta, porcentajePropina);
const totalPagar = montoCuenta + montoPropina;

console.log("--- Resumen de la Cuenta ---");
console.log(`Monto de la cuenta: $${montoCuenta}`);
console.log(`Propina (${porcentajePropina}%): $${montoPropina}`);
console.log(`Total a pagar: $${totalPagar}`);
