import './App.css';
import { Route, Routes, useLocation, useParams } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <p>LINKS:</p>

        <Link to="/blog/coolblog/1">Cool blog</Link>
        <br />
        <Link to="/blog/randomblog/1">Random blog</Link>
        <br />
        <Link to="/notnestedblog/notnestedblog/1">Not nested blog</Link>
        <br />
        <Link to="/notnestedblog/another/2">Another Not nested blog</Link>
        <br />
        <Link to="/notnestedblog/sluggy/3/whatevs">Not nested blog with slug</Link>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="blog">
          <Route path=":blogName" element={<Blog />}>
            <Route path=":postId" element={<Blog />}>
              <Route path=":postSlug" element={<Blog />}>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="notnestedblog" element={<NotNestedRouteBlog />} />
        <Route path="notnestedblog/:blogName" element={<NotNestedRouteBlog />} />
        <Route path="notnestedblog/:blogName/:postId" element={<NotNestedRouteBlog />} />
        <Route path="notnestedblog/:blogName/:postId/:postSlug" element={<NotNestedRouteBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Blog() {
  const {pathname} = useLocation()
  const {blogName,postId,postSlug} = useParams()

  console.log('pathname', pathname);
  console.log('blogName', blogName);

  return (
    <div>
      <p>This is the blog: {blogName}</p>
      <p>This post has id: {postId}</p>
      <p>This post has slug: {postSlug || 'undefined'}</p>
    </div>
  )
}

function NotNestedRouteBlog() {
  const {pathname} = useLocation()
  const {blogName,postId,postSlug} = useParams()

  console.log('pathname', pathname);
  console.log('blogName', blogName);

  return (
    <div>
      <p>This is the blog: {blogName}</p>
      <p>This post has id: {postId}</p>
      <p>This post has slug: {postSlug || 'undefined'}</p>
    </div>
  )
}

export default App;
