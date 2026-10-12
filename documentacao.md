# Documentação do Portal Profissional

Portal estático de apresentação profissional de **Jonathan Vieira da Silva**, criado como apoio
para entrevista (vaga de Analista de Qualidade de Sistemas). Não usa framework nem etapa de build:
são arquivos HTML, CSS e JavaScript puros, abertos direto no navegador.

## 1. Visão geral

| Item | Descrição |
|---|---|
| Objetivo | Apresentar trajetória, conhecimentos e cases de forma navegável, como um portal e não como uma landing page |
| Uso previsto | Apresentação no notebook, em tela cheia; mobile só no mínimo |
| Tecnologias | HTML5, CSS3 (variáveis, grid, flexbox, `min()`/`max()`, `cos()`/`sin()`), JavaScript sem bibliotecas |
| Fontes | Inter e Cormorant Garamond (itálico), via Google Fonts |
| Identidade visual | Tema azul escuro com marcadores dourados, tirados do mapa da home |
| Publicação | Local (Live Server) ou GitHub Pages; ver seção 9 |

## 2. Mapa do site

```
index.html (home com o mapa)
├── apresentacao.html     #quem-sou, #trajetoria
├── conhecimentos.html    #analytics, #desenvolvimento, #devops
├── analytics.html        #projetos
└── desenvolvimento.html  #automacao
```

O menu superior tem as mesmas cinco entradas em todas as páginas: Home, Apresentação,
Conhecimentos, Analytics & BI e Desenvolvimento & Automação. A página atual fica destacada
(`aria-current="page"`).

### Tópicos da prévia na home

Ao passar o mouse (ou focar com o teclado) numa ilha, os tópicos aparecem ao redor do marcador:

| Ilha | Tópicos | Destino |
|---|---|---|
| Apresentação | Quem sou, Trajetória profissional | `apresentacao.html#quem-sou`, `#trajetoria` |
| Conhecimentos | Analytics, Desenvolvimento, DevOps | `conhecimentos.html#analytics`, `#desenvolvimento`, `#devops` |
| Analytics & BI | Projetos de analytics | `analytics.html#projetos` |
| Desenvolvimento & Automação | Automação e IA | `desenvolvimento.html#automacao` |

## 3. Estrutura de pastas

```
portal_profissional/
├── index.html
├── apresentacao.html
├── conhecimentos.html
├── analytics.html
├── desenvolvimento.html
├── README.md
├── .gitignore
├── docs/
│   └── DOCUMENTACAO.md
├── CSS/
│   ├── main.css            base: tema, navbar, layout das páginas internas, tags e selo de método
│   ├── home.css            mapa, marcadores e prévia de tópicos
│   ├── apresentacao.css    perfil, endpoints, resumo e trajetória
│   ├── conhecimentos.css   cartões de habilidades e níveis
│   └── cases.css           cases, pilha de imagens e destaques antes/depois
├── JS/
│   ├── main.js             sem uso no momento (reservado)
│   ├── navbar.js           esconde e mostra o menu ao rolar
│   └── pilha.js            troca a imagem de cima da pilha
├── IMG/
│   ├── mapa.png            ilustração da home (1536 x 1024)
│   ├── Foto_perfil.jpg     foto da página Apresentação
│   └── cases/              imagens dos cases (nomes na seção 7)
└── VIDEO/                  vídeos dos cases (fora do Git)
```

Os nomes das pastas `CSS`, `IMG`, `JS` e `VIDEO` são em maiúsculas. Em servidores Linux, como o
GitHub Pages, maiúsculas e minúsculas importam: os caminhos nos HTMLs seguem exatamente esses nomes.

## 4. Páginas

### 4.1 `index.html` (Home)

- Mapa em tela cheia como página inteira, com a navbar translúcida por cima.
- Título da ilha central: "Portal Profissional" (decorativo). O nome completo está no `<title>` e
  num `<h1>` visível só para leitores de tela.
- Quatro ilhas clicáveis, cada uma com marcador, rótulo e tópicos em volta.
- Em telas estreitas ou em pé, o mapa fica pequeno e aparece uma lista de links abaixo dele.

### 4.2 `apresentacao.html`

- **Quem sou eu:** foto à esquerda (a altura acompanha o bloco ao lado), nome, cargo e uma lista de
  dados apresentados como endpoints (`GET /idade`, `/hobbies`, `/familia`, `/experiencia/vivo`,
  `/formacao`, `/idiomas/ingles`, `/idiomas/espanhol`, `/experiencia/analytics`,
  `/experiencia/automacao`).
- **Resumo:** parágrafo curto.
- **Trajetória na Vivo:** linha vertical pontilhada com seis cargos, do mais antigo ao atual, cada um
  com ícone, endpoint, período, descrição e tags de ferramentas.

Cargos, em ordem: Atendente de Agendamento, Assistente Técnico, Analista de Serviço ao Cliente Jr,
Supervisor de Serviço ao Cliente (cargo de supervisor com atuação de analista), Analista de Serviço
ao Cliente Sr e Analista Suporte Operação Sr (atual).

### 4.3 `conhecimentos.html`

Três áreas, cada uma com cartões de habilidades:

- **Analytics:** Python, SQL, Power BI, Pentaho, Excel.
- **Desenvolvimento:** Python (automação, aplicações, integrações), HTML/CSS/JavaScript, C# e PHP.
- **DevOps:** Git, Docker, CI/CD (GitHub Actions). Apresentado como conhecimento inicial.

Cada cartão tem descrição, tags opcionais e um nível de três pontos: Básico, Intermediário ou
Avançado. O nível sempre aparece também em texto, não só pela cor.

### 4.4 `analytics.html`

Um case: **Sobra de ordens de serviço**. Estrutura: pilha de imagens (gráficos, código, e-mail,
hierarquia), endpoint, Problema, Solução, Resultado, destaques antes/depois (sobras de 6% para
3 a 4%; resobras de 6 a 7x para 2 a 3x), nota de andamento (versão em Power BI) e tags.

### 4.5 `desenvolvimento.html`

Um case: **Escuta de ligações com transcrição e resumo**. Pilha de duas imagens, vídeo de
demonstração, Problema, Solução, Resultado, destaques (20 a 30 min para 5 min por caso; transcrição
de 5 a 7 min de áudio em 1 a 2 min) e tags (Python, tkinter, speech_recognition, wave).

## 5. Decisões de arquitetura

| Tema | Decisão | Motivo |
|---|---|---|
| Sem framework | HTML, CSS e JS puros | Roda em qualquer máquina, sem instalação, e é fácil de manter no notebook da empresa |
| Páginas separadas | Um arquivo por seção | Cada área cresce sem pesar as outras; links diretos para tópicos |
| Tema central | Variáveis CSS em `main.css` | Cores e fontes mudam num lugar só |
| Endpoints | Método, caminho e resposta como identidade visual | Combina com o perfil de qualidade e de APIs, sem usar JSON nem código de verdade |
| Níveis | Três pontos com rótulo | Mais honesto e defensável em entrevista que porcentagens |
| Cases | Problema, Solução, Resultado | Estrutura direta que o recrutador lê rápido |
| Dashboard no site | Não implementado | Dados da empresa e risco de exposição; print anonimizado é mais seguro |
| Mobile | Mínimo | Apresentação será no notebook |

### Tema (`main.css`)

| Variável | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#0f172a` | Fundo geral |
| `--bg-card` | `#1e293b` | Cartões |
| `--blue-primary` / `--blue-secondary` | `#3b82f6` / `#60a5fa` | Destaques e interação |
| `--text-primary` / `--text-secondary` | `#f8fafc` / `#94a3b8` | Texto |
| `--border-color` | `rgba(59,130,246,.25)` | Bordas |
| `--gold` / `--gold-glow` | `#fde68a` / `rgba(251,191,36,.45)` | Marcadores do mapa, níveis e períodos |
| `--navbar-h` | `75px` (`92px` até 900px) | Altura do menu, usada nos cálculos de layout |
| `--serif` / `--mono` | Cormorant Garamond / fonte monoespaçada do sistema | Títulos e endpoints |

## 6. Como o mapa da home funciona

- O mapa tem largura `max(100vw, min(150vh, 120vw))` e altura igual à largura dividida por 1,5
  (proporção do `mapa.png`). Assim a imagem cobre a janela e as porcentagens dos marcadores sempre
  batem com as ilhas. A página rola para mostrar o mapa inteiro.
- Cada ilha é um `.hotspot` posicionado por duas variáveis, `--x` e `--y`, em porcentagem do mapa:

| Elemento | `--x` | `--y` |
|---|---|---|
| Título central (`.inicio`) | 49,8% | 41,6% |
| Apresentação | 18,8% | 38,6% |
| Conhecimentos | 52,2% | 10,6% |
| Analytics & BI | 76,7% | 33,2% |
| Desenvolvimento & Automação | 72,1% | 68,2% |

- Os tópicos ficam parados no centro do marcador e, no hover ou foco, vão para a posição calculada
  com `cos()` e `sin()`: `--a` é o ângulo e `--r` é o raio. A ilha de Conhecimentos usa ângulos
  próprios (esquerda, direita e abaixo) para os tópicos não ficarem sob o menu.
- Um pseudo-elemento invisível mantém o hover ativo no espaço entre o marcador e os tópicos.

## 7. Arquivos de mídia esperados

| Página | Arquivo | Conteúdo |
|---|---|---|
| Apresentação | `IMG/Foto_perfil.jpg` | Foto de perfil |
| Analytics | `IMG/cases/sobras-graficos.png` | Gráficos de acompanhamento |
| Analytics | `IMG/cases/sobras-codigo.png` | Código do estudo |
| Analytics | `IMG/cases/sobras-email.png` | E-mail automático de cobrança |
| Analytics | `IMG/cases/sobras-hierarquia.png` | Hierarquia ou ofensores |
| Analytics | `VIDEO/sobras-demo.mp4` | Opcional, bloco comentado no HTML |
| Desenvolvimento | `IMG/cases/escuta-01.png` | Tela do aplicativo |
| Desenvolvimento | `IMG/cases/escuta-02.png` | Transcrição e resumo gerados |
| Desenvolvimento | `VIDEO/escuta-demo.mp4` | Demonstração do aplicativo |

Em Desenvolvimento basta salvar os arquivos com esses nomes. Em Analytics é preciso trocar o bloco
`.vazio` de cada foto pela tag `<img>`, como explica o comentário no HTML.

## 8. Como manter

**Mover uma ilha:** em `home.css`, na seção "POSIÇÕES", alterar `--x` e `--y` da classe da ilha.

**Adicionar ou mudar um tópico da prévia:** em `index.html`, editar o `<li>` dentro da lista
`hotspot__topicos`. Com um tópico, ele aparece acima do marcador; com dois, acima à esquerda e
acima à direita. A ilha de Conhecimentos tem regras próprias (esquerda, direita e abaixo) em
`home.css`; um quarto tópico exigiria definir mais um ângulo lá.

**Mudar o nível de uma habilidade:** em `conhecimentos.html`, trocar `nivel--1/2/3` na `div.nivel`
e ajustar o texto do `<span>` e o `aria-label`. Os cartões marcados com `<!-- confirmar nível -->`
foram estimados.

**Adicionar um marco na trajetória:** copiar um `<li class="etapa">` em `apresentacao.html` e
trocar endpoint, período, título, texto e ícone. Para usar foto no lugar do ícone, trocar o
`<svg>` por `<img>` (comentário no HTML).

**Adicionar um dado em "Quem sou eu":** copiar um `<li>` da lista `.endpoints`.

**Criar um novo case:** copiar o bloco `<article class="case">` inteiro, colar na seção desejada e
trocar endpoint, título, textos, destaques, tags e nomes dos arquivos.

**Trocar a ordem das imagens da pilha:** mudar a ordem dos `<figure>`; o primeiro fica por cima.
O clique manda a imagem de cima para o fim.

**Trocar o ícone de uma etapa:** substituir o `<svg>` dentro de `.etapa__midia`.

## 9. Execução e publicação

- **Local:** abrir a pasta no VS Code e iniciar o Live Server em `index.html`.
- **Git:** o `.gitignore` deixa de fora `VIDEO/`, arquivos `.mp4`, `.mov`, `.pbix`, `.xlsx`, `.xlsm`
  e `IMG/cases/privado/`.
- **Outra máquina:** `git pull`, copiar imagens para `IMG/cases/` e vídeos para `VIDEO/`, conferir
  no navegador, `git commit` e `git push`.
- **Repositório:** preferir **privado**. Em repositório público, tudo que for commitado fica público.
- **GitHub Pages:** funciona sem alterações, desde que os caminhos mantenham as maiúsculas das pastas.

## 10. Comportamento e acessibilidade

- **Menu:** fixo e translúcido. Esconde ao rolar para baixo e reaparece ao rolar para cima; se algum
  link do menu recebe foco por teclado, ele reaparece.
- **Teclado:** todos os links, marcadores e a pilha de imagens são alcançáveis com Tab. A pilha
  também responde a Enter e Espaço. Os tópicos da prévia aparecem ao focar o marcador.
- **Foco visível** nos elementos interativos.
- **Movimento reduzido:** quem tem `prefers-reduced-motion` ativo não vê as transições da pilha,
  da prévia de tópicos e da rolagem suave.
- **Textos alternativos** nas imagens; o nível das habilidades tem `aria-label`.

### Responsivo (mínimo)

| Limite | Efeito |
|---|---|
| até 900px de largura | Menu em duas linhas; páginas internas com menos margem; cases em uma coluna |
| até 800px | Apresentação em uma coluna; trajetória e endpoints se reorganizam |
| até 700px ou tela em pé | Home mostra o mapa pequeno e uma lista de links; sem prévia de tópicos |

## 11. Pendências de conteúdo

- Períodos (anos) de cada cargo em `apresentacao.html` (marcados `[período]`).
- Escopo da administração de banco de dados no cargo atual (marcado `[detalhar ...]`).
- Confirmar os níveis marcados com `<!-- confirmar nível -->` em `conhecimentos.html`.
- Confirmar as ferramentas das tags dos cases.
- Colocar as imagens e os vídeos dos cases (seção 7), com anonimização.
- Revisar o texto do resumo e as descrições dos cargos.
- Opcional: fotos ou imagens por cargo na trajetória, no lugar dos ícones.

## 12. Conteúdo da empresa

Imagens, vídeos, nomes de clientes, números de ordens, telefones, e-mails e valores de projetos da
empresa só devem entrar com autorização e depois de anonimizados. Gravações de ligações não devem
ser exibidas nem tocadas no vídeo.

## 13. Checklist antes de apresentar

- [ ] Abrir `index.html` e passar o mouse em cada ilha: os tópicos aparecem e levam à seção certa.
- [ ] Testar o menu em todas as páginas e o voltar do navegador.
- [ ] Conferir em tela cheia (F11) na resolução do notebook de apresentação, como 1366 x 768.
- [ ] Abrir os dois vídeos e confirmar que tocam sem som de ligação real.
- [ ] Conferir se nenhum `[colchete]` de texto provisório ficou na tela.
- [ ] Confirmar se há internet no local; sem ela as fontes caem para as padrão do sistema.
- [ ] Ter uma versão em PDF ou currículo simples como alternativa.

## 14. Limitações conhecidas

- A prévia de tópicos usa `cos()` e `sin()` do CSS, suportados em navegadores atuais (Chrome, Edge,
  Safari e Firefox recentes).
- Em monitores mais largos que 2:1, aparecem faixas escuras nas laterais do mapa, para não cortar a
  ilha de Desenvolvimento.
- Sem internet, as fontes do Google não carregam e o site usa fontes padrão do sistema.
- O layout para celular é básico e não foi otimizado.