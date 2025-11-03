import { useState } from 'react';
import '../../styles/modal.css';
import '../../styles/form.css';
import { RiArrowDropDownLine } from "react-icons/ri";

interface ModalProps {
  peca: {
    id: string;
    nome: string;
    status: string;
  };
  onClose: () => void;
  onSave: (pecaId: string, novoStatus: string) => void;
}

function ModalPeca({ peca, onClose, onSave }: ModalProps) {
  const [novoStatus, setNovoStatus] = useState(peca.status);
  const isPronta = peca.status === 'PRONTA';
  const isEmTransporte = peca.status === 'EM TRANSPORTE';
  const handleSaveClick = () => {
    onSave(peca.id, novoStatus);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>  
        <div className="modal-header">
          <h2 className="modal-titulo">Alterar Status da Peça</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="modal-item-nome">Peça: <strong>{peca.nome}</strong></p>  
          <div className="input">
           <label htmlFor="statusSelect">Novo Status</label>
            <select
              id="statusSelect"
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value)}
              disabled={isPronta} 
            ><option 
                value="EM PRODUCAO" 
                disabled={isEmTransporte || isPronta}
              >Em Produção</option>
              <option 
                value="EM TRANSPORTE" 
                disabled={isPronta}
              >Em Transporte</option>
              <option value="PRONTA">Pronta</option>
            </select>
            <RiArrowDropDownLine className='icon' />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-salvar" onClick={handleSaveClick} disabled={isPronta}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPeca;