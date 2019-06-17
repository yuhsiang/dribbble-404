# dribbble-404

Study how [dribbble-404](https://dribbble.com/shots/902435-Website-Analytics-Dashboard/attachments/98800) make the beautiful 404 site and remake it

## Study Result

### Website Layout and Composition

畫面沒有複雜的切版，畫面中的呈現是由 `nav` 在最上方，中間為 `main` 下方的 `footer` 是 `search-bar`

利用這段 style 完美做出這樣的排列

```
body{
  display:flex;
  justify-content: space-between;
}
```

#### Horizontal Center Align

每一個物件都是 horizontal center

可以看到 `main` 跟 `footer` 都是在中央，兩個物件都是自由撐起大小

其 style 是以下

```
body{
  display:flex;
  align-item: center;
  text-align: center;
}
```

使用 text-align 不只可以將 text 所有 block container 裡面 inline content 也都可以將其至中

### How 404 constructs?

404 圖案的 `section` container 裡面主要有

* h1
  * 主要是撐起整個 404 container 的元件，所以他有多大整個 container 就會有多大
  * 利用 vw 的特性將大小調整在 font-size 來達到等比例長寬調整
* 圖案 div tag
  * 依照 404 將各個不同的圖片拼貼至 `h1` 上
  * 位置會依據 h1 縮放自動做調整

#### How Collage constructs?

1. 取得 API 拿到一份圖片與連結的對照表
2. 將取得的圖片放入 a.href > img.src 裡
3. a 使用相對位置個別被定義在 style 的 index 裡 i.e. a:nth-child(1)
4. 動畫效果使用 transform: translateZ(500*Math.random()) 做初始位置
   1. 當突變讀取完之後移除 translateZ
   2. 整個 `a` 需要有 transition

### 有趣的發現

#### arkanoid

快打磚塊的啟動，如果看 source code 會有一段奇怪的 code

```
this.utils.listenForKeyCombo("38,38,40,40,37,39,37,39,66,65", this.konami.bind(this))
...
var konami = window.addEventListener("keydown", (function(e) {
  keys.push(e.keyCode)
  if (keys.toString().indexOf(combo) >= 0) {
      keys = []
      callback()
  }
}).bind(this), true)

// keys 被無限 cache...
```

"38,38,40,40,37,39,37,39,66,65" 這串剛好就是
`上  上 下 下 左  右  左 右 b  a` 照著打就會出現 無限專款的 konami 魔王了！

#### 圖片擠壓在右邊會越小

圖片 `width: 100%` a.width 不設定

a 的 `left: 100%` -> `left: 0%` 會發現圖片越來越大


