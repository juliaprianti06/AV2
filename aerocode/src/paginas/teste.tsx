import { useNavigate } from 'react-router-dom';
import '../styles/status.css';
import '../styles/global.css'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import ModalTeste from '../components/modal/modalTeste';

const mockTestes = [
  { id: 'T-001', codigoAeronave: 'XA-100', tipo: 'ELETRICO', status: 'APROVADO', prazo: '01/11/2025', funcionario: 'J. Silva'},
  { id: 'T-002', codigoAeronave: 'XA-100', tipo: 'HIDRAULICO', status: 'APROVADO', prazo: '02/11/2025', funcionario: 'M. Costa'},
  { id: 'T-003', codigoAeronave: 'ZC-250', tipo: 'AERODINAMICO', status: 'REPROVADO', prazo: '03/11/2025', funcionario: 'A. Santos'},
];

const getStatusClass = (status: string) => status.toLowerCase();

function Teste() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [testes, setTestes] = useState(mockTestes);
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [testeParaEditar, setTesteParaEditar] = useState<any>(null);

  const linhasFiltradas = testes.filter(teste =>
    teste.codigoAeronave.toLowerCase().includes(busca.toLowerCase())
  );

  const handleAbrirModal = (teste: any) => {
    if (teste.status === 'APROVADO') {
      return;
    }
    setTesteParaEditar(teste);
    setModalEstaAberto(true);
  };

  const handleFecharModal = () => {
    setModalEstaAberto(false);
    setTesteParaEditar(null);
  };

 const handleSalvarTeste = (testeId: string, novoResultado: string) => {
    setTestes(testesAtuais =>
      testesAtuais.map(teste =>
      teste.id === testeId ? { ...teste, status: novoResultado } : teste
      )
    );
    handleFecharModal();
  };

  return (
    <div className="container">
      <h1 className="pagina-titulo">Registro de Testes</h1>
      <button 
        className="add-btn" 
        onClick={() => navigate('/addTeste')}
      >
        Registrar Novo Teste
      </button>
      <div className="busca-container">
              <input 
                type="text"
                className="campo-busca"
                placeholder="Buscar por código da aeronave..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <IoIosSearch className="busca-icon" />
            </div>
      <div className="cards-grid">
        {linhasFiltradas.map((teste) => (
          <article key={teste.id} className="card">
            <div className="card-conteudo">
              <h3 className="card-titulo">Código da Aeronave: {teste.codigoAeronave}</h3>
              <div className="item">
                <span className="nome">Tipo de Teste:</span>
                <span className="detalhes">{teste.tipo}</span>
              </div>
              <div className="item">
                <span className="nome">Data:</span>
                <span className="detalhes">{teste.prazo}</span>
            </div> 
              <div className="item">
                <span className="nome">Responsável:</span>
                <span className="detalhes">{teste.funcionario}</span>
              </div>
              <div className="item">
                <span className="nome">Status:</span>
                <span 
                  className={`status-teste ${teste.status !== 'APROVADO' ? 'click' : ''} ${getStatusClass(teste.status)}`}
                  onClick={() => handleAbrirModal(teste)}
                >
                  {teste.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {modalEstaAberto && testeParaEditar && (
        <ModalTeste
          teste={testeParaEditar}
          onClose={handleFecharModal}
          onSave={handleSalvarTeste}
        />
      )}
    </div>
  );
}

export default Teste;