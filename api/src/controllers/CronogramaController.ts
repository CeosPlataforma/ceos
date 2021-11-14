import { Request, Response } from 'express';
import { CronogramaModel } from '../models/Cronograma';
import crypto from 'crypto'

class CronogramaController {

    async saveCronograma(request: Request, response: Response) {

        const novo_cronograma = request.body.novo_cronograma
        const user_id = request.session.user.id
        console.log(request.body)

        try {
            const cronograma_doc = await CronogramaModel.findOneAndUpdate(
                { user: user_id },
                { cronograma_obj: novo_cronograma },
                { new: true, upsert: true, useFindAndModify: false})
            return response.json({ success: true })
        } catch (error) {
            console.log("erro ao salvar cronograma", error)
            return response.json({ success: false, error })
        }
    }

    async getCronograma(request: Request, response: Response) {
        const user_id = await request.session.user.id
        //console.log(request.session)
        //console.log("user _id", user_id)
        CronogramaModel.findOne({ user: user_id }, (error, doc) => {
            if (error) {
                console.log(error);
                return response.json({ message: "erro", error })
            } else if (!doc) {
                const novo_crono_doc = new CronogramaModel()
                novo_crono_doc.user = user_id
                novo_crono_doc.uuid = crypto.randomUUID({ disableEntropyCache: true });

                try {
                    novo_crono_doc.save();
                    //console.log(novo_crono_doc);
                    return response.json(novo_crono_doc.cronograma_obj)
                } catch (error) { console.log(error) }

            } else {
                //console.log("crono", doc)
                return response.json(doc.cronograma_obj)
            }
        })
    }

}

export { CronogramaController }