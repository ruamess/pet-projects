import { observer } from "mobx-react-lite"
import { HabitInfo } from "./modules/habitInfo"
import { SideBar } from "./modules/sideBar"
import { Toaster } from 'sonner'
import store from "./modules/store"
import './scrollbar.css'
import { HabitCreate, Settings } from "./modules/modals"

const App = observer(() => {

  if (store.theme === 'dark' || (!('theme' in store) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (!store.habitList) {
    store.habitList = []
  }

  return (
    <div className="scroll-container justify-center w-screen min-h-screen bg-[#F3F6FD] text-black dark:bg-bg dark:text-white 
    flex font-comfortaa overflow-hidden overflow-y-hidden flex-col-reverse md:flex-row">
      <Toaster position="top-center" richColors theme={localStorage.theme == "dark" ? "dark" : "light"} />
      <SideBar />
      <HabitInfo />
      {store.modals.createHabit ? <HabitCreate /> : false}
      {store.modals.settings ? <Settings /> : false}
    </div>
  )
})

export default App


