import { NextRequest, NextResponse } from 'next/server'

// Next.js 15: params is now a Promise in Route Handlers
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userid: string }> }
) {
  const { userid } = await params
  const { searchParams } = new URL(request.url)
  console.log(searchParams.get('nombre'))
  console.log(searchParams.get('apellido'))

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  )
  const data = await res.json()

  return NextResponse.json(data)
}
