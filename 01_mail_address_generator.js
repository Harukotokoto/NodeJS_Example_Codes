// Axiosを読み込む
const axios = require('axios');
// DiscordAPIのURL
const base_url = "https://discord.com/api";
// 送信したいチャンネルのID
const channel = "123456789";
// 送信したいメッセージ
const msg = "Hello World!";
// トークン
const token = "xxxxxxxx.xxx.xxxxxxx";
/*
セルボなら "xxxxxx.xxxx.xxxxxxx"
Botなら "Bot xxxxx.xxxx.xxxxxxx";
*/
async function Post(url, data, header) {
    // 指定したURLにヘッダーを指定してデータをPOST
    const res = await axios.post(url, data, {
        headers: header
    });

    // 結果を返す
    return res;
}

// POST
Post(`${base_url}/channels/${channel}/messages`, {
    "content": msg,
}, {
    "Authorization": token,
    "Content-Type": "application/json",
}).then(res => {
    // 正常にPOSTできたなら正常性をコンソールで出力
    if (res.status === 200) console.log("正常に送信しました");
    // エラーが出たらコンソールにエラーコードを出力
    else console.log(`送信に失敗しました\nコード: ${res.status}`);
});