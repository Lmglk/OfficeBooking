import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PlaceIconComponent } from './components/place-icon/place-icon.component';
import { RoomIconComponent } from './components/room-icon/room-icon.component';
import { ExitIconComponent } from './components/exit-icon/exit-icon.component';
import { SearchIconComponent } from './components/search-icon/search-icon.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        UserIconComponent,
        PlaceIconComponent,
        RoomIconComponent,
        ExitIconComponent,
        SearchIconComponent,
    ],
    exports: [
        UserIconComponent,
        PlaceIconComponent,
        RoomIconComponent,
        ExitIconComponent,
        SearchIconComponent,
    ],
})
export class IconsModule {}
