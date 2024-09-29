import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { HomeComponent } from "./componentes/home/home.component";
import { CategoriasComponent } from "./componentes/categorias/categorias.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { CarruselComponent } from "./componentes/carrusel/carrusel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, CategoriasComponent, FooterComponent, CarruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'publicidad-negocios';
  cityName? = 'Concordia';

}
