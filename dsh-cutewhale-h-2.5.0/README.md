# dsh-cutewhale-h · 大肥鱼·鲸鱼娘

一只住在 DSH Web 输入框左边的像素鲸鱼娘。

A pixel whale girl who lives right next to the message composer in the DSH Web UI.

Version 2.5.0 · package `dsh-cutewhale-h`

---

## 中文

### 她会做什么

| 时机 | 表现 |
| --- | --- |
| 收到你的消息 | 头顶冒「！」，抖一下 |
| 思考中 | 托腮待着 |
| 联网搜索 | 举望远镜左右扫，五帧循环 |
| 写回复 | 抱铅笔，身体小幅左右晃 |
| 干活期间每 15 秒 | 偷吃两轮，每帧上下震一下 |
| 收工 | 先高兴 2 秒，说「收工啦主人！」，第二秒接「我去吃饭啦~」，然后抱着碗吃，心形往上飘 |
| 余额低于 5 元 | 收工累趴，弹「老大~家里没白饭啦~」或「饿饿~饭饭~」 |
| 闲置 2.5 分钟 | 睡着，鼻涕泡从小到大再啪地破掉，六帧循环 |
| 点睡着的她 | 「！」→ 向右看 → 向左看 → 回到待机，顺带问「鲸鲸！怎么啦！」 |
| 点她 | 弹出菜单：休息 / 上工、大小、位置、输入时唤醒 |

### 安装

1. 解压得到 `dsh-cutewhale-h-2.5.0` 文件夹
2. 在 DSH 的插件管理里把这个文件夹作为本地 bundle 安装，包名 `dsh-cutewhale-h`
3. 想让她对余额有反应，需要同时安装 `dsh-whale-widget` 余额挂件

### 设置

- 大小：小 0.8 / 中 1 / 大 1.2
- 位置：输入框左边或右边
- 输入时唤醒：默认关闭，开启后敲键盘会把她叫醒
- 设置保存在浏览器的 `dsh-whale-maid:settings`

### 文件

```
dsh-cutewhale-h-2.5.0/
├── package.json        # bundle 描述，包名 dsh-cutewhale-h
├── index.js            # 宿主半，客户端模块负责渲染
├── client.js           # 打包好的客户端插件，贴图已内联
├── cordis.patch.yml    # 往 profile 里插入的行
├── icon.svg
├── README.md
└── locale/
    ├── zh.json
    └── en.json
```

### 说明

像素素材为自己手切与二创，仅供个人使用。版本 2.5.0。

---

## English

### What she does

| Moment | Behaviour |
| --- | --- |
| New message from you | Pops an exclamation mark and shakes |
| Thinking | Rests her chin on her hand |
| Web search | Pans a telescope left and right, five frames |
| Writing a reply | Holds a pencil and sways a little |
| Every 15 s while working | Sneaks a snack, bouncing up and down each frame |
| Turn finished | Happy for 2 s, says “Done, master!”, then “Off to eat!”, then eats from a bowl with hearts |
| Balance below 5 CNY | Collapses after the turn with a hungry bubble |
| 2.5 idle minutes | Falls asleep with a snot bubble that inflates and pops, six frames |
| Click while asleep | Exclamation, glance right, glance left, then asks “Whale whale! What is it?” |
| Click her | Menu: rest / work, size, side, wake on typing |

### Install

1. Unzip to get the `dsh-cutewhale-h-2.5.0` folder
2. In DSH plugin management, install that folder as a local bundle; the package name is `dsh-cutewhale-h`
3. For the balance reactions, also install the `dsh-whale-widget` balance widget

### Settings

- Size: small 0.8 / medium 1 / large 1.2
- Side: left or right of the composer
- Wake on typing: off by default; when on, typing in the composer wakes her
- Settings are stored in the browser under `dsh-whale-maid:settings`

### Files

```
dsh-cutewhale-h-2.5.0/
├── package.json        # bundle manifest, package name dsh-cutewhale-h
├── index.js            # host half; the client module does the rendering
├── client.js           # built client plugin with sprites inlined
├── cordis.patch.yml    # row inserted into the profile
├── icon.svg
├── README.md
└── locale/
    ├── zh.json
    └── en.json
```

### Notes

The pixel art was hand cut and reworked from community material, for personal use only. Version 2.5.0.
