import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: any, args?: any) {
        if(!value) {
            return null;
        }

        var splitString = value.toLowerCase().split(' ');


        for(var i = 0; i < splitString.length; i++) {
            let split = splitString[i];
            if(i > 0 && this.isPreposition(split)) {
                splitString[i] = split;
            } else {
                splitString[i] = this.toTitleCase(split);
            }
        }

        value = splitString.join(' ');

        return value;
        
    }

    private toTitleCase(word: string): string {
        return word = word.charAt(0).toUpperCase() + word.substring(1);
    }

    private isPreposition(word: string): boolean {
        let prepositions = ["of", "the"];
        return prepositions.includes(word.toLowerCase());
    }
}