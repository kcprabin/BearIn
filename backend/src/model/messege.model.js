import mongoose from 'mongoose';

const messegeSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },  
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    receiverId: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,  
    },
    messageText: {
        type: String, //encrypted text
        required: true,
    },
    expiredAt: {
        type: Date, 
        default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      required: true,
    }

},{timestamps:true} ) 
messegeSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });

export const Messege = mongoose.model('Messege', messegeSchema);