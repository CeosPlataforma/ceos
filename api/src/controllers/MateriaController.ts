import { Request, Response } from 'express';
import { MateriaModel } from '../models/Materia';
import { validate } from 'uuid';
import { UserModel } from '../models/User';
import { Schema } from 'mongoose';

class MateriaController {

    async createMateria(request: Request, response: Response) {
        const userId: Schema.Types.ObjectId = request.session.user.id;
        console.log(request.session.user.id)
        const newMateria = new MateriaModel();
        await UserModel.findOne({ _id: userId }, async (error, user) => {
            console.log(user);
            newMateria.name = request.body.name;
            newMateria.user = user._id;
        });
        
        try {
            const savedMateria = await newMateria.save();
            return response.status(200).json({ message: "sucesso" });
        } catch (error) {
            console.error();
            if (error.code === 11000) {
                return response.json({ message: "Esta matéria já existe", materiaAlreadyExists: true })
            } else {
                return response.json({ error })
            }

        }
    }

    async getAllMaterias(request: Request, response: Response) {
        const userId: Schema.Types.ObjectId = request.session.user.id;
        await MateriaModel.find({ user: userId }, async (error, materias) => {
            if (!materias.length) {
                return response.json({ message: "sem-materias" });
            } else {

                materias.forEach((value, index) => {
                    console.log(typeof (value))
                });
                console.log(materias)
                return response.send(materias);

            }
        })
    }


    async deleteMateria(request: Request, response: Response) {
        const materiaName = request.body.name;
        try {
            MateriaModel.deleteOne({ name: materiaName });
        } catch (error) {
            return console.error(error);
        }
    }

}

export { MateriaController }