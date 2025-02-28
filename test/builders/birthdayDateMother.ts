import {BirthdayDate} from "../../src/birthday-greetings/domain/entities/birthdayDate";

export class BirthdayDateMother {
    static aBirthdayDate = (date?: string) =>
        new BirthdayDate(date ? new Date(date) : new Date())
}