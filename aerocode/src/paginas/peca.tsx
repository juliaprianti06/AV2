import { useNavigate } from 'react-router-dom';
import '../styles/status.css';
import '../styles/global.css';
import { IoIosSearch } from "react-icons/io";
import  { useState } from 'react';
import ModalPeca from '../components/modal/modalPeca';

const mockPecas = [
  { id: 'P-001', nome: 'Turbina T-1000', tipo: 'IMPORTADA', fornecedor: 'GE Aviation', status: 'EM PRODUCAO', aeronaveCodigo: 'XA-100' },
  { id: 'P-002', nome: 'Sistema de Navegação AvX', tipo: 'NACIONAL', fornecedor: 'AvX Systems', status: 'EM PRODUCAO', aeronaveCodigo: 'XA-100' },
  { id: 'P-003', nome: 'Fuselagem Leve Z-250', tipo: 'NACIONAL', fornecedor: 'ZCorp', status: 'EM TRANSPORTE', aeronaveCodigo: 'ZC-250' },
  { id: 'P-004', nome: 'Motor de Carga R-500',  tipo: 'IMPORTADA', fornecedor: 'Rolls-Royce', status: 'PRONTA', aeronaveCodigo: 'ZC-250' },
  {id: 'P-005',nome: 'Sistema Hidráulico H-200', tipo: 'IMPORTADA', fornecedor: 'HydroTech',status: 'PRONTA', aeronaveCodigo: 'AM-450'},
  {id: 'P-006', nome: 'Painel de Controle Avanz', tipo: 'NACIONAL', fornecedor: 'Avanz Sistemas', status: 'PRONTA', aeronaveCodigo: 'AM-450'}
];
const getStatusClass = (status: string) => status.toLowerCase().replace(' ', '-');

function Peca() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [pecas, setPecas] = useState(mockPecas);
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [pecaParaEditar, setPecaParaEditar] = useState<any>(null);

  const pecasFiltradas = pecas.filter(peca =>
    peca.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const handleAbrirModal = (peca: any) => {
    if (peca.status === 'PRONTA') {
      return;
    }
    setPecaParaEditar(peca);
    setModalEstaAberto(true);
  };
  const handleFecharModal = () => {
    setModalEstaAberto(false);
    setPecaParaEditar(null);
  };
  const handleSalvarPeca = (pecaId: string, novoStatus: string) => {
    setPecas(pecasAtuais =>
      pecasAtuais.map(peca =>
        peca.id === pecaId ? { ...peca, status: novoStatus } : peca
      )
    );
    handleFecharModal();
  };
  return (
    <div className="container">
      <h1 className="pagina-titulo">Controle de Peças</h1>
        <button 
        className="add-btn"
        onClick={() => navigate('/addPeca')}
      >
        Cadastrar Peça
      </button>
      <div className="busca-container">
        <input 
          type="text"
          className="campo-busca"
          placeholder="Buscar pelo nome da peça..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <IoIosSearch className="busca-icon" />
      </div>
      <div className="cards-grid">
        {pecasFiltradas.map((peca) => (
          <article key={peca.id} className="card">
            <div className="card-conteudo">
              <div className="info">
                <span className="nome">{peca.nome}</span>
             <span className="detalhes">Código Aeronave: {peca.aeronaveCodigo}</span> 
                <span className="detalhes">Tipo: {peca.tipo}</span>
                <span className="detalhes">Fornecedor: {peca.fornecedor}</span>
              </div>
              <span 
                className={`status ${peca.status !== 'PRONTA' ? 'click' : ''} ${getStatusClass(peca.status)}`}
                onClick={() => handleAbrirModal(peca)}
              >
            {peca.status.replace('-', ' ')} 
            </span> 
            </div>
          </article>
        ))}
      </div>   
      {modalEstaAberto && pecaParaEditar && (
        <ModalPeca
          peca={pecaParaEditar}
          onClose={handleFecharModal}
          onSave={handleSalvarPeca}
        />
      )}
    </div>
  );
}

export default Peca;