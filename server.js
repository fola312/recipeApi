const express = require('express');
const knex = require('knex');
const cors = require('cors');


const app = express();


const postgres = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'Whats-for-dinner'
    }
  });
  
app.use(cors())


app.get('/', (req, res) => {const randomRecipe = postgres.select('*').from('recipes')
.then(data => {res.send((data[Math.floor(Math.random()*data.length)]))

})})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Up and at em'")
})