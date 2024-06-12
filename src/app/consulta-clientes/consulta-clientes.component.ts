import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent implements OnInit {
  
  //Atributos
  clientes: any[] = []; //JSON array

  //Armazenar o numero da página que está sendo acessada no componente de paginação.
  page = 1;

  //inicializando o HttpClient por meio de injeção de dependencia
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    //Executar a consulta de clientes
    this.consultarClientes();
  }
  //função para executar a consulta de clientes na API
  consultarClientes(): void {
    this.httpClient.get(environment.apiUrl + "/api/Clientes") 
      .subscribe(//Promisse da API
        (response:any) => { //Obtendo o retorno de sucesso da API...
          this.clientes = response.data;
          console.log(this.clientes);
        },
        e => {//Obtendo o retorno de erro da API...
          console.log(e);
        }
      )
  }
  
  //função que irá realizar a paginação
  handlePageChange(event: any): void {
    this.page = event;
  }
}
