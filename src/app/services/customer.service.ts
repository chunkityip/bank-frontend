import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../models/customer-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:9091/customer';

  constructor(private http: HttpClient) {}

  registerCustomer(name: string): Observable<CustomerDTO> {
    return this.http.post<CustomerDTO>(`${this.baseUrl}`, name);
  }

  getCustomerInfo(): Observable<CustomerDTO> {
    const customerId = localStorage.getItem('customerId');
    return this.http.get<CustomerDTO>(`${this.baseUrl}/${customerId}`);
  }
}
