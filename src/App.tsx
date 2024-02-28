import { Alert } from "./Alert";


export default function App() {
  return (
    <div className="App">
      <Alert
        type="information"
        heading="Success"
        closable
        onClose={() => console.log("closed")}
      >
        Everything is really good!
      </Alert>
    </div>
  );
}