import Post from '../page'
import {Suspense} from 'react'

async function loadPost(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return res.json()
}

async function Page({ params }) {

  const post = await loadPost(params.postId)

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>

      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<p>Cargando...</p>}>
        <Post />
      </Suspense>
    </div>
  )
}

export default Page
