# dsh-cutewhale-h · 大肥鱼·鲸鱼娘

一只住在 DSH Web 输入框左边的像素鲸鱼娘。

A pixel whale girl who lives right next to the message composer in the DSH Web UI.

Version 2.5.2 · package `dsh-cutewhale-h`

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
| 点她 | 弹出菜单：休息 / 上工、大小、位置、输入时唤醒、给个 star |

### 安装

1. 解压得到 `dsh-cutewhale-h-2.5.2` 文件夹
2. 在 DSH 的插件管理里把这个文件夹作为本地 bundle 安装，包名 `dsh-cutewhale-h`
3. 余额由插件自带的宿主路由读取，不再依赖 `dsh-whale-widget`；如果 DSH 是账号登录模式、取不到 API key，可以再装挂件兜底

### 设置

- 大小：小 0.6 / 中 0.8 / 大 1.0
- 位置：输入框左边或右边
- 输入时唤醒：默认关闭，开启后敲键盘会把她叫醒
- 设置保存在浏览器的 `dsh-whale-maid:settings`

### 文件

```
dsh-cutewhale-h-2.5.2/
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

像素素材为自己手切与二创，仅供个人使用。版本 2.5.2。

---

## 版权与许可 / Copyright & License

本插件是非商业的个人二创，像素形象来自社区流传的「女仆鲸鱼娘」，授权链如下：

- 原创角色「溟月」：**上善无形**
- 「女仆鲸鱼娘」形象二创：**ZipZipPipe**
- 本插件所用像素图：**Oo肥鱼O**

素材部分按社区约定遵循 **CC BY-NC-SA 4.0**：署名、非商业使用、以相同方式共享。代码部分以 **MIT** 许可发布，见 [LICENSE](LICENSE)。完整的素材声明见 [NOTICE.md](NOTICE.md)。

如果任何一位原作者认为这里的收录不妥，请联系我，我会立即修改或删除相关内容。

The pixel art in this plugin is a non-commercial derivative of the community 「maid whale girl」design:

- Original character 「溟月」: **上善无形**
- Maid whale girl design: **ZipZipPipe**
- Pixel art used here: **Oo肥鱼O**

The artwork is shared under **CC BY-NC-SA 4.0** — attribution, non-commercial, share-alike. The code is released under the **MIT** license, see [LICENSE](LICENSE). Full credits are in [NOTICE.md](NOTICE.md).

If any original author objects to this inclusion, contact me and I will change or remove it right away.

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
| Click her | Menu: rest / work, size, side, wake on typing, give a star |

### Install

1. Unzip to get the `dsh-cutewhale-h-2.5.2` folder
2. In DSH plugin management, install that folder as a local bundle; the package name is `dsh-cutewhale-h`
3. The balance comes from the bundle's own host route, so `dsh-whale-widget` is no longer required; account-login setups that have no API key can still add the widget as a fallback

### Settings

- Size: small 0.6 / medium 0.8 / large 1.0
- Side: left or right of the composer
- Wake on typing: off by default; when on, typing in the composer wakes her
- Settings are stored in the browser under `dsh-whale-maid:settings`

### Files

```
dsh-cutewhale-h-2.5.2/
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

The pixel art was hand cut and reworked from community material, for personal use only. Version 2.5.2.
