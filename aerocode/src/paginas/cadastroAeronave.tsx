import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css'; 
import { RiArrowDropDownLine } from "react-icons/ri";

function CadastroAeronave() {
  const [codigo, setCodigo] = useState('');
  const [modelo, setModelo] = useState('');
  const [tipo, setTipo] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [alcance, setAlcance] = useState('');
  const [nomeCliente, setNomeCliente] = useState(''); 
  const [dataEntrega, setDataEntrega] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nova aeronave cadastrada com sucesso (Simulação)');
    navigate('/listarAeronave'); 
  };

  return (
    <div className="form-container">
      <h1 className="pagina-titulo">Cadastrar Aeronave</h1>  
      <form onSubmit={handleSubmit} className="form">   
        <div className="input-form">
          <label htmlFor="codigo">Código Único da Aeronave</label>
          <input 
            type="text"
            id="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Ex: XA-101"
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="modelo">Modelo</label>
          <input 
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Ex: X-100 Executivo"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="tipo">Tipo de Aeronave</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o tipo</option>
            <option value="COMERCIAL">Comercial</option>
            <option value="MILITAR">Militar</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input-form">
          <label htmlFor="capacidade">Capacidade</label>
          <input 
            type="text"
            id="capacidade"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            placeholder="Ex: 180 passageiros"
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="alcance">Alcance</label>
          <input 
            type="text"
            id="alcance"
            value={alcance}
            onChange={(e) => setAlcance(e.target.value)}
            placeholder="Ex: 5.000 km"
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="nomeCliente">Nome do Cliente</label>
          <input 
            type="text"
            id="nomeCliente"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            placeholder="Ex: Nome"
            required
          />
        </div>

        <div className="input-form">
          <label htmlFor="dataEntrega">Data de Entrega</label>
          <input 
            type="date"
            id="dataEntrega"
            value={dataEntrega}
            onChange={(e) => setDataEntrega(e.target.value)}
            required
          />
        </div>
        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            Salvar Aeronave
          </button>
          <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/producao')} 
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroAeronave;