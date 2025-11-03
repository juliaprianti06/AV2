import { useState } from 'react';
import '../../styles/modal.css';
import '../../styles/form.css'; 
import { RiArrowDropDownLine } from "react-icons/ri";


interface ModalProps {
  aeronave: {
    id: string;
    modelo: string;
    status: string;
  };
  onClose: () => void;
  onSave: (aeronaveId: string, novoStatus: string) => void;
}

function ModalAeronave({ aeronave, onClose, onSave }: ModalProps) {
  const [novoStatus, setNovoStatus] = useState(aeronave.status);
  const isConcluida = aeronave.status === 'CONCLUÍDA';
  const handleSaveClick = () => {
    onSave(aeronave.id, novoStatus);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>       
        <div className="modal-header">
          <h2 className="modal-titulo">Alterar Status da Aeronave</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="modal-item-nome">Aeronave: <strong>{aeronave.modelo}</strong></p> 
          <div className="input"> 
            <label htmlFor="statusSelect">Novo Status</label>
            <select
              id="statusSelect"
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value)}
              disabled={isConcluida}
            >
              <option value="EM ANDAMENTO">Em Andamento</option>
              <option value="CONCLUÍDA">Concluída</option>
            </select>
            <RiArrowDropDownLine className='icon' />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-salvar" onClick={handleSaveClick} disabled={isConcluida}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAeronave;