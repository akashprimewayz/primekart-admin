import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private crudService: CrudService
  ) {
  }

}
