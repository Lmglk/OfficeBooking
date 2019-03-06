import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { RoomInfoContainerComponent } from './containers/room-info-container/room-info-container.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';

@NgModule({
    declarations: [
        RoomInfoContainerComponent,
        RoomInfoComponent,
        SectionComponent,
    ],
    imports: [CommonModule, BasicComponentsModule],
    exports: [RoomInfoContainerComponent],
})
export class RoomInfoModule {}
