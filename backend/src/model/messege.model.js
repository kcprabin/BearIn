const messageSchema = new mongoose.Schema({
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
      
    },
    messageText: {
        type: String, // encrypted text
        required: true, 
    },
    expiredAt: {
        type: Date,
        default: () => Date.now() ,
        expires: 7 * 24 * 60 * 60, // 7 days in seconds
    },
}, { timestamps: true });


export const Message = mongoose.model('Message', messageSchema);