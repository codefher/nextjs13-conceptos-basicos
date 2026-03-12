import PostCard from '@/components/PostCard'
import './Post.css'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function loadPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Post[] = await res.json()
  return data
}

// RSC - React Server Component
async function PostPages() {
  const posts = await loadPosts()

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostPages
