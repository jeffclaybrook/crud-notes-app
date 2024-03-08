"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const AddNote = () => {
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const router = useRouter()

 const handleSubmit = async (e: any) => {
  e.preventDefault()
  if (!title || !description) {
   alert("Title and description required")
  }
  try {
   const res = await fetch(`http://localhost:3000/api/notes`, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, description })
   })
   if (res.ok) {
    router.push("/")
    router.refresh()
   } else {
    throw new Error("Unable to create note")
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
   <fieldset className="flex flex-col gap-3">
    <legend>Add Note</legend>
    <input
     type="text"
     placeholder="Title"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     className="input input-bordered"
    />
    <textarea
     placeholder="Description"
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     className="textarea textarea-bordered textarea-md w-full"
    />
    <button type="submit" className="btn">Add</button>
   </fieldset>
  </form>
 )
}

export default AddNote