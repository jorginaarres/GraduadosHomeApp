export class Product {
  // Nom del producte
  name: string;

  // Quantitat del producte
  quantity: number;

  // Unitats de la quantitat del producte
  units: string;

  // Data de caducitat del producte
  expirationDate: Date;

  // Path de la foto del producte
  photo: string;

  // True, el producte es d'un reservat. False altrament.
  reserved: boolean;

  // Propietari del producte
  owner: string;
}
