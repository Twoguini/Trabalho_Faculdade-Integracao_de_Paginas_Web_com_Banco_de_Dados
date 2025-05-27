import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Observable } from 'rxjs';

interface LivroMongo {
  _id: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

const baseURL = "http://localhost:3030/livros";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() { }

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const livrosMongo: LivroMongo[] = await response.json();
    
    return livrosMongo.map(lm => ({
      codigo: lm._id,  
      codEditora: lm.codEditora,
      titulo: lm.titulo,
      resumo: lm.resumo,
      autores: lm.autores
    }));
  }

  async incluir(livro: Livro): Promise<boolean> {
     const { codigo, ...livroMongo } = livro;

    console.log(livroMongo);

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo)
    });

    return response.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });

    return response.ok;
  }
}
