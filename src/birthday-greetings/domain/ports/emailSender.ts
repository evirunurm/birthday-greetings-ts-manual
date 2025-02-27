type SendEmailArgs = {
    to: string
    subject: string
    body: string
}

export interface EmailSender {
    sendEmail({to, subject, body}: SendEmailArgs): void
}