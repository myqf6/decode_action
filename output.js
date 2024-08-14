//Wed Aug 14 2024 12:03:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const notify = require("./utils/Rebels_sendJDNotify"),
  jdCookie = require("./jdCookie"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H");
console.log("");
console.log("==========" + $.name + "变量说明==========");
console.log("JD_FCWB_InviterId // 指定助力码，不填默认助力账号一");
console.log("JD_FCWB_NUM // 指定人数，不填默认跑全部账号");
console.log("==========" + $.name + "提示结束==========");
console.log("");
const isNotify = process.env.JD_FCWB_Notify === "true",
  fcwbcode = process.env.JD_FCWB_InviterId || "",
  fcwbnum = process.env.JD_FCWB_NUM;
let link = process.env.JD_FCWB_ID || "Bn1VWXtvgTv5ewPoMR-X8A";
const WAIT = "1";
let waitTimes = parseInt(WAIT) * 1000;
$.helpnum = 0;
$.FCWBEnd = false;
let cookie = "";
const cookiesArr = Object.keys(jdCookie).map(iIII1l => jdCookie[iIII1l]).filter(lllil => lllil);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  console.log("❖ 当前设置活动ID为：" + link);
  fcwbnum ? console.log("❖ 已填写指定人数变量，指定人数 [" + fcwbnum + "]") : console.log("❖ 未填写指定人数变量，默认全车助力");
  if (fcwbcode) {
    let IIIl1l = fcwbcode.split("&");
    $.zdinviter = IIIl1l[0];
    $.zdinviteCode = IIIl1l[1];
    console.log("❖ 已填写指定助力变量，开始助力 [" + $.zdinviteCode + "]");
  } else console.log("❖ 未填写指定助力变量，开始助力账号[1]");
  notify.config({
    "title": $.name
  });
  for (let i11ili = 0; i11ili < cookiesArr.length; i11ili++) {
    $.index = i11ili + 1;
    cookie = cookiesArr[i11ili];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.FCWBEnd || $.runEnd) break;
    await $.wait(parseInt(waitTimes * 1 + 1000, 10));
  }
  isNotify && notify.getMessage() && (notify.updateContent(notify.content + "\n"), await notify.push());
})().catch(iil1l1 => $.logErr(iil1l1)).finally(() => $.done());
async function Main() {
  $.canWatering = true;
  $.hotproxy = false;
  try {
    if (fcwbcode) await happyDigHelp($.zdinviteCode, $.zdinviter);else {
      if ($.index == 1) {
        console.log("⏺️ 账号[1]获取助力信息");
        await happyDigHome();
        if ($.runEnd) return;
      } else await happyDigHelp($.myinviteCode, $.markedPin);
    }
  } catch (li1i11) {
    console.log("❌ 脚本运行遇到了错误\n" + li1i11);
  }
}
async function happyDigHome() {
  $.happyDigHome = "";
  $.happyDigHelpList = "";
  await sendRequest("happyDigHome");
  if ($.runEnd) return;
  await $.wait(parseInt(waitTimes * 1 + 1000, 10));
  await sendRequest("happyDigHelpList");
  await $.wait(parseInt(waitTimes * 1 + 1000, 10));
  $.happyDigHome?.["markedPin"] ? ($.myinviteCode = $.happyDigHome?.["inviteCode"], $.markedPin = $.happyDigHome?.["markedPin"], $.personNum = $.happyDigHelpList?.["personNum"] || 0, console.log("⏺️ 已有助力人数：" + $.personNum + "\n⏺️ 助力码：" + $.markedPin + "&" + $.myinviteCode)) : (console.log("⏺️ 未能正确获取到助力码，退出执行！"), $.runEnd = true);
}
async function happyDigHelp(llllI, lllil1) {
  $.inviteCode = llllI;
  $.inviter = lllil1;
  await sendRequest("happyDigHelp");
}
async function handleResponse(ii1iiI, lllilI) {
  try {
    switch (ii1iiI) {
      case "happyDigHelp":
        if (lllilI?.["code"] === 0 && lllilI?.["success"] === true) {
          $.happyDigHelp = lllilI;
          switch ($.happyDigHelp?.["success"]) {
            case false:
              console.log("❎ " + lllilI.errMsg);
              break;
            case true:
              if (fcwbcode) {
                $.helpnum++;
                console.log("✅ 助力成功 [" + $.helpnum + "]");
                if (fcwbnum) {
                  if (fcwbnum <= $.helpnum) {
                    console.log("✅ 当前助力已达到指定助力人数，退出！");
                    $.FCWBEnd = true;
                    return;
                  }
                }
              } else {
                $.personNum++;
                console.log("✅ 助力成功 [" + $.personNum + "]");
                if (fcwbnum) {
                  if (fcwbnum <= $.personNum) {
                    console.log("✅ 当前助力已达到指定助力人数，退出！");
                    $.FCWBEnd = true;
                    return;
                  }
                }
              }
              break;
            default:
              {
                console.log("[未知助力状态]:[" + $.happyDigHelp + "]");
                $.hotproxy = true;
                break;
              }
          }
        } else {
          if (lllilI.data?.["bizMsg"]) console.log("> " + lllilI.errMsg);else {
            if (lllilI.errMsg) {
              console.log("> " + lllilI.errMsg);
            } else {
              if (lllilI.msg) console.log("> " + lllilI.msg);else {
                console.log("❓" + ii1iiI + " " + JSON.stringify(lllilI));
              }
            }
          }
        }
        break;
      case "happyDigHome":
        if (lllilI?.["code"] === 0 && lllilI?.["success"] === true) $.happyDigHome = lllilI.data;else {
          if (lllilI.data?.["bizMsg"]) {
            console.log("> " + lllilI.data?.["bizMsg"] + "}");
          } else {
            if (lllilI.errMsg) $.runEnd = true, console.log("> " + lllilI.errMsg);else lllilI.msg ? console.log("> " + lllilI.msg) : console.log("❓" + ii1iiI + " " + JSON.stringify(lllilI));
          }
        }
        break;
      case "happyDigHelpList":
        if (lllilI?.["code"] === 0 && lllilI?.["success"] === true) $.happyDigHelpList = lllilI.data;else {
          if (lllilI.data?.["bizMsg"]) console.log("> " + lllilI.data?.["bizMsg"]);else {
            if (lllilI.errMsg) $.runEnd = true, console.log("> " + lllilI.errMsg);else lllilI.msg ? console.log("> " + lllilI.msg) : console.log("❓" + ii1iiI + " " + JSON.stringify(lllilI));
          }
        }
        break;
    }
  } catch (llI1Ii) {
    console.log("❌ 未能正确处理 " + ii1iiI + " 请求响应 " + (llI1Ii.message || llI1Ii));
  }
}
async function sendRequest(li1i1l) {
  if ($.runEnd) return;
  let lI1lll = "",
    iIiII = null,
    iil1lI = null,
    iiiliI = "GET",
    li1i1I = {},
    illIii = {};
  switch (li1i1l) {
    case "happyDigHome":
      illIii = {
        "appId": "ce6c2",
        "functionId": "happyDigHome",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "linkId": link
        },
        "version": "4.4",
        "ua": $.UA,
        "t": true
      }, li1i1I = await H5st.getH5st(illIii), lI1lll = "https://api.m.jd.com/api", iil1lI = li1i1I.paramsData;
      break;
    case "happyDigHelpList":
      illIii = {
        "appId": "02f8d",
        "functionId": "happyDigHelpList",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "pageNum": 1,
          "pageSize": 50,
          "linkId": link
        },
        "version": "4.4",
        "ua": $.UA,
        "t": true
      }, li1i1I = await H5st.getH5st(illIii), lI1lll = "https://api.m.jd.com/api", iil1lI = li1i1I.paramsData;
      break;
    case "happyDigHelp":
      illIii = {
        "appId": "8dd95",
        "functionId": "happyDigHelp",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "linkId": link,
          "inviter": $.inviter,
          "inviteCode": $.inviteCode
        },
        "version": "4.4",
        "ua": $.UA,
        "t": true
      }, li1i1I = await H5st.getH5st(illIii), lI1lll = "https://api.m.jd.com/api", iil1lI = li1i1I.paramsData;
      break;
    default:
      console.log("❌ 未知请求 " + li1i1l);
      return;
  }
  const ii1il1 = {
    "uuid": "-1",
    "build": "-1",
    "screen": "390*844",
    "networkType": "-1",
    "d_brand": "-1",
    "d_model": "-1",
    "lang": "zh_CN",
    "osVersion": "-1",
    "partner": "-1",
    "cthr": "1"
  };
  iIiII && (iIiII = {
    ...iIiII,
    ...ii1il1
  });
  iil1lI && (iil1lI = {
    ...iil1lI,
    ...ii1il1
  });
  const lI1llI = {
    "url": lI1lll,
    "method": iiiliI,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookie,
      "Host": "api.m.jd.com",
      "Referer": "https://bnzf.jd.com/index?activityId=" + link + "&channel=wyw&utm_campaign=&utm_source=&utm_term=&utm_medium=&sid=&un_area=4_133_58530_0",
      "Origin": "https://bnzf.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA
    },
    "params": iil1lI,
    "data": iIiII,
    "timeout": 20000
  };
  iiiliI === "GET" && (delete lI1llI.data, delete lI1llI.headers["Content-Type"]);
  !iil1lI && delete lI1llI.params;
  const illIil = 1;
  let Ill1I = 0,
    i11iiI = null,
    lIli11 = false;
  while (Ill1I < illIil) {
    Ill1I > 0 && (await $.wait(1000));
    const I1lIli = await common.request(lI1llI);
    if (!I1lIli.success) {
      i11iiI = "🚫 " + li1i1l + " 请求失败 ➜ " + I1lIli.error;
      Ill1I++;
      continue;
    }
    if (!I1lIli?.["data"]) {
      i11iiI = "🚫 " + li1i1l + " 请求失败 ➜ 无响应数据";
      Ill1I++;
      continue;
    }
    handleResponse(li1i1l, I1lIli.data);
    lIli11 = false;
    break;
  }
  Ill1I >= illIil && (console.log(i11iiI), lIli11 && ($.outFlag = true, $.message && $.message.fix(i11iiI)));
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
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
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}