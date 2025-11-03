import { useNavigate } from 'react-router-dom';
import '../styles/funcionario.css'; 
import { useState } from 'react';

const mockFuncionarios = [
  { id: 'F-001', nome: 'Julia Santos', funcao: 'Administrador', email: 'julia.santos@aerocode.com', status: 'ATIVO'},
  { id: 'F-002', nome: 'Bruno Costa', funcao: 'Engenheiro', email: 'bruno.costa@aerocode.com', status: 'ATIVO'},
  { id: 'F-003', nome: 'Marcos Lima', funcao: 'Operador', email: 'marcos.lima@aerocode.com',status: 'ATIVO'},
  { id: 'F-004', nome: 'Ana Clara', funcao: 'Engenheiro', email: 'ana.clara@aerocode.com',status: 'INATIVO'},
];
const getFuncaoClass = (funcao: string) => {
  return funcao.toLowerCase();
};
const getStatusClass = (status: string) => {
  return status.toLowerCase();
};
function ListaFuncionarios() {
  const navigate = useNavigate();
  const [funcionarios, setFuncionarios] = useState(mockFuncionarios);

  const handleStatusToggle = (funcionarioId: string) => {
    setFuncionarios(funcionariosAtuais =>
      funcionariosAtuais.map(func => {
        if (func.id === funcionarioId) {
          const novoStatus = func.status === 'ATIVO' ? 'INATIVO' : 'ATIVO';
          return { ...func, status: novoStatus };
        }
        return func;
      })
    );
  };

  return (
    <div className="container">
        <h1 className="pagina-titulo">Gestão de Funcionários</h1>
        <button 
          className="add-btn"
          onClick={() => navigate('/cadastroFuncionario')}
        > Cadastrar Novo Funcionário
        </button>
      <div className="table-container">
        <table className="funcionario-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
              <th>Email</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((func) => (
              <tr key={func.id}>
                <td>{func.nome}</td>
                <td>
                  <span className={`funcao ${getFuncaoClass(func.funcao)}`}>
                    {func.funcao}
                  </span>
                </td>
                <td>{func.email}</td>
                <td>
                  <span className={`status-func ${getStatusClass(func.status)}`}>
                    {func.status}
                  </span>
                </td>
                <td>
                  {func.status === 'ATIVO' ? (
                    <button 
                      className="btn-acao btn-desativar"
                      onClick={() => handleStatusToggle(func.id)}
                    >
                      DESATIVAR
                    </button>
                  ) : (
                    <button 
                      className="btn-acao btn-ativar"
                      onClick={() => handleStatusToggle(func.id)}
                    >
                      ATIVAR
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaFuncionarios;