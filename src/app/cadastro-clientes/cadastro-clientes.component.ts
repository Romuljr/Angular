import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent implements OnInit {

  //Atributos
  mensagem_sucesso: string | undefined;
  mensagem_erro: string | undefined;

  //capturar as mensagens de erro de validação da API
  errors = {
    Cpf : [], Email: [], Nome: []

  }

  //Declarando uma variável chamada HttpClient por meio de 
  //injeção de dependência (variavel será inicializada automaticamente)
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void{

  }

  //função executada no evento ( submit ) do formulário
  cadastrarCliente(formCadastro: any) : void{

    this.limparMensagens();

    //Capturar os campos do formulário
    var request = formCadastro.form.value;

    //enviando uma requisição HTTP POST para uma API...
    this.httpClient.post( environment.apiUrl + '/api/Clientes', request)
    .subscribe( //capturando o PROMISSE da API ( Resposta )
      (data:any) => { //sucesso.
        //Capturar a mensagem de sucesso obtida da API.
        console.log(data)
        this.mensagem_sucesso = data.message;

        //limpar os campos do formulário ( reset )
        formCadastro.form.reset();

      },
      e => { //Erro!
        
        //Verificar o status de Erro retornado pela API.
        switch(e.status){
          case 400: //BAD REQUEST
            this.errors = e.error.errors;
            console.log(this.errors);
            break;

          case 403: //FORBIDDEN
            this.mensagem_erro = e.error.message;
            break;
           
          default:
            this.mensagem_erro = "Não foi possível realizar a operação"
            break; 
        }
      }
    )
  }

  //Limpar as funções do formulário
  limparMensagens() : void{
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
  }
}
