import { Recipe } from "./recipe.model";
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelelcted = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a tests', 
            'https://th.bing.com/th/id/OIP.19s8OWv--AEKxbZAqh58NAHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)

            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a tests', 
            'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0640-juicy-burger-in-vibrant-interior1.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=8062cdaab379716a1c6cb7aec2a0f281',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    };

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}