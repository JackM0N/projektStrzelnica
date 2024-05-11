import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
// Service for handling CRUD operations on users
export class UserService {
  private baseUrl = 'http://localhost:8080/users';
  private postUrl = 'http://localhost:8080/users/add';
  private editUrl = 'http://localhost:8080/users/edit';
  private registerUrl = 'http://localhost:8080/register';
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  // Fetch paginated list of users from the database
  getPaginatedUsers(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', (page - 1).toString())
      .set('size', size.toString());
    return this.http.get<any>(this.baseUrl, {params});
  }
  
  // Editing a user in the database
  updateUser(user: Users): Observable<Users> {
    const url = `${this.editUrl}/${user.id}`;
    return this.http.put<Users>(url, user);
  }

  // Fetch a specific user from the database
  getUserById(userId: number): Observable<Users> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<Users>(url);
  }
  registerUser(userData: Users): Observable<any> {
    return this.http.post<any>(this.registerUrl, userData);
  }
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }
}