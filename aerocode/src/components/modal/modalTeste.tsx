import { useState } from 'react';
import '../../styles/modal.css';
import '../../styles/form.css'; 
import { RiArrowDropDownLine } from "react-icons/ri";

interface ModalProps {
  teste: {
    id: string;
    aeronave: string;
    status: string; 
  };
  onClose: () => void;
  onSave: (testeId: string, novoResultado: string) => void;
}

function ModalTeste({ teste, onClose, onSave }: ModalProps) {
  const [novoResultado, setNovoResultado] = useState(teste.status); 
  const isAprovado = teste.status === 'APROVADO';
  const handleSaveClick = () => {
    onSave(teste.id, novoResultado);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>   
        <div className="modal-header">
          <h2 className="modal-titulo">Alterar Resultado do Teste</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="modal-item-nome">Aeronave: <strong>{teste.aeronave}</strong></p>
          <div className="input">
            <label htmlFor="statusSelect">Novo Resultado</label>
            <select
              id="statusSelect"
              value={novoResultado}
              onChange={(e) => setNovoResultado(e.target.value)}
              disabled={isAprovado} 
            >
              <option value="REPROVADO">Reprovado</option>
              <option value="APROVADO">Aprovado</option>
            </select>
            <RiArrowDropDownLine className='icon' />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-salvar" onClick={handleSaveClick} disabled={isAprovado}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalTeste;