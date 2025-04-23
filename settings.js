/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V2W7jOBD8lQVf7RlTt2QgwOr2Jd+O7Sz2gZaow9Zlkbo8yL8vFCdIgLmywOhJoMTq6u6q7m8gzSKCp7gFw28gL6IKUdy90jbHYAi00vdxAfrAQxSBIVjouKnL2g7ddVla1BzAC9OzPDVPJqPFbs3N2cR9LINauQQP4LkP8vIUR+4vAP2yKprtwX4aZ7MaC+F62VacsmfmbTOJr7Sw3crbcIPW2zkP4LlDRFERpYGZhzjBBYqnuF2iqPgcfcdwtpKUpPOUxxLUas+9bI5ueDxCJltLozhqtjN9rp3qhP8c/XXlpYPQPgyKuuERzcKVp2MrPquPk30r7Gt3NZidTCFbp+ROn0RBir2xh1Ma0fbTdecn29WmiG2obQ6zfaXH41Sz9LS1SKLLzmL1qFqNM7lUKnQ+R3wfyIWk0fpsH5szT5rrdb1VZXXQNvY6lBXdfdqJtrXXrJr/SHxZvGnl8n/qLs73pPCKmjmdB2T+VDimc+WMaHe8LM9XRmsUmq/94EYOcf05+myJ9bPY3HSocrJn6M7eGl8VfUZ1TzwYJxUe2dECWwWjye/0ES2LX7EsR7HW9i4wTpj5E4fwLhF3uyJwHp1NdchQPLOzEiZ7n21tt2dE5eSy5mhiPQYSP1kuA9cVyfrYxMpxaZcspdfe5DbW1YeXjC64HXtgyDz3QYGDiNAC0ShLX85kvg+QV22wW2D6Ul6APEIXFzUkOrVHK3E5Ia59YI85Wa2i28Ejo2i52vCJdduMH0Af5EXmYkKwN4oIzYrWwYSgABMw/OelU13SBU4yiieR15VP5CSGZ2SOFZm/ydc6RJSgPP+aYgr6wC+yxMFgSIsS98HLBUsxoQBVToIcrwmGKkNG5TRNVzROZwSV61JM7kG3UYIJRUkOhozECzwLZVl87v8ZHjIvqqJqyIZsMoJhSbrAadCCMrRExRJ0/jc8pD/GQxFlaCqMzsmsoLGszGuKbIqappkGKynKL3kokP1TPHhG5KGqsSqvi4wKecbkTUWXZNWQZNP4TT06Hv/2QYobevd1p0aO6QM/KgjdpWUeZ8h7M/3bR+S6WZnSTZu6eveCCzD8cIwpjdKAdJmVKSrcMKqw3uUBhj6KCX7uAw9XkYs7PLCzHVMsdo+rIHJYqpmnxFwGdafoMEvvv0DBhchn+S+sLOIvPJS9LydfEb+wzEniOFaADFJAV477SO3u/NThspSUNrd+2uYBKQdCOzjDEx3nPorvY/NuTVxg763KJ+ReynybXXD6C9xcSrcYbXAZm+mx3tNydgwuPW5E9Y+4d8uD4bf3NaZnXofHs5OROJU00HWri/OdGoaM+L0gUtT9DTYj1Vjs/9qrs6m57sK99qID8jBFUUzAEOjzZMw+BbbpIDN3VNtWYaDqgQree/c2I+8zaDFie5ngz7gxA1u0soQ8W0iJcV7Ds6fRpm4cVvakuVKfjw8/AAFDcJlMY00WBreV2OP1yk1204N1NgYDBk1dzjAGI7xPLZ7bVdIcSmNBa9jVdj+zQqUHz6k2vmkKs3J79NSruJMSnIOxG6r1QxftrqGPwSTD4rnZdSoj31vd1uOo0rlJe+jZdLTU9yRepovNVt2Ryezkm/hI51dbypTVNrTMzcaVBo1/mI3CvJZ3lzwbDdxlcl7o9X16v2yP+HVrR69z9a44P8IvS/C1F7/t2bv44XP/A8brWv2JwLRtqFTXxaFV2rnnJBcNI2SUQsBDb8ytTq7rbOfVCN98d8yC587VeYyonxUJGAKSnBDogxgRqr6b90fzke+DpFXzfEMRffM8ULtnGh7B83/3aGTULgoAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Mandishona Innocent';
const packname = process.env.PACKNAME || 'SHADOW WALKER V2';
const dev = process.env.OWNER_NUMBER || '263714183261';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'SHADOW WALKER BOT ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
