import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  standalone: true,
  styleUrls: ['./livro-lista.component.css'] 
})
export class LivroListaComponent {

  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = []

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.servLivros.obterLivros().then(livros => {
      this.livros = livros;
    });
  }

  excluir = (codigo: string): void => {
    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then(livros => {
        this.livros = livros;
      });
    });
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  }

}
