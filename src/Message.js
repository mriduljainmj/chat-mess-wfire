import React, {forwardRef} from 'react'
import './Message.css';
import {Card,CardContent,Typography} from '@material-ui/core';



const Message = forwardRef(({username,message}, ref) =>  {
    const isUser = username === message.username;

    return (
        <div ref={ref} className ={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
      <CardContent>
          <Typography color ='white' variant ="h6" components = 'h3'>
          {!isUser && `${message.username || 'Unknown'}:`} {message.message}
          </Typography>
            </CardContent>
            </Card>
        </div>
    )
})



export default Message
