import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9091';
  private customerId: number | null = null;

  constructor(private http: HttpClient) {}

  login(customerId: number): Observable<boolean> {
    return this.http.get<any>(`${this.baseUrl}/customer/${customerId}`)
      .pipe(map(response => {
        if (response) {
          this.customerId = customerId;
          localStorage.setItem('customerId', customerId.toString());
          return true;
        }
        return false;
      }));
  }

  getCustomerId(): number | null {
    return this.customerId;
  }
}
