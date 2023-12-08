import { getServerSession } from "@/functions/getServerSession/getServerSession"

const Settings = async () => {
  const { user, error } = await getServerSession()
  console.log(user, error?.response?.data)
  
  return (
    <div>
      <div>super secret settings</div>

      <p>name: {user?.name}</p>
      <p>email: {user?.email}</p>
    </div>
  )
}

export default Settings