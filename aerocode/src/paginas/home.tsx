import '../styles/home.css';
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Aerocode() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [name, setName] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    setError('');
    navigate('/listarAeronave');
  };
  const handleRegisterSubmit = (e: any) => {
    e.preventDefault();
    setError('');
    alert(`Simulando criação de conta para: ${name} (${email}) da empresa ${nomeEmpresa} `);
  };

  const toggleView = (isLogin: any) => {
    setIsLoginView(isLogin);
    setError('');
    setEmail('');
    setSenha('');
    setName('');
    setNomeEmpresa('');
    
  };

  return (
    <>
      <div className="home" id="inicio">
        <header>
          <div className="logo">
            <BsFillAirplaneEnginesFill className="logo-icon" />
            <h1 className="titulo">AEROCODE</h1>
          </div>
          <nav className="nav">
            <a className="nav-link" href="#inicio">Início</a>
            <a className="nav-link" href="#login">Login</a>
          </nav>
        </header>
        <p className="slogan">GERENCIE SUA PRODUÇÃO DE AERONAVES COM PRECISÃO</p>
      </div>
      <main className="main" id="login">
        <p>Já tem uma conta?</p>
        <p>Faça login para acessar o sistema ou cadastre-se para começar agora</p>

        <div className="login">
          <div className="form-toggle">
            <button
              className={`toggle-btn ${isLoginView ? 'active' : ''}`}
              onClick={() => toggleView(true)}
            >
              Entrar
            </button>
            <button
              className={`toggle-btn ${!isLoginView ? 'active' : ''}`}
              onClick={() => toggleView(false)}
            >
              Criar Conta
            </button>
          </div>
          {error && <p className="mensagem-erro">{error}</p>}
          {isLoginView ? (
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@aerocode.com"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Entrar
              </button>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleRegisterSubmit}>
              <div className="input">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="nomeEmpresa">Nome da Empresa</label>
                <input
                  type="text"
                  id="nomeEmpresa"
                  value={nomeEmpresa}
                  onChange={(e) => setNomeEmpresa(e.target.value)}
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>
             <div className="input">
                <label htmlFor="funcao">Função</label>
                <select id="funcao" value="adm" disabled>
                  <option value="adm">Administrador</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@aerocode.com"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Crie uma senha"
                  required
                />
              </div>
              <button type="submit" className="login-button" >
                Cadastrar
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

export default Aerocode;
