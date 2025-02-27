import {NodemailerEmailSender} from "./nodemailerEmailSender";
import {Transporter} from "nodemailer";

describe('Nodemailer Email Sender', () => {
    let nodemailerEmailSender: NodemailerEmailSender
    let transporter: Transporter

    beforeEach(() => {
        transporter = {} as Transporter
        nodemailerEmailSender = new NodemailerEmailSender({transporter})
    })

    it('should send an email', async () => {
        transporter.sendMail = jest.fn()
        nodemailerEmailSender.sendEmail({
            to: 'example@email',
            subject: 'Test subject',
            body: 'Test body'
        })

        expect(transporter.sendMail).toHaveBeenCalled()
    })
})