import { Component, Input } from '@angular/core';

@Component({
    selector: 'ob-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
    @Input() userName: string;
}
