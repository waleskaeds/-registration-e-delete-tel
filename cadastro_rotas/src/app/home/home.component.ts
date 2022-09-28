import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Login';
  usuario : string = '';
  senha : string = '';
  pessoas : Array<any> = [];
  log : boolean = false
  token: string = '';

  constructor(private httpClient : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  public login(){
    this.httpClient.post('http://localhost:3017/login', {name : this.usuario, password : this.senha}).toPromise().then((response : any)=> {
      console.log(response);
      if(response.auth){
        this.log = true;
        window.localStorage.setItem('token', response.token);
        this.router.navigate(['/cadastro'])
        console.log("logado")
      } 
    })
  }

}
