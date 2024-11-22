import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className=" flex justify-center items-center flex-col font-family-serif bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      <main className="relative w-[912px] h-[485px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />

        <TodoList />

        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
