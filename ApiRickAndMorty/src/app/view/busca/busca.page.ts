import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService, SearchType } from 'src/app/service/rick-and-morty-service.service';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})

export class BuscaPage implements OnInit{
  searchTerms: string = '';
  result! : Observable<any>;
  episodeResults: any[] = [];
  type : SearchType = SearchType.Episode;

  constructor(private rickAndMortyService: RickAndMortyServiceService) {}

  search() {
    this.result = this.rickAndMortyService.getAll(this.searchTerms, this.type).pipe(
      map(results => results['results'])
    );
  }
  

  ngOnInit() {
  }
}