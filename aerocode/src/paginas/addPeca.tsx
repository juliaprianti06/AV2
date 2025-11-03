import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const mockAeronaves = [
  { id: 'AC-001', modelo: 'X-100 Executivo', codigoAeronave: 'XA-100' },
  { id: 'AC-002', modelo: 'Z-250 Carga', codigoAeronave: 'ZC-250' },
  { id: 'AC-003', modelo: 'A-450 Militar', codigoAeronave: 'AM-450' },
];

function AdicionarPeca() {
  const [nomePeca, setNomePeca] = useState('');
  const [aeronaveCodigo, setAeronaveCodigo] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [tipo, setTipo] = useState('');
  const [status, setStatus] = useState('EM PRODUCAO');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nova peça cadastrada com sucesso (Simulação)');
    navigate('/peca');
  };
  return (
    <div className="form-container">
      <h1 className="pagina-titulo">Cadastrar Nova Peça</h1>
      <form onSubmit={handleSubmit} className="form-principal">
        <div className="input-form">
          <label htmlFor="nomePeca">Nome da Peça</label>
          <input 
            type="text"
            id="nomePeca"
            value={nomePeca}
            onChange={(e) => setNomePeca(e.target.value)}
            placeholder="Ex: Turbina T-1000"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="aeronaveSelect">Associar à Aeronave (Código)</label>
          <select
            id="aeronaveSelect"
            value={aeronaveCodigo}
            onChange={(e) => setAeronaveCodigo(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o código da aeronave...</option>
            {mockAeronaves.map(a => (
              <option key={a.id} value={a.codigoAeronave}>
                {a.modelo} ({a.codigoAeronave})
              </option>
            ))}
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input-form">
          <label htmlFor="fornecedor">Fornecedor</label>
          <input 
            type="text"
            id="fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
            placeholder="Ex: GE Aviation"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="tipo">Tipo da Peça</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o tipo</option>
            <option value="NACIONAL">Nacional</option>
            <option value="IMPORTADA">Importada</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input">
          <label htmlFor="status">Status da Peça</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="EM PRODUCAO">Em Produção</option>
            <option value="EM TRANSPORTE">Em Transporte</option>
            <option value="PRONTA">Pronta</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            Salvar Peça
          </button>
          <button 
            type="button" 
            className="btn-cancelar" 
            onClick={() => navigate('/peca')}
          >
            Cancelar
          </button>
        </div>

      </form>
    </div>
  );
}

export default AdicionarPeca;
