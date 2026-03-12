'use client'

import { useParams } from 'next/navigation'

function UserPage() {
  const params = useParams<{ userId: string }>()
  console.log(params)

  return (
    <div>
      <button
        onClick={() => {
          console.log('works!!!')
        }}
      >
        click
      </button>
    </div>
  )
}

export default UserPage
