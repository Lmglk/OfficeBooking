import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';

@NgModule({
    declarations: [BlockComponent],
    imports: [CommonModule],
    exports: [BlockComponent],
})
export class BasicComponentsModule {}
