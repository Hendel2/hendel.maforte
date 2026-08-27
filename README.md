# Portfólio — Hendel Maforte

Site de portfólio pessoal em **HTML, CSS e JavaScript puro** (sem frameworks, sem build).

## Estrutura

```
Portifolio/
├── index.html                      # Página única com todas as seções
├── styles.css                      # Estilos (tema escuro) + responsivo
├── script.js                       # Menu mobile, navbar e fade das seções
└── Curriculo_HendelMaforte_TI.pdf  # Baixado pelo botão do hero
```

## Como abrir

Basta abrir o `index.html` no navegador (duplo clique).

Se quiser rodar em um servidor local:

```bash
# Python
python -m http.server 8000

# ou PHP
php -S localhost:8000
```

E acessar http://localhost:8000

## O que já está pronto

- Seções: Início, Sobre, Experiência, Tecnologias, Projetos, Formação, Contato
- Tema escuro (sem opção de troca)
- Menu responsivo (hambúrguer no mobile)
- Fade simples das seções ao rolar
- Respeita `prefers-reduced-motion` e tem estilo de impressão

## O que dá pra personalizar

1. **Links dos projetos** — em `index.html`, procure por `github.com/Hendel2` e troque
   pelos repositórios certos do Sistema de Ingressos e do TCC (hoje apontam para o perfil).
2. **Foto** — se quiser sua foto no hero, coloque o arquivo em `assets/foto.jpg`
   e adicione uma `<img>` dentro de `.hero__inner`.
3. **Cores** — todas ficam no `:root` do `styles.css` (`--accent` é a cor de destaque).
4. **Níveis das tecnologias** — o `<em>básico</em>` dentro de cada chip no `index.html`.

## Publicar no GitHub Pages

```bash
git init
git add .
git commit -m "Portfólio pessoal"
git branch -M main
git remote add origin https://github.com/Hendel2/portfolio.git
git push -u origin main
```

Depois: **Settings → Pages → Source: main / (root)**.
O site fica em `https://hendel2.github.io/portfolio`.
