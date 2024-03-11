import { ReactNode } from "react"

interface MainProps {
 children: ReactNode
}

const Main = ({ children }: MainProps) => (
 <main className="px-6">{children}</main>
)

export default Main