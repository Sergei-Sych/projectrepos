import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'hourMinutes'
})
export class HourMinutes implements PipeTransform {
    transform(value: number): string {
        let hours = Math.floor(value / 60);
        let minutes = Math.floor(value % 60);

        return hours.toString().padStart(2, '0') + ':' + 
                minutes.toString().padStart(2, '0');
    }
}
