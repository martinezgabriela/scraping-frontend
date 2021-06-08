import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { Noticia } from '../models/response/noticia-response';
import { NoticiaService } from '../service/noticia-service.service';

import { ListNoticiasComponent } from './list-noticias.component';

describe('ListNoticiasComponent', () => {
  let component: ListNoticiasComponent;
  let fixture: ComponentFixture<ListNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNoticiasComponent ],
      imports: [MatSnackBarModule,
        HttpClientModule,
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
      providers:[ NoticiaService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.newsListArray = [];
    expect(component).toBeTruthy();
  });

  it('should test return', () => {
    spyOn(component['router'], 'navigate');
    component.return();
    expect(component['router'].navigate).toHaveBeenCalledWith(['']);
  });



});
