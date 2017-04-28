import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'padleft' })
export class PadLeftPipe implements PipeTransform {
    transform(value: any, args: any[]): string {
        var len = args[0];
        var pad = args[1];
        if (len === undefined) {
            len = 1;
        } else if (pad === undefined) {
            pad = '0';
        }

        var pads = '';
        while (pads.length < len) {
            pads += pad;
        }
		
		var valStr = value.toString();

        return pads.substring(0, len - valStr.length) + valStr;
    }
}
