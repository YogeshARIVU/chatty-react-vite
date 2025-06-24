import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

export default function UserList({ users }) {
    return (
        <Box width={200} bgcolor="#1976d2" color="#fff" p={2}>
            <Typography variant="h6">Active Users</Typography>
            <List>
                {users.map(u => (
                    <ListItem key={u}>{u}</ListItem>
                ))}
            </List>
        </Box>
    );
}
