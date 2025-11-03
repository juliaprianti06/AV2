import { useState } from 'react';
import '../styles/producao.css';
import '../styles/status.css';
import '../styles/global.css';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import ModalEtapa from '../components/modal/modalEtapa';

const mockLinhasDeProducao = [
  {id: 'L-101', titulo: 'Linha de Produção Alpha', modeloAeronave: 'X-100 Executivo', codigoAeronave: 'XA-100', status: 'ANDAMENTO',
    etapas: [
      { id: 'E-01', nome: 'Estrutura da Fuselagem', prazo: '05/11/2025', funcionarios: ['J. Silva', 'M. Costa'], status: 'CONCLUÍDA' },
      { id: 'E-02', nome: 'Montagem das Asas', prazo: '10/11/2025', funcionarios: ['A. Santos', 'J. Silva'], status: 'CONCLUÍDA' },
      { id: 'E-03', nome: 'Instalação Elétrica', prazo: '15/11/2025', funcionarios: ['C. Lima'], status: 'PENDENTE' },
    ]
  },
  {id: 'L-102', titulo: 'Linha de Produção Beta', modeloAeronave: 'Z-250 Carga', codigoAeronave: 'ZC-250', status: 'PENDENTE',
    etapas: [
      { id: 'E-05', nome: 'Estrutura da Fuselagem', prazo: '12/11/2025', funcionarios: ['T. Alves'], status: 'PENDENTE' },
      { id: 'E-06', nome: 'Instalação de Motores', prazo: '18/11/2025', funcionarios: ['T. Alves', 'M. Costa'], status: 'PENDENTE' },
    ]
  },
  {id: 'L-103', titulo: 'Linha de Produção Gama', modeloAeronave: 'A-450 Militar', codigoAeronave: 'AM-450', status: 'ANDAMENTO',
    etapas: [
      { id: 'E-07', nome: 'Montagem da Estrutura Principal', prazo: '08/11/2025', funcionarios: ['R. Lima', 'C. Souza'], status: 'ANDAMENTO' },
      { id: 'E-08', nome: 'Instalação dos Sistemas de Controle', prazo: '14/11/2025', funcionarios: ['M. Costa', 'A. Silva'], status: 'PENDENTE' },
      { id: 'E-09', nome: 'Testes de Qualidade', prazo: '20/11/2025', funcionarios: ['J. Almeida'], status: 'PENDENTE' },
    ]
  }
];

const getStatusClass = (status: string) => status.toLowerCase();
function Producao() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [linhasDeProducao, setLinhasDeProducao] = useState(mockLinhasDeProducao);
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [etapaParaEditar, setEtapaParaEditar] = useState<any>(null);
  const linhasFiltradas = linhasDeProducao.filter(linha =>
    linha.codigoAeronave.toLowerCase().includes(busca.toLowerCase())
  );
  const handleAbrirModal = (etapa: any) => {
    if (etapa.status === 'CONCLUÍDA') {
      return; 
    }
    setEtapaParaEditar(etapa);
    setModalEstaAberto(true);
  };
  const handleFecharModal = () => {
    setModalEstaAberto(false);
    setEtapaParaEditar(null);
  };
  const handleSalvarEtapa = (etapaId: string, novoStatus: string) => {
    setLinhasDeProducao(linhasAtuais =>
      linhasAtuais.map(linha => ({
        ...linha,
        etapas: linha.etapas.map(etapa =>
          etapa.id === etapaId ? { ...etapa, status: novoStatus } : etapa
        )
      }))
    );
    handleFecharModal();
  };

  return (
    <div className="container">
      <div className="producao-header">
        <h1 className="pagina-titulo">Monitoramento da Produção</h1>
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
      </div> 
      <div className="cards-grid">
        {linhasFiltradas.map((linha) => (
          <article key={linha.id} className="card">
            <div className="card-conteudo">
              <h3>{linha.titulo}</h3>
              <h3>Código da Aeronave: {linha.codigoAeronave}</h3>
              <p>{linha.modeloAeronave}</p>
              <h4>Etapas de Produção</h4>
              <div className="lista">
                {linha.etapas.map((etapa) => (
                  <div key={etapa.id} className="item">
                    <div className="info">
                      <span className="nome">{etapa.nome}</span>
                      <span className="detalhes">
                        Prazo: {etapa.prazo} | Funcionários: {etapa.funcionarios.join(', ')}
                      </span>
                    </div>
                    <span 
                      className={`status ${etapa.status !== 'CONCLUÍDA' ? 'click' : ''} ${getStatusClass(etapa.status)}`}
                      onClick={() => handleAbrirModal(etapa)}
                    >{etapa.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <footer className="card-footer">
              <button 
                className="add-btn-etapa" onClick={() => navigate(`/producao/${linha.id}/addEtapa`)}
              > Adicionar Etapa
              </button>
            </footer>
          </article>
        ))}
      </div>
      {modalEstaAberto && etapaParaEditar && (
        <ModalEtapa
          etapa={etapaParaEditar}
          onClose={handleFecharModal}
          onSave={handleSalvarEtapa}
          
        />
      )}
    </div>
  );
}

export default Producao;