const {
  addBooksHandler,
  getBooksHandler,
  detailBookHandler,
  editBookHandler,
  deleteBookByIdHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailBookHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
