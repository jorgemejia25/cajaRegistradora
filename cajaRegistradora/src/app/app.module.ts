import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, FormularioComponent, ListaProductosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
