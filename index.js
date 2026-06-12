require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
//Insure starsss is running correctly command
app.command("/starstest", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Yay! Starss is working, you can run commands now!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
//Why delete? No delete command
app.command("/deletestar", async ({ command, ack, respond}) => {
    const start = Date.now()
    await ack();
    const latency = Date.now() - start;
    await respond({text: 'Why delete? No delete.'})
});
//Give me star
app.command("/givemestar", async ({ command, ack, respond}) => {
    const start = Date.now()
    await ack();
    const latency = Date.now() - start;
    await respond({
        text: "Here's your star heart emoji",
    blocks: [
        {
            type:"image",
            image_url: "https://i.postimg.cc/1zc2XjDW/star.jpg",
            alt_text:"star"
        }
    ]})
});
//Secret Command
app.command("/starcat", async ({ command, ack, respond}) => {
    const start = Date.now()
    await ack();
    const latency = Date.now() - start;
    await respond({
        text:"You find secret? Nice!",
        blocks:[
            {
                type:"image",
                image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uUC_TCOnglPWTd2yn5vNPwHaE6%3Fpid%3DApi&f=1&ipt=1a6ffc458be53834f9acc755dc47b2cfb74d1b7f969d5c3101f9db442aa1f0da&ipo=images",
                alt_text:"secret cat"
            }
        ]
    })
});