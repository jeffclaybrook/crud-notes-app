import Link from "next/link"
import DeleteNote from "./DeleteNote"

const getNotes = async () => {
 try {
  const res = await fetch("http://localhost:3000/api/notes", {
   cache: "no-store"
  })

  if (!res.ok) {
   throw new Error("Unable to fetch notes")
  }
  
  return res.json()
 } catch (error) {
  console.log("Error loading notes", error)
 }
}

const NotesList = async () => {
 const { notes } = await getNotes()

 return (
  <div>
   {notes.map((item: any) => (
    <div key={item._id} className="p-4 border rounded-lg border-slate-300 my-3 flex justify-between gap-5 items-start">
     <Link href={`/editNote/${item._id}`} className="grow">
      <h2 className="font-semibold text-2xl">{item.title}</h2>
      <p>{item.description}</p>
     </Link>
     <DeleteNote id={item._id} />
    </div>
   ))}
  </div>
 )
}

export default NotesList