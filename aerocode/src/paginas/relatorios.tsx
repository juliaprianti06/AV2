import React, { useState } from 'react';
import '../styles/form.css';
import '../styles/relatorio.css'; 
import { RiArrowDropDownLine } from "react-icons/ri";

const mockAeronaves = [
  { id: 'AC-001', modelo: 'X-100 Executivo', codigoAeronave: 'XA-100', tipo: 'COMERCIAL', capacidade: '8 passageiros', alcance: '7.000 km', nomeCliente: 'Gustavo Santos', dataEntrega: '2025-12-01' },
  { id: 'AC-002', modelo: 'Z-250 Carga', codigoAeronave: 'ZC-250', tipo: 'COMERCIAL', capacidade: '50 toneladas', alcance: '4.500 km', nomeCliente: 'Yasmin Padilha', dataEntrega: '2025-12-10' },
  { id: 'AC-003', modelo: 'A-450 Militar', codigoAeronave: 'AM-450', tipo: 'MILITAR', capacidade: '6 passageiros', alcance: '8.200 km', nomeCliente: 'Vinicius Lopes', dataEntrega: '2025-11-02' },
];

const mockEtapas = [
  { id: 'E-01', codigoAeronave: 'XA-100', nome: 'Estrutura da Fuselagem', status: 'CONCLUÍDA' },
  { id: 'E-02', codigoAeronave: 'XA-100', nome: 'Montagem das Asas', status: 'ANDAMENTO' },
  { id: 'E-03', codigoAeronave: 'XA-100', nome: 'Instalação Elétrica', status: 'PENDENTE' },
  { id: 'E-05', codigoAeronave: 'ZC-250', nome: 'Estrutura da Fuselagem', status: 'PENDENTE' },
  { id: 'E-07', codigoAeronave: 'AM-450', nome: 'Montagem da Estrutura', status: 'ANDAMENTO' },
];

const mockPecas = [
  { id: 'P-001', codigoAeronave: 'XA-100', nome: 'Turbina T-1000', tipo: 'IMPORTADA', status: 'EM PRODUCAO' },
  { id: 'P-002', codigoAeronave: 'XA-100', nome: 'Sistema de Navegação AvX', tipo: 'NACIONAL', status: 'PRONTA' },
  { id: 'P-003', codigoAeronave: 'ZC-250', nome: 'Fuselagem Leve Z-250', tipo: 'NACIONAL', status: 'EM TRANSPORTE' },
];

const mockTestes = [
  { id: 'T-001', codigoAeronave: 'XA-100', tipo: 'ELETRICO', status: 'APROVADO' },
  { id: 'T-002', codigoAeronave: 'XA-100', tipo: 'HIDRAULICO', status: 'APROVADO' },
  { id: 'T-003', codigoAeronave: 'ZC-250', tipo: 'AERODINAMICO', status: 'REPROVADO' },
];

interface RelatorioData {
  aeronave: typeof mockAeronaves[0];
  etapas: typeof mockEtapas;
  pecas: typeof mockPecas;
  testes: typeof mockTestes;
}

function Relatorios() {
  const [selectedAeronave, setSelectedAeronave] = useState('');
  const [dados, setDados] = useState<RelatorioData | null>(null);
  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const aeronave = mockAeronaves.find(a => a.codigoAeronave === selectedAeronave);
    if (!aeronave) return;
    const etapas = mockEtapas.filter(e => e.codigoAeronave === selectedAeronave);
    const pecas = mockPecas.filter(p => p.codigoAeronave === selectedAeronave);
    const testes = mockTestes.filter(t => t.codigoAeronave === selectedAeronave);
    setDados({ aeronave, etapas, pecas, testes });
  };

  const handleDownload = () => {
    if (!dados) return;
    let relatorio = `RELATÓRIO DE PRODUÇÃO - ${dados.aeronave.modelo}\n\n`;
    relatorio += `=== INFORMAÇÕES DO CLIENTE ===\n`;
    relatorio += `Cliente: ${dados.aeronave.nomeCliente}\n`;
    relatorio += `Data de Entrega: ${dados.aeronave.dataEntrega}\n\n`;
    relatorio += `=== DETALHES DA AERONAVE ===\n`;
    relatorio += `Modelo: ${dados.aeronave.modelo}\n`;
    relatorio += `Código: ${dados.aeronave.codigoAeronave}\n`;
    relatorio += `Tipo: ${dados.aeronave.tipo}\n`;
    relatorio += `Capacidade: ${dados.aeronave.capacidade}\n`;
    relatorio += `Alcance: ${dados.aeronave.alcance}\n\n`;
    relatorio += `=== ETAPAS DE PRODUÇÃO ===\n`;
    dados.etapas.forEach(e => {
      relatorio += `- ${e.nome} [${e.status}]\n`;
    });
    relatorio += '\n';
    relatorio += `=== PEÇAS ASSOCIADAS ===\n`;
    dados.pecas.forEach(p => {
      relatorio += `- ${p.nome} (${p.tipo}) [${p.status}]\n`;
    });
    relatorio += '\n';
    relatorio += `=== TESTES REALIZADOS ===\n`;
    dados.testes.forEach(t => {
      relatorio += `- ${t.tipo}: ${t.status}\n`;
    });
    relatorio += '\n';

    const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio_${dados.aeronave.codigoAeronave}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="pagina-titulo">Gerar Relatório</h1>
        <form onSubmit={handleGenerateReport} className="form">
          <div className="input">
            <label htmlFor="aeronaveSelect">Selecione a Aeronave</label>
            <select
              id="aeronaveSelect"
              value={selectedAeronave}
              onChange={(e) => setSelectedAeronave(e.target.value)}
              required
            >
              <option value="" disabled>Escolha uma aeronave...</option>
              {mockAeronaves.map(a => (
                <option key={a.id} value={a.codigoAeronave}>
                  {a.modelo} ({a.codigoAeronave})
                </option>
              ))}
            </select>
            <RiArrowDropDownLine className='icon' />
          </div>
          <div className="form-botoes">
            <button type="submit" className="btn-salvar">
              Gerar Relatório
            </button>
          </div>
        </form>
      </div>
      {dados && (
        <div className="display">
          <section className="secao">
            <h3>1. Informações do Cliente</h3>
            <p><strong>Cliente:</strong> {dados.aeronave.nomeCliente}</p>
            <p><strong>Data de Entrega:</strong> {dados.aeronave.dataEntrega}</p>
          </section>
          <section className="secao">
            <h3>2. Detalhes da Aeronave</h3>
            <div className="detalhes-aeronave">
              <p><strong>Modelo:</strong> {dados.aeronave.modelo}</p>
              <p><strong>Código:</strong> {dados.aeronave.codigoAeronave}</p>
              <p><strong>Tipo:</strong> {dados.aeronave.tipo}</p>
              <p><strong>Capacidade:</strong> {dados.aeronave.capacidade}</p>
              <p><strong>Alcance:</strong> {dados.aeronave.alcance}</p>
            </div>
          </section>
          <section className="secao">
            <h3>3. Etapas de Produção</h3>
            <table className="tabela">
              <thead>
                <tr><th>Etapa</th><th>Status</th></tr>
              </thead>
              <tbody>
                {dados.etapas.length > 0 ? (
                  dados.etapas.map(e => (
                    <tr key={e.id}>
                      <td>{e.nome}</td>
                      <td>{e.status}</td>
                    </tr>
                  ))
                ) : <tr><td colSpan={2}>Nenhuma etapa encontrada.</td></tr>}
              </tbody>
            </table>
          </section>
          <section className="secao">
            <h3>4. Peças Associadas</h3>
            <table className="tabela">
              <thead>
                <tr><th>Peça</th><th>Tipo</th><th>Status</th></tr>
              </thead>
              <tbody>
                {dados.pecas.length > 0 ? (
                  dados.pecas.map(p => (
                    <tr key={p.id}>
                      <td>{p.nome}</td>
                      <td>{p.tipo}</td>
                      <td>{p.status}</td>
                    </tr>
                  ))
                ) : <tr><td colSpan={3}>Nenhuma peça encontrada.</td></tr>}
              </tbody>
            </table>
          </section>
          <section className="secao">
            <h3>5. Testes Realizados</h3>
            <table className="tabela">
              <thead>
                <tr><th>Tipo de Teste</th><th>Resultado</th></tr>
              </thead>
              <tbody>
                {dados.testes.length > 0 ? (
                  dados.testes.map(t => (
                    <tr key={t.id}>
                      <td>{t.tipo}</td>
                      <td className={t.status.toLowerCase()}>{t.status}</td>
                    </tr>
                  ))
                ) : <tr><td colSpan={2}>Nenhum teste encontrado.</td></tr>}
              </tbody>
            </table>
          </section>
          <button className="download-btn" onClick={handleDownload}>
            Baixar Relatório
          </button>
        </div>
      )}
    </div>
  );
}

export default Relatorios;
