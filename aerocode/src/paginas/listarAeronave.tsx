import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/status.css';
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import ModalAeronave from '../components/modal/modalAeronave';

const mockAeronaves = [
  { id: 'AC-001', modelo: 'X-100 Executivo', codigoAeronave: 'XA-100', tipo: 'COMERCIAL', capacidade: '8 passageiros', alcance: '7.000 km', nomeCliente: 'Gustavo Santos',
    dataEntrega: '2025-12-01', status: 'EM ANDAMENTO' },
  { id: 'AC-002', modelo: 'Z-250 Carga', codigoAeronave: 'ZC-250', tipo: 'COMERCIAL', capacidade: '50 toneladas', alcance: '4.500 km', nomeCliente: 'Yasmin Padilha',
    dataEntrega: '2025-12-10',status: 'EM ANDAMENTO' },
  { id: 'AC-003', modelo: 'A-450 Militar', codigoAeronave: 'AM-450', tipo: 'MILITAR', capacidade: '6 passageiros', alcance: '8.200 km', nomeCliente: 'Vincius Lopes',
    dataEntrega: '2025-11-02',status: 'EM ANDAMENTO' },
  { id: 'AC-004', modelo: 'V-900 Executivo Luxo', codigoAeronave: 'VX-900', tipo: 'COMERCIAL', capacidade: '12 passageiros', alcance: '9.000 km', nomeCliente: 'Leticia Lopes',
    dataEntrega: '2025-11-30',status: 'CONCLUÍDA' },
  { id: 'AC-005', modelo: 'H-700 Resgate', codigoAeronave: 'HR-700', tipo: 'MILITAR', capacidade: '10 passageiros', alcance: '6.800 km', nomeCliente: 'Leonardo da Silva',
    dataEntrega: '2025-10-05',status: 'CONCLUÍDA' },
  { id: 'AC-006', modelo: 'S-320 Regional', codigoAeronave: 'SR-320', tipo: 'COMERCIAL', capacidade: '90 passageiros', alcance: '3.500 km', nomeCliente: 'Rafaela Diniz',
    dataEntrega: '2025-03-01',status: 'CONCLUÍDA' }
];
const getStatusClass = (status: string) => {
  if (status === 'EM ANDAMENTO') {
    return 'andamento';
  }
  return status.toLowerCase(); 
};

function ListaAeronaves() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [aeronaves, setAeronaves] = useState(mockAeronaves);
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [aeronaveParaEditar, setAeronaveParaEditar] = useState<any>(null);
  const linhasFiltradas = aeronaves.filter(aeronave =>
    aeronave.codigoAeronave.toLowerCase().includes(busca.toLowerCase())
  );
  const handleAbrirModal = (aeronave: any) => {
    if (aeronave.status === 'CONCLUÍDA') {
      return;
    }
    setAeronaveParaEditar(aeronave);
    setModalEstaAberto(true);
  };
  const handleFecharModal = () => {
    setModalEstaAberto(false);
    setAeronaveParaEditar(null);
  };
  const handleSalvarAeronave = (aeronaveId: string, novoStatus: string) => {
    setAeronaves(aeronavesAtuais =>
      aeronavesAtuais.map(aeronave =>
        aeronave.id === aeronaveId ? { ...aeronave, status: novoStatus } : aeronave
      )
    );
    handleFecharModal();
  };

  return (
    <div className="container">
      <h1 className="pagina-titulo">Aeronaves Cadastradas</h1>
      <button 
        className="add-btn"
        onClick={() => navigate('/cadastroAeronave')}
      >
        Cadastrar Aeronave
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
        {linhasFiltradas.map((aeronave) => (
          <article key={aeronave.id} className="card">
            <div className="card-conteudo">
              <div className="info">
                <h3>{aeronave.modelo}</h3>
                <h3>Código: {aeronave.codigoAeronave}</h3>
                <span className="detalhes">Tipo: {aeronave.tipo}</span>
                <span className="detalhes">Capacidade: {aeronave.capacidade}</span>
                <span className="detalhes">Alcance: {aeronave.alcance}</span>
                <span className="detalhes">Cliente: {aeronave.nomeCliente}</span>
                <span className="detalhes">Data de Entrega: {new Date(aeronave.dataEntrega + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
              </div>
              <span 
                className={`status ${aeronave.status !== 'CONCLUÍDA' ? 'click' : ''} ${getStatusClass(aeronave.status)}`}
                onClick={() => handleAbrirModal(aeronave)}
              >{aeronave.status}</span>
            </div>
          </article>
        ))}
      </div>
      {modalEstaAberto && aeronaveParaEditar && (
        <ModalAeronave
          aeronave={aeronaveParaEditar}
          onClose={handleFecharModal}
          onSave={handleSalvarAeronave}
        />
      )}
    </div>
  );
}

export default ListaAeronaves;