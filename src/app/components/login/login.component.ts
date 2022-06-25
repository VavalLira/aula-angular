import { Component, OnInit, ɵɵngDeclareClassMetadata } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public senha = '';
  public erro = false;
  constructor(
    private rota: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {}

  public entrar(): void {
    console.log('email', this.email);
    console.log('senha', this.senha);

    this.usersService.getUser(this.email, this.senha)
    .subscribe(
      {
        next: (response) => {
          console.log(response);
          if(response.length !== 0){
            console.log('opa');
            this.rota.navigate(['/lista']);
          } else {
            this.erro = true;
          }
        },
        error: (error) => console.log(error),
      }
    );

    // function testes() {}
    // teste();

    // const teste = () => {}
    // teste();

    // (param, param2) => {
    //   return 'eqweq'
    // }
    // () => 'eqweq'


    
  }

}
