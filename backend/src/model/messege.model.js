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
        type: String, 
        default: null,
    },


    expiredAt: {
        type: Date, 
        default: null,
        indexed: true,
    }

},{timestamps:true} ) 

export const Messege = mongoose.model('Messege', messegeSchema);