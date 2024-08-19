//Mon Aug 19 2024 15:12:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x112aae = 100;
let _0xa93d6f = [],
  _0x2dd0fd = "",
  _0x3512e9,
  _0x31316b,
  _0x37d9c0 = "",
  _0x1ed441 = "",
  _0x534fda = "",
  _0x34b7b3 = {},
  _0xc55de0 = false,
  _0x4e19cc = 0;
const _0x4f69b0 = "https://api.m.jd.com/client.action",
  _0x730674 = "openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D";
let _0x13949b = "";
const _0x524391 = process.env.WTNUM_NEW ? process.env.WTNUM_NEW : 0,
  _0x4d8adf = process.env.FRUIT_NOTIFY == "true" ? true : false,
  _0x6cd1e7 = 1000,
  _0x5e2756 = require("./USER_AGENTS"),
  _0x26b9a8 = require("fs"),
  _0x5f5ca7 = require("./function/dylib"),
  _0x398866 = require("./function/dylanv"),
  _0x5b3bd6 = require("./function/jdCommon1"),
  {
    H5st: _0x50ba8c
  } = require("./function/jdCrypto");
if (process.env.DY_PROXY) {
  const _0xf53480 = require("./function/proxy.js");
  $.get = _0xf53480.intoRequest($.get.bind($));
  $.post = _0xf53480.intoRequest($.post.bind($));
}
let _0x452323 = [];
const _0x337fd8 = {
    "farm_home": "c57f6",
    "farm_do_task": "28981",
    "farm_task_receive_award": "33e0f",
    "farm_water": "28981",
    "farm_assist_receive_award": "c4332",
    "farm_rain_round_icon": "c57f6",
    "farm_rain_reward": "c57f6"
  },
  _0x56ea35 = {
    "dongDongFarmSignHome": "deba1",
    "dongDongFarmSignIn": "65f9d",
    "wheelsHome": "c06b7",
    "wheelsLottery": "bd6c8",
    "apsDoTask": "54ed7"
  };
!(async () => {
  await _0x3fce2b();
  if (!_0xa93d6f[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n版本：20240816 ");
  $.log("问题建议：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量（可选项）：");
  $.log("export DY_PROXY='url' 代理API");
  $.log("export WTNUM_NEW='100' 指定浇水次数");
  $.log("export FRUIT_NOTIFY=true 开启详情通知，默认只通知成熟和异常");
  $.log("Tips: 没种植会随机选择最高等级种子自动种植\n");
  $.reqnum = 1;
  process.env.NO_WATER == "true" && 0 ? (_0x37d9c0 = "【一水不缴模式已开启！】\n\n", $.log("【一水不缴模式已开启！】\n")) : process.env.DO_TEN_WATER_AGAIN == "true" && 0 && (_0x37d9c0 = "【攒水滴模式已开启，每天只浇水10次！】\n\n", $.log("【攒水滴模式已开启，每天只浇水10次！】\n"));
  for (let _0x35768a = 0; _0x35768a < _0xa93d6f.length; _0x35768a++) {
    if (_0xa93d6f[_0x35768a]) {
      _0x2dd0fd = _0xa93d6f[_0x35768a];
      $.UserName = decodeURIComponent(_0x2dd0fd.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2dd0fd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x35768a + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      ct = 0;
      $.kuwei = false;
      await _0x53f110();
      console.log("\n------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        if ($.isNode()) {
          await _0x3512e9.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      _0x1ed441 = "";
      _0x534fda = "";
      _0x34b7b3 = {};
      $.UA = _0x5e2756.UARAM ? _0x5e2756.UARAM() : _0x5e2756.USER_AGENT;
      $.UUID = _0x5b3bd6.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      await _0x524f53();
      await $.wait(2000);
    }
  }
  _0x26b9a8.writeFileSync("./fruit_helpcode_new", JSON.stringify(_0x452323), _0x199d8d => {
    _0x199d8d && console.log(_0x199d8d);
  });
  $.isNode() && _0x37d9c0 && _0x4d8adf && (await _0x3512e9.sendNotify("" + $.name, "" + _0x37d9c0));
})().catch(_0x1222e7 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1222e7 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x524f53() {
  _0x534fda = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x1a08c2();
    await $.wait(500);
    if ($.farmInfo?.["data"]?.["result"]?.["skuName"]) {
      _0x1ed441 = "【水果名称】" + $.farmInfo.data.result.skuName + "\n";
      console.log("【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.farmInfo.data.result.farmHomeShare.inviteCode);
      console.log("【已成功兑换水果】" + $.farmInfo.data.result.completeTimes + "次");
      _0x1ed441 += "【已兑换水果】" + $.farmInfo.data.result.completeTimes + "次\n";
      _0x452323.push($.farmInfo.data.result.farmHomeShare.inviteCode);
      await _0xba5423();
      if ($.farmInfo.data.result.treeFullStage === 5 || $.kuwei) {
        if ($.farmInfo.data.result.treeFullStage === 5) _0x34b7b3["open-url"] = _0x730674, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x34b7b3), await _0x3512e9.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换");else $.kuwei && console.log("\n" + $.farmInfo.data.result.skuName + "   枯萎了，重新种植吧！");
        await _0x67a0aa();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          let _0x1d2448 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"];
          _0x13949b = _0x1d2448[Math.floor(Math.random() * _0x1d2448.length)].uid;
          console.log("\n已选择3级商品为自动种植目标");
        } else {
          if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            let _0x567033 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"];
            _0x13949b = _0x567033[Math.floor(Math.random() * _0x567033.length)].uid;
            console.log("\n已选择2级商品为自动种植目标");
          } else {
            if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
              let _0x225614 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"];
              _0x13949b = _0x225614[Math.floor(Math.random() * _0x225614.length)].uid;
              console.log("\n已选择1级商品为自动种植目标");
            }
          }
        }
        if (_0x13949b) {
          console.log("\n\n已随机选择种植目标，开始种植。。。");
          await _0xc280f(_0x13949b);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行做任务领水滴浇水吧！");
            return;
          }
        }
        return;
      } else $.farmInfo.data.result.treeCurrentState === 0 && (console.log("\n" + $.farmInfo.data.result.skuName + "   种植中..."), console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%"));
      await _0x94db5f();
      if ($.rain_round.data.result.curRoundToken) {
        console.log("\n开始水滴红包雨...");
        await $.wait(1000);
        await _0x55ffb3($.rain_round.data.result.curRoundToken);
        await _0x1b5074($.rain_round.data.result.curRoundToken);
        $.rain_reward.data.bizCode == 0 && console.log("获得水滴" + $.rain_reward.data.result.waterRainPrize[0].value + "g💧");
      }
      await _0x2d17af();
      await _0x196904();
      process.env.DO_TEN_WATER_AGAIN != "true" || 1 ? ($.log("执行继续浇水..."), await _0x48aedd()) : $.log("不执行再次浇水，攒水滴!");
      await $.wait(500);
      await _0x1a08c2();
      console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%");
      _0x1ed441 += "【种植进度】" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%\n";
      _0x1ed441 += "【剩余水滴】" + _0x4e19cc + "g💧\n";
    } else {
      if ($.farmInfo?.["data"]?.["result"]?.["treeFullStage"] === 0) {
        console.log("没有种植水果，请在下面选择种植的商品，设置变量（商品的UID)再次运行即可种植");
        await _0x67a0aa();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          let _0x4e3e54 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"];
          _0x13949b = _0x4e3e54[Math.floor(Math.random() * _0x4e3e54.length)].uid;
          console.log("\n已选择3级商品为自动种植目标");
        } else {
          if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            let _0x36edf1 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"];
            _0x13949b = _0x36edf1[Math.floor(Math.random() * _0x36edf1.length)].uid;
            console.log("\n已选择2级商品为自动种植目标");
          } else {
            if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
              let _0x5499b8 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"];
              _0x13949b = _0x5499b8[Math.floor(Math.random() * _0x5499b8.length)].uid;
              console.log("\n已选择1级商品为自动种植目标");
            }
          }
        }
        if (_0x13949b) {
          console.log("\n\n已设置种植目标，开始种植。。。");
          await _0xc280f(_0x13949b);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行去做任务领水滴浇水吧！");
            return;
          }
        }
        $.msg($.name, "", "【京东账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP选购并种植新的水果");
        $.isNode() && (await _0x3512e9.sendNotify($.name + " - 您忘了种植新的水果", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP种植新的水果"));
        return;
      } else console.log("初始化农场数据异常, 请登录京东app查看农场功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo) + "\n"), _0x1ed441 = "【数据异常】请手动登录app查看此账号农场是否正常\n\n";
    }
  } catch (_0x2d15c3) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0x2d15c3);
  }
  await _0x317028();
}
async function _0x196904() {
  await _0x364247();
  console.log("\n开始日常任务...");
  for (let _0x1c7660 of $.farmTask.data.result.taskList) {
    if (_0x1c7660.taskStatus == 3) {
      console.log(_0x1c7660.mainTitle + "已完成");
      continue;
    }
    console.log("去做 " + _0x1c7660.mainTitle);
    if (_0x1c7660.taskStatus == 2) {
      await _0x2a48ec(_0x1c7660.taskType, _0x1c7660.taskId);
      if ($.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0) {
        console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
      }
      continue;
    }
    await $.wait(1000);
    switch (_0x1c7660.taskType) {
      case "CUMULATIVE_TIMES":
        break;
      case "ORDER_MARK":
        break;
      case "EXTERNAL_BROWSE":
      case "BROWSE_CHANNEL":
      case "BROWSE_PRODUCT":
      case "EXTERNAL_BROWSE_BI_LIVE":
      case "FOLLOW_CHANNEL":
        if (!_0x1c7660.taskSourceUrl) {
          await _0x36770a(_0x1c7660.taskType, _0x1c7660.taskId);
          let _0xadc256 = $.taskDetail.data.result.taskDetaiList;
          _0x1c7660.taskSourceUrl = _0xadc256[Math.floor(Math.random() * _0xadc256.length)].itemId;
        }
        await _0x19b064(_0x1c7660.taskType, _0x1c7660.taskId, Buffer.from(_0x1c7660.taskSourceUrl).toString("base64")), await $.wait(_0x1c7660.timePeriod * 1000), await _0x2a48ec(_0x1c7660.taskType, _0x1c7660.taskId);
        $.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0 && console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
        break;
      default:
        console.log(_0x1c7660.taskType + " 类型未支持");
        break;
    }
  }
  await _0x2fc910();
  await $.wait(500);
}
async function _0x310eb3() {
  console.log("开始预测水果成熟时间...\n");
  await initForFarm();
  if (!$.farmInfo.farmUserPro) await initForFarm();
  await _0x364247();
  let _0x68b257 = $.farmTask.firstWaterInit.totalWaterTimes;
  _0x1ed441 += "【今日共浇水】" + _0x68b257 + "次\n";
  _0x1ed441 += "【剩余水滴】" + $.farmInfo.farmUserPro.totalEnergy + "g💧\n";
  _0x1ed441 += "【水果进度】" + ($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy * 100).toFixed(2) + "%，已浇水" + $.farmInfo.farmUserPro.treeEnergy / 10 + "次,还需" + ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10 + "次\n";
  if ($.farmInfo.toFlowTimes > $.farmInfo.farmUserPro.treeEnergy / 10) _0x1ed441 += "【开花进度】再浇水" + ($.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次开花\n";else {
    if ($.farmInfo.toFruitTimes > $.farmInfo.farmUserPro.treeEnergy / 10) {
      _0x1ed441 += "【结果进度】再浇水" + ($.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次结果\n";
    }
  }
  let _0x237c3a = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10;
  if (_0x68b257 > 2) {
    let _0x58b918 = Math.ceil(_0x237c3a / _0x68b257) || 0;
    _0x1ed441 += "【预测】" + (_0x58b918 === 1 ? "明天" : _0x58b918 === 2 ? "后天" : _0x58b918 + "天之后") + "(" + _0xd9e70(24 * 60 * 60 * 1000 * _0x58b918 + Date.now()) + "日)可兑换水果🍉\n";
  } else _0x1ed441 += "【预测】不浇水无限期\n";
}
async function _0x2d17af() {
  await _0x364247();
  if (JSON.stringify($.farmTask.data.result.taskList).includes("\"每日累计浇水10次\",\"singleTask\":true,\"subTitle\":\"完成任务，奖励20g水滴\",\"taskDoTimes\":10") === false) {
    console.log("\n准备浇水十次");
    _0xc55de0 = false;
    for (let _0x1b1bc9 = 0; _0x1b1bc9 < 10 - $.farmTask.data.result.taskList[0].taskDoTimes; _0x1b1bc9++) {
      console.log("第" + (_0x1b1bc9 + 1) + "次浇水");
      await _0x3ccc47(1);
      if ($.waterResult.data?.["bizCode"] === 0) {
        console.log("浇水成功，剩余水滴" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips);
        if ($.waterResult.data.result.finished) {
          _0xc55de0 = true;
          break;
        } else {
          if ($.waterResult.data.result.bottleWater < 10) {
            console.log("水滴不够，结束浇水\n");
            break;
          }
        }
      } else {
        if ($.waterResult.data?.["bizCode"] === 4) {
          console.log("水滴不够，结束浇水\n");
          break;
        } else {
          console.log("浇水出现失败异常,跳出不在继续浇水\n");
          console.log("" + JSON.stringify($.waterResult));
          break;
        }
      }
      _0x4e19cc = $.waterResult.data?.["result"]?.["bottleWater"];
    }
    if (_0xc55de0) {
      $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP查看");
      if ($.isNode()) {
        await _0x3512e9.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换");
      }
    }
  } else console.log("\n今日已完成10次浇水任务\n");
}
async function _0x48aedd() {
  console.log("检查剩余水滴能否继续浇水...\n");
  await _0x1a08c2();
  _0x4e19cc = $.farmInfo.data.result.bottleWater;
  console.log("剩余水滴" + _0x4e19cc + "g\n");
  let _0x284101 = _0x4e19cc - _0x112aae;
  if (_0x284101 >= 10) {
    $.log("\n开始浇水...");
    console.log("目前剩余水滴：" + _0x4e19cc + "g，可继续浇水");
    _0xc55de0 = false;
    let _0xd74b80 = _0x524391 > 0 ? Math.min.apply(null, [Number(_0x524391), parseInt(_0x284101 / 10)]) : parseInt(_0x284101 / 10);
    console.log("\n开始执行" + _0xd74b80 + "次浇水，可变量指定次数...");
    for (let _0x707ad = 0; _0x707ad < _0xd74b80; _0x707ad++) {
      $.log("浇水第" + (_0x707ad + 1) + "次");
      await _0x3ccc47(1);
      if ($.waterResult.code === 0) {
        console.log("浇水10g成功,剩余" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips + "\n");
        if ($.waterResult.data.result.finished) {
          _0xc55de0 = true;
          $.log("水果已成熟啦！\n");
          break;
        } else {}
      } else {
        console.log("浇水出现失败异常,跳出不在继续浇水");
        break;
      }
    }
    _0x4e19cc = $.waterResult.data.result.bottleWater;
  } else console.log("目前剩余水滴：【" + _0x4e19cc + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务");
  _0xc55de0 && ($.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP或微信小程序查看"), $.isNode() && (await _0x3512e9.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换")));
}
function _0x7cab13() {
  return new Promise(async _0xfee6f8 => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) console.log("果树发芽了,奖励30g💧"), await _0x435eed("1"), console.log("浇水阶段奖励1领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树发芽了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "💧\n");else {
      if ($.waterResult.waterStatus === 1) {
        console.log("果树开花了,奖励40g💧");
        await _0x435eed("2");
        console.log("浇水阶段奖励2领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
        $.gotStageAwardForFarmRes.code === "0" && console.log("【果树开花了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");
      } else {
        if ($.waterResult.waterStatus === 2) {
          console.log("果树长出小果子啦, 奖励50g💧");
          await _0x435eed("3");
          console.log("浇水阶段奖励3领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
          $.gotStageAwardForFarmRes.code === "0" && console.log("【果树结果了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");
        }
      }
    }
    _0xfee6f8();
  });
}
async function _0x367fa3() {
  await _0x4319c1();
  if ($.initForTurntableFarmRes && $.initForTurntableFarmRes.code === 0) {
    console.log("\n开始天天抽奖任务...");
    await _0x4fc31b();
    if ($.wheeltaskRes.code == 0) {
      for (let _0x5e9189 of $.wheeltaskRes.data) {
        if (_0x5e9189.taskFinished) {
          console.log(_0x5e9189.taskTitle + "----" + _0x5e9189.taskShowTitle + " 已完成");
          continue;
        }
        await _0x546484(_0x5e9189.taskType, _0x5e9189.id, _0x5e9189.taskSourceUrl);
        if ($.wheeldoRes && $.wheeldoRes.code == 0) console.log("任务完成，获得1次抽奖机会");else {
          console.log("错误了，403");
          break;
        }
        await $.wait(3000);
      }
    }
    await _0x4319c1();
    if ($.initForTurntableFarmRes.data.lotteryChances > 0) {
      console.log("\n天天抽奖次数 " + $.initForTurntableFarmRes.data.lotteryChances);
      console.log("开始抽奖...");
      let _0x1d656e = "";
      for (let _0x321a39 = 0; _0x321a39 < $.initForTurntableFarmRes.data.lotteryChances; _0x321a39++) {
        await _0xda16a2();
        console.log("第" + (_0x321a39 + 1) + "次抽奖");
        if ($.lotteryRes && $.lotteryRes.code === 0) {
          _0x1d656e += $.lotteryRes.data.prizeName + "，";
          if ($.lotteryRes.data.lotteryChances === 0) {
            break;
          }
        } else {
          console.log("错误了！");
          break;
        }
        await $.wait(3000);
      }
      _0x1d656e && console.log("天天抽奖奖励：" + _0x1d656e.substr(0, _0x1d656e.length - 1) + "\n");
    } else console.log("天天抽奖无次数！");
  } else console.log("初始化天天抽奖得好礼失败！");
}
async function _0x2fc910() {
  await _0x1d7fb3();
  if ($.farmAssistResult.code === 0) {
    try {
      if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length >= 2) {
        if ($.farmAssistResult.data.result.status === 2) {
          let _0x52a562 = 0;
          for (let _0x123f1b of Object.keys($.farmAssistResult.data.result.assistStageList)) {
            let _0x593ff2 = $.farmAssistResult.data.result.assistStageList[_0x123f1b];
            _0x593ff2.stageStaus === 2 && (await _0x390de6(), $.receiveStageEnergy.code === 0 && (console.log("成功领取第" + (Number(_0x123f1b) + 1) + "段助力奖励：" + $.receiveStageEnergy.data.result.amount + "g💧"), _0x52a562 += $.receiveStageEnergy.data.result.amount), await $.wait(1500));
          }
          _0x1ed441 += "【额外奖励】" + _0x52a562 + "g💧领取完成\n";
          console.log("【额外奖励】" + _0x52a562 + "g💧领取完成\n");
        } else $.farmAssistResult.data.result.status === 3 && (console.log("已经领取过好友助力额外奖励"), _0x1ed441 += "【额外奖励】已领取过\n");
      } else console.log("助力好友未达到2个"), _0x1ed441 += "【额外奖励】领取失败,原因：给您助力的人未达2个\n";
      if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length > 0) {
        let _0x4b27f5 = "";
        $.farmAssistResult.data.result.assistFriendList.map((_0x461ca8, _0x32c30d) => {
          _0x32c30d === $.farmAssistResult.data.result.assistFriendList.length - 1 ? _0x4b27f5 += _0x461ca8.nickname || "匿名用户" : _0x4b27f5 += (_0x461ca8.nickname || "匿名用户") + ",";
          let _0x2c1e26 = new Date(_0x461ca8.time),
            _0x2594db = _0x2c1e26.getFullYear() + "/" + ("0" + (_0x2c1e26.getMonth() + 1)).slice(-2) + "/" + ("0" + _0x2c1e26.getDate()).slice(-2) + " " + ("0" + _0x2c1e26.getHours()).slice(-2) + ":" + ("0" + _0x2c1e26.getMinutes()).slice(-2) + ":" + ("0" + _0x2c1e26.getSeconds()).slice(-2);
          console.log("【" + (_0x461ca8.nickname || "匿名用户") + "】 在 " + _0x2594db + " 给您助过力");
        });
        _0x1ed441 += "【助力您的好友】" + _0x4b27f5 + "\n";
      }
      console.log("\n领取额外奖励水滴结束\n");
    } catch {
      console.log("获取数据失败 " + JSON.stringify($.farmAssistResult));
    }
  } else {
    await _0x3de52c();
    if ($.masterHelpResult.code === "0") {
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5) {
        if (!$.masterHelpResult.masterGotFinal) {
          await _0x58364d();
          $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), _0x1ed441 += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n");
        } else console.log("已经领取过5好友助力额外奖励"), _0x1ed441 += "【额外奖励】已被领取过\n";
      } else console.log("助力好友未达到5个"), _0x1ed441 += "【额外奖励】领取失败,原因：给您助力的人未达5个\n";
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x2d2b1b = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x3d8a0e, _0x35dd19) => {
          _0x35dd19 === $.masterHelpResult.masterHelpPeoples.length - 1 ? _0x2d2b1b += _0x3d8a0e.nickName || "匿名用户" : _0x2d2b1b += (_0x3d8a0e.nickName || "匿名用户") + ",";
          let _0x16db49 = new Date(_0x3d8a0e.time),
            _0x27a629 = _0x16db49.getFullYear() + "-" + (_0x16db49.getMonth() + 1) + "-" + _0x16db49.getDate() + " " + _0x16db49.getHours() + ":" + _0x16db49.getMinutes() + ":" + _0x16db49.getMinutes();
          console.log("【" + (_0x3d8a0e.nickName || "匿名用户") + "】 在 " + _0x27a629 + " 给您助过力");
        });
        _0x1ed441 += "【助力您的好友】" + _0x2d2b1b + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function _0x8b244f() {
  let _0x2a016f = !$.farmTask.waterRainInit.f;
  if (_0x2a016f) {
    console.log("水滴雨任务，每天两次，最多可得10g水滴");
    console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否"));
    $.farmTask.waterRainInit.lastTime && Date.now() < $.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000 && (_0x2a016f = false, console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n"));
    if (_0x2a016f) {
      console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次");
      await _0x1a8ee1();
      console.log("水滴雨waterRain");
      if ($.waterRain.code === "0") {
        console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧");
        console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n");
      }
    }
  } else console.log("【水滴雨】已全部完成\n");
}
async function _0xba5423() {
  await _0x4ac144();
  if ($.clockInInit.code === 0) {
    if ($.clockInInit.data.signInFlag == 0) {
      console.log("\n开始今日签到");
      await _0x3a35fb();
      if ($.clockInForFarmRes.code === 0) console.log("获得" + $.clockInForFarmRes.data.prizeDesc + "💧\n");else $.clockInForFarmRes.code === 210000 ? (console.log("签到失败：" + JSON.stringify($.clockInForFarmRes)), $.kuwei = true) : console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
    }
  }
}
async function _0x3dc566() {
  await _0x8d14d1();
  console.log("\n开始给好友浇水...");
  await _0x364247();
  const {
    waterFriendCountKey: _0x15cf77,
    waterFriendMax: _0xe69bd3
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x15cf77 + "个好友浇水");
  if (_0x15cf77 < _0xe69bd3) {
    let _0x55c3a2 = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0x496c4f, _0x3f391a) => {
        _0x496c4f.friendState === 1 && _0x55c3a2.length < _0xe69bd3 - _0x15cf77 && _0x55c3a2.push(_0x496c4f.shareCode);
      });
      _0x55c3a2.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x55c3a2));
      _0x55c3a2.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x11b0d5 = 0,
        _0x160bc1 = "";
      for (let _0x3c9eeb = 0; _0x3c9eeb < _0x55c3a2.length; _0x3c9eeb++) {
        await _0x3c7bd9(_0x55c3a2[_0x3c9eeb]);
        console.log("为第" + (_0x3c9eeb + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x11b0d5++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x160bc1 += "水滴换豆卡,";else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x160bc1 += "快速浇水卡,";else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x160bc1 += "水滴翻倍卡,";else $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x160bc1 += "加签卡,");
              }
            }
          }
        } else $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
      }
      _0x11b0d5 > 0 && console.log("已给" + _0x11b0d5 + "个好友浇水,消耗" + _0x11b0d5 * 10 + "g水\n");
      _0x160bc1 && _0x160bc1.length > 0 && console.log("【好友浇水奖励】" + _0x160bc1.substr(0, _0x160bc1.length - 1) + "\n");
    } else console.log("好友列表无好友,快去邀请您的好友吧!\n");
  } else console.log("今日已为" + _0xe69bd3 + "个好友浇水\n");
}
async function _0xeacc86() {
  await _0x364247();
  const {
    waterFriendCountKey: _0x146ee0,
    waterFriendMax: _0x4ff3ec,
    waterFriendSendWater: _0x4440c1,
    waterFriendGotAward: _0x3af964
  } = $.farmTask.waterFriendTaskInit;
  _0x146ee0 >= _0x4ff3ec ? !_0x3af964 ? (await _0x41d89c(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n") : console.log("给" + _0x4ff3ec + "个好友浇水未完成\n");
}
async function _0x5d61c7() {
  for (let _0x492e28 of _0x31316b) {
    if (_0x492e28 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await _0x350bdf(_0x492e28);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else {
      if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17") {
        console.log("接收邀请成为好友结果失败,对方已是您的好友");
      }
    }
  }
}
async function _0x1966a7() {
  for (let _0x366f9c = 0; _0x366f9c < 10; _0x366f9c++) {
    $.duckRes = await _0x36201e("getFullCollectionReward", {
      "type": 2,
      "version": 24,
      "channel": 1,
      "babelChannel": "121"
    });
    if ($.duckRes.code === "0") {
      if (!$.duckRes.hasLimit) console.log("小鸭子游戏:" + $.duckRes.title);else {
        console.log("" + $.duckRes.title);
        break;
      }
    } else {
      if ($.duckRes.code === "10") {
        console.log("小鸭子游戏达到上限");
        break;
      }
    }
  }
}
async function _0x1b2a6d() {
  $.totalWaterReward = await _0x36201e("totalWaterTaskForFarm");
}
async function _0x1fc00f() {
  $.firstWaterReward = await _0x36201e("firstWaterTaskForFarm");
}
async function _0x32c582() {
  $.newtaskinfo = await _0x36201e("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0xc7c5cc() {
  $.newtaskinfo = await _0x36201e("gotLowFreqWaterForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x1a08c2() {
  $.farmInfo = await _0x36201e("farm_home", {
    "version": 4
  });
}
async function _0x94db5f() {
  $.rain_round = await _0x36201e("farm_rain_round_icon", {
    "version": 4
  });
}
async function _0x55ffb3(_0x270ef4) {
  $.rain_page = await _0x36201e("farm_rain_page", {
    "version": 4,
    "token": _0x270ef4
  });
}
async function _0x1b5074(_0x34335c) {
  $.rain_reward = await _0x36201e("farm_rain_reward", {
    "version": 4,
    "token": _0x34335c,
    "bcc": 200,
    "scc": 0
  });
}
async function _0x41d89c() {
  $.waterFriendGotAwardRes = await _0x36201e("waterFriendGotAwardForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x2985c2() {
  $.myCardInfoRes = await _0x36201e("myCardInfoForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x198915(_0x3b251d) {
  $.userMyCardRes = await _0x36201e("userMyCardForFarm", {
    "cardType": _0x3b251d
  });
}
async function _0x435eed(_0x29af21) {
  $.gotStageAwardForFarmRes = await _0x36201e("gotStageAwardForFarm", {
    "type": _0x29af21
  });
}
async function _0x3ccc47(_0x1b6d6e) {
  await $.wait(1500);
  $.waterResult = await _0x36201e("farm_water", {
    "version": 4,
    "waterType": _0x1b6d6e
  });
}
async function _0x4319c1() {
  $.initForTurntableFarmRes = await _0x467f7d("wheelsHome", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x4fc31b() {
  $.wheeltaskRes = await _0x467f7d("apTaskList", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x546484(_0x31d0aa, _0x3d3e24, _0x36f6e1) {
  $.wheeldoRes = await _0x467f7d("apsDoTask", {
    "taskType": _0x31d0aa,
    "taskId": _0x3d3e24,
    "channel": 4,
    "checkVersion": true,
    "linkId": "VssYBUKJOen7HZXpC8dRFA",
    "itemId": _0x36f6e1
  });
}
async function _0xda16a2() {
  $.lotteryRes = await _0x467f7d("wheelsLottery", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x67a0aa() {
  $.treeboardRes = await _0x36201e("farm_tree_board", {
    "version": 4
  });
}
async function _0xc280f(_0xe70dbd) {
  $.planttreeRes = await _0x36201e("farm_plant_tree", {
    "version": 4,
    "uid": _0xe70dbd
  });
}
async function _0x280421(_0x4d0faa) {
  const _0x40a022 = {
    "type": 2,
    "adId": _0x4d0faa,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarm2Res = await _0x36201e("browserForTurntableFarm", _0x40a022);
}
async function _0x56d9bd() {
  $.lotteryMasterHelpRes = await _0x36201e("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x58364d() {
  $.masterGotFinished = await _0x36201e("masterGotFinishedTaskForFarm");
}
async function _0x3de52c() {
  $.masterHelpResult = await _0x36201e("masterHelpTaskInitForFarm");
}
async function _0x1d7fb3() {
  $.farmAssistResult = await _0x36201e("farm_assist_init_info", {
    "version": 4
  });
}
async function _0x390de6() {
  $.receiveStageEnergy = await _0x36201e("farm_assist_receive_award", {
    "version": 4
  });
}
async function _0x350bdf() {
  $.inviteFriendRes = await _0x36201e("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 4,
    "channel": 2
  });
}
async function _0x5de2ee() {
  $.helpResult = await _0x36201e("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0],
    "babelChannel": "3",
    "version": 2,
    "channel": 1
  });
}
async function _0x1a8ee1() {
  const _0x4e8a93 = {
    "type": 1,
    "hongBaoTimes": 100,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterRain = await _0x36201e("waterRainForFarm", _0x4e8a93);
}
async function _0x4ac144() {
  $.clockInInit = await _0x467f7d("dongDongFarmSignHome", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x3a35fb() {
  $.clockInForFarmRes = await _0x467f7d("dongDongFarmSignIn", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x73ddc7(_0x144b52, _0x518e8f, _0x3842ca) {
  const _0x316026 = "clockInFollowForFarm";
  let _0x5b9813 = {
    "id": _0x144b52,
    "type": _0x518e8f,
    "step": _0x3842ca
  };
  if (_0x518e8f === "theme") {
    if (_0x3842ca === "1") $.themeStep1 = await _0x36201e(_0x316026, _0x5b9813);else {
      if (_0x3842ca === "2") {
        $.themeStep2 = await _0x36201e(_0x316026, _0x5b9813);
      }
    }
  } else {
    if (_0x518e8f === "venderCoupon") {
      if (_0x3842ca === "1") $.venderCouponStep1 = await _0x36201e(_0x316026, _0x5b9813);else _0x3842ca === "2" && ($.venderCouponStep2 = await _0x36201e(_0x316026, _0x5b9813));
    }
  }
}
async function _0x1f37ef() {
  $.gotClockInGiftRes = await _0x36201e("clockInForFarm", {
    "type": 2,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x281d3d() {
  $.threeMeal = await _0x36201e("gotThreeMealForFarm");
}
async function _0x19b064(_0x3f8dbf, _0x26a67a, _0x371140) {
  $.browseResult = await _0x36201e("farm_do_task", {
    "version": 4,
    "taskType": _0x3f8dbf,
    "taskId": _0x26a67a,
    "taskInsert": true,
    "itemId": _0x371140,
    "channel": 0
  });
}
async function _0x2a48ec(_0x115d64, _0xa068ef) {
  $.dotaskResult = await _0x36201e("farm_task_receive_award", {
    "version": 4,
    "taskType": _0x115d64,
    "taskId": _0xa068ef,
    "channel": 0
  });
}
async function _0x36770a(_0x2fef0f, _0x5b4268) {
  $.taskDetail = await _0x36201e("farm_task_detail", {
    "version": 4,
    "taskType": _0x2fef0f,
    "taskId": _0x5b4268,
    "channel": 0
  });
}
async function _0x23136d() {
  $.goalResult = await _0x36201e("gotWaterGoalTaskForFarm", {
    "type": 3
  });
}
async function _0x364247() {
  $.farmTask = await _0x36201e("farm_task_list", {
    "version": 4,
    "channel": 0,
    "babelChannel": "ttt7",
    "lbsSwitch": true
  });
}
async function _0x5298a1() {
  $.farmTask = await _0x36201e("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "45",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x8d14d1() {
  $.friendList = await _0x36201e("friendListInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x3d252() {
  $.awardInviteFriendRes = await _0x36201e("awardInviteFriendForFarm");
}
async function _0x3c7bd9(_0x10e531) {
  const _0xe46d08 = {
    "shareCode": _0x10e531,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterFriendForFarmRes = await _0x36201e("waterFriendForFarm", _0xe46d08);
}
async function _0x317028() {
  if (_0x4d8adf) $.msg($.name, _0x534fda, _0x1ed441, _0x34b7b3), $.isNode() && (_0x37d9c0 += _0x534fda + "\n" + _0x1ed441 + ($.index !== _0xa93d6f.length ? "\n\n" : ""));else {
    $.log("\n" + _0x1ed441 + "\n");
  }
}
function _0xd9e70(_0x5a4209) {
  let _0x22e94e;
  return _0x5a4209 ? _0x22e94e = new Date(_0x5a4209) : _0x22e94e = new Date(), _0x22e94e.getFullYear() + "-" + (_0x22e94e.getMonth() + 1 >= 10 ? _0x22e94e.getMonth() + 1 : "0" + (_0x22e94e.getMonth() + 1)) + "-" + (_0x22e94e.getDate() >= 10 ? _0x22e94e.getDate() : "0" + _0x22e94e.getDate());
}
function _0x3fce2b() {
  return new Promise(_0x4c8e80 => {
    console.log("开始获取配置文件\n");
    _0x3512e9 = $.isNode() ? require("./sendNotify") : "";
    const _0x485083 = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x485083).forEach(_0x44c5ef => {
        _0x485083[_0x44c5ef] && _0xa93d6f.push(_0x485083[_0x44c5ef]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0xa93d6f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x253923($.getdata("CookiesJD") || "[]").map(_0x20e5e3 => _0x20e5e3.cookie)].filter(_0x3ef0fe => !!_0x3ef0fe);
    _0x4c8e80();
  });
}
async function _0x542b63() {
  await _0x36201e("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x13ba91();
  await $.wait(2000);
  let _0x41128a = await _0x36201e("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x41128a;
}
async function _0x265b58() {
  await _0x36201e("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x5298a1();
  await $.wait(2000);
  let _0x8987c = await _0x36201e("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "45",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x8987c;
}
function _0x13ba91() {
  return new Promise(_0x3a9a1a => {
    const _0xac1146 = {
      "url": "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      "headers": {
        "Cookie": _0x2dd0fd,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xac1146, (_0x1c6d6f, _0x399f73, _0x29a634) => {
      _0x3a9a1a();
    });
  });
}
function _0x53f110() {
  return new Promise(_0x168bef => {
    const _0x4014a0 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x2dd0fd,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x4014a0, (_0x15f5a3, _0x14a087, _0x482aa9) => {
      try {
        if (_0x482aa9) {
          _0x482aa9 = JSON.parse(_0x482aa9);
          if (_0x482aa9.islogin === "1") {} else _0x482aa9.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x3a7d0c) {
        console.log(_0x3a7d0c);
      } finally {
        _0x168bef();
      }
    });
  });
}
async function _0x36201e(_0x4b57aa, _0x2e3239 = {}, _0x455a1d = 800) {
  if ($.reqnum % 5 == 0) _0x455a1d = _0x6cd1e7;
  $.reqnum++;
  if (_0x337fd8[_0x4b57aa]) {
    let _0x303773 = {
      "appId": _0x337fd8[_0x4b57aa],
      "fn": _0x4b57aa,
      "body": _0x2e3239,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x2e3239 = await _0x398866.getbody(_0x303773);
  } else _0x2e3239 = "functionId=" + _0x4b57aa + "&body=" + encodeURIComponent(JSON.stringify(_0x2e3239)) + "&appid=signed_wh5";
  return new Promise(_0x3662c5 => {
    setTimeout(() => {
      $.get(_0x55558a(_0x2e3239), (_0x2c892f, _0x56d406, _0x593ea5) => {
        try {
          _0x2c892f ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x2c892f)), console.log("function_id:" + _0x4b57aa), $.logErr(_0x2c892f)) : _0x4e1e6b(_0x593ea5) && (_0x593ea5 = JSON.parse(_0x593ea5));
        } catch (_0x11b811) {
          $.logErr(_0x11b811, _0x56d406);
        } finally {
          _0x3662c5(_0x593ea5);
        }
      });
    }, _0x455a1d);
  });
}
async function _0x4c158d(_0x417900, _0x34b21d = {}) {
  return new Promise(async _0x4c18a6 => {
    let _0x18bdee = "POST",
      _0x458993;
    const _0x4c878b = {
      "wqDefault": "false",
      "rfs": "0000",
      "cthr": "1",
      "loginType": "",
      "loginWQBiz": "wegame",
      "openudid": $.UUID,
      "uuid": $.UUID,
      "build": "169107",
      "screen": "430*932",
      "networkType": "wifi",
      "d_brand": "iPhone",
      "d_model": "iPhone16,2",
      "lang": "zh_CN",
      "osVersion": _0x5b3bd6.getLatestIOSVersion(),
      "partner": ""
    };
    if (_0x56ea35[_0x417900]) {
      _0x1d7f09 = {
        "appId": _0x56ea35[_0x417900],
        "functionId": _0x417900,
        "appid": "activities_platform",
        "clientVersion": _0x5b3bd6.getLatestAppVersion(),
        "client": "ios",
        "body": _0x34b21d,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      };
      let _0xc2e86f = await _0x50ba8c.getH5st(_0x1d7f09);
      _0x34b21d = _0xc2e86f.paramsData;
    } else _0x18bdee = "GET", _0x34b21d = {
      "functionId": _0x417900,
      "body": JSON.stringify(_0x34b21d),
      "t": Date.now(),
      "appid": "activities_platform",
      "client": "ios",
      "clientVersion": _0x5b3bd6.getLatestAppVersion()
    }, _0x458993 = Object.assign(_0x34b21d, _0x4c878b);
    const _0x2d55c6 = {
      "url": "https://api.m.jd.com/api",
      "method": _0x18bdee,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": _0x2dd0fd,
        "Host": "api.m.jd.com",
        "Referer": "https://h5.m.jd.com/",
        "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
        "Origin": "https://h5.m.jd.com",
        "x-rp-client": "h5_1.0.0",
        "User-Agent": $.UA
      },
      "params": _0x458993,
      "data": _0x34b21d,
      "timeout": 30000,
      "httpsTlsOptions": ["wheelsHome", "wheelsLottery"].includes(_0x417900) ? _0x5b3bd6.useAppTls() : null
    };
    ["wheelsHome", "apsDoTask", "wheelsLottery", "apTaskList"].includes(_0x417900) && (_0x2d55c6.headers.Referer = "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA", _0x2d55c6.headers.Origin = "https://lotterydraw-new.jd.com", _0x2d55c6.headers["X-Referer-Page"] = "https://lotterydraw-new.jd.com/");
    const _0x576e9a = await _0x5b3bd6.request(_0x2d55c6);
    _0x4c18a6(_0x576e9a.data);
  });
}
function _0x5f1cdb(_0x180a4e, _0x9761b9, _0x4be862) {
  if (_0x180a4e == null) return "";
  var _0x5d7618 = [],
    _0x12d04a = typeof _0x180a4e;
  if (_0x12d04a == "string" || _0x12d04a == "number" || _0x12d04a == "boolean") _0x5d7618.push(_0x9761b9 + "=" + (_0x4be862 == null || _0x4be862 ? encodeURIComponent(_0x180a4e) : _0x180a4e));else {
    for (var _0x2a2031 in _0x180a4e) {
      var _0x3e0c95 = _0x9761b9 == null ? _0x2a2031 : _0x9761b9 + (_0x180a4e instanceof Array ? "[" + _0x2a2031 + "]" : "." + _0x2a2031);
      _0x5d7618.push(_0x5f1cdb(_0x180a4e[_0x2a2031], _0x3e0c95, _0x4be862));
    }
  }
  return _0x5d7618.join("&");
}
async function _0x467f7d(_0x4d0182, _0x1a57e5 = {}, _0x317845 = 1500) {
  $.reqnum++;
  if (_0x56ea35[_0x4d0182]) {
    let _0x582e27 = {
        "appId": _0x56ea35[_0x4d0182],
        "functionId": _0x4d0182,
        "appid": "activities_platform",
        "clientVersion": $.UA.split(";")[2],
        "client": "ios",
        "body": _0x1a57e5,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      },
      _0x53164b = await _0x50ba8c.getH5st(_0x582e27);
    _0x1a57e5 = _0x5f1cdb(_0x53164b.paramsData);
  } else _0x1a57e5 = "functionId=" + _0x4d0182 + "&body=" + encodeURIComponent(JSON.stringify(_0x1a57e5)) + "&appid=activities_platform";
  return new Promise(_0x518c7b => {
    setTimeout(() => {
      $.post(_0x569128(_0x1a57e5), (_0x2aedd0, _0x22e03f, _0x147956) => {
        try {
          _0x2aedd0 ? (console.log("\n东东农场: API请求失败 ‼️‼️"), console.log(JSON.stringify(_0x2aedd0)), console.log("function_id:" + _0x4d0182), $.logErr(_0x2aedd0)) : _0x4e1e6b(_0x147956) && (_0x147956 = JSON.parse(_0x147956));
        } catch (_0x23b8ca) {
          $.logErr(_0x23b8ca, _0x22e03f);
        } finally {
          _0x518c7b(_0x147956);
        }
      });
    }, _0x317845);
  });
}
function _0x4e1e6b(_0x1d7858) {
  try {
    if (typeof JSON.parse(_0x1d7858) == "object") return true;
  } catch (_0x1c35cb) {
    return console.log(_0x1c35cb), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x55558a(_0x48a790 = {}) {
  return {
    "url": _0x4f69b0 + "?" + _0x48a790,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://h5.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://h5.m.jd.com/",
      "Cookie": _0x2dd0fd
    },
    "timeout": 30000
  };
}
function _0x569128(_0x52ea3e = {}) {
  return {
    "url": "https://api.m.jd.com/api",
    "body": _0x52ea3e + "&cthr=1&loginType=&loginWQBiz=wegame&openudid=" + $.UUID + "&uuid=" + $.UUID + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone&lang=zh_CN&osVersion=&partner=-1",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x2dd0fd,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "request-from": "native"
    },
    "ciphers": _0x5f5ca7.cpstr,
    "timeout": 30000
  };
}
function _0xc497d2(_0x598c2a, _0x1b35da = {}) {
  return {
    "url": _0x4f69b0 + "?" + _0x1b35da,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x2dd0fd
    },
    "timeout": 10000
  };
}
function _0x253923(_0x1cce48) {
  if (typeof _0x1cce48 == "string") try {
    return JSON.parse(_0x1cce48);
  } catch (_0x50247d) {
    return console.log(_0x50247d), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
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