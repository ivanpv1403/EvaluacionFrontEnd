export class Producto{
    Id: number;
    ProveedorId: number;
    CategoriaId: number;
    MarcaId: number;
    CodigoBarras: string;
    Descripcion: string;
    Medidas: string;
    Precio: number;
    Stock: number;
    Activo: boolean;

    constructor() { 
        // Initialization inside the constructor
        this.Id = 0;
        this.ProveedorId = 0;
        this.CategoriaId = 0;
        this.MarcaId = 0;
        this.CodigoBarras = "";
        this.Descripcion = "";
        this.Medidas = "";
        this.Precio = 0;
        this.Stock = 0;
        this.Activo = false;
     }
    
}