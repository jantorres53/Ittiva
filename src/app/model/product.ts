export class Product {
    id!: number;
    nombre: string;
    edad: number;
    rol: string;
    telefono: number;
    correo: string;

    constructor(nombre: string, edad: number,rol: string,telefono: number,correo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.rol = rol;
        this.telefono = telefono;
        this.correo = correo;
    }
}
