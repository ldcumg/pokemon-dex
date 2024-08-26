const MOCK_DATA = [
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    korean_name: "이상해씨",
    types: ["풀", "독"],
    id: 1,
    description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    korean_name: "이상해풀",
    types: ["풀", "독"],
    id: 2,
    description: "이상해씨의 진화형으로, 등에는 꽃봉오리가 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    korean_name: "이상해꽃",
    types: ["풀", "독"],
    id: 3,
    description: "이상해풀의 최종 진화형으로, 등에는 큰 꽃이 피어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    korean_name: "파이리",
    types: ["불꽃"],
    id: 4,
    description: "불꽃 타입의 포켓몬으로, 꼬리에 불이 붙어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    korean_name: "리자드",
    types: ["불꽃"],
    id: 5,
    description: "파이리의 진화형으로, 더 큰 몸집과 강한 불을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    korean_name: "리자몽",
    types: ["불꽃", "비행"],
    id: 6,
    description:
      "리자드의 최종 진화형으로, 강력한 불꽃과 비행 능력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    korean_name: "꼬부기",
    types: ["물"],
    id: 7,
    description: "물 타입의 포켓몬으로, 작은 거북이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    korean_name: "어니부기",
    types: ["물"],
    id: 8,
    description: "꼬부기의 진화형으로, 더 강한 방어력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    korean_name: "거북왕",
    types: ["물"],
    id: 9,
    description: "어니부기의 최종 진화형으로, 강력한 물 공격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    korean_name: "캐터피",
    types: ["벌레"],
    id: 10,
    description: "벌레 타입의 포켓몬으로, 작고 귀여운 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    korean_name: "단데기",
    types: ["벌레"],
    id: 11,
    description: "캐터피의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    korean_name: "버터플",
    types: ["벌레", "비행"],
    id: 12,
    description: "단데기의 최종 진화형으로, 아름다운 나비 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    korean_name: "뿔충이",
    types: ["벌레", "독"],
    id: 13,
    description: "벌레와 독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    korean_name: "딱충이",
    types: ["벌레", "독"],
    id: 14,
    description: "뿔충이의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    korean_name: "독침붕",
    types: ["벌레", "독"],
    id: 15,
    description: "딱충이의 최종 진화형으로, 독침을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    korean_name: "구구",
    types: ["노말", "비행"],
    id: 16,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    korean_name: "피죤",
    types: ["노말", "비행"],
    id: 17,
    description: "구구의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    korean_name: "피죤투",
    types: ["노말", "비행"],
    id: 18,
    description: "피죤의 최종 진화형으로, 매우 빠른 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    korean_name: "꼬렛",
    types: ["노말"],
    id: 19,
    description: "노말 타입의 포켓몬으로, 작은 쥐 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    korean_name: "레트라",
    types: ["노말"],
    id: 20,
    description: "꼬렛의 진화형으로, 더 큰 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    korean_name: "깨비참",
    types: ["노말", "비행"],
    id: 21,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    korean_name: "깨비드릴조",
    types: ["노말", "비행"],
    id: 22,
    description: "깨비참의 진화형으로, 큰 부리와 빠른 속도를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    korean_name: "아보",
    types: ["독"],
    id: 23,
    description: "독 타입의 포켓몬으로, 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    korean_name: "아보크",
    types: ["독"],
    id: 24,
    description: "아보의 진화형으로, 더 크고 강한 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    korean_name: "피카츄",
    types: ["전기"],
    id: 25,
    description:
      "전기 타입의 포켓몬으로, 귀여운 외모와 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    korean_name: "라이츄",
    types: ["전기"],
    id: 26,
    description: "피카츄의 진화형으로, 더 큰 몸집과 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    korean_name: "모래두지",
    types: ["땅"],
    id: 27,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    korean_name: "고지",
    types: ["땅"],
    id: 28,
    description:
      "모래두지의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    korean_name: "니드런♀",
    types: ["독"],
    id: 29,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    korean_name: "니드리나",
    types: ["독"],
    id: 30,
    description: "니드런♀의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    korean_name: "니드퀸",
    types: ["독", "땅"],
    id: 31,
    description: "니드리나의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    korean_name: "니드런♂",
    types: ["독"],
    id: 32,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    korean_name: "니드리노",
    types: ["독"],
    id: 33,
    description: "니드런♂의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    korean_name: "니드킹",
    types: ["독", "땅"],
    id: 34,
    description: "니드리노의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    korean_name: "삐삐",
    types: ["페어리"],
    id: 35,
    description:
      "페어리 타입의 포켓몬으로, 귀여운 외모와 마법 같은 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    korean_name: "픽시",
    types: ["페어리"],
    id: 36,
    description: "삐삐의 진화형으로, 더 강력한 페어리 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    korean_name: "식스테일",
    types: ["불꽃"],
    id: 37,
    description: "불꽃 타입의 포켓몬으로, 여우 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    korean_name: "나인테일",
    types: ["불꽃"],
    id: 38,
    description: "식스테일의 진화형으로, 긴 꼬리를 가진 아름다운 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    korean_name: "푸린",
    types: ["노말", "페어리"],
    id: 39,
    description:
      "노말과 페어리 타입의 포켓몬으로, 둥글고 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    korean_name: "푸크린",
    types: ["노말", "페어리"],
    id: 40,
    description:
      "푸린의 진화형으로, 더 큰 몸집과 강력한 페어리 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    korean_name: "주뱃",
    types: ["독", "비행"],
    id: 41,
    description: "독과 비행 타입의 포켓몬으로, 작은 박쥐 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    korean_name: "골뱃",
    types: ["독", "비행"],
    id: 42,
    description: "주뱃의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    korean_name: "뚜벅쵸",
    types: ["풀", "독"],
    id: 43,
    description: "풀과 독 타입의 포켓몬으로, 작은 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    korean_name: "냄새꼬",
    types: ["풀", "독"],
    id: 44,
    description: "뚜벅쵸의 진화형으로, 더 큰 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    korean_name: "라플레시아",
    types: ["풀", "독"],
    id: 45,
    description: "냄새꼬의 최종 진화형으로, 큰 꽃을 가진 강력한 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    korean_name: "파라스",
    types: ["벌레", "풀"],
    id: 46,
    description: "벌레와 풀 타입의 포켓몬으로, 작은 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    korean_name: "파라섹트",
    types: ["벌레", "풀"],
    id: 47,
    description: "파라스의 진화형으로, 큰 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    korean_name: "콘팡",
    types: ["벌레", "독"],
    id: 48,
    description: "벌레와 독 타입의 포켓몬으로, 귀여운 곤충 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    korean_name: "도나리",
    types: ["벌레", "독"],
    id: 49,
    description: "콘팡의 진화형으로, 더 큰 몸집과 강력한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    korean_name: "디그다",
    types: ["땅"],
    id: 50,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    korean_name: "닥트리오",
    types: ["땅"],
    id: 51,
    description: "디그다의 진화형으로, 세 마리의 두더지가 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    korean_name: "나옹",
    types: ["노말"],
    id: 52,
    description: "노말 타입의 포켓몬으로, 귀여운 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    korean_name: "페르시온",
    types: ["노말"],
    id: 53,
    description:
      "나옹의 진화형으로, 우아하고 날렵한 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    korean_name: "고라파덕",
    types: ["물"],
    id: 54,
    description:
      "물 타입의 포켓몬으로, 자주 두통을 앓는 오리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    korean_name: "골덕",
    types: ["물"],
    id: 55,
    description:
      "고라파덕의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    korean_name: "망키",
    types: ["격투"],
    id: 56,
    description: "격투 타입의 포켓몬으로, 화가 나 있는 원숭이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    korean_name: "성원숭",
    types: ["격투"],
    id: 57,
    description: "망키의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    korean_name: "가디",
    types: ["불꽃"],
    id: 58,
    description: "불꽃 타입의 포켓몬으로, 강아지 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    korean_name: "윈디",
    types: ["불꽃"],
    id: 59,
    description: "가디의 진화형으로, 더 큰 몸집과 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    korean_name: "발챙이",
    types: ["물"],
    id: 60,
    description: "물 타입의 포켓몬으로, 작고 귀여운 개구리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    korean_name: "슈륙챙이",
    types: ["물"],
    id: 61,
    description:
      "발챙이의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    korean_name: "강챙이",
    types: ["물", "격투"],
    id: 62,
    description:
      "슈륙챙이의 최종 진화형으로, 강력한 물과 격투 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    korean_name: "캐이시",
    types: ["에스퍼"],
    id: 63,
    description: "에스퍼 타입의 포켓몬으로, 초능력 사용에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    korean_name: "윤겔라",
    types: ["에스퍼"],
    id: 64,
    description: "캐이시의 진화형으로, 초능력과 강한 정신력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    korean_name: "후딘",
    types: ["에스퍼"],
    id: 65,
    description: "윤겔라의 최종 진화형으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    korean_name: "알통몬",
    types: ["격투"],
    id: 66,
    description: "격투 타입의 포켓몬으로, 강한 근육과 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    korean_name: "근육몬",
    types: ["격투"],
    id: 67,
    description: "알통몬의 진화형으로, 더 크고 강한 근육을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    korean_name: "괴력몬",
    types: ["격투"],
    id: 68,
    description: "근육몬의 최종 진화형으로, 매우 강력한 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    korean_name: "모다피",
    types: ["풀", "독"],
    id: 69,
    description: "풀과 독 타입의 포켓몬으로, 작은 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    korean_name: "우츠동",
    types: ["풀", "독"],
    id: 70,
    description: "모다피의 진화형으로, 더 크고 강한 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    korean_name: "우츠보트",
    types: ["풀", "독"],
    id: 71,
    description: "우츠동의 최종 진화형으로, 강력한 독과 풀 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    korean_name: "왕눈해",
    types: ["물", "독"],
    id: 72,
    description: "물과 독 타입의 포켓몬으로, 큰 눈과 촉수를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    korean_name: "독파리",
    types: ["물", "독"],
    id: 73,
    description: "왕눈해의 진화형으로, 더 큰 몸집과 강한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    korean_name: "꼬마돌",
    types: ["바위", "땅"],
    id: 74,
    description: "바위와 땅 타입의 포켓몬으로, 작은 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    korean_name: "데구리",
    types: ["바위", "땅"],
    id: 75,
    description: "꼬마돌의 진화형으로, 더 큰 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    korean_name: "딱구리",
    types: ["바위", "땅"],
    id: 76,
    description: "데구리의 최종 진화형으로, 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    korean_name: "포니타",
    types: ["불꽃"],
    id: 77,
    description: "불꽃 타입의 포켓몬으로, 불타는 갈기를 가진 말 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    korean_name: "날쌩마",
    types: ["불꽃"],
    id: 78,
    description: "포니타의 진화형으로, 더 크고 빠른 말 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    korean_name: "야돈",
    types: ["물", "에스퍼"],
    id: 79,
    description:
      "물과 에스퍼 타입의 포켓몬으로, 느린 움직임과 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    korean_name: "야도란",
    types: ["물", "에스퍼"],
    id: 80,
    description: "야돈의 진화형으로, 더 크고 강한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    korean_name: "코일",
    types: ["전기", "강철"],
    id: 81,
    description: "전기와 강철 타입의 포켓몬으로, 자석 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    korean_name: "레어코일",
    types: ["전기", "강철"],
    id: 82,
    description: "코일의 진화형으로, 세 개의 자석이 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    korean_name: "파오리",
    types: ["노말", "비행"],
    id: 83,
    description: "노말과 비행 타입의 포켓몬으로, 파를 든 오리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    korean_name: "두두",
    types: ["노말", "비행"],
    id: 84,
    description:
      "노말과 비행 타입의 포켓몬으로, 두 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    korean_name: "두트리오",
    types: ["노말", "비행"],
    id: 85,
    description: "두두의 진화형으로, 세 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    korean_name: "쥬쥬",
    types: ["물"],
    id: 86,
    description: "물 타입의 포켓몬으로, 귀여운 물개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    korean_name: "쥬레곤",
    types: ["물", "얼음"],
    id: 87,
    description: "쥬쥬의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    korean_name: "질퍽이",
    types: ["독"],
    id: 88,
    description: "독 타입의 포켓몬으로, 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    korean_name: "질뻐기",
    types: ["독"],
    id: 89,
    description: "질퍽이의 진화형으로, 더 큰 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    korean_name: "셀러",
    types: ["물"],
    id: 90,
    description: "물 타입의 포켓몬으로, 조개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    korean_name: "파르셀",
    types: ["물", "얼음"],
    id: 91,
    description: "셀러의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    korean_name: "고오스",
    types: ["고스트", "독"],
    id: 92,
    description: "고스트와 독 타입의 포켓몬으로, 유령 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    korean_name: "고우스트",
    types: ["고스트", "독"],
    id: 93,
    description: "고오스의 진화형으로, 더 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    korean_name: "팬텀",
    types: ["고스트", "독"],
    id: 94,
    description:
      "고우스트의 최종 진화형으로, 매우 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    korean_name: "롱스톤",
    types: ["바위", "땅"],
    id: 95,
    description: "바위와 땅 타입의 포켓몬으로, 긴 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    korean_name: "슬리프",
    types: ["에스퍼"],
    id: 96,
    description: "에스퍼 타입의 포켓몬으로, 최면 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    korean_name: "슬리퍼",
    types: ["에스퍼"],
    id: 97,
    description: "슬리프의 진화형으로, 더 강력한 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    korean_name: "크랩",
    types: ["물"],
    id: 98,
    description: "물 타입의 포켓몬으로, 작은 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    korean_name: "킹크랩",
    types: ["물"],
    id: 99,
    description: "크랩의 진화형으로, 더 큰 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    korean_name: "찌리리공",
    types: ["전기"],
    id: 100,
    description: "전기 타입의 포켓몬으로, 전기를 방출할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    korean_name: "붐볼",
    types: ["전기"],
    id: 101,
    description: "찌리리공의 진화형으로, 더 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    korean_name: "아라리",
    types: ["풀", "에스퍼"],
    id: 102,
    description: "풀과 에스퍼 타입의 포켓몬으로, 알 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    korean_name: "나시",
    types: ["풀", "에스퍼"],
    id: 103,
    description: "아라리의 진화형으로, 세 개의 머리를 가진 야자수 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    korean_name: "탕구리",
    types: ["땅"],
    id: 104,
    description: "땅 타입의 포켓몬으로, 작은 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    korean_name: "텅구리",
    types: ["땅"],
    id: 105,
    description:
      "탕구리의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    korean_name: "시라소몬",
    types: ["격투"],
    id: 106,
    description: "격투 타입의 포켓몬으로, 강한 발차기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    korean_name: "홍수몬",
    types: ["격투"],
    id: 107,
    description: "격투 타입의 포켓몬으로, 강한 펀치 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    korean_name: "내루미",
    types: ["노말"],
    id: 108,
    description: "노말 타입의 포켓몬으로, 긴 혀를 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    korean_name: "또가스",
    types: ["독"],
    id: 109,
    description: "독 타입의 포켓몬으로, 독가스를 내뿜습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    korean_name: "또도가스",
    types: ["독"],
    id: 110,
    description: "또가스의 진화형으로, 더 큰 독가스 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    korean_name: "뿔카노",
    types: ["땅", "바위"],
    id: 111,
    description: "땅과 바위 타입의 포켓몬으로, 큰 뿔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    korean_name: "코뿌리",
    types: ["땅", "바위"],
    id: 112,
    description: "뿔카노의 진화형으로, 더 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    korean_name: "럭키",
    types: ["노말"],
    id: 113,
    description: "노말 타입의 포켓몬으로, 높은 체력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    korean_name: "덩쿠리",
    types: ["풀"],
    id: 114,
    description: "풀 타입의 포켓몬으로, 덩굴 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    korean_name: "캥카",
    types: ["노말"],
    id: 115,
    description: "노말 타입의 포켓몬으로, 아기 캥거루를 보호합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    korean_name: "쏘드라",
    types: ["물"],
    id: 116,
    description: "물 타입의 포켓몬으로, 작은 해마 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    korean_name: "시드라",
    types: ["물"],
    id: 117,
    description: "쏘드라의 진화형으로, 더 크고 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    korean_name: "콘치",
    types: ["물"],
    id: 118,
    description: "물 타입의 포켓몬으로, 작은 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    korean_name: "왕콘치",
    types: ["물"],
    id: 119,
    description: "콘치의 진화형으로, 더 큰 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    korean_name: "별가사리",
    types: ["물"],
    id: 120,
    description: "물 타입의 포켓몬으로, 별 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    korean_name: "아쿠스타",
    types: ["물", "에스퍼"],
    id: 121,
    description: "별가사리의 진화형으로, 강력한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    korean_name: "마임맨",
    types: ["에스퍼", "페어리"],
    id: 122,
    description: "에스퍼와 페어리 타입의 포켓몬으로, 마임 동작에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    korean_name: "스라크",
    types: ["벌레", "비행"],
    id: 123,
    description: "벌레와 비행 타입의 포켓몬으로, 큰 낫 모양의 팔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    korean_name: "루주라",
    types: ["얼음", "에스퍼"],
    id: 124,
    description: "얼음과 에스퍼 타입의 포켓몬으로, 독특한 춤 동작을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    korean_name: "에레브",
    types: ["전기"],
    id: 125,
    description: "전기 타입의 포켓몬으로, 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    korean_name: "마그마",
    types: ["불꽃"],
    id: 126,
    description: "불꽃 타입의 포켓몬으로, 뜨거운 마그마를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    korean_name: "쁘사이저",
    types: ["벌레"],
    id: 127,
    description: "벌레 타입의 포켓몬으로, 강한 턱을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    korean_name: "켄타로스",
    types: ["노말"],
    id: 128,
    description: "노말 타입의 포켓몬으로, 강력한 뿔을 가진 황소 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    korean_name: "잉어킹",
    types: ["물"],
    id: 129,
    description: "물 타입의 포켓몬으로, 약하지만 끈기 있는 잉어 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    korean_name: "갸라도스",
    types: ["물", "비행"],
    id: 130,
    description: "잉어킹의 진화형으로, 매우 강력한 물과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    korean_name: "라프라스",
    types: ["물", "얼음"],
    id: 131,
    description: "물과 얼음 타입의 포켓몬으로, 큰 바다 거북 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    korean_name: "메타몽",
    types: ["노말"],
    id: 132,
    description:
      "노말 타입의 포켓몬으로, 다양한 포켓몬으로 변신할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    korean_name: "이브이",
    types: ["노말"],
    id: 133,
    description: "노말 타입의 포켓몬으로, 다양한 진화형을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    korean_name: "샤미드",
    types: ["물"],
    id: 134,
    description: "이브이의 물 타입 진화형으로, 강력한 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    korean_name: "쥬피썬더",
    types: ["전기"],
    id: 135,
    description: "이브이의 전기 타입 진화형으로, 강력한 전기 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    korean_name: "부스터",
    types: ["불꽃"],
    id: 136,
    description: "이브이의 불꽃 타입 진화형으로, 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    korean_name: "폴리곤",
    types: ["노말"],
    id: 137,
    description: "노말 타입의 포켓몬으로, 디지털 데이터로 이루어진 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    korean_name: "암나이트",
    types: ["바위", "물"],
    id: 138,
    description: "바위와 물 타입의 포켓몬으로, 고대 생물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    korean_name: "암스타",
    types: ["바위", "물"],
    id: 139,
    description: "암나이트의 진화형으로, 더 강력한 바위와 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    korean_name: "투구",
    types: ["바위", "물"],
    id: 140,
    description: "바위와 물 타입의 포켓몬으로, 고대 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    korean_name: "투구푸스",
    types: ["바위", "물"],
    id: 141,
    description: "투구의 진화형으로, 더 큰 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    korean_name: "프테라",
    types: ["바위", "비행"],
    id: 142,
    description: "바위와 비행 타입의 포켓몬으로, 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    korean_name: "잠만보",
    types: ["노말"],
    id: 143,
    description: "노말 타입의 포켓몬으로, 큰 몸집과 느긋한 성격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    korean_name: "프리져",
    types: ["얼음", "비행"],
    id: 144,
    description:
      "얼음과 비행 타입의 전설의 포켓몬으로, 차가운 바람을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    korean_name: "썬더",
    types: ["전기", "비행"],
    id: 145,
    description:
      "전기와 비행 타입의 전설의 포켓몬으로, 강력한 번개를 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    korean_name: "파이어",
    types: ["불꽃", "비행"],
    id: 146,
    description:
      "불꽃과 비행 타입의 전설의 포켓몬으로, 뜨거운 불꽃을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    korean_name: "미뇽",
    types: ["드래곤"],
    id: 147,
    description:
      "드래곤 타입의 포켓몬으로, 작고 귀여운 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    korean_name: "신뇽",
    types: ["드래곤"],
    id: 148,
    description: "미뇽의 진화형으로, 더 크고 강한 드래곤 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    korean_name: "망나뇽",
    types: ["드래곤", "비행"],
    id: 149,
    description:
      "신뇽의 최종 진화형으로, 강력한 드래곤과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    korean_name: "뮤츠",
    types: ["에스퍼"],
    id: 150,
    description: "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    korean_name: "뮤",
    types: ["에스퍼"],
    id: 151,
    description:
      "에스퍼 타입의 전설의 포켓몬으로, 희귀하고 신비로운 능력을 가집니다.",
  },
];
export default MOCK_DATA;
