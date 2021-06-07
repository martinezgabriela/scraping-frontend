import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'rxjs';
import { Noticia, NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';

@Component({
  selector: 'app-list-noticias',
  templateUrl: './list-noticias.component.html',
  styleUrls: ['./list-noticias.component.scss']
})
export class ListNoticiasComponent implements OnInit {

  newsList: NoticiaResponse;
  newsListArray: Array<Noticia>

  constructor(
    private noticiaService: NoticiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.noticiaService.getNewsList().subscribe(data => this.newsList = data);
     this.newsListArray = this.newsList.noticias;
  }

  return(){
    this.router.navigate(['']);
  }

}
