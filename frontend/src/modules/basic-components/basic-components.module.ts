import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
    ],
    exports: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
    ],
})
export class BasicComponentsModule {}
