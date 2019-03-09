import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomInfoContainerComponent } from './containers/room-info-container/room-info-container.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [RoomInfoContainerComponent, RoomInfoComponent],
    imports: [CommonModule, BasicComponentsModule, SharedModule],
    exports: [RoomInfoContainerComponent],
})
export class RoomInfoModule {}
