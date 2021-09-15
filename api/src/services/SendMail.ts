import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';


class SendMail {

    async execute(to: string, subject: string, variables: object, path: string) {
        

        const templateFileContent = fs.readFileSync(path).toString("utf-8");

        const mailTemplate = handlebars.compile(templateFileContent);

        const html = mailTemplate(variables);
        
        try {
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            const result = await transport.sendMail({
                to,
                subject,
                html,
                from: 'CEOS <ceos.plataforma@gmail.com>'
            });

            console.log(result);

        } catch (error) {
            console.log(error);
            return error
        }
    }

}

export default new SendMail();