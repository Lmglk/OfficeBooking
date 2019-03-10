import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ListComponent } from './components/list/list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonPlateComponent } from './components/button-plate/button-plate.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
        CheckboxComponent,
        ButtonPlateComponent,
    ],
    exports: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
        CheckboxComponent,
        ButtonPlateComponent,
    ],
})
export class BasicComponentsModule {}
