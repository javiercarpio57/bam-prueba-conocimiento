import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDashboard } from '../interfaces/IDashboard';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `http://localhost:3000/cliente`;
  }

  GetDashboard(): Promise<IDashboard | undefined> {
    const url = `${this.url}/dashboard`;
    return this.http.get<IDashboard>(url).toPromise();
  }
}
