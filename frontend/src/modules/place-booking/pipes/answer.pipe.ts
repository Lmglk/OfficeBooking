import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'answer',
})
export class AnswerPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Yes' : 'No';
    }
}
