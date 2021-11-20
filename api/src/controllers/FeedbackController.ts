import { error } from 'console';
import { Request, Response } from 'express';
import { FeedbackModel } from '../models/Feedback'

class FeedbackController {  
    
    async save(request: Request, response: Response) {
        const message = request.body.message
        const email = request.body.email
        const reason = request.body.reason

        const new_feedback = new FeedbackModel()
        new_feedback.message = message
        new_feedback.reason = reason
        new_feedback.email = email

        console.log(new_feedback)
        
        try {
            new_feedback.save()
            return response.json({success: true})
        } catch (error) {
            console.log(error)
            return response.json({success: false})
        }
    }

    async get(request: Request, response: Response) {
        FeedbackModel.find({}).exec(async (error, feedbacks) => {
            if (error) {
                console.log(error)
            } else if (!feedbacks.length) {
                return response.json({ message: "sem-feedback" });
            } else {
                return response.send(feedbacks);
            }
        })
    }

}
export { FeedbackController }