import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

import {environment} from './../../../../environments/environment';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('sholud return products', () => {
      // arrange - preparar
      const expectData = [
        {
          "title": "Gaseosa",
          "category": 2,
          "price": 10,
          "description": "Botella de gaseosa",
          "image": "https://firebasestorage.googleapis.com/image",
          "id": "1"
          },
          {
          "image": "https://firebasestorage.googleapis.com/image",
          "category": 2,
          "title": "Agua",
          "price": 5,
          "description": "Botella de agua",
          "id": "2"
          }
      ];

      let dataError;
      let dataResponse;

      // act - actuacion
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (err) => {
          dataError = err;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.api_url}`
      );
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });

  describe('tests for getProduct', () => {
    it('sholud return product by id', () => {
      // arrange - preparar
      const expectData = [
        {
          "title": "Gaseosa",
          "category": 2,
          "price": 10,
          "description": "Botella de gaseosa",
          "image": "https://firebasestorage.googleapis.com/image",
          "id": "1"
          }
      ];

      let dataError;
      let dataResponse;

      // act - actuacion
      service.getProduct("1").subscribe(
        (response) => {
          dataResponse = response;
        },
        (err) => {
          dataError = err;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.api_url}/1`
      );
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(1);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
