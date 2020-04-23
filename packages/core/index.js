import express from 'express';
//const express = require('express');

const app = express();
app.use((req, res)=>{
    res.json({
        data: {
            "name": "Chen Reuvven"
        }
    })
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Start Core Node Server..."); //
});