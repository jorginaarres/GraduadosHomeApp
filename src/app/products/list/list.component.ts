import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Product: Product[] = [
    {
      name: 'Formatge',
      quantity: 1,
      units: 'bola',
      expirationDate: new Date('2020-01-16'),
      photo: 'https://as01.epimg.net/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg',
      reserved: false,
      owner: 'Quim Lazaro'
    },
    {
      name: 'Llet',
      quantity: 1,
      units: 'litre',
      expirationDate: new Date('2020-01-16'),
      photo: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201809/11/00120912100078____3__600x600.jpg',
      reserved: true,
      owner: 'Juan Salmeron'
    },
    {
      name: 'Huesitos',
      quantity: 8,
      units: 'barrita',
      expirationDate: new Date('2020-12-24'),
      photo: 'https://media1.cestaclick.es/149-thickbox_default/Valor-Chocolatinas-Huesitos-Original-6-Unidades-120g.jpg',
      reserved: false,
      owner: 'Juan Salmeron'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  requestProduct($event: any): void {
    console.log($event);
  }
}
