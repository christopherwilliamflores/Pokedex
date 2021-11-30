import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/_services/pokemones.service';

@Component({
  selector: 'app-pokemones-view',
  templateUrl: './pokemones-view.page.html',
  styleUrls: ['./pokemones-view.page.scss'],
})
export class PokemonesViewPage implements OnInit {
  pokemon :any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
            data => {
            const pokemon_id = data.get('pokemon_id');

            this.pokemonService.getPokemonById(pokemon_id).subscribe(
              response => {
                console.log(response);
                this.pokemon = response
              },
              error => {
                console.error(error);
              }
              )
            }
          );
        }

      }
