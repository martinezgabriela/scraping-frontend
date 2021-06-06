import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NoticiaRequest } from '../models/request/noticia-request';
import { NoticiaResponse } from '../models/response/noticia-response';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api/v1/noticias";
  newsList =  new BehaviorSubject<NoticiaResponse>(new NoticiaResponse);

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  setNewsList(newsList: NoticiaResponse){
    this.newsList.next(newsList);
  }

  getNewsList() {
    return this.newsList.asObservable();
  }

  create(noticiaRequest: NoticiaRequest): Observable<NoticiaResponse> {
    return this.http.post<NoticiaResponse>(this.baseUrl, noticiaRequest).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findAll(): Observable<NoticiaResponse>{
    return this.http.get<NoticiaResponse>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findByWord(searchWord: string): Observable<NoticiaResponse>{
    const url = `${this.baseUrl}/${searchWord}`;
    return this.http.get<NoticiaResponse>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }




}


