import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stringJoiner'
})
export class StringJoiner implements PipeTransform {
    transform(input:Array<any>, sep: string): string {
        return input.join(sep);
    }
}
