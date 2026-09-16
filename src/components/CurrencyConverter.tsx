import { useState } from "react";
import { getRates } from "../services/exchangeApi";

function CurrencyConverter() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  const [de, setDe] = useState("USD");
  const [para, setPara] = useState("BRL");

  const inverterMoedas = () => {
  const temp = de;
  setDe(para);
  setPara(temp);
};

  const converter = async () => {
    const valorNumerico = Number(valor);

    if (!valorNumerico) {
      setResultado("Digite um valor válido");
      return;
    }

    try {
      const rates = await getRates(de);

      const taxa = rates[para];

      const convertido = valorNumerico * taxa;

      setResultado(
        `${valorNumerico} ${de} = ${convertido.toFixed(2)} ${para}`
      );
    } catch (error) {
      setResultado("Erro ao obter cotação");
    }
  };

  return (
    <section className="converter">
      <div className="card">
        <input
          type="number"
          placeholder="Digite o valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <select
          value={de}
          onChange={(e) => setDe(e.target.value)}
        >
          <option value="USD">USD - Dólar</option>
          <option value="BRL">BRL - Real</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - Libra</option>
          <option value="JPY">JPY - Iene</option>
          <option value="AUD">AUD - Dólar Australiano 🇦🇺</option>
          <option value="CAD">CAD - Dólar Canadense 🇨🇦</option>
          <option value="CHF">CHF - Franco Suíço 🇨🇭</option>
          <option value="CNY">CNY - Yuan Chinês 🇨🇳</option>
          <option value="HKD">HKD - Dólar de Hong Kong 🇭🇰</option>
          <option value="INR">INR - Rúpia Indiana 🇮🇳</option>
          <option value="KRW">KRW - Won Sul-Coreano 🇰🇷</option>
          <option value="MXN">MXN - Peso Mexicano 🇲🇽</option>
          <option value="NOK">NOK - Coroa Norueguesa 🇳🇴</option>
          <option value="NZD">NZD - Dólar Neozelandês 🇳🇿</option>
          <option value="PLN">PLN - Złoty Polonês 🇵🇱</option>
          <option value="SEK">SEK - Coroa Sueca 🇸🇪</option>
          <option value="SGD">SGD - Dólar de Singapura 🇸🇬</option>
          <option value="TRY">TRY - Lira Turca 🇹🇷</option>
          <option value="ZAR">ZAR - Rand Sul-Africano 🇿🇦</option>
        </select>

        <button
  className="swap-btn"
  onClick={inverterMoedas}
>
  ⇄ Inverter moedas
</button>

        <select
          value={para}
          onChange={(e) => setPara(e.target.value)}
        >
          <option value="BRL">BRL - Real</option>
          <option value="USD">USD - Dólar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - Libra</option>
          <option value="JPY">JPY - Iene</option>
          <option value="AUD">AUD - Dólar Australiano 🇦🇺</option>
          <option value="CAD">CAD - Dólar Canadense 🇨🇦</option>
          <option value="CHF">CHF - Franco Suíço 🇨🇭</option>
          <option value="CNY">CNY - Yuan Chinês 🇨🇳</option>
          <option value="HKD">HKD - Dólar de Hong Kong 🇭🇰</option>
          <option value="INR">INR - Rúpia Indiana 🇮🇳</option>
          <option value="KRW">KRW - Won Sul-Coreano 🇰🇷</option>
          <option value="MXN">MXN - Peso Mexicano 🇲🇽</option>
          <option value="NOK">NOK - Coroa Norueguesa 🇳🇴</option>
          <option value="NZD">NZD - Dólar Neozelandês 🇳🇿</option>
          <option value="PLN">PLN - Złoty Polonês 🇵🇱</option>
          <option value="SEK">SEK - Coroa Sueca 🇸🇪</option>
          <option value="SGD">SGD - Dólar de Singapura 🇸🇬</option>
          <option value="TRY">TRY - Lira Turca 🇹🇷</option>
          <option value="ZAR">ZAR - Rand Sul-Africano 🇿🇦</option>
        </select>

        <button onClick={converter}>
          Converter
        </button>

        <button onClick={limpar}>
  🗑️ Limpar
</button>

        <h2>{resultado}</h2>
      </div>
    </section>
  );
}

export default CurrencyConverter;