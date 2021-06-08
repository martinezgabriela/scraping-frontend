import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia, NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-BR';
import { formatDate } from '@angular/common';
dayjs.extend(customParseFormat)
dayjs("DD-MM-YYYY HH:mm")




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
    this.noticiaService.getNewsList().subscribe(data => this.newsList = data);
    this.newsListArray = this.newsList.noticias;
    if (this.newsListArray && this.newsListArray.length) {
      this.newsListArray.forEach(element => {
        let arraySrtrns = element.data.split(' ');      
        this.formatedDate =  this.formatDate(arraySrtrns);  
      });
    };
  }

  formatDate(arraySrtrns: Array<string>){
    let day = arraySrtrns[0];
    let month = this.getMonth(arraySrtrns[1].substr(0, 3));
    let year = arraySrtrns[2];
    let hourMinute = arraySrtrns[3].replace('h', ':');
    let formatdDate = day.concat('/', month, '/', year, ' ', hourMinute);
    return formatdDate;
  }


  getMonth(month: string) {
    switch (month) {
      case 'jan':
        return '01';
        break;
      case 'fev':
        return '02';
        break;
      case 'mar':
        return '03';
        break;
      case 'abr':
        return '04';
        break;
      case 'maio':
        return '05';
        break;
      case 'mai':
        return '05';
        break;
      case 'jun':
        return '06';
        break;
      case 'jul':
        return '07';
        break;
      case 'ago':
        return '08';
        break;
      case 'set':
        return '09';
        break;
      case 'out':
        return '10';
        break;
      case 'nov':
        return '11';
        break;
      case 'dez':
        return '12';
        break;
      default:
        return month
    }
  }



  return() {
    this.router.navigate(['']);
  }

}
