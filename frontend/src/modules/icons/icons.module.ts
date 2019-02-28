import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
    declarations: [UserIconComponent],
    imports: [CommonModule],
    exports: [UserIconComponent],
})
export class IconsModule {}
