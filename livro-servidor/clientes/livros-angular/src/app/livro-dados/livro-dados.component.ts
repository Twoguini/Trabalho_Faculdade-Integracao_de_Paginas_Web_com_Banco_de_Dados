import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-livro-dados',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {

  public livro: Livro = {
    codigo: '',
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: []
  };

  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  
  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) {}

  ngOnInit():void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}
