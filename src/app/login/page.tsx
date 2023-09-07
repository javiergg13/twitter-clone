import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login() {
  return (
    <main>
      <h1 className='text-xl font-bold mb-4'>Inicia sesión en DevTer</h1>
      <AuthButtonServer />
    </main>
  )
}
