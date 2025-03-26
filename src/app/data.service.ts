import { Injectable, signal, WritableSignal } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  pokeData: WritableSignal<Pokemon[]> = signal([
    {
      id: 6,
      name: 'Charizard',
      type: 'Fire',
      selected: false,
      atk: 150,
      def: 150,
      sAtk: null,
      sDef: 100,
      image: 'assets/pokemon/Charizard.jpg',
    },
    {
      id: 12,
      name: 'Butterfree',
      type: 'Bug',
      selected: false,
      atk: null,
      def: 30,
      sAtk: 100,
      sDef: 50,
      image: 'assets/pokemon/Butterfree.png',
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      selected: false,
      atk: null,
      def: 80,
      sAtk: 150,
      sDef: 80,
      image: 'assets/pokemon/Pikachu.jpg',
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'Ghost',
      selected: false,
      atk: null,
      def: 200,
      sAtk: 160,
      sDef: 50,
      image: 'assets/pokemon/Gengar.jpg',
    },
    // {
    //   id: 132,
    //   name: "Ditto",
    //   type: "Normal",
    //   selected: false,
    //   atk: null,
    //   def: 100,
    //   sAtk: //oponents Atk,
    //   sDef: 100,
    // }
    {
      id: 133,
      name: 'Eevee',
      type: 'Normal',
      selected: false,
      atk: 999,
      def: 999,
      sAtk: 999,
      sDef: 999,
      image: 'assets/pokemon/Eevee.png',
      //no one defeats Eevee!
    },
    {
      id: 150,
      name: 'Mewtwo',
      type: 'Psychic',
      selected: false,
      atk: null,
      def: 150,
      sAtk: 200,
      sDef: 150,
      image: 'assets/pokemon/Mewtwo.png',
    },
    {
      id: 151,
      name: 'Mew',
      type: 'Psychic',
      selected: false,
      atk: null,
      def: 50,
      sAtk: 250,
      sDef: 50,
      image: 'assets/pokemon/Mew.jpg',
    },
    {
      id: 249,
      name: 'Lugia',
      type: 'Flying',
      selected: false,
      atk: 180,
      def: 180,
      sAtk: null,
      sDef: 180,
      image: 'assets/pokemon/Lugia.jpg',
    },
    {
      id: 282,
      name: 'Gardevoir',
      type: 'Psychic',
      selected: false,
      atk: null,
      def: 80,
      sAtk: 220,
      sDef: 120,
      image: 'assets/pokemon/Gardevoir.jpg',
    },
    {
      id: 289,
      name: 'Slaking',
      type: 'Normal',
      selected: false,
      atk: 300,
      def: 30,
      sAtk: null,
      sDef: 30,
      image: 'assets/pokemon/Slaking.jpg',
    },
    {
      id: 292,
      name: 'Shedinja',
      type: 'Ghost',
      selected: false,
      atk: null,
      def: null,
      sAtk: 10,
      sDef: 10,
      image: 'assets/pokemon/Shedinja.jpg',
    },
    {
      id: 334,
      name: 'Altaria',
      type: 'Flying',
      selected: false,
      atk: null,
      def: 100,
      sAtk: 120,
      sDef: 100,
      image: 'assets/pokemon/Altaria.jpg',
    },
    {
      id: 359,
      name: 'Absol',
      type: 'Dark',
      selected: false,
      atk: null,
      def: 150,
      sAtk: 120,
      sDef: 150,
      image: 'assets/pokemon/Absol.jpg',
    },
    {
      id: 384,
      name: 'Rayquaza',
      type: 'Dragon',
      selected: false,
      atk: null,
      def: 100,
      sAtk: 250,
      sDef: 80,
      image: 'assets/pokemon/Rayquaza.jpg',
    },
    {
      id: 399,
      name: 'Bidoof',
      type: 'Normal',
      selected: false,
      atk: 1,
      def: 1,
      sAtk: null,
      sDef: 1,
      image: 'assets/pokemon/Bidoof.jpeg',
      // 1% chance if selected to become "The Perfect Bidoof"
    },
    {
      id: 399,
      name: 'The Perfect Bidoof',
      type: 'God',
      selected: false,
      atk: 999,
      def: 999,
      sAtk: 999,
      sDef: 999,
      image: 'assets/pokemon/ThePerfectBidoof.jpg',
    },
    {
      id: 493,
      name: 'Arceus',
      type: 'Normal',
      selected: false,
      atk: null,
      def: 300,
      sAtk: 300,
      sDef: 300,
      image: 'assets/pokemon/Arceus.jpg',
    },
    {
      id: 577,
      name: 'Solosis',
      type: 'Psychic',
      selected: false,
      atk: null,
      def: 50,
      sAtk: 60,
      sDef: 100,
      image: 'assets/pokemon/Solosis.jpg',
    },
    {
      id: 607,
      name: 'Litwick',
      type: 'Fire',
      selected: false,
      atk: null,
      def: 70,
      sAtk: 70,
      sDef: 70,
      image: 'assets/pokemon/Litwick.jpg',
    },
    {
      id: 658,
      name: 'Greninja',
      type: 'Water',
      selected: false,
      atk: 220,
      def: 180,
      sAtk: null,
      sDef: 100,
      image: 'assets/pokemon/Greninja.jpg',
    },
    {
      id: 670,
      name: 'Floette',
      type: 'Fairy',
      selected: false,
      atk: null,
      def: 50,
      sAtk: 30,
      sDef: 50,
      image: 'assets/pokemon/Floette.jpg',
    },
    {
      id: 718,
      name: 'Zygarde',
      type: 'Dragon',
      selected: false,
      atk: 10,
      def: 10,
      sAtk: null,
      sDef: 10,
      image: 'assets/pokemon/Zygarde.jpg',
      // gains +10 to all stats for every loss, and +20 for everyone win
    },
    {
      id: 764,
      name: 'Comfey',
      type: 'Fairy',
      selected: false,
      atk: 20,
      def: 30,
      sAtk: null,
      sDef: 30,
      image: 'assets/pokemon/Comfey.jpg',
    },
    {
      id: 778,
      name: 'Mimikyu',
      type: 'Ghost',
      selected: false,
      atk: null,
      def: 500,
      sAtk: 500,
      sDef: 500,
      image: 'assets/pokemon/Mimikyu.jpg',
      //stats are only 100 if against a ghost type
    },
    {
      id: 840,
      name: 'Applin',
      type: 'Dragon',
      selected: false,
      atk: 10,
      def: 10,
      sAtk: null,
      sDef: 10,
      image: 'assets/pokemon/Applin.jpg',
    },
    {
      id: 869,
      name: 'Alcremie',
      type: 'Fairy',
      selected: false,
      atk: null,
      def: 10,
      sAtk: 120,
      sDef: 120,
      image: 'assets/pokemon/Alcremie.jpg',
    },
    {
      id: 887,
      name: 'Dragapult',
      type: 'Ghost',
      selected: false,
      atk: 180,
      def: 100,
      sAtk: null,
      sDef: 100,
      image: 'assets/pokemon/Dragapult.jpg',
    },
    {
      id: 890,
      name: 'Eternatus',
      type: 'Dragon',
      selected: false,
      atk: 250,
      def: 200,
      sAtk: null,
      sDef: 200,
      image: 'assets/pokemon/Eternatus.jpg',
    },
    {
      id: 908,
      name: 'Meowscarada',
      type: 'Grass',
      selected: false,
      atk: 170,
      def: 100,
      sAtk: null,
      sDef: 140,
      image: 'assets/pokemon/Meowscarada.jpg',
    },
    {
      id: 936,
      name: 'Armarouge',
      type: 'Psychic',
      selected: false,
      atk: 100,
      def: 250,
      sAtk: null,
      sDef: 150,
      image: 'assets/pokemon/Armarouge.jpg',
      //if Ceruledge is also in the selectable list, atk becomes 250
    },
    {
      id: 937,
      name: 'Ceruledge',
      type: 'Ghost',
      selected: false,
      atk: 250,
      def: 100,
      sAtk: null,
      sDef: 150,
      image: 'assets/pokemon/Ceruledge.jpg',
      // if Armarouge is also in the selectable list, def becomes 250
    },
    {
      id: 959,
      name: 'Tinkaton',
      type: 'Fairy',
      selected: false,
      atk: 250,
      def: 50,
      sAtk: null,
      sDef: 50,
      image: 'assets/pokemon/Tinkaton.jpg',
    },
    {
      id: 977,
      name: 'Dondozo',
      type: 'Water',
      selected: false,
      atk: 150,
      def: 150,
      sAtk: null,
      sDef: 150,
      image: 'assets/pokemon/Dondozo.jpg',
    },
    {
      id: 978,
      name: 'Tatsugiri',
      type: 'Water',
      selected: false,
      atk: 10,
      def: 10,
      sAtk: null,
      sDef: 10,
      image: 'assets/pokemon/Tatsugiri.jpg',
      //if Dondozo in also in the selectable list, stats all become 400
    },
    {
      id: 999,
      name: 'Gimmighoul',
      type: 'Ghost',
      selected: false,
      atk: 25,
      def: 25,
      sAtk: null,
      sDef: 25,
      image: 'assets/pokemon/Gimmighoul.jpg',
    },
    {
      id: 1000,
      name: 'Gholdengo',
      type: 'Ghost',
      selected: false,
      atk: 250,
      def: 250,
      sAtk: null,
      sDef: 250,
      image: 'assets/pokemon/Gholdengo.jpg',
      //Will only enter list after Gimighoul has 10 wins
    },
  ]);
}
