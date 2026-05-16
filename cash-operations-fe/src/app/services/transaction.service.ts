import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Transaction, TransactionCreate, TransactionUpdate } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly baseUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  create(dto: TransactionCreate): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, dto);
  }

  update(id: number, dto: TransactionUpdate): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
