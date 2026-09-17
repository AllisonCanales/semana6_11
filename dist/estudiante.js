"use strict";
// Función tipada: recibe un número y devuelve un número.
function redondear(valor) {
    return Math.round(valor * 100) / 100;
}
// La clase implementa la interfaz; sus propiedades llevan tipo.
class Estudiante {
    constructor(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
    estado() {
        if (this.creditos < 1 || this.creditos > 24) {
            return "Créditos inválidos";
        }
        else if (this.creditos >= 12) {
            return "Matriculado";
        }
        else {
            return "Pendiente";
        }
    }
}
