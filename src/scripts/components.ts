import image from "../images/polygon-1.svg";
import { inboxMails, sentMails } from "./mails";

function createInboxSent(contentType) {
  const container = document.createElement("div");
  container.innerHTML = `<h1 class="content__title"></h1>
    <div class="content__container">
      <ul class="email-list">
        <li class="email-link" id="email-1">
          <span> Un email </span>
          <img src=${image} alt="" />
        </li>

        <li class="email-link" id="email-2">
          <span> Un email </span>
          <img src=${image} alt="" />
        </li>

        <li class="email-link" id="email-3">
          <span> Un email </span>
          <img src=${image} alt="" />
        </li>

        <li class="email-link" id="email-4">
          <span> Un email </span>
          <img src=${image} alt="" />
        </li>

        <li class="email-link" id="email-5">
          <span> Un email </span>
          <img src=${image} alt="" />
        </li>
      </ul>
    <div>`;

  const contentTitle = container.querySelector<HTMLElement>(".content__title");
  if (!contentTitle)
    throw new ReferenceError('Class "content__title" not found.');

  switch (contentType) {
    case "inbox":
      container.classList.add("content__inbox");
      contentTitle.innerHTML = "Inbox";
      break;
    case "sent":
      container.classList.add("content__sent");
      contentTitle.innerHTML = "Sent";
      break;
  }

  return container;
}

function createEmailContent(contentType, path) {
  const contentTitle = document.querySelector<HTMLElement>(".content__title");
  if (!contentTitle) {
    throw new ReferenceError('Class "content__title" not found.');
  }
  var mails = [];
  contentTitle.classList.add("email-title");
  if (contentType == "inbox") {
    mails = inboxMails;
    contentTitle.innerHTML = "Recibido";
  } else if (contentType == "sent") {
    mails = sentMails;
    contentTitle.innerHTML = "Enviado";
  }

  const mailNumber = path[path.search(/\d+/)] - 1;
  const viewMail = mails[mailNumber];
  const emailContent = document.querySelector<HTMLElement>(
    ".content__container"
  );
  if (!emailContent)
    throw new ReferenceError('Class "content__container" not found.');

  emailContent.classList.add("email-content");
  emailContent.innerHTML = `<div class="email-row">
      <label for="from-adress">De:</label>
      <input class="from-adress" type="text" readonly value="${viewMail["from"]}"/>
    </div>
    <div class="email-row">
      <label for="to-adress">Para:</label>
      <input class="to-adress" type="text" readonly value="${viewMail["to"]}"/>
    </div>
    <div class="email-row">
      <label for="subject">Asunto:</label>
      <input class="subject" type="text" readonly value="${viewMail["about"]}"/>
    </div>
    <div class="email-row">
      <textarea class="message" cols="30" rows="10" readonly >${viewMail["content"]}</textarea>
    </div>`;
}

// function createContent(contentType, path) {
//   const regexList = [/\/inbox/, /\/inbox\/./, /\/sent/, /\/sent\/./];
//   const pathCheck: Boolean[] = [];
//   pathCheck.push(regexList[0].test(path) && !regexList[1].test(path));
//   pathCheck.push(regexList[1].test(path));
//   pathCheck.push(regexList[2].test(path) && !regexList[3].test(path));
//   pathCheck.push(regexList[3].test(path));

//   var result;
//   switch (true) {
//     case pathCheck[0]:
//       result = createInboxSent(contentType);
//       break;
//     case pathCheck[1]:
//       console.log(path);
//       result = createInboxSent(contentType);
//       break;
//     case pathCheck[2]:
//       result = createInboxSent(contentType);
//       break;
//     case pathCheck[3]:
//       console.log(path);
//       result = createInboxSent(contentType);
//       break;
//   }

//   return result;
// }

export { createInboxSent, createEmailContent };
