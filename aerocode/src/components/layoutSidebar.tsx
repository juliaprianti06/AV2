import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import '../styles/global.css'; 
import { FaUserCircle } from "react-icons/fa";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}> 
      <aside className="sidebar">
        <IoMdClose className="icon-close" onClick={toggleSidebar} />
        <div className="logo-sidebar">
          <div className="logo-brand">
            <BsFillAirplaneEnginesFill className="logo-icon" />
            <h1 className="titulo-sidebar">AEROCODE</h1>
          </div>  
          <GiHamburgerMenu className="icon-open" onClick={toggleSidebar} />
        </div>
        <nav className="sidebar-nav">
          <ul>
             <li>
              <Link to="/listarAeronave">Aeronaves</Link>
            </li>
            <li>
              <Link to="/producao">Produção</Link>
            </li>
            <li>
              <Link to="/peca">Peça</Link>
            </li>
            <li>
              <Link to="/teste">Teste</Link>
            </li>
            <li>
              <Link to="/listarFuncionario">Funcionários</Link>
            </li>
             <li>
              <Link to="/relatorios">Relatórios</Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-logout">
          <button className="sair-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
        <div className="sidebar-footer">
          <div className="user-profile-sidebar">
            <FaUserCircle className="user-icon" />
            <span className="user-name">User</span>
          </div>
        </div>
      </aside>
      <main className="app-content">
        <Outlet /> 
      </main>
    </div>
    
  );
}

export default Layout;