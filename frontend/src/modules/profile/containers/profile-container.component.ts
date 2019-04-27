import { Component, OnDestroy } from '@angular/core';
import { AppState } from '../../app/types/AppState';
import { selectUser } from '../../app/selectors/selectUser';
import { select, Store } from '@ngrx/store';
import { ProfileParameters } from '../types/ProfileParameters';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TryToSaveProfileDataAction } from '../actions/TryToSaveProfileDataAction';

@Component({
    selector: 'ob-profile-container',
    template: `
        <div class="grid">
            <ob-block name="Profile">
                <div class="profile-container">
                    <ob-profile
                        [parameters]="parameters"
                        (changeParameters)="handleChangeParameters($event)"
                    ></ob-profile>
                    <div class="actions">
                        <ob-button
                            name="Back"
                            (click)="handleBack()"
                        ></ob-button>
                        <ob-button
                            name="Save"
                            (click)="handleSave()"
                        ></ob-button>
                    </div>
                </div>
            </ob-block>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                height: 100%;
                justify-items: center;
                align-items: center;
            }

            .profile-container {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-gap: 2rem;
                width: 40rem;
            }

            .actions {
                display: grid;
                grid-gap: 1rem;
                grid-auto-flow: column;
                justify-self: end;
                align-items: center;
            }
        `,
    ],
})
export class ProfileContainerComponent implements OnDestroy {
    public parameters: ProfileParameters = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    private userSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {
        this.userSubscription = this.store
            .pipe(select(selectUser))
            .subscribe(user => {
                if (user) {
                    this.parameters = {
                        ...this.parameters,
                        name: user.name,
                        email: user.email,
                    };
                }
            });
    }

    public handleChangeParameters(parameters: ProfileParameters) {
        this.parameters = parameters;
    }

    public handleSave() {
        this.store.dispatch(new TryToSaveProfileDataAction(this.parameters));
    }

    public handleBack() {
        this.router.navigate(['home']);
    }

    public ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
