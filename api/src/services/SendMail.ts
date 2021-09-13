import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';


class SendMail {

    // private CLIENT_ID = process.env.CLIENT_ID;
    // private CLIENT_SECRET = process.env.CLIENT_SECRET;
    // private REDIRECT_URI = process.env.REDIRECT_URI;
    // private REFRESH_TOKEN = process.env.REFRESH_TOKEN;
    // private EMAIL_USER = process.env.REFRESH_TOKEN;
    
    async execute(to: string, subject: string, variables: object, path: string) {
        

        const templateFileContent = fs.readFileSync(path).toString("utf-8");

        const mailTemplate = handlebars.compile(templateFileContent);

        const html = mailTemplate(variables);
        
        try {
            // const oAuth2Client = new google.auth.OAuth2(this.CLIENT_ID, this.CLIENT_SECRET, this.REDIRECT_URI)
            // oAuth2Client.setCredentials({refresh_token: this.REFRESH_TOKEN});

            // // const accessToken = await oAuth2Client.getAccessToken().then((stuff) => { return stuff.token })
            // const accessToken = process.env.ACCESS_TOKEN
            
            // console.log(accessToken);

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