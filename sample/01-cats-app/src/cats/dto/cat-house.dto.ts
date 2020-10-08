import {IsString} from 'class-validator';

export class CatHouse {
    @IsString()
    readonly name: string;

    speak() {
        return this.name;
    }
}
