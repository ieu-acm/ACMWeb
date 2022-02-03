import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import AuthScreen from "./Screens/AuthScreen";
import SignUpScreen from "./Screens/SignUpScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/auth/signup" element={<SignUpScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
    /* Selam */
  );
}

export default App;
