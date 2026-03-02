import PostCard from '@/components/PostCard'
import './Post.css'

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  // await new Promise(resolve => setTimeout(resolve, 5000))

  return data
}

// RSC - React Server Component
async function PostPages() {
  const posts = await loadPosts()
  // console.log(posts)

  return (
    <div className='grid'>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostPages
