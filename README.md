# [🔗 포켓몬도감](https://pokemon-dex-psi.vercel.app/)
- react, styled-components, react-router-dom, redux-toolkit, redux-persist를 사용하여 만든 포켓몬 도감입니다.
<br/><br/>
# 주요 기능
- 최대 6마리의 중복되지 않는 포켓몬을 선택할 수 있습니다.
- 선택한 포켓몬들은 세션스토리지에 저장됩니다.
- 디테일페이지에선 키보드만으로도 조작할 수 있도록 만들었습니다.
<br/><br/>
# 프로젝트를 진행하면서 배우게 된 점
- prop drilling의 불편함과 context의 편리함을 알게되었습니다.
- context의 비효율적인 랜더링, 부모 자식 관계인 컴포넌트에서만 사용할 수 있다는 한계와 이러한 비효율과 한계를 해소 해주는 redux에 대해 알게되었습니다.
- styled-components로 css요소에 조건문을 사용할 수 있게되었습니다.
- useEffect와 useRef의 쓰임과 사용법을 알게되었습니다.
- redux-persist의 사용법을 알게되었습니다.
- custom Hook의 사용법과 편리성을 알게되었습니다.
<br/><br/>
# 개선점
- styled-components를 css처럼 사용하지 말고 styled-components의 기능을 살려서 사용하기
<br/><br/>
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
