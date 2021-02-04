import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
