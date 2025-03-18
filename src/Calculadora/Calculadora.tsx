import "./Calc.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/pages.css";

const Calculadora = () => {
  const [valorTela, setValorTela] = useState<string>("");
  const [resultado, setResultado] = useState<number | string>(0);
  const [operado, setOperado] = useState<boolean>(false);

  // Função para adicionar dígitos à tela -> texto dos botões pela label
  const addDigito = (digito: string) => {
    const operadores = ["+", "-", "*", "/"];
    if (operado) {
      setValorTela(digito);
      setOperado(false);
    } else if (operadores.includes(digito)) {
      if (operadores.includes(valorTela.slice(-1))) {
        return;
      }
      setValorTela((prev) => prev + digito); // Caso contrário, adiciona o operador
    } else {
      setValorTela((prev) => prev + digito);
    }
  };

  // Função para limpar a memória
  const limpaMemoria = () => {
    setValorTela('');
    setResultado(0);
    setOperado(false);
  };

  // Função para realizar a operação
  const calcularResultado = () => {
    try {
      const resultado = eval(valorTela);  // Avalia a expressão da tela
      setResultado(resultado);
      setOperado(true);  // Após a operação, o estado de operado é ativado
    } catch {
      setResultado("Erro");
    }
  };

  // Função para apagar um dígito (backspace)
  const apagarUltimoDigito = () => {
    setValorTela((prev) => prev.slice(0, -1));
    setOperado(false);
  };

  // JSX que irá renderizar os botões da calculadora
  const Button = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
      <div className="button" onClick={onClick}>
        {label}
      </div>
    );
  };

  return (
    <div className="calc__container w-[300px] h-[350px] flex flex-col justify-center items-center rounded-lg">
      <div className="calc__title w-full flex justify-center items-center">
        <h1 className="title text-2xl flex justify-center w-full">Calculadora</h1>
      </div>

      {/* Tela de exibição */}
      <div className="calc__view text-2xl bg-gray-300 w-full flex justify-center items-center">
      <span>{operado ? resultado : valorTela || '0'}</span>
      </div>

      {/* Botões */}
      <div className="calc__buttons grid grid-cols-4 grid-rows-5 gap-2 bg-black w-full">
        <Button label="AC" onClick={limpaMemoria} />
        <Button label="(" onClick={() => addDigito("(")} />
        <Button label=")" onClick={() => addDigito(")")} />
        <Button label="/" onClick={() => addDigito("/")} />
        <Button label="7" onClick={() => addDigito("7")} />
        <Button label="8" onClick={() => addDigito("8")} />
        <Button label="9" onClick={() => addDigito("9")} />
        <Button label="*" onClick={() => addDigito("*")} />
        <Button label="6" onClick={() => addDigito("6")} />
        <Button label="5" onClick={() => addDigito("5")} />
        <Button label="4" onClick={() => addDigito("4")} />
        <Button label="-" onClick={() => addDigito("-")} />
        <Button label="3" onClick={() => addDigito("3")} />
        <Button label="2" onClick={() => addDigito("2")} />
        <Button label="1" onClick={() => addDigito("1")} />
        <Button label="+" onClick={() => addDigito("+")} />
        <Button label="0" onClick={() => addDigito("0")} />
        <Button label="." onClick={() => addDigito(".")} />
        <Button label="Bs" onClick={apagarUltimoDigito} />
        <Button label="=" onClick={calcularResultado} />
      </div>
      <div className="links">
        <button className="calc__next">
        <Link to="/Pagina02">Next</Link>
        </button>
      </div>
    </div>
  );
};

export default Calculadora;