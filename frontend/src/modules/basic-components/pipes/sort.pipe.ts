import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe<T> implements PipeTransform {
    transform(value: T[] = [], bindField: keyof T): T[] {
        return value.sort((a: T, b: T) => {
            const strA = a[bindField].toString();
            const strB = b[bindField].toString();

            if (strA === strB) {
                return 0;
            }

            return strA > strB ? 1 : -1;
        });
    }
}
