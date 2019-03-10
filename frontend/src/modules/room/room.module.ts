import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomInfoContainerComponent } from './containers/room-info-container/room-info-container.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { SharedModule } from '../shared/shared.module';
import { RoomListContainerComponent } from './containers/room-list-container/room-list-container.component';
import { RoomLayoutComponent } from './components/room-layout/room-layout.component';
import { IconsModule } from '../icons/icons.module';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './effects/room.effects';
import { AddRoomModalContainerComponent } from './containers/add-room-modal-container/add-room-modal-container.component';
import { AddRoomModalContentComponent } from './components/add-room-modal-content/add-room-modal-content.component';

@NgModule({
    declarations: [
        RoomLayoutComponent,
        RoomInfoComponent,
        RoomInfoContainerComponent,
        RoomListContainerComponent,
        AddRoomModalContainerComponent,
        AddRoomModalContentComponent,
    ],
    imports: [
        CommonModule,
        BasicComponentsModule,
        SharedModule,
        IconsModule,
        EffectsModule.forFeature([RoomEffects]),
    ],
    entryComponents: [AddRoomModalContainerComponent],
    exports: [RoomLayoutComponent],
})
export class RoomModule {}
