# JOY 室內設計網站 — 製作 Checklist（Draft 階段）

> 目標：跟足 Adobe XD template，做一個 **靜態網站 draft**，放上 **GitHub Pages** 俾 client 即時睇 + 互動。
> Approve 後再搬上 WordPress + Elementor 俾 staff 維護。

---

## 階段流程（先睇大圖）

```
[階段1] Code 靜態 draft (跟Adobe XD)  →  放上 GitHub Pages  →  client review
                                                                    │ approve
[階段2] 搬上 WordPress + Elementor (我俾現成CSS)
                                                                    │
[階段3] 教 staff 換相 / 改字 / 加 project (cheat sheet + 短片)
```

---

## ✅ A. 開工前要準備嘅嘢（Pre-creation）

### A1. 素材（你提供）
- [ ] **Logo** — JOY logo，PNG 透明底（深色 + 淺色各一,因為 header/footer 底色唔同）
- [ ] **WhatsApp icon** — PNG/SVG（或用現成 icon）
- [ ] **WhatsApp 電話號碼** — 連國碼，例如 `85291234567`（form 同浮動掣都要用）
- [ ] **每頁嘅相**：⚠️ 要**逐張獨立圖片檔**，唔可以只係 Adobe 整頁截圖
  - [ ] Hero / slider 大圖（建議 3–5 張，做輪播）
  - [ ] Portfolio 每個 project 嘅封面圖 + 內頁多張相
  - [ ] Our Philosophy 區嘅圖
  - [ ] Project detail 嘅相片 grid（6 張）
- [ ] **影片**（如有）— Home 同 Project 都有 "Video" 黑框位，提供 YouTube/Vimeo 連結或 mp4
- [ ] **Adobe XD 截圖 / spec** — 每頁一張全頁截圖（已提供 ✅）+ 如可以,share Adobe 嘅 spec link（有齊顏色/字體/間距數值）

### A2. 文字內容（你提供，中英各一份）
- [ ] 每個 project 嘅名、地點、面積、簡介、Project Vision 文字
- [ ] Our Philosophy 文字
- [ ] 公司簡介 / About / 聯絡資料
- [ ] Slogan / 引文（例：「In a world of increasing noise, the most profound luxury is clarity.」）

### A3. 設計規格（由 Adobe XD 抄低，或我幫你由截圖估）
- [ ] 主色 / 副色 / 背景色 / 文字色 HEX
- [ ] Header 顏色（注意：你 template 各頁 header 底色唔同 — 米啡 / 橄欖綠）
- [ ] 字體（標題 + 內文），中英文各要一隻
- [ ] 圓角 / 陰影 / 間距

---

## ✅ B. 網站功能 Checklist

### B1. 頁面（跟 Adobe XD）
- [ ] **Home** — hero slider（有圓點） + Our Philosophy + Video + Project Portfolio + Latest Projects
- [ ] **Portfolio** — project grid（有邊框卡 + 標題）
- [ ] **Project Detail** — hero 大圖 + 標題/面積/引文 + 相片 grid (6張) + Video + Project Vision 文字
- [ ] **Contact** — 聯絡表格
- [ ] **Footer**（每頁都有）— 置中 JOY logo + About/Portfolio/Contact 連結

### B2. 導覽 / Navigation
- [ ] 頂部 nav：Logo 左、選單右（Home / Portfolio / About us / Contact）
- [ ] 語言切換 **繁 / EN**（見 B5）
- [ ] 手機版漢堡選單（☰）

### B3. 雙語（繁體中文 + English）— 第 7 點
- [ ] 全站文字有中英兩版
- [ ] 撳 繁/EN 即時切換（draft 用 JS toggle，唔 reload）
- [ ] 記住用戶揀嘅語言（localStorage）
- [ ] 之後 WordPress 階段：用 **Polylang** 或 **WPML** 插件做雙語

### B4. Contact form → WhatsApp — 第 6 點
- [ ] 表格欄位：姓名 / 電話 / Email / 訊息
- [ ] 撳 Submit → 自動組成訊息 → 開 WhatsApp（`https://wa.me/<號碼>?text=<訊息>`）
- [ ] ⚠️ **重要限制**：WhatsApp 唔俾「自動發送」，會幫你**填好訊息**，用戶喺 WhatsApp 撳一下「傳送」先真正寄出。呢個係 WhatsApp 規則,任何網站都一樣。
- [ ] （可選）同時用 Formspree 寄一份 email 副本俾你
- [ ] 之後 WordPress 階段：用 **Click to Chat** + **Contact Form 7** / **WPForms** 插件

### B5. 互動 / 按鈕（interactive）— 第 3 點
- [ ] 所有按鈕有 hover 狀態（變色 / 變深）
- [ ] Nav 連結 hover 有底線 / 變色
- [ ] Slider 圓點可撳 + 自動輪播
- [ ] **WhatsApp 浮動掣**（右下角，每頁都有，hover 放大）
- [ ] 「Learn More」按鈕可撳去對應頁

---

## ✅ C. 動畫效果 Checklist — 第 5 點

- [ ] **i) Hover 相縮細**（moonwayroaster 風格）
      → 滑鼠移上 portfolio 相,相微微縮細 `transform: scale(0.95)` + 平滑過渡
- [ ] **ii) Hover 變色**（grandeinterior 風格）
      → 滑鼠移上卡片/按鈕,背景或文字變色
- [ ] **iii) Fade in 進場**（mae-design 風格）
      → 元素載入 / scroll 入畫時由下而上淡入,逐個遞延出現

---

## ✅ D. Responsive Checklist — 第 3 點

| 裝置 | 闊度 | 要測試 |
|------|------|--------|
| Desktop | ≥ 1024px | 完整版面、3 欄 grid、hover 效果 |
| Tablet | 768–1023px | 2 欄 grid、nav 仍可橫排或收起 |
| Mobile (iPhone Safari) | < 768px | 1 欄、漢堡選單、字夠大、掂得到掣 |
| Mobile (Android Chrome) | < 768px | 同上 |

- [ ] 所有相片自適應、唔變形
- [ ] 手機版漢堡選單可開合
- [ ] WhatsApp 浮動掣喺手機唔遮住內容
- [ ] 文字喺手機讀得清(最少 16px)
- [ ] 按鈕喺手機夠大可以㩒（最少 44×44px）
- [ ] 真機測試：iPhone（Safari）+ Android（Chrome）各開一次

---

## ✅ E. 上線 GitHub Pages Checklist — 第 8 點

- [ ] 安裝 Git（或用 GitHub Desktop）
- [ ] 開一個 GitHub account（如未有）
- [ ] 開 repository（例如 `joy-interior-draft`），設為 Public（或 Private + Pages）
- [ ] Push 網站檔案上 repo
- [ ] Settings → Pages → Source 揀 `main` branch → Save
- [ ] 等 1–2 分鐘,得到連結：`https://<username>.github.io/joy-interior-draft/`
- [ ] 把連結俾 client 喺手機/電腦睇
- [ ] 每次改完 push 一次,連結自動更新

---

## ✅ F. Client Review 前最後檢查
- [ ] 4 頁都揭得到、連結啱
- [ ] 中英切換正常
- [ ] 三個動畫睇得到
- [ ] Contact form 撳 Submit 真係開到 WhatsApp 並填好訊息
- [ ] iPhone + Android + 電腦都試過
- [ ] 所有 "Video" / 暫時用 placeholder 嘅位有註明

---

## 製作步驟（Steps，順序）

1. **收齊 A 區素材**（最重要,冇相砌唔到）
2. 我**起檔案結構** + 共用 CSS（配色/字體/設計 token）
3. 砌 **Home** → 你睇似唔似 Adobe → 改
4. 砌 **Portfolio / Project Detail / Contact**
5. 加 **三個動畫** + WhatsApp 浮動掣
6. 加 **雙語切換** + **Contact form → WhatsApp**
7. **Responsive** 調校 + 真機測試
8. **Push 上 GitHub Pages** → 俾 client review
9. 收 client feedback → 改
10. Approve → **階段 2：搬上 WordPress + Elementor**
```
