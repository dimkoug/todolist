import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  baseurl = 'http://127.0.0.1:8000';
  HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<any> {
          return this.http.get(this.baseurl + '/api/todos/', {headers: this.HttpHeaders});
  }
  getTodo(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/todos/' + id + '/', {headers: this.HttpHeaders});
  }
  updateTodo(todo): Observable<any> {
    const body = {name: todo.name};
    return this.http.put(this.baseurl + '/api/todos/' + todo.id + '/', body, {headers: this.HttpHeaders});
  }
  createTodo(todo): Observable<any> {
    const body = {name: todo.name};
    return this.http.post(this.baseurl + '/api/todos/', body, {headers: this.HttpHeaders});
  }
  deleteTodo(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/todos/' + id + '/', {headers: this.HttpHeaders});
  }
}
