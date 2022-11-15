import { Route, Routes } from 'react-router-dom';
import Books from './app/Books';
import Book from './app/Book';


const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Books />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/books/:book_id'} element={<Book />} />

        {/* <Route path='/users' component={Books}/>
        <Route path='/users/:{user_id}' component={Book}/>
        <Route path='/users/:{user_id}/cart' component={Book}/>
        <Route path='/checkout/:{user_id}' component={Book}/> */}

    </Routes>
  )
}

const LogoutRoutes = () => {
  return (
    <Routes>
        <Route path='/' component={Books}/>
    </Routes>
  )
}
export {LoginRoutes, LogoutRoutes};
