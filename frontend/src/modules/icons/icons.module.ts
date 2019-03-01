import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PlaceIconComponent } from './components/place-icon/place-icon.component';
import { RoomIconComponent } from './components/room-icon/room-icon.component';

@NgModule({
    imports: [CommonModule],
    declarations: [UserIconComponent, PlaceIconComponent, RoomIconComponent],
    exports: [UserIconComponent, PlaceIconComponent, RoomIconComponent],
})
export class IconsModule {}
