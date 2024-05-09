const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-05-09', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '终有一日同风起', url: 'https://btcxing.com/' },
    { title: '扶摇直上九万里', url: 'https://btcxing.com/' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'WEB-3.0',
  HEO_HERO_TITLE_2: '践行者-行歌',
  HEO_HERO_TITLE_3: '0924',
  HEO_HERO_TITLE_4: '最新资讯',
  HEO_HERO_TITLE_5: '博主力荐的宝藏内容',
  HEO_HERO_TITLE_LINK: '',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '撸毛教程', url: '/tag/撸毛教程' },
  HEO_HERO_CATEGORY_2: { title: '行情分析', url: '/tag/行情分析' },
  HEO_HERO_CATEGORY_3: { title: '一级土狗', url: '/tag/一级土狗' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    
    '🔍 阿尔法猎手',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/Wick-1998', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/BNB.webp',
      color_1: '#F0B90B',
      title_2: 'Sketch',
      img_2: '/images/heo/USDT.webp',
      color_2: '#50AF95'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/DOGE.webp',
      color_1: '#FFFFFF',
      title_2: 'Photoshop',
      img_2: '/images/heo/UNI.webp',
      color_2: '#FFFFFF'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/LTC.webp',
      color_1: '#345D9D',
      title_2: 'Python',
      img_2: '/images/heo/TIA.webp',
      color_2: '#7B2BF9'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/SOL.webp',
      color_1: '#FFFFF',
      title_2: 'Principle',
      img_2: '/images/heo/ETH.webp',
      color_2: '#FFFFFF'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/BTC.webp',
      color_1: '#F7931A',
      title_2: 'CSS3',
      img_2: '/images/heo/AVAX.webp',
      color_2: '#E84142'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/OP.webp',
      color_1: '#FF0420',
      title_2: 'HTML',
      img_2: '/images/heo/USDC.webp',
      color_2: '#2775CA'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/ARB.webp',
      color_1: '#FFFFF',
      title_2: 'Rhino',
      img_2: '/images/heo/PEPE.webp',
      color_2: '#3D8130'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
