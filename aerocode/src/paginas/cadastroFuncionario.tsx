import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import { RiArrowDropDownLine } from "react-icons/ri";

function CadastroFuncionario() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [funcao, setFuncao] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Novo funcionário cadastrado com sucesso (Simulação)');
    navigate('/listarFuncionario'); 
  };
  return (
    <div className="form-container">
      <h1 className="pagina-titulo">Cadastrar Novo Funcionário</h1>
      <form onSubmit={handleSubmit} className="form">       
        <div className="input">
          <label htmlFor="nome">Nome Completo</label>
          <input 
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do funcionário"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="endereco">Endereço</label>
          <input 
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Ex: Rua das Flores, 123"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="telefone">Telefone</label>
          <input 
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Ex: (11) 99999-9999"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="funcao">Função</label>
          <select
            id="funcao"
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
            required
          >
            <option value="" disabled>Selecione a função</option>
            <option value="Administrador">Administrador</option>
            <option value="Engenheiro">Engenheiro</option>
            <option value="Operador">Operador</option>
          </select>
          <RiArrowDropDownLine className='icon' />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: funcionario@empresa.com"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="senha">Senha (Provisória)</label>
          <input 
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie uma senha provisória"
            required
          />
        </div>
        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            Salvar Funcionário
          </button>
          <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/listarFuncionario')} 
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroFuncionario;