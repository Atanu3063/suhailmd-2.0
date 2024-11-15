const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*RAJ-BOT-OFC ī.am RAJ-KUMAR*\n*Contact Me:- 🪀+994407122025*" 


global.devs = "994407122025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "994407122025";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994407122025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/e6TVzEU.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994407122025,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_47_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZrLzkvdG9mQUR6OUc4N3BqQnZGRjV0RHhyUmJiNTJUWlo2TmhOeG1NUms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZpZ3U1VWpaU0VXTUxaeUhIbHUySVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzI4MDAyODMtYTE4MC00NDU1LThjZmMtMzI0YTM0OGM5OWRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMTgzLFxuICAgICAgNTUsXG4gICAgICAyMjMsXG4gICAgICAxNDMsXG4gICAgICAyMjMsXG4gICAgICAxNzUsXG4gICAgICAxMDYsXG4gICAgICAzLFxuICAgICAgMTE5LFxuICAgICAgOTksXG4gICAgICAxMzgsXG4gICAgICAyMDMsXG4gICAgICAzNixcbiAgICAgIDE2OSxcbiAgICAgIDI0NCxcbiAgICAgIDc5LFxuICAgICAgMTM4LFxuICAgICAgMjExLFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE2MSxcbiAgICAgIDE4LFxuICAgICAgMTg4LFxuICAgICAgMTc0LFxuICAgICAgOTAsXG4gICAgICAxNzgsXG4gICAgICA1MCxcbiAgICAgIDMxLFxuICAgICAgMzgsXG4gICAgICAyMzksXG4gICAgICA2LFxuICAgICAgMjU0LFxuICAgICAgNjYsXG4gICAgICAyMDUsXG4gICAgICA4MixcbiAgICAgIDIzNCxcbiAgICAgIDE5LFxuICAgICAgMyxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWUtSMTJTM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODcyMzIzMzAzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVxcblxcblxcblRcXG5cXG5cXG5cXG5BXFxuXFxuTlxcblxcbiBVXFxuXFxuUFRBUkFcIixcbiAgICBcImxpZFwiOiBcIjIxNjU2OTgxNjgwOTY0NzoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZnVqcTBGRUxpRjNia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInh6cmFiaVVYWGNVZk1BKzVaZzJ0bEgwMWY3TmZmdDBKTjBWWVd1L0lCZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNnZqS0QxcmdQZFR5QVlCMkRxaHZyeWU4SHVmUDZRdHhnM1BnTU80UlpkZzdYdGI2NEhLTXZQdEY5TlhhbUQwaTVOeWFRblhlUmt0TUhnZGtJdFhkQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDZtL0IvNUdqZzZ0aVZjSUg2bUVpdjRVL3FITU5uMkw4ZDFVdXd5M1MwN25CN1dnQTd3L3d0MXgxYkhHVkhaMTY0Q1NUb3JmeGxGK2p4UThDTFduaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3ODcyMzIzMzAzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY3NDgxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhlMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGUwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTA4azR5U045Ty9ITnlabjZFUFA4RVczTHJCdnlMVm1TV1dCVE9VZGZjOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM2NzkyNjQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE2NzA5MDM4NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "+994407122025",
  packname: process.env.PACK_NAME || "RAJ-BOT-OFC",
  botname : process.env.BOT_NAME  || "★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★",
  ownername:process.env.OWNER_NAME|| "RAJ-WA-OFC",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
