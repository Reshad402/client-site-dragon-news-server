const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const catagories = require('./data/catagories.json');


app.use(cors());


const news = require('./Data/news.json');


app.get('/', (req, res) =>{
    res.send('hello')
})


app.get('/news-catagories', (req, res) =>{
    res.send(catagories)
})

app.get('/category/:id',(req, res) =>{
    const id = req.params.id;
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews)
})

                                //!All news show korabe
app.get('/news', (req, res) =>{
    res.send(news);
})

                                //!All news id onujai show korabe

app.get('/news/:id', (req, res) =>{
const idNews = req.params.id;
const selectedNews = news.find(n=>n._id === idNews) 
res.send(selectedNews)
})

app.listen(port,() =>{
    console.log('listening on port', port);
})