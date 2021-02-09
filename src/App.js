import './App.css';
import React,{useState,useEffect} from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';



function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('')
  console.log(messages)
  console.log(input)
  const remain = (event)=>{   //to maintain the value in the input field
    setInput(event.target.value)
  }
    useEffect(()=>{
      db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc =>({id:doc.id, message: doc.data()})))
      })
    },[])

    useEffect(() =>{
      setUsername(prompt('Enter your name:'))
    },[])  

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })  
    // setMessages([...messages,{username: username, message:input}])
    setInput('')
  }
  
  
  return (
  <div className="App">
    <div class= "welcome_form">
  <h1>
    Group Chat
  </h1>
  <b><u><h2 class ="welcome">Welcome: {username}</h2></u></b>
  </div>
  <div class="app__form">
  <form>
  <FormControl class="app__formcontrol">
  <input class="app__input" placeholder="Enter the message"  value={input} onChange = {remain}/>
  <IconButton class ="app__icon"  disableRipple='false' color="primary" type="submit" disabled = {!input} onClick = {sendMessage} >
    <SendRoundedIcon />
  </IconButton>
  </FormControl>
  </form>
</div>

  <FlipMove>
    {
      messages.map(({id,message})=>(
        <Message key={id} username={username} message={message}/>
      ))
    }
    </FlipMove>
   
  </div>
  );
}

export default App; 