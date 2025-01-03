/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dRNE1wT2JYYTVGRUlpdDJmNU85TDFRRWZSOWR3OGJiOGNjU3h4dzhGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktvZ1JIT3ZrR1JwQmxEWFNGNkN1dXhOWGM2cWtXeEpXR3V3ZGFIYUszUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQkU0ZVhjcTVGVWdodVR1OXBZL3ppcW5GSzF3ZDBMN3FLazFtelpTdjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1clFWZkZuYkExZGdPVzlNbklpUDV2czM2bkRaQ3Rvek1iOWhpeE00a0I0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNNGN0WnViQkMvYzhIdmRtYkJIUW1Qd1E5dDZzMmhldURETmNBSEdJbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU1UERVSmhmaGE4dVZNQmQ4VUsyazgyQWhMR1BoeUxXb29OK3RIOU12RFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05EWkRtTG81ZjNzaDNPZi9ZMG5wayt0eU5maUhHKzVQSUJsemNhYksxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3R6L09FeGxDZnZhVTc2NzB2dmNBQm10VFpEcTBPT0l1aHo4dk44Q3JCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhCWjBwcnBkSWJTMVhBbjkvYmtCTGhpY1BzZmFQN2gxTk8yTml0cUhmY3FYOHlybEJvOEp5bG5aZnlYcWI3RjNrTnBiWnp3MUdJSjN0WmVYLzF1RGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiUVZKL0NCay9zVDhMZFZ4cjBrQ1dvL2EvcEo2aEpQRnZJQjlveEgvdGEyaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0Q0NWgtZUxRaktOVU5abnJSQ1BKZyIsInBob25lSWQiOiJlNTBlNDg2YS1lNGU3LTRkY2YtODI5NC0zY2IwYTMzYjMyMzYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1VIVHJDL1FiZFdKTnZoM0lKUkJOUXZJdGZrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFrUXpweHpnUjZOellxRkE5Y1QySi9nNlJDUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHRzVLM0ROUSIsIm1lIjp7ImlkIjoiMjYzNzE0MTgzMjYxOjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNIQURPV1dBTEtFUiBWMiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTks4citjRUVOSzQzN3NHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOWwrSmd5N2JtTWdQQkVlRG1teHBCTFo3MGJ6em02d3B1YlJGaStkUkEwOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWFWaVRkYWducGxObUJtRTdiUVV2Z2N5dVZzcTRsbXdMTTY3Q2V2UTNsQ3A5enRSOTFzSUludlpvQ1lYamU5NHU5ckV4dlppeW5MOHBNOUpYZ2tJRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InNlN21KQWRYclhLZk5veTAxSS9iaVhqK09lMDhFbG5EaGlPRTZ4UzhTUDNHbi8yd21UR3RFR0Q3UFhnRXRHaWZlZmk2ZWc3NlFOZkRHTzVZVWdHbWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MTgzMjYxOjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZaZmlZTXUyNWpJRHdSSGc1cHNhUVMyZTlHODg1dXNLYm0wUll2blVRTlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDg0NDd9';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
