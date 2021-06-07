import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaRequest } from '../models/request/noticia-request';
import { NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup;
  newsList: NoticiaResponse;

  constructor(
    private formBuilder: FormBuilder,
    private noticiasService: NoticiaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      url: [null],
      searchWord: [null]
    })
  }

  create() {
    let request = new NoticiaRequest();
    request.url = this.formulario.controls.url.value;
    this.noticiasService.create(request).subscribe(() => this.noticiasService.showMessage('Notícia criada'));
  }

  findByWord() {
    let searchWord = this.formulario.controls.searchWord.value;
    if (searchWord) {
      this.noticiasService.findByWord(searchWord).subscribe(data => {
        if (data && data.noticias.length) {
          this.newsList = data;
          this.setNewsList(this.newsList);
          this.router.navigate(['/list']);
        } else {
          this.noticiasService.showMessage('Nenhuma notícia encontrada.')
        }
      });
    } this.noticiasService.showMessage('Digite uma palavra-chave.')

  }

  findAll() {
    this.noticiasService.findAll().subscribe(data => {
      if (data && data.noticias.length) {
        this.newsList = data;
        this.setNewsList(this.newsList);
        this.router.navigate(['/list']);
      } else {
        this.noticiasService.showMessage('Nenhuma notícia cadastrada.')
      }
    });
  }

  setNewsList(newsList: NoticiaResponse) {
    this.noticiasService.setNewsList(newsList);
  }

}

