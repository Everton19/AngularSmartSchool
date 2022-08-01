import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'Luffy', sobrenome: 'Monkey', telefone: 33225555 },
    { id: 2, nome: 'Zoro', sobrenome: 'Roronoa', telefone: 11223333 },
    { id: 3, nome: 'Nami', sobrenome: 'Bellmare', telefone: 44556666 },
    { id: 4, nome: 'Ussop', sobrenome: 'Yassop', telefone: 77889999 },
    { id: 5, nome: 'Sanji', sobrenome: 'Vinsmoke', telefone: 99112222 },
    { id: 6, nome: 'Chopper', sobrenome: 'Tony Tony', telefone: 33445555 },
    { id: 7, nome: 'Yamao', sobrenome: 'Kaidou', telefone: 55667777 },
  ];

  constructor() { }

  ngOnInit() {
  }

}