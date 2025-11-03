import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css'; 
import { RiArrowDropDownLine } from "react-icons/ri";

function AdcionarTeste() {
  const [aeronave, setAeronave] = useState('');
  const [tipo, setTipo] = useState('');
  const [resultado, setResultado] = useState('');
  const [data, setData] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Novo teste registrado com sucesso(Simulação)');
    navigate('/teste'); 
  };

  return (
    <div className="form-container">
      <h1 className="pagina-titulo">Registrar Novo Teste</h1>
      <form onSubmit={handleSubmit} className="form"> 
        <div className="input-form">
          <label htmlFor="aeronave">Código da Aeronave</label>
          <input 
            type="text"
            id="aeronave"
            value={aeronave}
            onChange={(e) => setAeronave(e.target.value)}
            placeholder="Ex: ZC-250"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="tipo">Tipo de Teste</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o tipo</option>
            <option value="ELETRICO">Elétrico</option>
            <option value="HIDRAULICO">Hidráulico</option>
            <option value="AERODINAMICO">Aerodinâmico</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input">
          <label htmlFor="resultado">Resultado</label>
          <select
            id="resultado"
            value={resultado}
            onChange={(e) => setResultado(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o resultado</option>
            <option value="APROVADO">Aprovado</option>
            <option value="REPROVADO">Reprovado</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input-form">
          <label htmlFor="data">Data do Teste</label>
          <input 
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="responsavel">Responsável</label>
          <input 
            type="text"
            id="responsavel"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            placeholder="Ex: A. Santos"
            required
          />
        </div>
        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            Salvar Teste
          </button>
          <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/teste')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdcionarTeste;