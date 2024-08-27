# 배포주소
[🔗 포켓몬도감](https://pokemon-dex-psi.vercel.app/)
[🔗 감정구슬](https://kang-1230.github.io/emotion_balls/) : 감정에 따라서 영화를 추천해주는 서비스를 제공하는 사이트

# 파일구조
```
포켓몬도감
├─ .git
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ Dashboard.jsx
│  │  ├─ PokemonCard.jsx
│  │  └─ PokemonList.jsx
│  ├─ data
│  │  └─ mock.js
│  ├─ hooks
│  │  └─ usePokemon.js
│  ├─ img
│  │  ├─ favicon.png
│  │  ├─ logo.png
│  │  └─ poke-ball.png
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Dex.jsx
│  │  ├─ Home.jsx
│  │  └─ PokemonDetail.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ slices
│  │     ├─ selectPokemonSlice.js
│  │     └─ yCoordinateSlice.js
│  ├─ shared
│  │  └─ Router.jsx
│  └─ styles
│     ├─ GlobalStyles.jsx
│     ├─ PressSign.jsx
│     ├─ StBtn.jsx
│     ├─ Swal.js
│     ├─ common.css
│     └─ reset.css
├─ vite.config.js
└─ yarn.lock
```
