import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Busca usuario de acordo com parametros
   * 
   * @param email email passado pela tela de login
   * @param senha senha passado pela tela de login
   * @returns Observable userModel
   */
  public getUser(email: string, senha: string): Observable<Array<userModel>> {
    const params = new HttpParams()
    .set('email', email)
    .set('senha', senha);

    return this.http.get<Array<userModel>>('http://localhost:3000/users', { params });
  }

  /**
   * 
   * @returns Observable userModel
   */
  public getUsers(): Observable<Array<userModel>>{ 
    return this.http.get<Array<userModel>>('http://localhost:3000/users');
  }
}
