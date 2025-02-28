export class BirthdayDate {
    private readonly date: Date

    constructor(date: Date) {
        this.date = date
    }

    getCurrentDate = () => this.date

    isSameBirthdayDay = (dateOfBirth: BirthdayDate) => this.isSameDay(dateOfBirth) || this.isBirthdayFebruary29(dateOfBirth)

    private isBirthdayFebruary29 = (dateOfBirth: BirthdayDate) => this.isFebruary29() && !this.isLeapYear(dateOfBirth)

    private isSameDay(otherBirthdayDate: BirthdayDate) {
        const otherDate = otherBirthdayDate.getCurrentDate()
        return this.date.getDate() === otherDate.getDate() && this.date.getMonth() === otherDate.getMonth()
    }

    private isFebruary29 = () => this.date.getDate() === 29 && this.date.getMonth() === 1

    private isLeapYear(dateOfBirth: BirthdayDate) {
        const year = dateOfBirth.getCurrentDate().getFullYear()
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    }
}