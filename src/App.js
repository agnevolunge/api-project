
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageHeader from './Components/PageHeader/PageHeader';
import PostsPage from './Pages/PostsPage/PostsPage';
import AlbumsPage from './Pages/AlbumsPage/AlbumsPage'
import UsersPage from './Pages/UsersPage/UsersPage';
import PostPage from './Pages/PostPage/PostPage';
import UserPage from './Pages/UserPage/UserPage';
import AlbumPage from './Pages/AlbumPage/AlbumPage';
import MainPage from './Pages/MainPage/MainPage';
import CreatePostPage from './Pages/CreatePostPage/CreatePostPage';
import EditPostPage from './Pages/EditPostPage/EditPostPage';
// import UsersPage from './Pages/UsersPage/UsersPage';



function App() {
  return (
  <div>
    <PageHeader />

    <Routes>
      <Route path='/' element={<MainPage />} />

      <Route path='/posts' element={<PostsPage />} />
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path='/create-post' element={<CreatePostPage />} />
      <Route path='/edit-post/:id' element={<EditPostPage />} />

      <Route path='/albums' element={<AlbumsPage />} />
      <Route path='/albums/:id' element={<AlbumPage />} />

      <Route path='/users' element={<UsersPage />} />
      <Route path='/users/:id' element={<UserPage />} />

      <Route path='*' element={<h1>404: Page not found</h1>} />
    </Routes>
   
  </div>

  )
}

export default App;
