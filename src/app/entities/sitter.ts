import { BabyRating, SitterRating } from "./rating";

export class Sitter {
    sitterId?: String;
    email?: String;
    birthDate?: Date;
    gender?: String;
    firstname?: String;
    lastname?: String;
    education?: String;
    picture?: String;
    avatar?: String;
    description?: String;
    location?: String;
    rating?: SitterRating[];
    phone?: String;

    schedule?: any; // switch off ts-typesystem.
}