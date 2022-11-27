import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'createDate'
})
export class CreationDate implements PipeTransform {
    transform(date: Date, format: string = 'dd.MM.YYYY'): string | null {
        date = new Date(date);
        return new DatePipe('en-US').transform(date, format);
    }
}
