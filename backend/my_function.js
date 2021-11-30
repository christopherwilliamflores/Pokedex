var express = require('express');
var app = express();

var mysql = require('mysql');

var cors = require('cors');
app.use(cors());

app.use(express.json());

  //------------------------------------------------
app.get('/pokemones', getPokemones);
  function getPokemones(req,res){
    //Step 0 : Definir la conexion a la BD
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890' ,
      database: 'Pokedex'
    });
    //Step 1 : Establecer la conexion
    connection.connect();
    //Step 2 : Mandar el query
    var myQuery = " SELECT pokemon_id, nombre, altura, categoria, peso, " +
            " habilidad, tipo, pokemon_img_url" +
            " FROM pokemon ;";
    connection.query(myQuery, function(errror, results, fields){
        //Ya tengon el resultado del query en 'results'

        //Step 3 : Procesar el resultado de la BD   
        res.send(results);
        //Step 4: Cerrar la conexion
        connection.end();
    });

}
app.get('/pokemones/:pokemon_id', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890' ,
    database: 'Pokedex'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " SELECT pokemon_id, nombre, altura, categoria, peso, " +
                " habilidad, tipo, pokemon_img_url" +
                " FROM pokemon " +
                " WHERE pokemon_id = ? ";
  var myValues = [req.params.pokemon_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });


});

//--------------------------------------POST

 app.post('/pokemones', function(req, res){
   // Step 0: Definir la conexion a la BD
   var connection = mysql.createConnection({
     host: 'localhost',
     user: 'utec',
     password: '1234567890' ,
     database: 'Pokedex'
   });

   // Step 1: Establecer la conexion
   connection.connect();

   // ;Step 2: Mandar el query
   var myQuery = " INSERT INTO pokemon(pokemon_id, nombre, altura, categoria, peso," +
                 " habilidad, tipo, pokemon_img_url)" +
                 " VALUES (?, ?, ?, ?, ?, ?, ?,?); ";
   var myValues = [req.body.pokemon_id, req.body.nombre, req.body.altura, req.body.categoria, req.body.peso, req.body.habilidad, req.body.tipo, req.body.pokemon_img_url ];

   connection.query(myQuery, myValues, function(error, results, fields){
     // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
     if (error) throw error;
    
     // Step 3: Procesar el resultado de la BD
     res.send(results);

     // Step 4: Cerrar la conexion
     connection.end();
   });
 });


 //------------------------------------------DELETE

app.delete('/pokemones/:pokemon_id', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890' ,
    database: 'Pokedex'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // ;Step 2: Mandar el query
  var myQuery = " DELETE FROM pokemon " +
                " WHERE pokemon_id = ?; ";

  var myValues = [ req.params.pokemon_id ];

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

//---------------------------------------------------------------------- PUT

app.put('/pokemones/:pokemon_id', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890' ,
    database: 'Pokedex'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " UPDATE pokemon SET";
  var myValues = [ ];
  
  if (req.body.pokemon_id){
    myQuery += " pokemon_id = ? ";
    myValues.push(req.body.pokemon_id);
  }

  if (req.body.nombre){
    myQuery += " , nombre = ? ";
    myValues.push(req.body.nombre);
  }

  if (req.body.altura){
    myQuery += " , altura = ? ";
    myValues.push(req.body.altura);
  }

  if (req.body.categoria){
    myQuery += " , categoria = ? ";
    myValues.push(req.body.categoria);
  }

  if (req.body.peso){
    myQuery += " , peso = ? ";
    myValues.push(req.body.peso);
  }

  if (req.body.habilidad){
    myQuery += " , habilidad = ? ";
    myValues.push(req.body.habilidad);
  }


  if (req.body.tipo){
    myQuery += " , tipo = ? ";
    myValues.push(req.body.tipo);
  }

  if (req.body.pokemon_img_url){
    myQuery += " , pokemon_img_url = ? ";
    myValues.push(req.body.pokemon_img_url);
  }




  myQuery += " WHERE pokemon_id = ? "
  myValues.push(req.params.pokemon_id);

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


app.listen(3000, function(){
  console.log("Server started in port 3000!!!")
})