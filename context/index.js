import { useState, createContext } from "react"

export const CVContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: "Silas Idowu",
    username: "Silasico",
    email: "idowusilas2019@gmail.com",
    phone: "+234 816 129 9594",
    bio: "A medical student, A front end web developer, A mobile app developer, A Tech enthusiast, A graphic designer.",
    githubUrl: "https://github.com/Silasico",
    track: "Mobile Track"
  })
  
  return (
    <CVContext.Provider value = {{details, setDetails}}>
      {children}
    </CVContext.Provider>
  )
}

export default ContextProvider