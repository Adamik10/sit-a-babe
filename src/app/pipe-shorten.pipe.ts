import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class PipeShorten implements PipeTransform {
    transform(value: any){
        if(value.length > 20) {
            return value.substr(0, 20) +  '..';
        }
        return value
    }
}