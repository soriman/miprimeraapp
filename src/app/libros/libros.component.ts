import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean;
  cargando: boolean;
  clearElement: HTMLElement;

  constructor(private http: HttpClient, public Libroclicked:LibroclickedService, private ren: Renderer2){
  
 }



  ngOnInit(): void {
    this.cargarLista();
    this.cargando = true;
  }

  cargarLista() {
    //la api que sea
    this.http.get('assets/lista-libros.json').subscribe(
      //se ejecuta una vez tengamos respuesta
      (respuesta: Response) => { this.libros = respuesta; this.cargando = false},
      (respuesta: Response) => { this.errorHttp = true; }
    )
  }

  agregarLibro(_libroVisto){
    this.Libroclicked.libroVisto(_libroVisto);
  }

  selectedMethod(element: HTMLElement){
    
    if (this.clearElement){
      this.ren.removeClass(this.clearElement, 'selected');
    }
      this.ren.addClass(element, 'selected');
      this.clearElement = element;
  }

  enterMethod(element: HTMLElement){
    this.ren.addClass(element, 'mouseOver');
  }

  leaveMethod(element: HTMLElement){
    this.ren.removeClass(element, 'mouseOver');
  }


}
