import { useState } from 'react';
import '../../styles/modal.css';
import '../../styles/form.css';
import { RiArrowDropDownLine } from "react-icons/ri";

interface ModalProps {
  etapa: {
    id: string;
    nome: string;
    status: string;
  };
  onClose: () => void;
  onSave: (etapaId: string, novoStatus: string) => void;
}

function ModalEtapa({ etapa, onClose, onSave }: ModalProps) {
  const [novoStatus, setNovoStatus] = useState(etapa.status);
  const isPendente = etapa.status === 'PENDENTE';
  const isAndamento = etapa.status === 'ANDAMENTO';
  const isConcluida = etapa.status === 'CONCLUÍDA';

  const handleSaveClick = () => {
    onSave(etapa.id, novoStatus);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>  
        <div className="modal-header">
          <h2 className="modal-titulo">Alterar Status da Etapa</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="modal-item-nome">Etapa: <strong>{etapa.nome}</strong></p>  
          <div className="input">
            <label htmlFor="statusSelect">Novo Status</label>
            <select
              id="statusSelect"
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value)}
              disabled={isConcluida}
            >
              <option 
                value="PENDENTE" 
                disabled={isAndamento || isConcluida}
              > PENDENTE</option>
              <option 
                value="ANDAMENTO"
                disabled={isConcluida}
              >ANDAMENTO</option> 
              <option 
                value="CONCLUÍDA"
                disabled={isPendente}
              >CONCLUÍDA</option>
            </select>
            <RiArrowDropDownLine className='icon' />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button 
            className="btn-salvar" 
            onClick={handleSaveClick} 
            disabled={isConcluida || novoStatus === etapa.status}
          >Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalEtapa;