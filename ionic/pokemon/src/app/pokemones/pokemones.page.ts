import { Component, OnInit } from '@angular/core';
import {PokemonesService} from '../_services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {

  pokemones: any[];

  constructor(
    private pokemonesService: PokemonesService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(): void {
    this.pokemonesService.getPokemones().subscribe(data  =>{
      this.pokemones = data;
    })
  }



}
