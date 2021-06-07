import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia, NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)
dayjs("DD MMM YYYY HH:mm")


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
     this.newsListArray.forEach(element => {
       console.log(element.data)
       element.data = element.data?.replace(/h/g, ':');
       element.data = dayjs(element.data).format('DD/MM/YYYY HH:mm');
       console.log(element.data)
     });
  }

  return(){
    this.router.navigate(['']);
  }

}
