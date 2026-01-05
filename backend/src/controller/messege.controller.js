import { asynchandler } from "../utills/asynchandler.js";
import {Message} from "../model/messege.model.js";


const sendMessage = asynchandler(async (req, res) => {
    const { senderId, receiverId, message } = req.body;

     if (!senderId || !receiverId || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }  
    

    const newMessage = new Message({
        senderId,
        receiverId,
        messageText: message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully", data: newMessage });
});

export { sendMessage };