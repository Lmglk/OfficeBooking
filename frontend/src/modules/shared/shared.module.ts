import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { ErrorComponent } from './components/error/error.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    imports: [CommonModule, IconsModule],
    declarations: [SectionComponent, ErrorComponent],
    exports: [SectionComponent, ErrorComponent],
})
export class SharedModule {}
