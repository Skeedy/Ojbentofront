import { Command} from './command';

export class User {
    id: number;
    username: string;
    fname: string;
    lname: string;
    phone: string;
    city: string;
    email: string;
    password: string;
    commands: Command[];
}
