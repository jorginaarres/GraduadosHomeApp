export class Recipe {
  // Nom del producte
  name: string;

  // Llista d'ingredients de la recepta amb la seva quantitat. Format: Producte - quantitat
  ingredients: Array<string>;

  // Lista de passos a seguir per fer la recepta
  instructions: Array<string>;

  // Path de la foto de la recepta
  photo: string;
}
