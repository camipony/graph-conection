import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from "./resolvers";

const typeDefs = `

    type Calificaciones {
        usuario: User
        calificacion: Int
        comentario: String
        fecha_crecion: String
    }

    type Idiomas {
        idioma: String
        cantidad_stock: Int
    }

    input IdiomasInput {
        idioma: String
        cantidad_stock: Int
    }

    type Formato {
        formato: String
        idiomas: [Idiomas]
    }

    input FormatoInput {
        formato: String
        idiomas: [IdiomasInput]
    }

    type Autor{
        _id: String
        nombre: String
        pseudonimo: String
    }

    input AutorInput{
        _id: String
        nombre: String
        pseudonimo: String
    }

    type Categoria {
        _id: String
        categoria: String
    }

    input CategoriaInput {
        _id: String
        categoria: String
    }

    type Proveedor {
        _id: String
        nombre: String
        telefono: String
        ubicacion: String
        a_mail: String
    }

    input ProveedorInput {
        _id: String
        nombre: String
        telefono: String
        ubicacion: String
        a_mail: String
    }

    type Book {
        _id: String
        codigo: String
        titulo: String
        descripcion: String
        precio: Int
        estado: String
        categoria: [Categoria]
        calificaciones: [Calificaciones]
        formato: [Formato]
        autores: [Autor]
        proveedores: [Proveedor]
        portada: String
        imagenes: [String]
        fecha_publicacion: String
        fecha_actualizacion: String
        fecha_creacion: String
    }

    type BookForUserLogin {
        _id: String
        codigo: String
        titulo: String
        descripcion: String
        precio: Int
        estado: String
        categoria: [Categoria]
        calificaciones: [Calificaciones]
        formato: [Formato]
        autores: [Autor]
        proveedores: [Proveedor]
        portada: String
        imagenes: [String]
        fecha_publicacion: String
        fecha_actualizacion: String
        fecha_creacion: String
        is_favorite: Boolean
        is_mine: Boolean
    }

    input BookInput {
        codigo: String
        titulo: String
        descripcion: String
        precio: Int
        estado: String
        categoria: [CategoriaInput]
        formato: [FormatoInput]
        autores: [AutorInput]
        proveedores: [ProveedorInput]
        portada: String
        imagenes: [String]
        fecha_publicacion: String
        fecha_actualizacion: String
    }

    type User {
        id: Int
        first_name: String
        last_name: String
        username: String
        email: String
    }

    type Purchased_books {
        id: Int
        identification: Int
        id_book: Book
        creation_date: String
    }

    type Item_cart {
        id_item: Int
        id_cart: Int
        id_book: Book
        creation_date: String
    }

    type Cart {
        id_cart: Int
        identification: Int
        creation_date: String
        items: [Item_cart]
    }

    type Favorites {
        id_favorites: Int
        identification: Int
        id_book: Book
    }

    type Query{
        hello: String
        getBooks: [Book]
        getBooksForUserLogin(ident: Int!): [BookForUserLogin]
        getBook(codigo: String!): Book
        getBookForUserLogin(codigo: String!, ident: Int!): BookForUserLogin
        getAutores: [Autor]
        getCategoria: [Categoria]
        getProveedor: [Proveedor]
        getCart(ident: Int!) : Cart
        getFavorite(ident: Int!) : [Book]
        getPurchased_books(ident: Int!) : [Book]
    }

    type Mutation {
        createBook(book: BookInput): String
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers })