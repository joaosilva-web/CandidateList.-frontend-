import { useState } from "react";
import { CreateCandidateForm } from "./components/CreateCandidate";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContextProvider } from "./contexts/Context";
import { CandidatePage } from "./pages/Candidate";

function App() {
  const [submit, setSubmit] = useState(false);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home submit={setSubmit} />} />
        <Route
          path="/createCandidate"
          element={<CreateCandidateForm />}
        ></Route>
        <Route path="/candidate" element={<CandidatePage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
