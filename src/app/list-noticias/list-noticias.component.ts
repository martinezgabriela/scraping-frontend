import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia, NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';





@Component({
  selector: 'app-list-noticias',
  templateUrl: './list-noticias.component.html',
  styleUrls: ['./list-noticias.component.scss']
})
export class ListNoticiasComponent implements OnInit {

  newsList: NoticiaResponse;
  newsListArray: Array<Noticia>;
  formatedDate: string;

  constructor(
    private noticiaService: NoticiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList(){
    this.noticiaService.getNewsList().subscribe(data => this.newsList = data);
    this.newsListArray = this.newsList.noticias;
    if (this.newsListArray && this.newsListArray.length) {
      this.newsListArray.forEach(element => {
        element.data = dayjs(element.data).format('DD/MM/YYYY HH:hh');
      });
    };

  }


  return() {
    this.router.navigate(['']);
  }

}
