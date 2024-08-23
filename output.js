//Fri Aug 23 2024 18:22:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let _0x4c22a1 = [],
  _0x530a0a = [],
  _0x3b2833 = "",
  _0x4a83a8,
  _0x19d951 = [],
  _0x2d6067 = "",
  _0x439bb1 = "",
  _0x5ba073 = "",
  _0x5a06b5 = [],
  _0x1efeee = {},
  _0x49c9af = 0,
  _0x424d5f = false;
const _0x1d7bd8 = require("fs"),
  _0x143a4b = require("./USER_AGENTS"),
  _0x3ffcbd = "https://api.m.jd.com/client.action",
  _0x2a609b = process.env.FRUIT_DELAY ? process.env.FRUIT_DELAY * 1 : 5000,
  _0x14d34a = require("./function/dylanv");
$.reqnum = 1;
let _0x429a07 = process.env.FRUIT_HELPNUM ? process.env.FRUIT_HELPNUM : 0;
!(async () => {
  await _0x2e297a();
  if (!_0x530a0a[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n当前版本：2024/7/16");
  $.log("问题建议：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量(可选项)：");
  $.log("export DY_PROXY='api_url' 开启api代理");
  $.log("export FRUIT_HELPNUM='8' 多少个助力停止");
  $.log("export NEWFRUITCODES = 'xxx&xxx' 指定助力码，多个用&分割，不指定则自动搜寻码子");
  $.log("\n无记录助力次数，所以每次运行并不知道每个已经有多少助力");
  await _0x520f22(_0x530a0a.length);
  await _0x1662b6();
})().catch(_0x38ee9a => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x38ee9a + "!", "");
}).finally(() => {
  $.done();
});
async function _0x2d3be4() {
  _0x5ba073 = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x1662b6();
  } catch (_0x15eef4) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️");
    $.logErr(_0x15eef4);
  }
}
async function _0x42b4e8() {
  await _0x80d5ef();
  await _0x231e15();
}
async function _0x231e15() {
  console.log("\n开始天天抽奖助力...");
  for (let _0x574837 of _0x19d951) {
    if (_0x574837 === $.farmInfo.farmUserPro.shareCode) {
      console.log("跳过自己\n");
      continue;
    }
    await _0x39b6c9(_0x574837);
    await $.wait(1000);
    if ($.lotteryMasterHelpRes.helpResult === undefined) break;
    if ($.lotteryMasterHelpRes.helpResult.code === "0") console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "成功\n");else {
      if ($.lotteryMasterHelpRes.helpResult.code === "11") console.log("不要重复助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "\n");else {
        if ($.lotteryMasterHelpRes.helpResult.code === "13") {
          console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "失败,助力次数耗尽\n");
          break;
        }
      }
    }
  }
}
async function _0x1662b6() {
  console.log("\n开始助力好友...");
  let _0x3c1a5c = "",
    _0x264be2 = 0;
  for (let _0x5f0a85 of _0x19d951) {
    console.log("\n去助力: " + _0x5f0a85);
    if (!_0x5f0a85) continue;
    $.sucnum = 0;
    for (let _0x4c955b = _0x264be2; _0x4c955b < _0x530a0a.length; _0x4c955b++) {
      if (_0x530a0a[_0x4c955b]) {
        _0x3b2833 = _0x530a0a[_0x4c955b];
        $.UserName = decodeURIComponent(_0x3b2833.match(/pt_pin=([^; ]+)(?=;?)/) && _0x3b2833.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x4c955b + 1;
        console.log("\n============开始【账号" + $.index + "】" + $.UserName + "=============\n");
        $.UA = _0x143a4b.UARAM();
        let _0x13f046 = await _0x258dc8(_0x5f0a85);
        if (_0x13f046 && _0x13f046.code === 0) {
          if (_0x13f046.data.bizCode === 0) {
            $.sucnum++;
            console.log("【助力结果】: 助力成功 " + $.sucnum);
            if (_0x429a07 != 0 && $.sucnum >= _0x429a07) {
              console.log("已到助力目标数，跳出！");
              _0x264be2 = _0x4c955b + 1;
              break;
            }
            _0x3c1a5c += (_0x13f046.data.result.masterInfo.nickname || "匿名用户") + ",";
          } else {
            if (_0x13f046.data.bizCode === 5004) console.log("【助力结果】: 助力失败，今天助力次数已耗尽");else {
              if (_0x13f046.data.bizCode === 5003) console.log("【助力结果】: 已经助力过TA了");else {
                if (_0x13f046.data.bizCode === 5005) {
                  console.log("【助力结果】: 对方已满助力");
                  _0x264be2 = _0x4c955b;
                  break;
                } else {
                  if (_0x13f046.data.bizCode === 5002) console.log("【助力结果】: 不能给自己助力");else _0x13f046.data.bizCode === -1001 ? console.log("【助力失败】: " + _0x13f046.data.bizMsg) : console.log("助力其他情况：" + JSON.stringify(_0x13f046));
                }
              }
            }
          }
        } else console.log("助力失败::" + JSON.stringify(_0x13f046));
        $.index == _0x530a0a.length && (_0x264be2 = $.index);
        await $.wait(2000);
      }
    }
    if (_0x264be2 == _0x530a0a.length) {
      break;
    }
  }
}
async function _0x80d5ef() {
  await _0x47640d();
  $.friendList ? (console.log("\n今日已邀请好友" + $.friendList.inviteFriendCount + "个 / 每日邀请上限" + $.friendList.inviteFriendMax + "个"), await _0x2c2cee(), $.friendList.inviteFriendCount > 0 ? $.friendList.inviteFriendCount > $.friendList.inviteFriendGotAwardCount && (console.log("开始领取邀请好友的奖励"), await _0x5b0d37(), console.log("领取邀请好友的奖励结果：：" + JSON.stringify($.awardInviteFriendRes))) : console.log("今日未邀请过好友")) : console.log("查询好友列表失败\n");
}
async function _0x2c2cee() {
  for (let _0x5d48a3 of _0x19d951) {
    if (_0x5d48a3 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    if (_0x19d951.findIndex(_0x5c3fa7 => _0x5c3fa7 === _0x5d48a3) >= 5) break;
    await _0x2f8616(_0x5d48a3);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}
async function _0x39b6c9() {
  $.lotteryMasterHelpRes = await initForFarm({
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x2f8616() {
  $.inviteFriendRes = await initForFarm({
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 24,
    "channel": 1
  });
}
async function _0x34c2ae() {
  for (let _0x3d51e5 of Array(3)) {
    $.helpResult = await initForFarm({
      "sid": "",
      "mpin": "",
      "shareCode": arguments[0],
      "babelChannel": "121",
      "version": 24,
      "channel": 1,
      "lat": "0",
      "lng": "0"
    });
    if ($.helpResult.code == "0") break;
    await $.wait(2000);
  }
}
async function _0x258dc8(_0x307c32, _0x1ff8f1 = 1500) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + _0x2a609b / 1000 + "秒......\n"), _0x1ff8f1 = _0x2a609b);
  $.reqnum++;
  if (_0x49c9af > "1") return;
  let _0x23d213 = {
      "version": 1,
      "inviteCode": _0x307c32,
      "shareChannel": "",
      "assistChannel": ""
    },
    _0x62cf97 = {
      "appId": "28981",
      "fn": "farm_assist",
      "body": _0x23d213,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    },
    _0x3ac80f = await _0x14d34a.getbody(_0x62cf97);
  return new Promise(_0x1770ac => {
    const _0x3be77a = {
      "url": "https://api.m.jd.com/client.action?functionId=farm_assist&" + _0x3ac80f,
      "headers": {
        "cookie": _0x3b2833,
        "origin": "https://h5.m.jd.com",
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 30000
    };
    setTimeout(() => {
      $.get(_0x3be77a, async (_0x51a4f5, _0x4985ee, _0x1f46f2) => {
        try {
          _0x51a4f5 ? (console.log("farm_assist: 请求失败 ‼️‼️"), console.log(JSON.stringify(_0x51a4f5))) : _0xfdd217(_0x1f46f2) && (_0x1f46f2 = JSON.parse(_0x1f46f2));
        } catch (_0x3c0e76) {
          $.logErr(_0x3c0e76, _0x4985ee);
        } finally {
          _0x1770ac(_0x1f46f2);
        }
      });
    }, _0x1ff8f1);
  });
}
async function _0x47640d() {
  $.friendList = await _0x2f33b0("friendListInitForFarm", {
    "version": 24,
    "channel": 1
  });
}
async function _0x5b0d37() {
  $.awardInviteFriendRes = await _0x2f33b0("awardInviteFriendForFarm");
}
async function _0x2110ab() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else {
    if ($.getdata("jdFruitNotify")) $.ctrTemp = $.getdata("jdFruitNotify") === "false";else {
      $.ctrTemp = "" + _0x424d5f === "false";
    }
  }
  $.ctrTemp ? ($.msg($.name, _0x5ba073, _0x439bb1, _0x1efeee), $.isNode() && (_0x2d6067 += _0x5ba073 + "\n" + _0x439bb1 + ($.index !== _0x530a0a.length ? "\n\n" : ""))) : $.log("\n" + _0x439bb1 + "\n");
}
function _0x4427ab(_0x51c545) {
  let _0x1d80b1;
  return _0x51c545 ? _0x1d80b1 = new Date(_0x51c545) : _0x1d80b1 = new Date(), _0x1d80b1.getFullYear() + "-" + (_0x1d80b1.getMonth() + 1 >= 10 ? _0x1d80b1.getMonth() + 1 : "0" + (_0x1d80b1.getMonth() + 1)) + "-" + (_0x1d80b1.getDate() >= 10 ? _0x1d80b1.getDate() : "0" + _0x1d80b1.getDate());
}
function _0x520f22(_0x41ec27) {
  return new Promise(async _0x3514b4 => {
    if ($.shareCodesArr.length != 0) {
      if (_0x19d951[_0x41ec27 - 1]) _0x19d951 = $.shareCodesArr[$.index - 1].split("@");else {
        const _0x4b135d = _0x41ec27 > _0x4c22a1.length ? _0x4c22a1.length - 1 : _0x41ec27 - 1;
        _0x19d951 = _0x4c22a1[_0x4b135d].split("@");
      }
    }
    _0x19d951 = _0x19d951.filter(_0x27147d => _0x5a06b5.indexOf(_0x27147d) == -1 && !!_0x27147d);
    console.log("您提供了" + _0x19d951.length + "个农场助力码\n");
    console.log("将要助力的好友" + JSON.stringify(_0x19d951));
    _0x3514b4();
  });
}
function _0x2e297a() {
  return new Promise(_0xcdc7c1 => {
    console.log("开始获取配置文件...\n");
    _0x4a83a8 = $.isNode() ? require("./sendNotify") : "";
    const _0x5cec35 = $.isNode() ? require("./jdCookie.js") : "";
    if (process.env.DY_PROXY) {
      const _0x3d25e4 = require("./function/proxy.js");
      $.get = _0x3d25e4.intoRequest($.get.bind($));
      $.post = _0x3d25e4.intoRequest($.post.bind($));
    }
    $.shareCodesArr = [];
    if ($.isNode()) {
      if (process.env.NEWFRUITCODES) _0x19d951 = process.env.NEWFRUITCODES.split("&");else process.env.NEWFRUITSHARECODES && (process.env.NEWFRUITSHARECODES.indexOf("\n") > -1 ? _0x4c22a1 = process.env.NEWFRUITSHARECODES.split("\n") : _0x4c22a1 = process.env.NEWFRUITSHARECODES.split("&"));
    }
    if ($.isNode()) {
      Object.keys(_0x5cec35).forEach(_0x10211f => {
        if (_0x5cec35[_0x10211f]) {
          _0x530a0a.push(_0x5cec35[_0x10211f]);
        }
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x530a0a = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x44d5d1($.getdata("CookiesJD") || "[]").map(_0x24a49f => _0x24a49f.cookie)].filter(_0x33a7bf => !!_0x33a7bf);
    if ($.isNode()) Object.keys(_0x4c22a1).forEach(_0x5510c1 => {
      _0x4c22a1[_0x5510c1] && $.shareCodesArr.push(_0x4c22a1[_0x5510c1]);
    });else {
      if ($.getdata("jd_fruit_inviter")) $.shareCodesArr = $.getdata("jd_fruit_inviter").split("\n").filter(_0x47e388 => !!_0x47e388);
      console.log("\nBoxJs设置的" + $.name + "好友邀请码:" + ($.getdata("jd_fruit_inviter") ? $.getdata("jd_fruit_inviter") : "暂无") + "\n");
    }
    let _0x2e19fb = _0x1d7bd8.existsSync("./fruit_helpcode_new");
    if (process.env.NEWFRUITSHARECODES) $.log("使用日志搜集的助力码\n");else {
      if (process.env.NEWFRUITCODES) $.log("使用变量指定的助力码\n");else {
        if (_0x4c22a1.length == 0 && _0x2e19fb) {
          $.log("使用本地缓存的助力码\n");
          _0x19d951 = _0x1d7bd8.readFileSync("./fruit_helpcode_new", "utf-8");
          try {
            _0x19d951 = JSON.parse(_0x19d951);
          } catch {
            console.log("本地缓存的助力码格式有误，请检查！");
            console.log(_0x19d951 + _0x19d951.length);
            _0x19d951 = [];
          }
        } else $.log("没有检测到任何助力码！！！\n");
      }
    }
    _0xcdc7c1();
  });
}
function _0x49dcb3() {
  return new Promise(_0x380896 => {
    const _0xb7a53f = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x3b2833,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xb7a53f, (_0x3eec61, _0x2691ad, _0x574bcc) => {
      try {
        if (_0x574bcc) {
          _0x574bcc = JSON.parse(_0x574bcc);
          if (_0x574bcc.islogin === "1") {} else _0x574bcc.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x562993) {
        console.log(_0x562993);
      } finally {
        _0x380896();
      }
    });
  });
}
function _0x2f33b0(_0xc5de75, _0xd68291 = {}, _0x502f62 = 1500) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + _0x2a609b / 1000 + "秒......\n"), _0x502f62 = _0x2a609b);
  return $.reqnum++, new Promise(_0x14a5bd => {
    setTimeout(() => {
      $.get(_0x4f7d7e(_0xc5de75, _0xd68291), (_0x5a5c73, _0x44be4e, _0x347513) => {
        try {
          if (_0x5a5c73) console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x5a5c73)), console.log("function_id:" + _0xc5de75), $.logErr(_0x5a5c73);else {
            if (_0xfdd217(_0x347513)) {
              _0x347513 = JSON.parse(_0x347513);
            }
          }
        } catch (_0x3a0272) {
          $.logErr(_0x3a0272, _0x44be4e);
        } finally {
          _0x14a5bd(_0x347513);
        }
      });
    }, _0x502f62);
  });
}
function _0xfdd217(_0x1cd351) {
  try {
    if (typeof JSON.parse(_0x1cd351) == "object") return true;
  } catch (_0x2c9f9b) {
    return console.log(_0x2c9f9b), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x4f7d7e(_0x551494, _0x54420b = {}) {
  return {
    "url": _0x3ffcbd + "?functionId=" + _0x551494 + "&body=" + encodeURIComponent(JSON.stringify(_0x54420b)) + "&appid=wh5",
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x3b2833
    },
    "timeout": 10000
  };
}
function _0x44d5d1(_0x276d21) {
  if (typeof _0x276d21 == "string") {
    try {
      return JSON.parse(_0x276d21);
    } catch (_0x14e9ec) {
      return console.log(_0x14e9ec), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}
function Env(o, t) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20,
          [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@"));
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) return {};
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, r, e) {
      return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") try {
          const t = JSON.parse(s);
          e = t ? this.lodash_get(t, r, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          }), Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = r => {
          const {
            $open: t,
            $copy: e,
            $media: i,
            $mediaMime: a
          } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: r
                  };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return {
                    "open-url": r
                  };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (s && Object.assign(o, {
                    action: "open-url",
                    url: s
                  }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                    action: "clipboard",
                    text: s
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [r] = i.split(";"),
                        [, a] = i.split(",");
                      e = a;
                      s = r.replace("data:", "");
                    } else e = i, s = (t => {
                      var e,
                        s = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                      for (e in s) if (0 === t.indexOf(e)) return s[e];
                      return null;
                    })(i);
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  return Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  }), o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    return (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    }), console.log(JSON.stringify(e)), e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    return (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    }), console.log(JSON.stringify(a)), a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(t, e, s, a(r));
          break;
        case "Quantumult X":
          $notify(t, e, s, a(r));
          break;
        case "Node.js":
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}