import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/service/rick-and-morty-service.service';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})

export class BuscaPage implements OnInit{
  characterName: string = '';
  episodeName: string = '';
  characterResults: any[] = [];
  episodeResults: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyServiceService) {}

  searchCharacters() {
    this.rickAndMortyService
      .searchCharacters(this.characterName)
      .subscribe((data) => {
        this.characterResults = data.results;
      });
  }

  searchEpisodes() {
    this.rickAndMortyService
      .searchEpisodes(this.episodeName)
      .subscribe((data) => {
        this.episodeResults = data.results;
      });
  }
  ngOnInit() {
  }
}