import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyServiceService, SearchType } from 'src/app/service/rick-and-morty-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-details',
  templateUrl: './busca-details.page.html',
  styleUrls: ['./busca-details.page.scss'],
})
export class BuscaDetailsPage implements OnInit {
  info: any;


  constructor(private actRout: ActivatedRoute, private rickapi: RickAndMortyServiceService,  private http: HttpClient) { }
  
  ngOnInit() {
    const id = this.actRout.snapshot.paramMap.get('id');
    const type = this.actRout.snapshot.paramMap.get('type') as SearchType; 

    this.rickapi.getById(id, type).subscribe(result => this.info = result);
  }
  
  
  openURL(){
    window.open(this.info.Website,'_blank')
  }
}
