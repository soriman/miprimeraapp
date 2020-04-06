import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar enrutador a mano
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//Sevicios
import { LibroclickedService } from './libroclicked.service';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LibrosComponent } from './libros/libros.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { InformacionComponent } from './informacion/informacion.component';


const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent}, //Url estática
  {path: 'informacion/:libroId', component: InformacionComponent},
  {path: 'informacion', redirectTo: "/"},
  {path: 'sobre-nosotros', component: SobreNosotrosComponent},
  {path: 'error-not-found', component: ErrorNotFoundComponent}, //Establece el componente por defecto
  {path: '', component: InicioComponent, pathMatch: 'full'}, //Establece el componente por defecto
  {path: '**', redirectTo: '/error-not-found'}, //Establece el componente por defecto

];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LibrosComponent,
    SobreNosotrosComponent,
    InicioComponent,
    ErrorNotFoundComponent,
    InformacionComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
