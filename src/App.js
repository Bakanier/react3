import React from "react";
import PortalComponent from "./Portal/PortalComponent";
import ParentComponent from "./Children/Parrent";
import ChildComponent1 from "./Children/Children1";
import ChildComponent2 from "./Children/Children2";

function App() {
  return (
    <div className="App">
      <PortalComponent/>
      <ParentComponent>
        <ChildComponent1/>
        <ChildComponent2/>
      </ParentComponent>
    </div>
  );
}

export default App;
