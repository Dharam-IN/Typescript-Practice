import { FormEvent, useState } from "react"

function App() {

  interface Person{
    name: string,
    age: number
  }

  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>User</label>
        <input type="number" value={user?.age} onChange={(e) => setUser((prev) => ({...prev!, age: Number(e.target.value)}))} />
        <input type="text" value={user?.name} onChange={(e) => setUser((prev) => ({...prev!, name: e.target.value}))} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
