import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {RouteStrategyFactory} from './route-strategy-factory';
import { AppContext } from '../contexts/app-context';

@Injectable()
export class GlobalHttpExceptionHandller implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private routeStrategyFactory: RouteStrategyFactory,
    private appContext: AppContext) {
  }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    this.doHandleUnauthorizedAndForbidden(error);
                }
                return throwError(error);
            }));
    }

    private doHandleUnauthorizedAndForbidden(error: any) {
        if (error.status === 401 || error.status === 403) {
            const userOptions = this.appContext.getUserOption();
            
            if (userOptions.getRemember()) {
                this.authService.reauthenticate().then((res) => {
                    this.routeStrategyFactory.createStrategy(!!res).redirect();
                });
                return;            
            }
        }
        this.authService.logout();
        this.routeStrategyFactory.createStrategy().redirect();
    }
}
