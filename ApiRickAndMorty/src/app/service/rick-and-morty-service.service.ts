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
  private baseUrl = 'https://rickandmortyapi.com/api/';
  
  constructor(private http: HttpClient) {}

  searchCharacters(name: string = ''): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(`${this.baseUrl}character`, { params });
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${id}`);
  }

  searchEpisodes(name: string = ''): Observable<any> {
    const params = new HttpParams().set('name', name);
    return this.http.get(`${this.baseUrl}episode`, { params });
  }

  getEpisodeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}episode/${id}`);
  }

  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}character`);
  }

  getAllEpisodes(): Observable<any> {
    return this.http.get(`${this.baseUrl}episode`);
  }
}
