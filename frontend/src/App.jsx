import "./App.css";
import CurrencySelector from "./components/CurrencySelector";
import contractABI from "./contracts/currency.json";

// Replace with your contract address
const contractAddress = "0xA930d02D07a6dd86dD9f2C5dEEdC604aFe23326b";

function App() {
  return (
    <div className="App" style={{ background: 'white' }}>
      <header className="App-header">
        <h1 style={{color: 'black'}}>Crypto Currency Converter </h1>
        <CurrencySelector
          contractAddress={contractAddress}
          contractABI={contractABI}
        />
      </header>
    </div>
  );
}

export default App;
