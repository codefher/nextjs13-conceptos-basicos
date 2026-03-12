import Users from '@/components/Users'

export default function HomePage() {
  // server component
  return (
    <section>
      <h1>Hello world</h1>

      {/* client component: */}
      <Users />
    </section>
  )
}
