import {Email} from "../value-objects/email";

export interface EmailSender {
    sendEmail(email: Email): void
}