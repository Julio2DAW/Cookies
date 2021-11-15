/**
 *   Descripción principal del fichero.
 *   Descripción secundaria.
 *   @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'

console.log('Cargado JS')
window.onload = iniciar

function iniciar() {
    let fechaCaducidad = new Date()
    fechaCaducidad.setDate(fechaCaducidad.getDate() + 30)
    document.cookie = 'usuario=Julio;expires=' + fechaCaducidad
    console.log(document.cookie)
}