const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Request-With,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET, OPTIONS")
    next();
})

app.use('/books',(req, res, next) => {
    const books = [
        {
            Id:'1',
            name:'book1',
            auther:'auther1'
        },
        {
            Id:'2',
            name:'book2',
            auther:'auther2'
        },
        {
            Id:'3',
            name:'book3',
            auther:'auther3'
        },{
            Id:'4',
            name:'book4',
            auther:'auther4'
        }
    ]
    res.status(200).json(books)
})

module.exports = app;