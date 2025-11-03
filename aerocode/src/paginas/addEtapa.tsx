import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css'; 

function AdicionarEtapa() {
  const [nomeEtapa, setNomeEtapa] = useState('');
  const [prazo, setPrazo] = useState('');
  const [funcionarios, setFuncionarios] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nova etapa salva com sucesso(Simulação)');
    navigate('/producao');
  };

  return (
    <div className="form-container">
      <h1 className="pagina-titulo">Adicionar Nova Etapa</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-form">
          <label htmlFor="nomeEtapa">Nome da Etapa</label>
          <input 
            type="text"
            id="nomeEtapa"
            value={nomeEtapa}
            onChange={(e) => setNomeEtapa(e.target.value)}
            placeholder="Ex: Montagem das Asas"
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="prazo">Prazo de Conclusão</label>
          <input 
            type="date"
            id="prazo"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="funcionarios">Funcionários (separados por vírgula)</label>
          <input 
            type="text"
            id="funcionarios"
            value={funcionarios}
            onChange={(e) => setFuncionarios(e.target.value)}
            placeholder="Ex: J. Silva, M. Costa"
            required
          />
        </div>
        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            Salvar Etapa
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

export default AdicionarEtapa;