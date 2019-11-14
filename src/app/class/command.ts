import {User} from './user';
import {CommandAssoc} from './command-assoc';
import {CommandMenu} from './command-menu';
import { State } from './state';

export class Command {
    id: number;
    user: User;
    commandassocs: CommandAssoc[];
    commandmenus: CommandMenu[];
    state: State;
    totalPrice: string;
    datetime: string;

}
