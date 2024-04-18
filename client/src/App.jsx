
import { Auth } from "./modules/auth"
import { Toaster } from 'sonner'
import Home from "./pages/Home"


function App() {


  return (
    <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center text-white p-10">
      {/* <Auth /> */}
      <Toaster position="top-center" />
      <Home />
    </div>
  )
}

export default App
