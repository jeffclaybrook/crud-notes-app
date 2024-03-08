"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const EditNoteForm = ({ id, title, description }: { id: string, title: string, description: string }) => {
 const [newTitle, setNewTitle] = useState(title)
 const [newDescription, setNewDescription] = useState(description)
 const router = useRouter()
 const handleSubmit = async (e: any) => {
  e.preventDefault()
  try {
   const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ newTitle, newDescription })
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
   <fieldset className="flex flex-col gap-3 w-full">
    <legend>Edit Note</legend>
    <input
     type="text"
     placeholder="Title"
     value={newTitle}
     onChange={(e) => setNewTitle(e.target.value)}
     className="input input-bordered"
    />
    <textarea
     placeholder="Description"
     value={newDescription}
     onChange={(e) => setNewDescription(e.target.value)}
     className="textarea textarea-bordered textarea-md w-full"
    />
    <button type="submit" className="btn">Update</button>
   </fieldset>
  </form>
 )
}

export default EditNoteForm