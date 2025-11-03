import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aerocode from './paginas/home';
import Producao from './paginas/producao';
import Layout from './components/layoutSidebar';
import AdicionarEtapa from './paginas/addEtapa';
import Peca from './paginas/peca';
import AdicionarPeca from './paginas/addPeca';
import Teste from './paginas/teste';
import AdicionarTeste from './paginas/addTeste';
import CadastroAeronave from './paginas/cadastroAeronave';
import ListaAeronaves from './paginas/listarAeronave';
import ListaFuncionarios from './paginas/listarFuncionario';
import CadastroFuncionario from './paginas/cadastroFuncionario';
import Relatorios from './paginas/relatorios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aerocode />} />
        <Route element={<Layout/>}> 
          <Route path="/producao" element={<Producao />} />
          <Route path="/producao/:linhaId/addEtapa" element={<AdicionarEtapa />} />
          <Route path="/peca" element={<Peca />} />
          <Route path="/addPeca" element={<AdicionarPeca />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/addTeste" element={<AdicionarTeste/>}/>
          <Route path="/listarAeronave" element= {< ListaAeronaves/>} />
          <Route path="/cadastroAeronave" element= {< CadastroAeronave/>} />
          <Route path="/listarFuncionario" element= {< ListaFuncionarios/>} />
          <Route path="/cadastroFuncionario" element= {< CadastroFuncionario/>} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;