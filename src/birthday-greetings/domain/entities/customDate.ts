export class CustomDate {
    private readonly date: Date

    constructor(date: Date) {
        this.date = date
    }

    getDate = () => this.date

    isSameDay(dateOfBirth: Date) {
        return this.date.getDate() === dateOfBirth.getDate() && this.date.getMonth() === dateOfBirth.getMonth()
    }
}