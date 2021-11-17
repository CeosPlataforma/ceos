import crypto from 'crypto';
import { Request, Response } from 'express';
import { AtividadeModel } from '../models/Atividade';
import { MateriaModel } from '../models/Materia';
import { UserModel } from '../models/User';
import { Types } from 'mongoose'

class AtividadeController {

    async edit(request: Request, response: Response) {
        throw new Error('Method not implemented.');
    }

    async delete(request: Request, response: Response) {
        const atividade_id = request.body.id;
        try {
            AtividadeModel.findByIdAndRemove(atividade_id, { useFindAndModify: false })
                .exec().finally(() => {
                    return response.json({ success: true })
                })
        } catch (error) {
            return console.error(error);
        }
    }

    /*async poptest(request: Request, response: Response) {
        const materia_id = Types.ObjectId("618dbcc0ff180a3178b34534");
        AtividadeModel.find({ materia: materia_id })
        .populate('materia')
        .exec(async (error, atividades) => {
            if (error) {
                console.log(error)
            } else if (!atividades.length) {
                return response.json({ message: "sem-atividades" });
            } else {
                return response.send(atividades);
            }
        })
    }*/

    async getAtividades(request: Request, response: Response) {
        const materia_id = request.body.materia_id;
        AtividadeModel.find({ materia: materia_id })
            .populate('materia')
            .exec(async (error, atividades) => {
                if (error) {
                    console.log(error)
                } else if (!atividades) {
                    console.log(atividades)
                    return response.json({ message: "sem-atividades" });
                } else {
                    return response.send(atividades);
                }
            })
    }

    async getAllAtividades(request: Request, response: Response) {
        const user_uuid = request.session.user.uuid
        AtividadeModel.find({ user: user_uuid })
            .populate('materia')
            .exec(async (error, atividades) => {
                if (error) {
                    console.log(error)
                } else if (!atividades.length) {
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
        const materia_id = request.body.materia_id;

        const new_atividade = new AtividadeModel();
        new_atividade.name = request.body.name;
        new_atividade.dueBy = request.body.dueByDate;
        new_atividade.description = request.body.description;
        new_atividade.atv_type = request.body.type;

        new_atividade.user = user_uuid;
        new_atividade.materia = materia_id;

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

