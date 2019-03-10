import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../types/AppState';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../selectors/selectUser';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    private readonly isUserExist$: Observable<boolean>;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {
        this.isUserExist$ = this.store.pipe(
            select(selectUser),
            map(user => !!user),
            tap(isExistUser => {
                if (!isExistUser) {
                    this.router.navigate(['login']);
                }
            })
        );
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.isUserExist$;
    }
}
