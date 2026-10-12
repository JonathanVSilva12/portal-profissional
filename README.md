# Portal Profissional

Portal estático (HTML, CSS e JS) para apresentação profissional. Não precisa de build:
basta abrir `index.html` com o Live Server do VS Code.

Documentação completa: [docs/DOCUMENTACAO.md](docs/DOCUMENTACAO.md)

## Estrutura

```
index.html              home com o mapa
apresentacao.html       quem sou e trajetória
conhecimentos.html      conhecimentos por área e nível
analytics.html          cases de analytics e BI
desenvolvimento.html    cases de automação e desenvolvimento
CSS/                    main (base), home, apresentacao, conhecimentos, cases
JS/                     main, navbar, pilha (troca de imagens dos cases)
IMG/                    mapa.png, Foto_perfil.jpg e IMG/cases/ (imagens dos cases)
VIDEO/                  vídeos dos cases (fora do Git, ver .gitignore)
```

## Continuar em outra máquina

1. `git pull` para trazer a versão mais recente.
2. Copiar as imagens para `IMG/cases/` e os vídeos para `VIDEO/`, com os nomes indicados em cada case.
3. Abrir com o Live Server e conferir cada página.
4. `git add`, `git commit` e `git push`.

## Colocar imagem ou vídeo em um case

- **Imagem:** no bloco `.vazio` do case, trocar por
  `<img src="./IMG/cases/nome.png" alt="Descrição da imagem">`.
- **Vídeo:** apagar as linhas `<!--` e `-->` que envolvem o bloco `<video>`.
  Os nomes dos arquivos aparecem no próprio HTML.

## Criar um novo case

Copiar um bloco `<article class="case"> ... </article>` inteiro, colar na seção desejada e
trocar título, endpoint, textos, tags e nomes dos arquivos de mídia.

## Antes de apresentar

- Navegar por todas as páginas: home, menu, tópicos do mapa e links entre páginas.
- Conferir em tela cheia (F11) na resolução do notebook de apresentação.
- Abrir os vídeos para confirmar que tocam.
- As fontes vêm do Google Fonts e precisam de internet. Sem rede o site funciona com fontes padrão.

## Conteúdo da empresa

Imagens, vídeos e números de projetos da empresa só entram com autorização.
Anonimizar nomes de clientes, pessoas, valores e dados sensíveis antes de usar.
Se o repositório for público, qualquer imagem commitada fica pública: preferir repositório
privado ou deixar as mídias da empresa fora do Git.