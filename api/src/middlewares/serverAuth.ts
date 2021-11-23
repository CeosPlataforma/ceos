import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';
//import { UserModel } from '../models/User'

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

// function for creating tokens
function signToken(user) {
    const userData = user.toObject()
    delete userData.salt
    delete userData.hash
    console.log(JWT_SECRET)
    return jwt.sign(userData, JWT_SECRET, {
        expiresIn: 10800
    })
}

// para verificar os tokens
function verifyToken(req: Request, res: Response, next: NextFunction) {
    // grab token from either headers, req.body, or query string
    //const token = req.get('token') || req.body.token || req.query.token
    // if no token present, deny access
    //if (!token) return res.json({ success: false, message: "No token provided" })
    // otherwise, try to verify token
    //jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        // if problem with token verification, deny access
        //if (err) return res.json({ success: false, message: "Invalid token." })
        // otherwise, search for user by id that was embedded in token
        //UserModel.findById(decodedData._id, (err, user) => {
            // if no user, deny access
            //if (!user) return res.json({ success: false, message: "Invalid token." })
            // otherwise, add user to req object
            //req.user = user
            // go on to process the route:
            //next()
       //})
    //})
    throw new Error("sexo!!!")
}

export { signToken, verifyToken }