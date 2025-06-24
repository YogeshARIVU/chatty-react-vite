import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';
import { getMessages, postMessage } from '../services/api';
import { getUsername } from '../utils/auth';
import UserList from './UserList';

export default function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [text, setText] = useState('');
    const ws = useRef();

    useEffect(() => {
        getMessages().then(setMessages);

        const uid = getUsername();
        ws.current = new WebSocket(`ws://localhost:8080/ws/chat?userId=${uid}`);
        ws.current.onmessage = ({ data }) => {
            const msg = JSON.parse(data);
            setMessages(prev => [...prev, msg]);
            if (!onlineUsers.includes(msg.sender)) {
                setOnlineUsers(prev => [...prev, msg.sender]);
            }
        };

        return () => ws.current.close();
    }, []);

    const send = async () => {
        if (!text) return;
        const msg = { sender: getUsername(), content: text };
        ws.current.send(JSON.stringify(msg));
        await postMessage(msg);
        setText('');
    };

    return (
        <Box display="flex" height="100vh">
            <UserList users={onlineUsers} />
            <Box flex={1} p={2} bgcolor="#e3f2fd">
                <Paper style={{ height: '80vh', overflowY: 'scroll', padding: '8px' }}>
                    {messages.map((m,i) => (
                        <div key={i}><strong>{m.sender}:</strong> {m.content}</div>
                    ))}
                </Paper>
                <Box display="flex" mt={2}>
                    <TextField fullWidth variant="outlined" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} />
                    <Button onClick={send}>Send</Button>
                </Box>
            </Box>
        </Box>
    );
}
