import { asynchandler } from "../utills/asynchandler.js";
import {Message} from "../model/messege.model.js";


const sendMessage = asynchandler(async (req, res) => {
    const { receiverId, encrypredmessage } = req.body;
    const senderId = req.user._id;
     if (!senderId ||  !encrypredmessage || !receiverId ) {
        return res.status(400).json({ error: "All fields are required" });
    }  
    

    const newMessage = new Message({
        senderId,
        receiverId,
        messageText: encrypredmessage,
        expiredAt: new Date(Date.now() + 7*24*60*60*1000) 
    });

    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully", data: newMessage });
});

export { sendMessage };