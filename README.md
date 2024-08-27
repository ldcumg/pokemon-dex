# 배포 주소
[🔗 포켓몬도감](https://pokemon-dex-psi.vercel.app/)
react, react-router-dom, redux-toolkit, redux-persist를 사용하여 만든 포켓몬도감입니다.

# 기능
최대 6마리의 중복되지 않는 포켓몬을 선택할 수 있습니다.
선택한 포켓몬들은 세션스토리지에 저장됩니다.
디테일페이지에선 키보드만으로도 조작할 수 있도록 만들었습니다.

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
