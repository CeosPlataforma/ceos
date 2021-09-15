import { Request, Response } from 'express';
import { MateriaModel } from '../models/Materia';
import { UserModel } from '../models/User';
import { Schema } from 'mongoose';

class MateriaController {

    async createMateria(request: Request, response: Response) {
        const userUuid = request.session.user.uuid;
        //console.log(request.session.user.id)
        const newMateria = new MateriaModel();
        await UserModel.findOne({ uuid: userUuid }).then((user) => {
            newMateria.name = request.body.name;
            newMateria.user = userUuid;
        });
        
        MateriaModel.exists({ name: newMateria.name, user: newMateria.user }, function (error, doc) {
            if (error) {
                console.log(error)
            } else if (!doc) {
                try {
                    const savedMateria = newMateria.save()
                    console.log(savedMateria)
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


        /*if () {
            console.log("existe materia")
            const materiaExistente = await MateriaModel.find({ name: newMateria.name, user: newMateria.user })
            console.log(materiaExistente)
            
        } else {
            try {
                const savedMateria = newMateria.save()
                console.log(savedMateria)
                return response.status(200).send({success: true});
            } catch (err) {
                console.error(err);
                return response.status(200).send(err);
            }
        }*/

        

        /*try {
            if () {
                throw new Error("materiaExistsForUser");
            } else {
                const savedMateria = await newMateria.save();
                return response.status(200).json({ message: "sucesso", materia: savedMateria });
            }
        } catch (error) {

            console.error(error);
            if (error.code === 11000 || error.message === "materiaExistsForUser") {
                return response.json({ message: "já existe", materiaAlreadyExists: true })
            } else {
                return response.json({ error })
            }

        }*/
    }

    async getAllMaterias(request: Request, response: Response) {
        const userUuid = request.session.user.uuid;
        await MateriaModel.find({ user: userUuid }, async (error, materias) => {
            if (!materias.length) {
                return response.json({ message: "sem-materias" });
            } else {

                materias.forEach((value, index) => {
                    //console.log(typeof (value))
                });
                //console.log(materias)
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