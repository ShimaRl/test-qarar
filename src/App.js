import "./App.css";
import { JitsiMeeting } from "@jitsi/react-sdk";

function App() {
  return (
    <div className="App">
      <JitsiMeeting
        roomName={"test"}
        getIFrameRef={(node) => (node.style.height = "100vh")}
        domain={"room.gharar.ir/e755ca18-30f1-4794-9da1-fa99ec84ab68"}
      />
    </div>
  );
}

export default App;
