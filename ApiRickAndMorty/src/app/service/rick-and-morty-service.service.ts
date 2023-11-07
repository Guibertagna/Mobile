import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum SearchType {
  Character = 'character',
  Episode = 'episode',
}
@Injectable({
  providedIn: 'root',
})
export class RickAndMortyServiceService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  
  constructor(private http: HttpClient) {}
  getAll(title: string, tipo: SearchType): Observable<any> {
    const url = `${this.baseUrl}/${tipo}/?name=${encodeURI(title)}`;
    return this.http.get(url);
  }
  getById(id: any, tipo: SearchType) {
    const url = `${this.baseUrl}/${tipo}/${id}`;
    
    return this.http.get(url);
  }
  
}
