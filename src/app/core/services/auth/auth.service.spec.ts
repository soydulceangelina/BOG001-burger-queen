import { TestBed } from '@angular/core/testing';
import {AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp} from '@angular/fire'


import { AuthService } from './auth.service';

xdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
