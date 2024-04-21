import { observer } from "mobx-react-lite"
import { HabbitInfo } from "./modules/habbitInfo"
import { SideBar } from "./modules/sideBar"
import { Modal } from "./modules/addHabbitModal"
import store from "./modules/store"
import './scrollbar.css'

const App = observer(() => {


  if (!store.habbitList) {
    store.habbitList = [{}]
  }

  return (
    <div className="scroll-container w-screen min-h-screen bg-bg flex font-comfortaa text-white">
      <SideBar />
      <HabbitInfo />
      {store.modalVisible ? <Modal /> : false}
    </div>
  )
})

export default App


