import "./App.css";
import OngoingService from "./components/OngoingService";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[224px]">Sidebar</div>
        <div className="w-full">
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
