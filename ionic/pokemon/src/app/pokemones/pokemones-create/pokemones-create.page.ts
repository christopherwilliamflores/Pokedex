import { PokemonesService } from 'src/app/_services/pokemones.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pokemones-create',
  templateUrl: './pokemones-create.page.html',
  styleUrls: ['./pokemones-create.page.scss'],
})
export class PokemonesCreatePage implements OnInit {
  pokemonesForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private pokemonesService:PokemonesService,
    private router: Router
  ) {
    this.pokemonesForm = this.formBuilder.group({
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
  }


  addPokemon(values:any){
    this.pokemonesService.insertPokemon(values).subscribe(
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
