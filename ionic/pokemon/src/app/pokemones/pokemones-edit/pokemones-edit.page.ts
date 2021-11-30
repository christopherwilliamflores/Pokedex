import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PokemonesService} from 'src/app/_services/pokemones.service';

@Component({
  selector: 'app-pokemones-edit',
  templateUrl: './pokemones-edit.page.html',
  styleUrls: ['./pokemones-edit.page.scss'],
})
export class PokemonesEditPage implements OnInit {
  pokemon_id: any;
  pokemon: any;
  pokemonForm: FormGroup;
  constructor(
    private pokemonesService: PokemonesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.pokemonForm = this.formBuilder.group({
    pokemon_id: [''],
    nombre: [''],
    altura: [''],
    categoria: [''],
    peso: [''],
    habilidad: [''],
    tipo: [''],
    pokemon_img_url: ['']
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.pokemon_id = data.get('pokemon_id');

        this.pokemonesService.getPokemonById(this.pokemon_id).subscribe(
          response =>{
            console.log(response)
            this.pokemon = response;
            this.pokemonForm.patchValue(response);
          },
          error => {
            console.error(error)
          }
          )

        }
      )
  }

  updatePokemon(pokemon: any){
    this.pokemonesService.updatePokemon(this.pokemon_id, pokemon).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemones']);
      },
      error =>{
        console.error(error)
      }
    )
   }
 }
