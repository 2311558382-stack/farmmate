import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Fields from "./pages/Fields";
import Seasons from "./pages/Seasons";
import Costs from "./pages/Costs";

function App() {
  const [page, setPage] = useState(window.location.hash || "#dashboard");

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash || "#dashboard");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (page === "#fields") {
    return <Fields />;
  }

  if (page === "#seasons") {
    return <Seasons />;
  }

  if (page === "#costs") {
    return <Costs />;
  }

  return <Dashboard />;
}

export default App;