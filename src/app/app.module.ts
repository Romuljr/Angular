import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

//Importando as classes para uso da biblioteca de rotas do angular
//Estas serão utilizadas para navegação da SPA - Single Page Application
import { Routes, RouterModule} from '@angular/router';

//Importando as classses para uso da biblioteca de rotas do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importando as classses para uso da biblioteca de acesso à APIs do do angular
import { HttpClientModule } from '@angular/common/http';

//importando o componente de paginação
import { NgxPaginationModule } from 'ngx-pagination';

//Mapear uma rota (URL) para cada componente do projeto..
const routes : Routes = [
  { path : 'cadastro-clientes', component : CadastroClientesComponent},
  { path : 'consulta-clientes', component : ConsultaClientesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule, //Reginstando a Paginação
    HttpClientModule, //Registrando biblioteca cara chamada de API
    FormsModule, //Registrando biblioteca para formulários
    ReactiveFormsModule, //Registrando biblioteca para formulários
    RouterModule.forRoot(routes) //registrando essa configuração de rotas!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
