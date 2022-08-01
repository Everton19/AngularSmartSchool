import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { id: 1, nome: 'Shanks', disciplina: 'Matemática' },
    { id: 2, nome: 'Big Mom', disciplina: 'Física' },
    { id: 3, nome: 'Kaidou', disciplina: 'Portugûes' },
    { id: 4, nome: 'Teach', disciplina: 'Inglês' },
    { id: 5, nome: 'Edward Newgate', disciplina: 'Programação' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
