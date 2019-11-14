import { Pipe, PipeTransform } from '@angular/core';
import {Menu} from '../class/menu';

@Pipe({
  name: 'midiMenu'
})
export class MidiMenuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter( (menu: Menu) => {
        return menu.isMidi;
      });
    }
    return value;
  }

}
