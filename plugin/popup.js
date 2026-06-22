// 1. Lista estruturada com os títulos e o que avaliar (dicas práticas)
const heuristicas = [
  { 
    titulo: "1. Visibilidade do status do sistema", 
    dica: "A interface mostra o que está acontecendo? Ex: spinners de carregamento ao calcular algo, barras de progresso ou mensagens de status." 
  },
  { 
    titulo: "2. Compatibilidade com o mundo real", 
    dica: "Usa a linguagem do usuário final em vez de jargões técnicos? Ex: Dizer 'Carga despachada' em vez de 'Status: 200 OK'." 
  },
  { 
    titulo: "3. Controle e liberdade do usuário", 
    dica: "Existem opções fáceis para sair de fluxos indesejados? Ex: botões claros de 'Cancelar', 'Voltar' ou 'Desfazer'." 
  },
  { 
    titulo: "4. Consistência e padrões", 
    dica: "O visual e os componentes são padronizados? Ex: botões primários têm sempre a mesma cor, e os menus estão no mesmo lugar." 
  },
  { 
    titulo: "5. Prevenção de erros", 
    dica: "O design evita o erro antes que ele ocorra? Ex: uso de máscaras em formulários e bloqueio de botões com dados inválidos." 
  },
  { 
    titulo: "6. Reconhecimento em vez de memorização", 
    dica: "O usuário precisa ficar lembrando de coisas? Ex: autocompletar endereços ou exibir o resumo da ação atual na mesma tela." 
  },
  { 
    titulo: "7. Flexibilidade e eficiência de uso", 
    dica: "O sistema acelera a vida de quem já é experiente? Ex: atalhos, filtros de busca avançados ou ações em massa." 
  },
  { 
    titulo: "8. Estética e design minimalista", 
    dica: "A tela foca apenas no que importa? Ex: não está poluída com painéis secundários desnecessários competindo pela atenção." 
  },
  { 
    titulo: "9. Ajudar na recuperação de erros", 
    dica: "Se algo quebra, a mensagem é útil? Ex: 'Arquivo muito pesado. Reduza para 5MB' em vez de 'Erro interno'." 
  },
  { 
    titulo: "10. Ajuda e documentação", 
    dica: "Se o usuário travar, há como buscar socorro? Ex: links para FAQs, tutoriais ou páginas de documentação acessíveis." 
  }
];

// 2. Constrói a interface dinamicamente incluindo as dicas
const container = document.getElementById('dynamic-heuristics');
heuristicas.forEach((item, index) => {
  const id = index + 1;
  const html = `
    <div class="check-item">
      <div class="item-header">
        <label>${item.titulo}</label>
        <select id="status-${id}">
          <option value="➖ N/A">➖ N/A</option>
          <option value="✅ Adequado">✅ Adequado</option>
          <option value="⚠️ Atenção">⚠️ Atenção</option>
          <option value="❌ Falha Crítica">❌ Falha Crítica</option>
        </select>
      </div>
      <span class="item-dica">${item.dica}</span>
      <input type="text" id="nota-${id}" placeholder="Evidências ou detalhes...">
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
});

// 3. Variáveis para guardar informações da aba
let infoPagina = { url: '', titulo: '' };

// 4. Função injetada na página para a varredura profunda (Scanner)
function inspecionarPagina() {
  const linksVazios = document.querySelectorAll('a[href="#"], a:not([href])').length;
  const linksNovaAba = document.querySelectorAll('a[target="_blank"]').length;
  const botoesSemTexto = Array.from(document.querySelectorAll('button')).filter(b => b.textContent.trim() === '' && !b.hasAttribute('aria-label')).length;

  return {
    temH1: document.querySelectorAll('h1').length > 0,
    imagensSemAlt: Array.from(document.querySelectorAll('img')).filter(img => !img.hasAttribute('alt') || img.alt.trim() === '').length,
    inputsSemLabel: Array.from(document.querySelectorAll('input:not([type="hidden"]):not([type="submit"])')).filter(input => !input.labels?.length && !input.hasAttribute('aria-label')).length,
    idioma: document.documentElement.lang || 'Não definido',
    temViewport: document.querySelector('meta[name="viewport"]') !== null,
    linksVazios: linksVazios,
    linksNovaAba: linksNovaAba,
    botoesSemTexto: botoesSemTexto
  };
}

// 5. Ao abrir o popup, pega os dados e formata o painel de insights
document.addEventListener('DOMContentLoaded', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  infoPagina.url = tab.url;
  infoPagina.titulo = tab.title;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: inspecionarPagina,
  }, (resultados) => {
    if (resultados && resultados[0] && resultados[0].result) {
      const dados = resultados[0].result;
      let feedback = `Página: ${tab.title}\n\n`;
      
      // Checagens Estruturais
      feedback += dados.temH1 ? "✅ Tag <h1> principal encontrada.\n" : "❌ Nenhum <h1> encontrado.\n";
      feedback += dados.temViewport ? "✅ Meta viewport presente (Design responsivo).\n" : "❌ Sem meta viewport (Pode quebrar no celular).\n";
      feedback += dados.idioma !== 'Não definido' ? `✅ Idioma da página: ${dados.idioma}\n` : "❌ Idioma não definido (atributo lang ausente).\n";
      
      // Checagens de Erros e Acessibilidade
      feedback += dados.imagensSemAlt > 0 ? `❌ ${dados.imagensSemAlt} imagem(ns) sem atributo 'alt'.\n` : "✅ Imagens possuem atributo textual.\n";
      feedback += dados.inputsSemLabel > 0 ? `❌ ${dados.inputsSemLabel} campo(s) de formulário sem label.\n` : "✅ Formulários estruturados.\n";
      
      // Checagens de Navegação e Interação
      if (dados.linksVazios > 0) feedback += `⚠️ ${dados.linksVazios} link(s) vazio(s) ou com href="#".\n`;
      if (dados.linksNovaAba > 0) feedback += `⚠️ ${dados.linksNovaAba} link(s) abrem em nova aba (target="_blank").\n`;
      if (dados.botoesSemTexto > 0) feedback += `❌ ${dados.botoesSemTexto} botão(ões) sem texto visível ou aria-label.\n`;

      document.getElementById('auto-feedback').textContent = feedback;
    }
  });
});

// 6. Geração do Relatório .txt
document.getElementById('gerar-txt').addEventListener('click', () => {
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
  const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');

  let relatorio = "======================================================\n";
  relatorio += "          RELATÓRIO DE AUDITORIA HEURÍSTICA\n";
  relatorio += "======================================================\n\n";
  
  relatorio += "[ INFORMAÇÕES DA AVALIAÇÃO ]\n";
  relatorio += `Data e Hora : ${dataFormatada} às ${horaFormatada}\n`;
  relatorio += `Página      : ${infoPagina.titulo}\n`;
  relatorio += `URL         : ${infoPagina.url}\n\n`;

  relatorio += "------------------------------------------------------\n";
  relatorio += "[ INSIGHTS DA INSPEÇÃO AUTOMÁTICA ]\n";
  relatorio += document.getElementById('auto-feedback').textContent + "\n";
  relatorio += "------------------------------------------------------\n\n";

  relatorio += "[ AVALIAÇÃO DETALHADA POR CRITÉRIO ]\n\n";

  heuristicas.forEach((item, index) => {
    const id = index + 1;
    const status = document.getElementById(`status-${id}`).value;
    const nota = document.getElementById(`nota-${id}`).value;

    relatorio += `${item.titulo}\n`;
    relatorio += `Status   : ${status}\n`;
    if (nota) {
      relatorio += `Evidência: ${nota}\n`;
    }
    relatorio += "\n";
  });

  relatorio += "======================================================\n";
  relatorio += "Fim do Relatório\n";

  const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  const dataIso = dataAtual.toISOString().slice(0,10);
  link.download = `auditoria_ux_${dataIso}.txt`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});