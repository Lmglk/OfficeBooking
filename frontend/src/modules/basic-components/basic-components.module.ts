import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [BlockComponent, ButtonComponent],
    imports: [CommonModule],
    exports: [BlockComponent, ButtonComponent],
})
export class BasicComponentsModule {}
