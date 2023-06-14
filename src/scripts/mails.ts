import * as fs from "fs";

const inboxMailsRaw = fs.readFileSync("./src/data/inbox.json");
const inboxMails = JSON.parse(inboxMailsRaw.toString());

const sentMailsRaw = fs.readFileSync("./src/data/sent.json");
const sentMails = JSON.parse(sentMailsRaw.toString());

export { inboxMails, sentMails };
