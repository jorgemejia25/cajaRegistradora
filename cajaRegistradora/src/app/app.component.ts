import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productosSeleccionados: Producto[];
  productosComprados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }

  onProductoCreado($event) {
    this.productosSeleccionados.push($event);
  }

  onProductoSeleccionado($event) {
    const prod = this.productosSeleccionados.splice($event, 1);
    this.productosComprados.push(prod[0]);
  }
}
