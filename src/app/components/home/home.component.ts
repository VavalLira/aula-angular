import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 @Input()
  public pipoca = 'Moderna Tecnologia';

  public soma: number = 0;
  public n1: number = 0;
  public n2: number = 0;

  constructor(
    private rota: Router
  ) { }

  ngOnInit(): void {
  }

  public trocaFrase() {
    this.pipoca = 'Bom dia!!!';
  }

  public somar() {
    this.soma = this.n1 + this.n2;

    this.n1++
    this.n2++
  }


  public trocarRota() {
    this.rota.navigate(['/login']);
  }
}
