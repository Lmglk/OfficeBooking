import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
    ],
    exports: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
    ],
})
export class BasicComponentsModule {}
