import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ListNoticiasComponent } from '../list-noticias/list-noticias.component';
import { Noticia, NoticiaResponse } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent
      ],
      imports: [MatSnackBarModule,
      HttpClientModule,
      NoopAnimationsModule,
      BrowserAnimationsModule,
      RouterTestingModule.withRoutes(
        [{
          path: "",
          component: HomeComponent
        },
          {
          path: "list",
          component: ListNoticiasComponent
        
        }]
      )],
      providers:[ FormBuilder, NoticiaService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should teste findByWord and expect to open message ', () => {
    let mockResponse = new NoticiaResponse();
    mockResponse.noticias = []; 
    spyOn(component['noticiasService'], 'findByWord')
    .and.returnValue(of(mockResponse));
    spyOn(component['noticiasService'], 'showMessage');
    component.findByWord();
    expect(component['noticiasService'].showMessage).toHaveBeenCalled();
  });  

  it('should teste findAll and expect to open message ', () => {
    let mockResponse = new NoticiaResponse();
    mockResponse.noticias = []; 
    spyOn(component['noticiasService'], 'findAll')
    .and.returnValue(of(mockResponse));
    spyOn(component['noticiasService'], 'showMessage');
    component.findAll();
    expect(component['noticiasService'].showMessage).toHaveBeenCalled();
  });

  it('should teste findAll and expect to navigate ', () => {
    let mockResponse = new NoticiaResponse();
    mockResponse.noticias = [new Noticia()]; 
    spyOn(component['noticiasService'], 'findAll')
    .and.returnValue(of(mockResponse));
    spyOn(component['router'], 'navigate');
    component.findAll();
    expect(component['newsList']).toBeTruthy();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/list']);
  });

  
  
});
