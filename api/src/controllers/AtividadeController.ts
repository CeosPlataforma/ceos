import crypto from 'crypto';
import { Request, Response } from 'express';
import { AtividadeModel } from '../models/Atividade';
import { MateriaModel } from '../models/Materia';
import { UserModel } from '../models/User';
import { Document, Types } from 'mongoose'

class AtividadeController {

    async edit(request: Request, response: Response) {

        const uuid = request.body.uuid

        const newv = {
            nome: request.body.novo.nome,
            tipo: request.body.novo.tipo,
            desc: request.body.novo.desc,
            data: new Date(request.body.novo.data),
            conc: request.body.novo.conc
        }

        const oldv = {
            nome: request.body.velho.nome,
            tipo: request.body.velho.tipo,
            desc: request.body.velho.desc,
            data: new Date(request.body.velho.data),
            conc: request.body.velho.conc
        }

        const nome_changed = oldv.nome !== newv.nome
        const tipo_changed = oldv.tipo !== newv.tipo
        const desc_changed = oldv.desc !== newv.desc
        const data_changed = oldv.data.getTime() !== newv.data.getTime()
        const conc_changed = oldv.conc !== newv.conc

        const changed_v = {
            nome: nome_changed,
            tipo: tipo_changed,
            desc: desc_changed,
            data: data_changed,
            conc: conc_changed
        }

        console.log("old", oldv)
        console.log("new", newv)
        console.log("changed", changed_v)

        const changed: Boolean = changed_v.nome || changed_v.tipo || changed_v.desc || changed_v.data || changed_v.conc

        if (!changed) {
            return response.json({ message: "no-change" })
        }

        const atividade = await AtividadeModel.findOne({ uuid: uuid }, (error, res) => error ? console.log(error) : console.log(res))

        if (changed_v.nome) {
            //@ts-ignore
            atividade.name = newv.nome
        }
        if (changed_v.tipo) {
            //@ts-ignore
            atividade.atv_type = newv.tipo
        }
        if (changed_v.desc) {
            //@ts-ignore
            atividade.description = newv.desc
        }
        if (changed_v.data) {
            //@ts-ignore
            atividade.dueBy = newv.data
        }
        if (changed_v.conc) {
            //@ts-ignore
            atividade.concluida = newv.conc
        }

        try {
            atividade.save()
            return response.json({ success: true })
        } catch (error) {
            console.log(error)
            return response.json({ success: false })
        }

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

