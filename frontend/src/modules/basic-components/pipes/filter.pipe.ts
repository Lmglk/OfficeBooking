import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe<T> implements PipeTransform {
    transform(values: T[], bindValue: keyof T, searchString: string = ''): T[] {
        if (!bindValue) {
            return values;
        }

        return values.filter(value => {
            const str = value[bindValue];
            if (typeof str === 'string') {
                return (
                    str.toLowerCase().indexOf(searchString.toLowerCase()) > -1
                );
            }
        });
    }
}
