package com.mayankprojectchat.chatserver.controller;

import com.mayankprojectchat.chatserver.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class Chatcontroller {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;


    @MessageMapping("/message") //  /app/message
    @SendTo("/chatroom/public") //
    private Message recievePublicMessage(@Payload Message message){
        return message;
    }
    @MessageMapping("/private-message")
    public Message recieverPrivateMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/private",message); // /user/Mayank/private  -- here we are dnimaically sending message to particular user
        return message;
    }
}