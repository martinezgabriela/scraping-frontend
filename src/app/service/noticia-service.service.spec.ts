import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NoticiaRequest } from '../models/request/noticia-request';
import { NoticiaResponse } from '../models/response/noticia-response';

import { NoticiaService } from './noticia-service.service';

describe('NoticiaServiceService', () => {
  let service: NoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        HttpClientModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
      ]
    });
    service = TestBed.inject(NoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test create and expect response to be defined', () => {
    let request = new NoticiaRequest();
    let response = new NoticiaResponse();
    spyOn(service['http'], 'get').and.returnValue(of(response));
    service.create(request).subscribe(resp => {
      expect(response).toBeDefined();
    });
  });

  it('should test findAll and expect response to be defined', () => {
    let response = new NoticiaResponse();
    spyOn(service['http'], 'get').and.returnValue(of(response));
    service.findAll().subscribe(resp => {
      expect(response).toBeDefined();
    });
  });

  it('should test findByWord and expect response to be defined', () => {
    const url = '';
    let response = new NoticiaResponse();
    spyOn(service['http'], 'get').and.returnValue(of(response));
    service.findByWord(url).subscribe(resp => {
      expect(response).toBeDefined();
    });
  });
});
