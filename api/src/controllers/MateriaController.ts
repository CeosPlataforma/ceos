import { Request, Response } from 'express';
import { MateriaModel } from '../models/Materia';
import { UserModel } from '../models/User';
import crypto from 'crypto'

class MateriaController {

    async getMateria(request: Request, response: Response) {
        //return response.json(request.body.materia_uuid)
        const uuid = request.body.materia_uuid
        MateriaModel.findOne({ uuid }, async (error, materia) => {
            if (materia === null || error) {
                return response.json({ message: "error", error })
            } else {
                return response.json(materia);
            }
        })

    }

    async createMateria(request: Request, response: Response) {
        
        const userUuid = request.session.user.uuid;
        const newMateria = new MateriaModel();
        newMateria.name = request.body.name;
        newMateria.uuid = crypto.randomUUID({ disableEntropyCache: true });

        await UserModel.findOne({ uuid: userUuid }).then((user) => {
            newMateria.user = userUuid;
        });
        
        MateriaModel.exists({ name: newMateria.name, user: newMateria.user }, function (error, doc) {
            if (error) {
                console.log(error)
            } else if (!doc) {
                try {
                    const savedMateria = newMateria.save()
                    return response.status(200).send({success: true});
                } catch (err) {
                    console.error(err);
                    return response.status(200).send(err);
                }
            } else {
                console.log("existe materia")
                MateriaModel.findOne({ name: newMateria.name, user: newMateria.user }).then((materia) => {
                    console.log(materia)
                    return response.json({message: "Esta matéria já existe", materiaAlreadyExists: true});
                });
            }
        })
    }

    async getAllMaterias(request: Request, response: Response) {
        const userUuid = request.session.user.uuid;
        await MateriaModel.find({ user: userUuid }, async (error, materias) => {
            if (!materias.length) {
                return response.json({ message: "sem-materias" });
            } else {
                return response.send(materias);
            }
        })
    }

    async deleteAllUsersMaterias(request: Request, response: Response) {
        const userUuid = request.session.user.uuid;
        await MateriaModel.deleteMany({ user: userUuid }, async (result) => {
            console.log(result)
            return response.json({message: "ok"})
        })
    }

    /*async deleteMateria(request: Request, response: Response) {
        const materiaUuid = request.body.uuid;
        try {
            MateriaModel.deleteOne({ uuid: materiaUuid });
        } catch (error) {
            return console.error(error);
        }
    }*/

}

export { MateriaController }