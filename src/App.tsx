import "./App.css";
import Filters from "./components/Filters";
import MobileFooter from "./components/MobileFooter";
import MobileHeader from "./components/MobileHeader";
import SideNav from "./components/SideNav";
import Tasks from "./components/Tasks";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <TopNav />
      </div>
      <div className="flex gap-10">
        <div className="w-[224px] mt-2 hidden md:block">
          <SideNav />
        </div>
        <div className="fixed md:hidden">
          <MobileHeader />
        </div>
        <div className="w-full mt-14 md:mt-5">
          <h3 className="text-2xl font-semibold hidden md:block">
            Tasks of the day
          </h3>
          <Filters />
          <Tasks />
        </div>
        <div className="fixed bottom-0 md:hidden">
          <MobileFooter />
        </div>
      </div>
    </>
  );
}

export default App;
