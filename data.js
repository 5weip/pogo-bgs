window.POGO_DATA = (function() {
  var DITTO = "https://assets.dittobase.com/go/backgrounds/";
  var BG_PREFIXES = { lc: "lc-", sb: "sb-" };
  // 之後 Dittobase 換了圖片格式，或又新增一種背卡前綴的副檔名時，
  // 只要在這裡加一項就好，不用改任何渲染邏輯。
  var BG_EXTS = ["png", "webp"];

  // 依序組出候選網址清單，index.html 執行時會依序嘗試，成功的那個就是最終網址
  function bgCandidates(bgType, bgKey) {
    var prefix = BG_PREFIXES[bgType] || "";
    return BG_EXTS.map(function(ext) {
      return DITTO + prefix + bgKey + "." + ext;
    });
  }

  var FAMILIES = {
    treecko: { label: "🌿 限時調查：木守宮進化鏈", baseName: "木守宮", baseDex: 252, stages: [
      { key: "t0", name: "木守宮", dex: 252, stage: "一階" }, { key: "t1", name: "森林蜥蜴", dex: 253, stage: "二階" }, { key: "t2", name: "蜥蜴王", dex: 254, stage: "三階" }
    ] },
    hoppip: { label: "毽子草進化鏈", baseName: "毽子草", baseDex: 187, stages: [
      { key: "r0", name: "毽子草", dex: 187, stage: "一階" }, { key: "r1", name: "毽子花", dex: 188, stage: "二階" }, { key: "r2", name: "毽子綿", dex: 189, stage: "三階" }
    ] },
    sewaddle: { label: "蟲寶包進化鏈", baseName: "蟲寶包", baseDex: 540, stages: [
      { key: "r0", name: "蟲寶包", dex: 540, stage: "一階" }, { key: "r1", name: "寶包繭", dex: 541, stage: "二階" }, { key: "r2", name: "保母蟲", dex: 542, stage: "三階" }
    ] },
    pineco: { label: "榛果球進化鏈", baseName: "榛果球", baseDex: 204, stages: [
      { key: "r0", name: "榛果球", dex: 204, stage: "一階" }, { key: "r1", name: "佛烈托斯", dex: 205, stage: "二階" }
    ] },
    seedot: { label: "橡實果進化鏈", baseName: "橡實果", baseDex: 273, stages: [
      { key: "r0", name: "橡實果", dex: 273, stage: "一階" }, { key: "r1", name: "長鼻葉", dex: 274, stage: "二階" }, { key: "r2", name: "狡猾天狗", dex: 275, stage: "三階" }
    ] },
    honedge: { label: "☀️獨劍鞘進化鏈", baseName: "獨劍鞘", baseDex: 679, stages: [
      { key: "s0", name: "獨劍鞘", dex: 679, stage: "一階" }, { key: "s1", name: "雙劍鞘", dex: 680, stage: "二階" }, { key: "s2", name: "堅盾劍怪", dex: 681, stage: "三階" }
    ] },
    xerneas: { label: "☀️哲爾尼亞斯", baseName: "哲爾尼亞斯", baseDex: 716, stages: [{ key: "s0", name: "哲爾尼亞斯", dex: 716, stage: "頭目" }] },
    yveltal: { label: "☀️伊裴爾塔爾", baseName: "伊裴爾塔爾", baseDex: 717, stages: [{ key: "s0", name: "伊裴爾塔爾", dex: 717, stage: "頭目" }] },
    Victreebel: { label: "☀️大食花", baseName: "大食花", baseDex: 71, stages: [{ key: "s0", name: "大食花", dex: 71, stage: "頭目" }] },
    malamar: { label: "☀️烏賊王", baseName: "烏賊王", baseDex: 687, stages: [{ key: "s0", name: "烏賊王", dex: 687, stage: "頭目" }] },  
    gyarados: { label: "☀️暴鯉龍", baseName: "暴鯉龍", baseDex: 130, stages: [{ key: "s0", name: "暴鯉龍", dex: 130, stage: "頭目" }] },
    gardevoir: { label: "☀️沙奈朵", baseName: "沙奈朵", baseDex: 282, stages: [{ key: "s0", name: "沙奈朵", dex: 282, stage: "頭目" }] },
    absol: { label: "☀️阿勃梭魯", baseName: "阿勃梭魯", baseDex: 359, stages: [{ key: "s0", name: "阿勃梭魯", dex: 359, stage: "頭目" }] },
    lucario: { label: "☀️路卡利歐", baseName: "路卡利歐", baseDex: 448, stages: [{ key: "s0", name: "路卡利歐", dex: 448, stage: "頭目" }] },
    dragonite: { label: "其他：快龍", baseName: "快龍", baseDex: 149, stages: [{ key: "s0", name: "快龍", dex: 149, stage: "頭目" }] },
    charizard: { label: "🌙超級之夜：噴火龍", baseName: "噴火龍", baseDex: 6, stages: [{ key: "s0", name: "噴火龍", dex: 6, stage: "頭目" }] },
    ampharos: { label: "🌙超級之夜：電龍", baseName: "電龍", baseDex: 181, stages: [{ key: "s0", name: "電龍", dex: 181, stage: "頭目" }] },
    salamence: { label: "🌙超級之夜：暴飛龍", baseName: "暴飛龍", baseDex: 373, stages: [{ key: "s0", name: "暴飛龍", dex: 373, stage: "頭目" }] },
    altaria: { label: "🌙超級之夜：七夕青鳥", baseName: "七夕青鳥", baseDex: 334, stages: [{ key: "s0", name: "七夕青鳥", dex: 334, stage: "頭目" }] },
    garchomp: { label: "🌙超級之夜：烈咬陸鯊", baseName: "烈咬陸鯊", baseDex: 445, stages: [{ key: "s0", name: "烈咬陸鯊", dex: 445, stage: "頭目" }] },
    sceptile: { label: "🌙超級之夜：蜥蜴王", baseName: "蜥蜴王", baseDex: 254, stages: [{ key: "s0", name: "蜥蜴王", dex: 254, stage: "頭目" }] },
    pikachu: { label: "⚡皮卡丘進化鏈", baseName: "皮卡丘", baseDex: 25, stages: [
      { key: "p0", name: "皮卡丘", dex: 25, stage: "一階" }, { key: "p1", name: "雷丘", dex: 26, stage: "二階" }
    ] }
  };

  var GOTOUR_2026_ROSTER = [
    { id: "P01", zone: "DAY", fam: "xerneas", note: "☀️團體戰" }, { id: "P02", zone: "DAY", fam: "yveltal", note: "☀️團體戰" },
    { id: "P03", zone: "DAY", fam: "honedge", note: "☀️團體戰" }, { id: "P04", zone: "DAY", fam: "Victreebel", note: "☀️團體戰" }, 
    { id: "P05", zone: "DAY", fam: "malamar", note: "☀️團體戰" },{ id: "P06", zone: "DAY", fam: "gyarados", note: "☀️團體戰" }, 
    { id: "P07", zone: "DAY", fam: "gardevoir", note: "☀️團體戰" }, { id: "P08", zone: "DAY", fam: "absol", note: "☀️團體戰" }, 
    { id: "P09", zone: "DAY", fam: "lucario", note: "☀️團體戰" },
    { id: "P10", zone: "OTHER", fam: "dragonite", note: "其他" }, { id: "P11", zone: "NIGHT", fam: "charizard", note: "🌙 超級之夜" },
    { id: "P12", zone: "NIGHT", fam: "ampharos", note: "🌙 超級之夜" }, { id: "P13", zone: "NIGHT", fam: "salamence", note: "🌙 超級之夜" },
    { id: "P14", zone: "NIGHT", fam: "altaria", note: "🌙 超級之夜" },{ id: "P15", zone: "NIGHT", fam: "garchomp", note: "🌙 超級之夜" },
    { id: "P16", zone: "NIGHT", fam: "sceptile", note: "🌙 超級之夜" }  ];
  var GOTOUR_2026_FILTERS = [
    { key: "ALL", label: "全部(16)" }, { key: "DAY", label: "☀️團體戰(9)" }, { key: "NIGHT", label: "🌙 超級之夜(6)" }, { key: "OTHER", label: "其他(1)" }, { key: "MISS", label: "未收齊" }
  ];

  // 每個地標只要給「bgKey(圖片檔名關鍵字，不含前綴跟副檔名)」，
  // 實際網址由 index.html 執行時用 bgCandidates() 自動試出來。
  var COLLECTIONS = [
    {
      id: "nt27", type: "multi-location", storageKey: "nt27_v8",
      title: "🌿 英國國民信託 National Trust", subtitle: "27 座英國古蹟莊園 木守宮＆限定團體戰", tag: "國民信托・54 張",
      homeBanner: "assets/banners/national-trust.png",
      bgType: "lc",
      coverBgKey: "nationaltrust-cliveden",
      coverPokes: [252, 187, 540],
      filters: [{ key: "ALL", label: "全部(27)" }, { key: "S", label: "毽子草(6)" }, { key: "M", label: "蟲寶包(8)" }, { key: "N", label: "榛果球(5)" }, { key: "W", label: "橡實果(8)" }],
      zoneToFamily: { S: "hoppip", M: "sewaddle", N: "pineco", W: "seedot" },
      locations: [
        { id: "S01", zone: "S", eng: "Cliveden", county: "Buckinghamshire", zh: "克萊夫登莊園", bgKey: "nationaltrust-cliveden" },
        { id: "S02", zone: "S", eng: "Mottisfont", county: "Hampshire", zh: "莫蒂斯豐特修道院", bgKey: "nationaltrust-mottisfont" },
        { id: "S03", zone: "S", eng: "Nymans", county: "West Sussex", zh: "奈曼斯花園", bgKey: "nationaltrust-nymans" },
        { id: "S04", zone: "S", eng: "Polesden Lacey", county: "Surrey", zh: "波爾斯登萊西莊園", bgKey: "nationaltrust-polesden" },
        { id: "S05", zone: "S", eng: "Scotney Castle", county: "Kent", zh: "斯科特尼城堡", bgKey: "nationaltrust-scotneycastle" },
        { id: "S06", zone: "S", eng: "Stowe Gardens", county: "Buckinghamshire", zh: "斯托花園", bgKey: "nationaltrust-stowegardenpark" },
        { id: "M01", zone: "M", eng: "Anglesey Abbey", county: "Cambridgeshire", zh: "安格爾西修道院", bgKey: "nationaltrust-angleseyabbey" },
        { id: "M02", zone: "M", eng: "Attingham Park", county: "Shropshire", zh: "阿廷厄姆公園", bgKey: "nationaltrust-attinghampark" },
        { id: "M03", zone: "M", eng: "Belton Estate", county: "Lincolnshire", zh: "貝爾頓莊園", bgKey: "nationaltrust-beltonestate" },
        { id: "M04", zone: "M", eng: "Calke Abbey", county: "Derbyshire", zh: "考克修道院", bgKey: "nationaltrust-calkeabbey" },
        { id: "M05", zone: "M", eng: "Clumber Park", county: "Nottinghamshire", zh: "克倫伯公園", bgKey: "nationaltrust-clumberpark" },
        { id: "M06", zone: "M", eng: "Hanbury Hall", county: "Worcestershire", zh: "漢伯里廳", bgKey: "nationaltrust-hanburyhall" },
        { id: "M07", zone: "M", eng: "Hardwick Hall", county: "Derbyshire", zh: "哈德威克廳", bgKey: "nationaltrust-hardwick" },
        { id: "M08", zone: "M", eng: "Wimpole Estate", county: "Cambridgeshire", zh: "溫波爾莊園", bgKey: "nationaltrust-wimpoleestate" },
        { id: "N01", zone: "N", eng: "Dunham Massey", county: "Greater Manchester", zh: "鄧納姆梅西莊園", bgKey: "nationaltrust-dunhammassey" },
        { id: "N02", zone: "N", eng: "Fountains Abbey", county: "North Yorkshire", zh: "噴泉修道院", bgKey: "nationaltrust-fountainsabbey" },
        { id: "N03", zone: "N", eng: "Gibside", county: "Tyne & Wear", zh: "吉布賽德莊園", bgKey: "nationaltrust-gibslide" },
        { id: "N04", zone: "N", eng: "Lyme", county: "Cheshire", zh: "萊姆公園", bgKey: "nationaltrust-lymepark" },
        { id: "N05", zone: "N", eng: "Mount Stewart", county: "County Down", zh: "斯圖爾特山莊園", bgKey: "nationaltrust-mountstewart" },
        { id: "W01", zone: "W", eng: "Chirk Castle", county: "Wrexham", zh: "奇爾克城堡", bgKey: "nationaltrust-chirk" },
        { id: "W02", zone: "W", eng: "Tredegar House", county: "Newport", zh: "特雷迪加宅邸", bgKey: "nationaltrust-tredegarhouse" },
        { id: "W03", zone: "W", eng: "Killerton", county: "Devon", zh: "基勒頓莊園", bgKey: "nationaltrust-killerton" },
        { id: "W04", zone: "W", eng: "Kingston Lacy", county: "Dorset", zh: "金斯頓萊西莊園", bgKey: "nationaltrust-kingstonlacy" },
        { id: "W05", zone: "W", eng: "Lacock", county: "Wiltshire", zh: "萊科克修道院", bgKey: "nationaltrust-lacock" },
        { id: "W06", zone: "W", eng: "Stourhead", county: "Wiltshire", zh: "斯托海德花園", bgKey: "nationaltrust-stourhead" },
        { id: "W07", zone: "W", eng: "Trelissick", county: "Cornwall", zh: "特雷利西克花園", bgKey: "nationaltrust-trelissick" },
        { id: "W08", zone: "W", eng: "Tyntesfield", county: "North Somerset", zh: "廷茨菲爾德莊園", bgKey: "nationaltrust-tyntesfield" }
      ]
    },
    {
      id: "gotour2026_tainan", type: "single-bg", storageKey: "pogo_gotour26_tn_v1",
      title: "🍬 2026 GO Tour：台南 (Tainan)", subtitle: "團體戰(9隻) ＋ 超級之夜(6隻) ＋ 其他(1隻)", tag: "2026 台南・16 張",
      homeBanner: "assets/banners/go-tour-2026-tainan.png",
      bgType: "lc", bgKey: "go-tour-2026-tainan", locStamp: "Tainan",
      coverPokes: [716, 717, 448], filters: GOTOUR_2026_FILTERS, roster: GOTOUR_2026_ROSTER
    },
    {
      id: "gotour2026_la", type: "single-bg", storageKey: "pogo_gotour26_la_v1",
      title: "🌴 2026 GO Tour：洛杉磯 (Los Angeles)", subtitle: "團體戰(9隻) ＋ 超級之夜(6隻) ＋ 其他(1隻)", tag: "2026 洛杉磯・16 張",
      homeBanner: "assets/banners/go-tour-2026-los-angeles.png",
      bgType: "lc", bgKey: "go-tour-2026-los-angeles", locStamp: "Los Angeles",
      coverPokes: [716, 717, 445], filters: GOTOUR_2026_FILTERS, roster: GOTOUR_2026_ROSTER
    },
    {
      id: "pokecenter18", type: "multi-location-single", storageKey: "pokecenter18_v1",
      title: "⚡ Pokémon Center 限定皮卡丘", subtitle: "18 間日本 Pokémon Center 限定皮卡丘進化鏈背卡", tag: "PC限定・18 張",
      homeBanner: "assets/banners/pokemoncenter.webp",
      bgType: "lc",
      coverBgKey: "pokecenter-tokyodx",
      coverPokes: [25],
      fam: "pikachu",
      filters: [{ key: "ALL", label: "全部(18)" }],
      locations: [
        { id: "PC01", eng: "Okinawa", zh: "沖繩", bgKey: "pokecenter-okinawa" },
        { id: "PC02", eng: "Fukuoka", zh: "福岡", bgKey: "pokecenter-fukuoka" },
        { id: "PC03", eng: "Hiroshima", zh: "廣島", bgKey: "pokecenter-hiroshima" },
        { id: "PC04", eng: "Kagawa", zh: "香川", bgKey: "pokecenter-kagawa" },
        { id: "PC05", eng: "Osaka", zh: "大阪", bgKey: "pokecenter-osaka" },
        { id: "PC06", eng: "Osaka DX", zh: "大阪 DX", bgKey: "pokecenter-osakadx" },
        { id: "PC07", eng: "Kyoto", zh: "京都", bgKey: "pokecenter-kyoto" },
        { id: "PC08", eng: "Kanazawa", zh: "金澤", bgKey: "pokecenter-kanazawa" },
        { id: "PC09", eng: "Nagoya", zh: "名古屋", bgKey: "pokecenter-nagoya" },
        { id: "PC10", eng: "Yokohama", zh: "橫濱", bgKey: "pokecenter-yokohama" },
        { id: "PC11", eng: "Shibuya", zh: "澀谷", bgKey: "pokecenter-shibuya" },
        { id: "PC12", eng: "Pokémon GO Lab", zh: "Pokémon GO Lab", bgKey: "pokecenter-golab" },
        { id: "PC13", eng: "Mega Tokyo", zh: "Mega Tokyo", bgKey: "pokecenter-megatokyo" },
        { id: "PC14", eng: "Tokyo DX", zh: "東京 DX", bgKey: "pokecenter-tokyodx" },
        { id: "PC15", eng: "Tokyo Skytree Town", zh: "東京晴空塔城", bgKey: "pokecenter-skytreetown" },
        { id: "PC16", eng: "Tokyo Bay", zh: "東京灣", bgKey: "pokecenter-tokyobay" },
        { id: "PC17", eng: "Tohoku", zh: "東北", bgKey: "pokecenter-tohoku" },
        { id: "PC18", eng: "Sapporo", zh: "札幌", bgKey: "pokecenter-sapporo" }
      ]
    }
  ];

  return {
    BG_PREFIXES: BG_PREFIXES,
    BG_EXTS: BG_EXTS,
    bgCandidates: bgCandidates,
    FAMILIES: FAMILIES,
    COLLECTIONS: COLLECTIONS
  };
})();
