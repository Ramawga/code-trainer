import "./styles/global.scss";
import Header from "./components/header";
import Footer from "./components/footer/indext";
//pages
import ChallengeGenerator from "./pages/challengeGenerator";
function App() {
  return (
    <>
      <Header />
      <ChallengeGenerator/>
      <Footer />
    </>
  );
}

export default App;
