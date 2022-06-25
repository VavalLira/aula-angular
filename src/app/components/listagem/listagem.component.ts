import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { userModel } from 'src/app/model/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit, AfterViewInit, OnDestroy  {

  public users!: Array<userModel>;

  constructor(
    private usersService: UsersService
  ) {  
    console.log('constructor')
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.getUsers();
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.ngOnDestroy();
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users)
      }
    )
  }

  

}
