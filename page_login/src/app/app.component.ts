import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';
  usuario : string = '';
  senha : string = '';
  log : boolean = false;
  telefone : string = '';
  pessoas : Array<any> = [];
  token: string = '';
  constructor(private httpClient : HttpClient){

  }

  public login(){
    this.httpClient.post('http://localhost:3017/login', {name : this.usuario, password : this.senha}).toPromise().then((response : any)=> {
      console.log(response);
      this.usuario = '';
      this.telefone = '';
      if(response.auth){
        this.token = response.token;
        this.log = true;
        console.log("logado")
      } 
    })
  }

  public cadastro(){
    this.httpClient.post('http://localhost:3017/cadastro', {nome : this.usuario, telefone : this.telefone}).toPromise().then((response : any)=> {
      this.usuario = '';
      this.telefone = '';
      this.listar();
    })
  }

  public delete(id : number){
   this.httpClient.delete('http://localhost:3017/cadastro/' + id + '/'+this.token ).toPromise().then((response : any)=> {

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
