// const faces = [
//   [
//     ['大笑', '😃'],
//     ['可爱', '😊'],
//     ['憨笑', '☺️'],
//     ['色', '😍'],
//     ['亲亲', '😘'],
//     ['惊恐', '😱'],
//     ['流泪', '😭'],
//     ['亲', '😙'],
//     ['呆', '😳'],
//     ['哀伤', '😔'],
//     ['呲牙', '😁'],
//     ['吐舌', '😝'],
//     ['撇嘴', '😒'],
//     ['怒', '😠'],
//     ['奸笑', '😏'],
//     ['汗', '😓'],
//     ['痛苦', '😖'],
//     ['惶恐', '😰'],
//     ['生病', '😨'],
//     ['口罩', '😷'],
//     ['大哭', '😂'],
//     ['晕', '😵'],
//     ['发怒', '👿'],
//     ['开心', '😄'],
//     ['鬼脸', '😜'],
//     ['皱眉', '😞'],
//     ['流感', '🤧'],
//     ['爱心', '❤️'],
//     ['心碎', '💔'],
//     ['钟情', '💘'],
//     ['星星', '⭐'],
//     ['生气', '💢'],
//   ],
//   [
//     ['便便', '💩'],
//     ['强', '👍'],
//     ['弱', '👎'],
//     ['拜', '🙏'],
//     ['牵手', '🧑‍🤝‍🧑'],
//     ['跳舞', '👯'],
//     ['禁止', '🙅'],
//     ['这边', '💁'],
//     ['爱意', '💏'],
//     ['示爱', '💌'],
//     ['嘴唇', '👄'],
//     ['狗', '🐶'],
//     ['猫', '🐱'],
//     ['猪', '🐷'],
//     ['兔子', '🐰'],
//     ['小鸡', '🐤'],
//     ['公鸡', '🐔'],
//     ['幽灵', '👻'],
//     ['圣诞', '🎅'],
//     ['外星', '👽'],
//     ['钻石', '💎'],
//     ['礼物', '🎁'],
//     ['男孩', '👦'],
//     ['女孩', '👧'],
//     ['蛋糕', '🎂'],
//     ['18', '🔞'],
//     ['圈', '⭕'],
//     ['叉', '❌'],
//   ],
// ];

const kv_face = [
  {
    大笑: '😃',
    可爱: '😊',
    憨笑: '☺️',
    色: '😍',
    亲亲: '😘',
    惊恐: '😱',
    流泪: '😭',
    亲: '😙',
    呆: '😳',
    哀伤: '😔',
    呲牙: '😁',
    吐舌: '😝',
    撇嘴: '😒',
    怒: '😠',
    奸笑: '😏',
    汗: '😓',
    痛苦: '😖',
    惶恐: '😰',
    生病: '😨',
    口罩: '😷',
    大哭: '😂',
    晕: '😵',
    发怒: '👿',
    开心: '😄',
    鬼脸: '😜',
    皱眉: '😞',
    流感: '🤧',
    爱心: '❤️',
    心碎: '💔',
    钟情: '💘',
    星星: '⭐',
    生气: '💢',
  }, {
    便便: '💩',
    强: '👍',
    弱: '👎',
    拜: '🙏',
    牵手: '🧑‍🤝‍🧑',
    跳舞: '👯',
    禁止: '🙅',
    这边: '💁',
    爱意: '💏',
    示爱: '💌',
    嘴唇: '👄',
    狗: '🐶',
    猫: '🐱',
    猪: '🐷',
    兔子: '🐰',
    小鸡: '🐤',
    公鸡: '🐔',
    幽灵: '👻',
    圣诞: '🎅',
    外星: '👽',
    钻石: '💎',
    礼物: '🎁',
    男孩: '👦',
    女孩: '👧',
    蛋糕: '🎂',
    18: '🔞',
    圈: '⭕',
    叉: '❌',
  },
];
// 做成一个kv对象
const hashfaces = kv_face.reduce((prev, curr) => Object.assign(prev, curr), {});
// 导出做map循环
const faces = kv_face.map((obj) => Object.keys(obj).map((key) => [key, obj[key]]));
//
const reg = kv_face.reduce((prev, obj) => prev += Object.keys(obj).reduce((prev, key) => `${prev + key}|`, ''), '').slice(0, -1);

export const transTextEmoji = (text = '') => text.replace(new RegExp(`\\[(${reg})\\]`, 'g'), (reg, $1) => hashfaces[$1]);
export default faces;
