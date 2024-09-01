import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:9091'; // Base URL of your backend

  constructor(private http: HttpClient) {}

  // Register a new customer with a provided name
  registerCustomer(name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/customer`, name, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Login by retrieving customer details with customer ID
  loginCustomer(customerId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customer/${customerId}`);
  }

  // Get all bank accounts associated with the customer ID
  getCustomerAccounts(customerId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/account/customer/${customerId}/accounts`);
  }
}
