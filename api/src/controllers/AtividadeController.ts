import crypto from 'crypto';
import { Request, Response } from 'express';
import { AtividadeModel } from '../models/Atividade';
import { UserModel } from '../models/User';

class AtividadeController {

    async getAtividades(request: Request, response: Response) {
        const materia_uuid = request.body.materia_uuid;
        AtividadeModel.find({ materia: materia_uuid }, async (error, atividades) => {
            if (!atividades.length) {
                return response.json({ message: "sem-atividades" });
            } else {
                return response.send(atividades);
            }
        })
    }

    async criarAtividade(request: Request, response: Response) {

        //console.log(request.body)
        //console.log(request.session.user)

        const user_uuid = request.session.user.uuid;
        const materia_uuid = request.body.materia_uuid;

        const new_atividade = new AtividadeModel();
        new_atividade.name = request.body.name;
        new_atividade.dueBy = request.body.dueByDate;
        new_atividade.description = request.body.description;
        new_atividade.atv_type = request.body.type;

        new_atividade.user = user_uuid;
        new_atividade.materia = materia_uuid;

        new_atividade.uuid = crypto.randomUUID({ disableEntropyCache: true });

        AtividadeModel.exists({
            name: new_atividade.name,
            user: new_atividade.user,
            materia: new_atividade.materia
        }, (error, document) => {
            if (error) {
                console.log(error);
            } else if (!document) {
                try {
                    new_atividade.save().then((ativ) => { console.log(ativ); })
                    return response.status(200).json({ success: true })
                } catch (error) {
                    console.log(error)
                    return response.status(200).json({ success: false, error })
                }
            } else {
                console.log("existe atividade")
                AtividadeModel.findOne({
                    name: new_atividade.name,
                    user: new_atividade.user,
                    materia: new_atividade.materia
                }).then((atividade) => {
                    console.log(atividade)
                    return response.json({ success: false, exists: true })
                })
            }
        })
    }
}

export { AtividadeController };

