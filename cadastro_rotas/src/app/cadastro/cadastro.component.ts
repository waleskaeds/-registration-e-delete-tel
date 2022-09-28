import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  title = 'Cadastro';
  usuario : string = '';
  telefone : string = '';
  pessoas : Array<any> = [];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  public cadastro(){
    this.httpClient.post('http://localhost:3017/cadastro', {nome : this.usuario, telefone : this.telefone}).toPromise().then((response : any)=> {
      this.usuario = '';
      this.telefone = '';
      this.listar();
    })
  }

  public delete(id : number){
   this.httpClient.delete('http://localhost:3017/cadastro/' + id).toPromise().then((response : any)=> {
    console.log("apagou")
    })
    this.listar();
  }

  public listar(){
    this.httpClient.get('http://localhost:3017/cadastro').toPromise().then((response : any) => {
      console.log(response);
      this.pessoas = response;
    });
  }


}
