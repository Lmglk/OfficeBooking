import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [BlockComponent, ButtonComponent, InputComponent],
    imports: [CommonModule],
    exports: [BlockComponent, ButtonComponent, InputComponent],
})
export class BasicComponentsModule {}
