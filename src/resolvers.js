import axios from 'axios'
import {
    run_axios,
    get_calificacion
} from './middleware';

const rutaMicroBook = 'http://localhost:4000';
const rutaMicroUser = 'http://127.0.0.1:8000';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!"
        },
        getBooks: async () => {
            try {
                let data = await run_axios(rutaMicroBook + '/books')
                data.data.book.calificaciones = await get_calificacion(
                    data.data.book.calificaciones
                )
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBooksForUserLogin: async (_, {ident}) => {
            try {
                let data = await run_axios(rutaMicroBook + '/books')
                data.data.book.calificaciones = await get_calificacion(
                    data.data.book.calificaciones
                )
                let favorite = await run_axios(rutaMicroUser+'/favorites/'+ident+'/')
                let purchased = await run_axios(rutaMicroUser+'/purchased/'+ident+'/')
                data.data.book = data.data.book.map(book => {
                    let filter = favorite.data.filter(b => b.id_book === book.codigo)
                    let filter2 = purchased.data.filter(b => b.id_book   === book.codigo)
                    console.log(purchased.data)
                    if(  filter && filter.length > 0 ){
                        book.is_favorite = true
                    } 
                    else {
                        book.is_favorite = false
                    }

                    if(  filter2 && filter2.length > 0 ){
                        book.is_mine = true
                    } 
                    else {
                        book.is_mine = false
                    }

                    return book
                })
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBook: async (root, {codigo}) => {
            try {
                let data = await run_axios(rutaMicroBook + '/book/' + codigo)
                data.data.book.calificaciones = await get_calificacion(
                    data.data.book.calificaciones
                )
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBookForUserLogin: async (_, {codigo, ident}) => {
            try {
                let data = await run_axios(rutaMicroBook + '/book/' + codigo)
                data.data.book.calificaciones = await get_calificacion(
                    data.data.book.calificaciones
                )
                let favorite = await run_axios(rutaMicroUser+'/favoritesbook/'+ident+'/'+codigo+'/')
                let purchased = await run_axios(rutaMicroUser+'/purchasedbook/'+ident+'/'+codigo+'/')
                if( favorite.data && favorite.data.length > 0 ){
                    data.data.book.is_favorite = true
                } 
                else {
                    data.data.book.is_favorite = false
                }

                if(  purchased.data && purchased.data.length > 0 ){
                    data.data.book.is_mine = true
                } 
                else {
                    data.data.book.is_mine = false
                }

                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getAutores: async () => {
            try {
                let data = await run_axios(rutaMicroBook + '/autores')
                return data.data.autores
            } catch (error) {
                console.log(error)
            }
        },
        getCategoria: async () => {
            try {
                let data = await run_axios(rutaMicroBook + '/categorias')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getProveedor: async () => {
            try {
                let data = await run_axios(rutaMicroBook + '/providers')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getCart: async (_, {ident}) => {
            try {
                let data = await run_axios(rutaMicroUser + '/cart/' + ident +'/')
                const items = await run_axios(rutaMicroUser + '/item/' + data.data[0].id_cart + '/')
                let itemsBook = items.data 

                itemsBook = itemsBook.map(async item => {
                    let book = await run_axios(rutaMicroBook + '/book/' + item.id_book)
                    item.id_book = book.data.book
                    return item
                })

                data.data[0].items = itemsBook
                return data.data[0]
            } catch (error) {
                console.log(error.message)
            }
        },
        getFavorite: async (_, {ident}) => {
            try {
                let data = await run_axios(rutaMicroUser+'/favorites/'+ident+'/')
                let book = await data.data.map(async favorites => {
                    let book = await run_axios(rutaMicroBook + '/book/' + favorites.id_book)
                    return book.data.book
                })
                return book
            } catch (error) {
                console.log(error)
            }
        },
        getPurchased_books: async (_, {ident}) => {
            try {
                let data = await run_axios(rutaMicroUser+'/purchased/'+ident+'/')
                let book = data.data.map(async purchased => {
                    let book = await run_axios(rutaMicroBook + '/book/' + purchased.id_book)
                    return book.data.book
                })
                return book
            } catch (error) {
                console.log(error)
            }
        },
    },

    Mutation: {
        createBook: async (_, { book }) => {
            try {
                let data = await axios.post( rutaMicroBook + '/book/', book)
                return data.data.msg
            } catch (error) {
                console.log(error)
            }
        }
    }
};