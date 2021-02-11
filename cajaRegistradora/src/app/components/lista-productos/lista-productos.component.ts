import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  @Input() productos: Producto[];
  @Output() productoSeleccionado: EventEmitter<number>;
  constructor() {
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick(indice) {
    this.productoSeleccionado.emit(indice);
  }
}
