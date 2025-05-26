import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Viagem Estudada'},
    {codEditora: 2, nome: 'Saraiva'},
    {codEditora: 3, nome: 'J.K Rolling'}
  ];

  constructor() { }

  getNomeEditora(codEditora: number = 0): string | undefined {
    const resultado = this.editoras.filter((editora) => editora.codEditora === codEditora);
    return resultado[0]?.nome;

    /*Better Version*/
    /*const editora = this.editoras.find(e => e.codEditora === codEditora);
      return editora?.name*/
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}
