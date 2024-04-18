
import { TodoList } from "./modules/todoList"
import { Todo } from "./modules/todo"



function App() {

  console.log(typeof localStorage.getItem('todoList'))

  return (
    <div className="min-w-screen min-h-screen bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 w-screen md:w-[700px] p-5">
        <h1 className="text-[#E9D9D8] text-8xl font-extralight cursor-pointer">todos</h1>

        <ul className="bg-white h-fit text-2xl container" >

          <li className="border p-5 h-[70px] text-gray-300">
            <span>All todos</span>
          </li>

          <TodoList />

          <li className="border">

            <div className="text-center gap-2 flex justify-around items-center h-[50px] text-[15px]">
              <div className="flex items-center">
                <span>2 times left</span>
              </div>

              <div className="flex gap-4">
                <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                  <span>All</span>
                </button>
                <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                  <span>Active</span>
                </button>
                <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border  duration-500">
                  <span>Completed</span>
                </button>
              </div>

              <div>
                <button className="h-10 w-22 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                  <span>Clear completed</span>
                </button>
              </div>

            </div>

          </li>

        </ul>


        <table className="bg-white h-fit text-2xl container" border={1}>



          {/* <TodoList /> */}

          {/* <tfoot className="border">
              <tr>
                <td className="text-center gap-2 flex justify-around items-center h-[50px] text-[15px]">
                  <div className="flex items-center">
                    <span>2 times left</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                      <span>All</span>
                    </button>
                    <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                      <span>Active</span>
                    </button>
                    <button className="h-10 p-2 flex items-center justify-center hover:bg-acc border  duration-500">
                      <span>Completed</span>
                    </button>
                  </div>
                  <div>
                    <button className="h-10 w-22 p-2 flex items-center justify-center hover:bg-acc border duration-500">
                      <span>Clear completed</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot> */}

        </table>
      </div>
    </div>
  )
}

export default App
