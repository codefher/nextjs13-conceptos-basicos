import { NextResponse } from 'next/server'

console.log(process.env.TOKEN)

export async function GET() {
  // extract params
  // query database
  // comunite with other services

  // example with jsonplaceholder
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return NextResponse.json(data)
}

export async function POST(request) {
  const data = await request.json()
  console.log(data)
  return NextResponse.json({ message: 'creando datos!' })
}

export function PUT() {
  return NextResponse.json({ message: 'actualizando datos!' })
}
export function DELETE() {
  return NextResponse.json({ message: 'eliminando datos!' })
}
