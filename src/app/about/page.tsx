'use client'

import { useRouter } from 'next/navigation'

function AboutPage() {
  const router = useRouter()

  return (
    <section>
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint
        quis error fugit, vero rerum repudiandae hic. Cum voluptatibus incidunt,
        nisi beatae fuga accusantium? Nobis, deleniti sunt. Molestias, iusto
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Maiores, quae. Consequatur, error cupiditate? Accusantium, maiores, vel,
        nobis ab quia eligendi illo praesentium quae magni asperiores soluta?
        Aperiam atque libero possimus?
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert('click funcionando')
          router.push('/')
        }}
      >
        Click
      </button>
    </section>
  )
}

export default AboutPage
