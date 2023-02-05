const dotenv = require('dotenv').config();
//var env = require('node-env-file'); // .env file
//env(__dirname + '../.env');
const app = require('./app.js');

(async () => {
    try {
        
        app.set('port', process.env.PORT || 5000);
        app.listen(app.get('port'), () => {
            console.log('Servidor en puerto', app.get('port'));
        });
    
    } catch (error) {

        console.log({
            msg: "Error en la conexion",
            error: error
        })
    }
})()

/*


mutation{
  createBook(book: {
    codigo: "G1452"
    titulo: "100 años de soleda"
    descripcion: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español."
    precio: 150000
    categoria: [
      {
        _id: "63d9b8cf902132b2184e069a"
        categoria:"Novela"
      }
      {
        _id: "63d9b8d9902132b2184e069c"
        categoria: "Realismo mágico"
      }
      {
        _id: "63d9b8e6902132b2184e069e"
        categoria: "Ficción"
      }
      {
        _id: "63d9b8f2902132b2184e06a0"
        categoria: "Alta fantasía"
      },
      {
        _id: "63d9b8fc902132b2184e06a2"
        categoria: "Saga familiar"
      }
    ]
    formato: [
    	{
        formato: "Fisico"
        idiomas: [
          {
            idioma: "Español"
            cantidad_stock: 5
          }
          {
            idioma: "Ingles"
            cantidad_stock: 5
          }
        ]
      }
      {
        formato: "PDF"
        idiomas: [
          {
            idioma: "Español"
            cantidad_stock: 10
          }
          {
            idioma: "Ingles"
            cantidad_stock: 10
          }
        ]
      }
    ]
    autores: [
    	{
        _id: "63d9b420902132b2184e068b"
        nombre: "Gabriel García Márquez"
        pseudonimo: "Gabo"
      }
    ]
  	portada: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg"
    fecha_publicacion: "1967-01-01"
  })
}

*/

/*


mutation{
  createBook(book: {
    codigo: "G1452"
    titulo: "100 años de soleda"
    descripcion: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español."
    precio: 150000
    categoria: [
      {
        _id: "63d9b8cf902132b2184e069a"
        categoria:"Novela"
      }
      {
        _id: "63d9b8d9902132b2184e069c"
        categoria: "Realismo mágico"
      }
      {
        _id: "63d9b8e6902132b2184e069e"
        categoria: "Ficción"
      }
      {
        _id: "63d9b8f2902132b2184e06a0"
        categoria: "Alta fantasía"
      },
      {
        _id: "63d9b8fc902132b2184e06a2"
        categoria: "Saga familiar"
      }
    ]
    formato: [
    	{
        formato: "Fisico"
        idiomas: [
          {
            idioma: "Español"
            cantidad_stock: 5
          }
          {
            idioma: "Ingles"
            cantidad_stock: 5
          }
        ]
      }
      {
        formato: "PDF"
        idiomas: [
          {
            idioma: "Español"
            cantidad_stock: 10
          }
          {
            idioma: "Ingles"
            cantidad_stock: 10
          }
        ]
      }
    ]
    autores: [
    	{
        _id: "63d9b420902132b2184e068b"
        nombre: "Gabriel García Márquez"
        pseudonimo: "Gabo"
      }
    ]
  	portada: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg"
    fecha_publicacion: "1967-01-01"
  })
}

*/