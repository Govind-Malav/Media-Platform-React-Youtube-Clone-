import Watch from "./pages/Watch"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import Profile from "./pages/Profile"
import Layout from "./Components/Layout"
function App() {
  return (
    <layout>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/watch/:id" element={<Watch/>} />  
        <Route path="/upload" element={<Upload/>} />  
        <Route path="/profile" element={<Profile/>} />  
      </Routes>
    </layout>
  
  )
}
export default App
