import {Email} from "../entities/email";

export interface EmailSender {
    sendEmail({to, subject, body}: Email): void
}