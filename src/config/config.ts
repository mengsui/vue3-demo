
interface WeChatJssdkType {
  url: string;
  jsApiList: string[];
}
interface WeChatType {
  oauth: () => string;
  jssdk: WeChatJssdkType;
}
interface CryptoType {
  iv: string;
  key: string;
}
interface CookieType {
  expires: string;
}
interface TokenType {
  name: string;
  url: string;
}
interface MonitorType {
  url: string;
  user_name: string;
}

interface ConfigType {
  appid: string;
  requestConfig: any;
  wechat: WeChatType;
  crypto: CryptoType;
  cookie: CookieType;
  token: TokenType;
  monitor: MonitorType;
}

const Config: ConfigType = {
  appid: '',// 公众号appid
  requestConfig: {
    service: {
      pro: '',// 正式环境
      dev: 'http://localhost:3001'// 测试环境
    },
    middlePlatform: {// 使用中台接口的时候 需要携带 ${platform} 才可以
      pro: 'https://middle-platform.blue-dot.cn',
      dev: 'http://localhost:3002',
      token: '',// 这个token需要超中台要 当前这个是标普的
    },
  },
  wechat: {
    oauth: function () {

      let _url = window.location.href;
      if (_url.includes('?')) {
        _url = `${_url}&token=${Config.requestConfig.middlePlatform.token}`;
      } else {
        _url = `${_url}?token=${Config.requestConfig.middlePlatform.token}`;
      };
      const redirect_uri = encodeURIComponent(_url);// 需要回跳的链接

      return `https://middle-platform.blue-dot.cn/api/platform/wechat/auth/oauth?appid=${Config.appid}&redirect_url=${redirect_uri}&token=${Config.requestConfig.middlePlatform.token}`;
    },
    jssdk: {
      url: '${platform}/api/platform/wechat/jssdk',
      jsApiList: [
        'onMenuShareTimeline',
        'updateTimelineShareData',
        'onMenuShareAppMessage',
        'updateAppMessageShareData',
        'hideMenuItems',
      ],
    },
  },
  crypto: {
    iv: '',
    key: '',
  },
  cookie: {
    expires: '5d',// 5天
  },
  token: {
    name: 'openid',
    url: '/api/wechat/oauth',
  },
  monitor: {// 这些信息全部向后台要
    url: '${platform}/api/platform/analysis/monitor',
    user_name: "标普全球市场财智",
  },
};

export default Config;
