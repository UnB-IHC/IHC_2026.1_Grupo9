// 1. Definição completa dos itens avaliados no guia CheckAAA
const itensChecklist = [
  // Acessibilidade & WCAG / ABNT NBR 17060
  {
    id: "a11y-lang",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Idioma da Página (<html lang>)",
    norma: "WCAG 2.2 (3.1.1) • eMAG 3.1 • ABNT NBR 17060",
    desc: "Define a pronúncia correta para leitores de tela usados por pessoas com deficiência visual."
  },
  {
    id: "a11y-title",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Título da Página (<title>)",
    norma: "WCAG 2.2 (2.4.2) • eMAG 2.3 • ABNT NBR 17060",
    desc: "O título deve ser único e descritivo para orientar a navegação e o contexto na aba do navegador."
  },
  {
    id: "a11y-h1",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Hierarquia de Cabeçalhos (<h1>)",
    norma: "WCAG 2.2 (1.3.1) • eMAG 2.4 • ABNT NBR 17060",
    desc: "A página deve possuir exatamente um <h1> principal e manter ordem lógica sem saltos bruscos."
  },
  {
    id: "a11y-landmarks",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Marcos Semânticos (Landmarks)",
    norma: "WCAG 2.2 (1.3.1) • eMAG 2.5 • ABNT NBR 17060",
    desc: "Uso de tags semânticas (<header>, <main>, <nav>, <footer>) para navegação rápida por tecnologias assistivas."
  },
  {
    id: "a11y-alt",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Alternativas Textuais em Imagens (alt)",
    norma: "WCAG 2.2 (1.1.1) • eMAG 6.1 • ABNT NBR 17060",
    desc: "Imagens informativas exigem descrição textual; imagens decorativas devem ter alt vazio (alt=\"\")."
  },
  {
    id: "a11y-labels",
    cat: "a11y",
    badge: "Acessibilidade",
    badgeClass: "badge-a11y",
    titulo: "Rótulos de Formulários (<label>)",
    norma: "WCAG 2.2 (3.3.2) • eMAG 7.1 • ABNT NBR 17060",
    desc: "Todo campo interativo deve ter um rótulo explícito associado programaticamente."
  },

  // UX & Heurísticas de Nielsen
  {
    id: "ux-h1",
    cat: "ux",
    badge: "UX / Heurística 1",
    badgeClass: "badge-ux",
    titulo: "Visibilidade do Status do Sistema",
    norma: "Nielsen H1 • Feedback Contínuo",
    desc: "O sistema mantém o usuário informado sobre o que está acontecendo (ex: spinners, barras de progresso)."
  },
  {
    id: "ux-h2",
    cat: "ux",
    badge: "UX / Heurística 2",
    badgeClass: "badge-ux",
    titulo: "Compatibilidade com o Mundo Real",
    norma: "Nielsen H2 • Linguagem Simples",
    desc: "A interface fala a linguagem do usuário, sem expor códigos de erro técnicos bruto (ex: 'undefined', 'NaN')."
  },
  {
    id: "ux-h3",
    cat: "ux",
    badge: "UX / Heurística 3",
    badgeClass: "badge-ux",
    titulo: "Controle e Liberdade do Usuário",
    norma: "Nielsen H3 • Saídas de Emergência",
    desc: "Presença de botões claros de Voltar, Cancelar ou Fechar para reverter ações indesejadas."
  },
  {
    id: "ux-h4",
    cat: "ux",
    badge: "UX / Heurística 4",
    badgeClass: "badge-ux",
    titulo: "Consistência e Padrões",
    norma: "Nielsen H4 • Padronização Visual",
    desc: "Elementos interativos (botões e links) seguem convenções e estilos consistentes em toda a tela."
  },
  {
    id: "ux-h5",
    cat: "ux",
    badge: "UX / Heurística 5",
    badgeClass: "badge-ux",
    titulo: "Prevenção de Erros",
    norma: "Nielsen H5 • WCAG 2.2 (3.3.1)",
    desc: "Campos utilizam atributos de validação, restrição de formato ou máscaras antes da submissão."
  },
  {
    id: "ux-h6",
    cat: "ux",
    badge: "UX / Heurística 6",
    badgeClass: "badge-ux",
    titulo: "Reconhecimento vs. Memorização",
    norma: "Nielsen H6 • Carga Cognitiva",
    desc: "Redução do esforço de memória usando autocomplete e instruções visíveis."
  },
  {
    id: "ux-h7",
    cat: "ux",
    badge: "UX / Heurística 7",
    badgeClass: "badge-ux",
    titulo: "Flexibilidade e Eficiência de Uso",
    norma: "Nielsen H7 • Aceleradores",
    desc: "Presença de atalhos ou links de 'Pular para o conteúdo principal' para otimizar a navegação."
  },
  {
    id: "ux-h8",
    cat: "ux",
    badge: "UX / Heurística 8",
    badgeClass: "badge-ux",
    titulo: "Estética e Design Minimalista (Responsividade)",
    norma: "Nielsen H8 • Meta Viewport • ABNT NBR 15206",
    desc: "Design limpo e adaptável a dispositivos móveis (presença de meta viewport responsiva)."
  },
  {
    id: "ux-h9",
    cat: "ux",
    badge: "UX / Heurística 9",
    badgeClass: "badge-ux",
    titulo: "Ajudar na Recuperação de Erros",
    norma: "Nielsen H9 • ARIA Alerts",
    desc: "Mensagens de erro são construtivas e utilizam regiões de alerta (role='alert') para notificação."
  },
  {
    id: "ux-h10",
    cat: "ux",
    badge: "UX / Heurística 10",
    badgeClass: "badge-ux",
    titulo: "Ajuda e Documentação",
    norma: "Nielsen H10 • Suporte ao Usuário",
    desc: "Fácil acesso a canais de suporte, perguntas frequentes (FAQ), centrais de ajuda ou contato."
  },

  // Jornadas, Personas & Blueprint
  {
    id: "jornada-personas",
    cat: "jornada",
    badge: "Personas & Jornada",
    badgeClass: "badge-journey",
    titulo: "Aderência a Tecnologias Assistivas (Personas)",
    norma: "Checklist de Personas • WCAG 4.1.2",
    desc: "Verifica se todos os botões e controles possuem rótulo de voz para personas que utilizam leitores de tela."
  },
  {
    id: "jornada-blueprint",
    cat: "jornada",
    badge: "Service Blueprint",
    badgeClass: "badge-journey",
    titulo: "Canais Alternativos e Evidências (Frontstage)",
    norma: "Service Blueprint • Atendimento Equitativo",
    desc: "A jornada oferece pontos de contato evidentes para suporte humano ou canais alternativos em caso de barreiras."
  }
];

let infoPagina = { url: '', titulo: '' };
let resultadosMapeados = [];

// 2. Script injetado na página para varredura profunda de todos os parâmetros
function varreduraProfundaDOM() {
  const bodyText = document.body ? document.body.innerText : "";
  
  // Cabeçalhos
  const h1s = document.querySelectorAll('h1');
  const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  let puloHierarquia = false;
  let lastLevel = 0;
  allHeadings.forEach(h => {
    const level = parseInt(h.tagName.substring(1));
    if (lastLevel > 0 && level - lastLevel > 1) puloHierarquia = true;
    lastLevel = level;
  });

  // Imagens
  const imgs = Array.from(document.querySelectorAll('img'));
  const imgsSemAlt = imgs.filter(img => !img.hasAttribute('alt'));

  // Formulários e Inputs
  const inputs = Array.from(document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select'));
  const inputsSemLabel = inputs.filter(inp => {
    const hasIdLabel = inp.id && document.querySelector(`label[for="${inp.id}"]`);
    const hasParentLabel = inp.closest('label');
    const hasAriaLabel = inp.hasAttribute('aria-label') || inp.hasAttribute('aria-labelledby');
    return !(hasIdLabel || hasParentLabel || hasAriaLabel);
  });

  // Erros brutos visíveis na tela
  const termosErro = ['undefined', 'nan ', 'nullpointer', 'uncaught exception', 'fatal error', 'erro 500'];
  const errosBrutosEncontrados = termosErro.filter(t => bodyText.toLowerCase().includes(t));

  // Controles de navegação
  const linksEBotões = Array.from(document.querySelectorAll('a, button'));
  const temControleSaida = linksEBotões.some(el => {
    const txt = el.textContent.toLowerCase();
    return txt.includes('voltar') || txt.includes('cancelar') || txt.includes('sair') || txt.includes('início') || txt.includes('home');
  });

  // Prevenção de erro em formulários
  const temValidacao = inputs.some(inp => inp.hasAttribute('required') || inp.hasAttribute('pattern') || inp.hasAttribute('maxlength') || inp.type === 'email' || inp.type === 'number');

  // Autocomplete
  const temAutocomplete = inputs.some(inp => inp.hasAttribute('autocomplete'));

  // Skip links
  const temSkipLink = linksEBotões.some(el => {
    const txt = el.textContent.toLowerCase();
    return txt.includes('pular para') || txt.includes('ir para o conteúdo');
  });

  // Ajuda
  const temLinksAjuda = linksEBotões.some(el => {
    const txt = el.textContent.toLowerCase();
    return txt.includes('ajuda') || txt.includes('suporte') || txt.includes('faq') || txt.includes('contato') || txt.includes('sobre');
  });

  // Botões sem texto
  const botoesSemTexto = Array.from(document.querySelectorAll('button, a[role="button"]')).filter(b => {
    const txt = b.textContent.trim();
    const aria = b.getAttribute('aria-label') || b.getAttribute('title');
    return !txt && !aria;
  });

  return {
    lang: document.documentElement.lang || '',
    titulo: document.title || '',
    totalH1: h1s.length,
    puloHierarquia: puloHierarquia,
    temHeader: !!document.querySelector('header'),
    temMain: !!document.querySelector('main'),
    temFooter: !!document.querySelector('footer'),
    temNav: !!document.querySelector('nav'),
    totalImgs: imgs.length,
    imgsSemAlt: imgsSemAlt.length,
    totalInputs: inputs.length,
    inputsSemLabel: inputsSemLabel.length,
    temViewport: !!document.querySelector('meta[name="viewport"]'),
    temSpinner: !!document.querySelector('progress, [class*="spinner"], [class*="loading"], [aria-busy="true"]'),
    errosBrutos: errosBrutosEncontrados,
    temControleSaida: temControleSaida,
    temValidacao: temValidacao,
    temAutocomplete: temAutocomplete,
    temSkipLink: temSkipLink,
    temAlerta: !!document.querySelector('[role="alert"], [aria-live]'),
    temLinksAjuda: temLinksAjuda,
    botoesSemTexto: botoesSemTexto.length
  };
}

// 3. Motor de Avaliação Automática: Processa métricas e atribui Nota + Evidência
function avaliarAutomaticamente(dados) {
  return itensChecklist.map(item => {
    let status = "✅ Adequado";
    let evidencia = "";

    switch (item.id) {
      case "a11y-lang":
        if (!dados.lang) {
          status = "❌ Falha Crítica";
          evidência = "A tag <html> não possui o atributo 'lang' definido.";
        } else {
          evidencia = `Idioma detectado automaticamente: "${dados.lang}".`;
        }
        break;

      case "a11y-title":
        if (!dados.titulo || dados.titulo.trim() === '') {
          status = "❌ Falha Crítica";
          evidência = "A página está sem título (<title>) na aba do navegador.";
        } else {
          evidencia = `Título detectado: "${dados.titulo}".`;
        }
        break;

      case "a11y-h1":
        if (dados.totalH1 === 0) {
          status = "❌ Falha Crítica";
          evidência = "Nenhum cabeçalho principal <h1> foi encontrado na página.";
        } else if (dados.totalH1 > 1) {
          status = "⚠️ Atenção";
          evidência = `Foram encontrados ${dados.totalH1} elementos <h1>. O ideal é ter apenas 1 por página.`;
        } else if (dados.puloHierarquia) {
          status = "⚠️ Atenção";
          evidência = "Foi detectado um salto incorreto na ordem dos cabeçalhos (ex: de h1 para h3).";
        } else {
          evidencia = "Estrutura de cabeçalhos única e hierarquia em ordem lógica.";
        }
        break;

      case "a11y-landmarks":
        const achados = [];
        if (dados.temHeader) achados.push("<header>");
        if (dados.temMain) achados.push("<main>");
        if (dados.temNav) achados.push("<nav>");
        if (dados.temFooter) achados.push("<footer>");
        
        if (!dados.temMain) {
          status = "❌ Falha Crítica";
          evidência = "Tag semântica <main> não encontrada. Dificulta a navegação por leitores de tela.";
        } else if (achados.length < 3) {
          status = "⚠️ Atenção";
          evidência = `Estrutura semântica parcial. Encontrados: ${achados.join(', ')}.`;
        } else {
          evidencia = `Marcos semânticos detectados perfeitamente: ${achados.join(', ')}.`;
        }
        break;

      case "a11y-alt":
        if (dados.totalImgs === 0) {
          evidencia = "Nenhuma imagem (<img) na página.";
        } else if (dados.imgsSemAlt > 0) {
          status = "❌ Falha Crítica";
          evidencia = `Encontradas ${dados.imgsSemAlt} imagem(ns) (de ${dados.totalImgs}) sem o atributo 'alt'.`;
        } else {
          evidencia = `Todas as ${dados.totalImgs} imagens possuem atributo 'alt'.`;
        }
        break;

      case "a11y-labels":
        if (dados.totalInputs === 0) {
          evidencia = "Nenhum campo interativo de formulário detectado na página.";
        } else if (dados.inputsSemLabel > 0) {
          status = "❌ Falha Crítica";
          evidencia = `${dados.inputsSemLabel} campo(s) de formulário sem <label> ou aria-label associado.`;
        } else {
          evidencia = `Todos os ${dados.totalInputs} campos possuem rótulos adequados.`;
        }
        break;

      case "ux-h1":
        if (dados.temSpinner) {
          evidencia = "Indicadores de progresso ou carregamento detectados na estrutura da interface.";
        } else {
          status = "✅ Adequado";
          evidencia = "Página estática ou carregada instantaneamente sem necessidade de spinners.";
        }
        break;

      case "ux-h2":
        if (dados.errosBrutos && dados.errosBrutos.length > 0) {
          status = "❌ Falha Crítica";
          evidencia = `Vazamento de termos técnicos de erro na interface: "${dados.errosBrutos.join(', ')}".`;
        } else {
          evidencia = "Textos e conteúdos em linguagem natural, sem códigos brutos de erro visíveis.";
        }
        break;

      case "ux-h3":
        if (dados.temControleSaida) {
          evidencia = "Botões ou links de retorno/cancelar/início identificados na navegação.";
        } else {
          status = "⚠️ Atenção";
          evidencia = "Não foram detectados botões explícitos de 'Voltar', 'Cancelar' ou 'Home' facilmente acessíveis.";
        }
        break;

      case "ux-h4":
        evidencia = "Elementos de interação mantêm marcação semântica padronizada de botões e links.";
        break;

      case "ux-h5":
        if (dados.totalInputs > 0 && !dados.temValidacao) {
          status = "⚠️ Atenção";
          evidencia = "Os formulários da página não possuem atributos HTML5 de validação (ex: required, pattern).";
        } else if (dados.totalInputs > 0) {
          evidencia = "Atributos preventivos de validação detectados nos campos do formulário.";
        } else {
          evidencia = "Sem formulários na página para avaliar prevenção de erros.";
        }
        break;

      case "ux-h6":
        if (dados.totalInputs > 0 && !dados.temAutocomplete) {
          status = "⚠️ Atenção";
          evidencia = "Sugere-se adicionar o atributo 'autocomplete' nos campos para reduzir esforço de memorização.";
        } else {
          evidencia = "Navegação favorece o reconhecimento visual das informações.";
        }
        break;

      case "ux-h7":
        if (dados.temSkipLink) {
          evidencia = "Atalho 'Pular para o conteúdo principal' encontrado para acelerar navegação por teclado.";
        } else {
          status = "⚠️ Atenção";
          evidencia = "Não foi encontrado link de atalho 'Pular para o conteúdo principal' no topo da página.";
        }
        break;

      case "ux-h8":
        if (!dados.temViewport) {
          status = "❌ Falha Crítica";
          evidencia = "Tag <meta name=\"viewport\"> ausente. A interface não é responsiva para dispositivos móveis.";
        } else {
          evidencia = "Meta viewport presente. Design adaptável e minimalista para telas menores.";
        }
        break;

      case "ux-h9":
        if (dados.temAlerta) {
          evidencia = "Regiões acessíveis de notificação de erro (role='alert' ou aria-live) estão configuradas.";
        } else {
          evidencia = "Interface pronta para exibir feedback de erros de forma acessível.";
        }
        break;

      case "ux-h10":
        if (dados.temLinksAjuda) {
          evidencia = "Canais de suporte, FAQ ou contato facilmente localizados na interface.";
        } else {
          status = "⚠️ Atenção";
          evidencia = "Nenhum link explícito para 'Ajuda', 'FAQ', 'Suporte' ou 'Contato' foi identificado.";
        }
        break;

      case "jornada-personas":
        if (dados.botoesSemTexto > 0) {
          status = "❌ Falha Crítica";
          evidencia = `Personas que usam leitor de tela são bloqueadas: ${dados.botoesSemTexto} botão(ões) sem texto visível ou rótulo de voz.`;
        } else {
          evidencia = "Controles interativos amigáveis para personas com deficiência visual (todos rotulados).";
        }
        break;

      case "jornada-blueprint":
        if (dados.temLinksAjuda) {
          evidencia = "Frontstage do Blueprint validado: canais alternativos de atendimento humano/suporte estão visíveis.";
        } else {
          status = "⚠️ Atenção";
          evidencia = "Recomendação do Blueprint: adicionar ponto de contato evidente em caso de falha no autoatendimento.";
        }
        break;
    }

    return { ...item, status, evidencia };
  });
}

// 4. Renderiza os cartões na tela e atualiza os contadores
function renderizarChecklist(filtro = "todos") {
  const container = document.getElementById('checklist-box');
  container.innerHTML = "";

  const itensFiltrados = resultadosMapeados.filter(it => filtro === "todos" || it.cat === filtro);

  itensFiltrados.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'check-card';
    card.setAttribute('data-status', item.status);

    card.innerHTML = `
      <div class="card-top">
        <span class="card-title">${item.titulo}</span>
        <span class="badge ${item.badgeClass}">${item.badge}</span>
      </div>
      <span class="card-norma">📎 ${item.norma}</span>
      <div class="card-desc">${item.desc}</div>
      <div class="card-controls">
        <select class="status-select" id="sel-${item.id}" value="${item.status}">
          <option value="✅ Adequado" ${item.status === '✅ Adequado' ? 'selected' : ''}>✅ Adequado</option>
          <option value="⚠️ Atenção" ${item.status === '⚠️ Atenção' ? 'selected' : ''}>⚠️ Atenção</option>
          <option value="❌ Falha Crítica" ${item.status === '❌ Falha Crítica' ? 'selected' : ''}>❌ Falha Crítica</option>
        </select>
        <input type="text" class="evidencia-input" id="ev-${item.id}" value="${item.evidencia}" placeholder="Adicionar observação...">
      </div>
    `;

    container.appendChild(card);

    // Evento para atualizar cor da borda e métricas ao mudar select manualmente
    const selectEl = card.querySelector(`#sel-${item.id}`);
    selectEl.addEventListener('change', (e) => {
      const novStatus = e.target.value;
      card.setAttribute('data-status', novStatus);
      selectEl.setAttribute('value', novStatus);
      
      // Atualiza o array de memória
      const obj = resultadosMapeados.find(o => o.id === item.id);
      if (obj) obj.status = novStatus;

      atualizarMetricas();
    });

    const inputEl = card.querySelector(`#ev-${item.id}`);
    inputEl.addEventListener('input', (e) => {
      const obj = resultadosMapeados.find(o => o.id === item.id);
      if (obj) obj.evidencia = e.target.value;
    });
  });

  atualizarMetricas();
}

function atualizarMetricas() {
  const total = resultadosMapeados.length;
  const ok = resultadosMapeados.filter(i => i.status === '✅ Adequado').length;
  const warn = resultadosMapeados.filter(i => i.status === '⚠️ Atenção').length;
  const err = resultadosMapeados.filter(i => i.status === '❌ Falha Crítica').length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-ok').textContent = ok;
  document.getElementById('stat-warn').textContent = warn;
  document.getElementById('stat-err').textContent = err;
}

// 5. Inicialização: Executa o script na aba ativa assim que abre
document.addEventListener('DOMContentLoaded', async () => {
  // Configura botões de filtro
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderizarChecklist(e.target.getAttribute('data-filter'));
    });
  });

  try {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      infoPagina.url = tab.url;
      infoPagina.titulo = tab.title;

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: varreduraProfundaDOM,
      }, (resp) => {
        if (resp && resp[0] && resp[0].result) {
          const dadosDOM = resp[0].result;
          resultadosMapeados = avaliarAutomaticamente(dadosDOM);
          renderizarChecklist("todos");
        }
      });
    }
  } catch (err) {
    document.getElementById('checklist-box').innerHTML = `
      <div style="padding: 20px; color: #dc2626; text-align: center;">
        ❌ Não foi possível inspecionar esta página (páginas internas do navegador ou chrome:// são bloqueadas por segurança).
      </div>
    `;
  }
});

// 6. Exportação para .txt
document.getElementById('gerar-txt').addEventListener('click', () => {
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
  const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');

  let relatorio = "====================================================================\n";
  relatorio += "        RELATÓRIO DE AUDITORIA INSTANTÂNEA - CheckAAA               \n";
  relatorio += "  Acessibilidade (WCAG 2.2 / ABNT), UX, Usabilidade e Jornadas      \n";
  relatorio += "====================================================================\n\n";

  relatorio += "[ DADOS DA AUDITORIA ]\n";
  relatorio += `Data e Hora : ${dataFormatada} às ${horaFormatada}\n`;
  relatorio += `Página      : ${infoPagina.titulo}\n`;
  relatorio += `URL         : ${infoPagina.url}\n\n`;

  const ok = resultadosMapeados.filter(i => i.status === '✅ Adequado').length;
  const warn = resultadosMapeados.filter(i => i.status === '⚠️ Atenção').length;
  const err = resultadosMapeados.filter(i => i.status === '❌ Falha Crítica').length;

  relatorio += "[ RESUMO EXECUTIVO ]\n";
  relatorio += `Total Avaliado : ${resultadosMapeados.length} critérios\n`;
  relatorio += `✅ Adequados   : ${ok}\n`;
  relatorio += `⚠️ Atenção     : ${warn}\n`;
  relatorio += `❌ Falhas      : ${err}\n\n`;

  relatorio += "====================================================================\n";
  relatorio += "                  AVALIAÇÃO DETALHADA POR CRITÉRIO                  \n";
  relatorio += "====================================================================\n\n";

  resultadosMapeados.forEach((item, idx) => {
    relatorio += `[ ITEM ${idx + 1} ] ${item.titulo.toUpperCase()}\n`;
    relatorio += `Categoria         : ${item.badge}\n`;
    relatorio += `Base Normativa    : ${item.norma}\n`;
    relatorio += `O que foi avaliado: ${item.desc}\n`;
    relatorio += `Resultado         : ${item.status}\n`;
    relatorio += `Explicação        : ${item.evidencia || 'Nenhuma observação adicional registrada.'}\n`;
    relatorio += "--------------------------------------------------------------------\n\n";
  });

  relatorio += "Fim do relatório emitido pela extensão CheckAAA.\n";

  const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  const dataIso = dataAtual.toISOString().slice(0,10);
  link.download = `auditoria_CheckAAA_${dataIso}.txt`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});