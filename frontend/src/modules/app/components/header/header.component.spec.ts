import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/reducers/user.reducer';
import { AppState } from '../../types/AppState';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, LogoComponent, UserMenuComponent],
            imports: [
                StoreModule.forRoot({
                    userState: userReducer,
                } as ActionReducerMap<AppState>),
            ],
        }).compileComponents();

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
