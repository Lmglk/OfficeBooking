import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../../authorization/actions/LogoutAction';
import { Router } from '@angular/router';

@Component({
    selector: 'ob-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements AfterViewInit {
    @ViewChild('menu') public menu: ElementRef;

    @Input() public userName: string;

    public menuWidth = 0;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {}

    public ngAfterViewInit(): void {
        setTimeout(
            () => (this.menuWidth = this.menu.nativeElement.clientWidth)
        );
    }

    public handleLogout() {
        this.store.dispatch(new LogoutAction());
    }

    public handleOpenProfile() {
        this.router.navigate(['profile']);
    }
}
