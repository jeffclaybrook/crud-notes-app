import Link from "next/link"

const Navbar = () => (
 <nav className="navbar bg-base-100">
  <div className="flex-1">
   <Link href={"/"} className="btn btn-ghost text-xl">MyNotes</Link>
  </div>
  <div className="flex-none">
   <Link href={"/addNote"} className="btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
    Add Note
   </Link>
  </div>
 </nav>
)

export default Navbar