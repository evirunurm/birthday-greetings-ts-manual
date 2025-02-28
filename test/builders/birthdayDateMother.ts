import {BirthdayDate} from "../../src/birthday-greetings/domain/value-objects/birthdayDate";

export class BirthdayDateMother {
    static aBirthdayDate = (date?: string) =>
        new BirthdayDate(date ? new Date(date) : new Date())
}