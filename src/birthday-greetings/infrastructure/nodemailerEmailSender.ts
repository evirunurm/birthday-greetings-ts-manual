import {EmailSender} from "../domain/ports/emailSender"
import {Transporter} from "nodemailer"
import {SendMailOptions} from "nodemailer";
import {Email} from "../domain/value-objects/email";

type NodemailerEmailSenderDependencies = {
    transporter: Transporter
}

export class NodemailerEmailSender implements EmailSender {
    private transporter: Transporter

    constructor({transporter}: NodemailerEmailSenderDependencies) {
        this.transporter = transporter
    }

    sendEmail({to, subject, body}: Email): void {
        const mailOptions: SendMailOptions = {
            from: 'sender@mail',
            to,
            subject,
            text: body
        }

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error.message)
                return
            }
            console.info('Email sent: ' + info.response)
        });
    }
}