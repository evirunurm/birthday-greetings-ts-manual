import {Email} from "../value-objects/email";

export interface EmailSender {
    sendEmail({to, subject, body}: Email): void
}