import { auth } from '@/auth'
import { redirect } from 'next/navigation'


const Admin = async () => {
  const session = await auth()
  if (!session) {
    return redirect('/api/auth/signin')
  }
  return (
    <>
      {JSON.stringify(session, null, 2)}
    </>
  )
}
export default Admin