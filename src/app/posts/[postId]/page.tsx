import PostPages from '../page'
import { Suspense } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function loadPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  return res.json()
}

// Next.js 15: params is now a Promise
async function Page({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const post = await loadPost(postId)

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>

      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<p>Cargando...</p>}>
        <PostPages />
      </Suspense>
    </div>
  )
}

export default Page
