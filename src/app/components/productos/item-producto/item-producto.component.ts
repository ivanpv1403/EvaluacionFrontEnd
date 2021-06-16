import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoSerivicio } from 'src/app/services/producto.service';
@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  form : FormGroup;
  constructor(private formBuilder: FormBuilder, private productoService: ProductoSerivicio) {
    this.form =this.formBuilder.group({
      id: 0,
      nombre: ['', Validators.required],
      codigobarras: ['', Validators.required],
      categoriaid: ['', Validators.required],
      proveedorid: ['', Validators.required],
      marcaid: ['', Validators.required],
      medidas: ['', Validators.required],
      precio: ['', Validators.required],
      stock:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  guardar(){
    const producto: Producto = {
      Id: 0,   
      ProveedorId : this.form.get('proveedorid')?.value,
      CategoriaId :  this.form.get('categoriaid')?.value,
      MarcaId :  this.form.get('marcaid')?.value,
      CodigoBarras :  this.form.get('codigobarras')?.value,
      Descripcion :  this.form.get('nombre')?.value,
      Medidas :  this.form.get('medidas')?.value,
      Precio :  this.form.get('precio')?.value,
      Stock :  this.form.get('stock')?.value,
      Activo: true     
    }
    this.productoService.guardarProducto(producto).subscribe(data => {
      this.form.reset();
    })
  }

}
