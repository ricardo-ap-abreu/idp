import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppContext} from '../contexts/app-context';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public auth: AppContext) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;
    let userId: string;

    const userCredentials = this.auth.getUserCredential();
    if (userCredentials && userCredentials.token && userCredentials.userId) {
      token = userCredentials.token;
      userId = userCredentials.userId;
    } else {
      const serviceCredentials = this.auth.getServiceCredential();
      if (serviceCredentials && serviceCredentials.token) {
        token = serviceCredentials.token;
      }
    }

    if (token) {
      if (userId) {
        request = this.requestClone({Authorization: `Bearer ${token}`, UserId: userId}, request);
      } else {
        request = this.requestClone({Authorization: `Bearer ${token}`}, request);
      }
    }

    return next.handle(request);

  }

  private requestClone(headers: { [name: string]: string | string[]; }, request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: headers
    });
  }
}
