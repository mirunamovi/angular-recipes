import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a tests', 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0640-juicy-burger-in-vibrant-interior1.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=8062cdaab379716a1c6cb7aec2a0f281')
  ];

  constructor(){}

  ngOnInit(){}
}
