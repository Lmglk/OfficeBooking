import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsLayoutComponent } from './components/rs-layout/rs-layout.component';
import { RsCellComponent } from './components/rs-cell/rs-cell.component';
import { RoomSchemeContainerComponent } from './containers/room-scheme-container/room-scheme-container.component';
import { RsCanvasComponent } from './components/rs-canvas/rs-canvas.component';
import { RsLegendItemComponent } from './components/rs-legend-item/rs-legend-item.component';
import { RsLegendComponent } from './components/rs-legend/rs-legend.component';
import { RsBorderComponent } from './components/rs-border/rs-border.component';

@NgModule({
    declarations: [
        RsLayoutComponent,
        RsCellComponent,
        RoomSchemeContainerComponent,
        RsCanvasComponent,
        RsLegendItemComponent,
        RsLegendComponent,
        RsBorderComponent,
    ],
    imports: [CommonModule],
    exports: [RoomSchemeContainerComponent],
})
export class RoomSchemeModule {}
