module.exports = {
  sendMail: sendMail
}
const config = require('./config.js');
const mandrill = require('mandrill-api/mandrill');
const mandrill_client = new mandrill.Mandrill(config.api_key);
/*
  @PARAMS
  userList: Array<userObj>
  subject: string
  templateName: string
  text: string
  fromEmail: string
  fromName: string
  replyTo: string
  tags: Array<string>
*/
async function sendMail(
  userList,
  subject,
  templateName,
  text,
  fromEmail,
  fromName,
  replyTo,
  tags
){
  userList.forEach(async (user) => {
    const sub = `Hi ${user.firstname}! ${subject}`;
    const templateVars = [
      {
        name: 'firstname',
        content: user.firstname
      },
      {
        name: 'subject',
        content: sub
      },
      {
        name: 'text',
        content: text
      }
    ];

    const message = {
      subject: sub,
      from_email: fromEmail,
      from_name: fromName,
      to: [{
        email: user.email,
        name: user.name,
        type: 'to'
      }],
      headers: {
        'Reply-To': replyTo
      },
      important: false,
      track_opens: true,
      track_clicks: true,
      merge_language: 'handlebars',
      merge_vars: templateVars,
      tags: tags
  };

  const async = true;
  const ip_pool = "Main Pool";

  try {
    await mandrill_client.messages.sendTemplate({ template_name: templateName, template_content: templateVars, message: message, async: async, ip_pool: ip_pool });
    console.log("email sent");
  } catch (e) {
    console.log('A mandrill error occurred: ' + e.name + ' - ');
    console.log(e);
  }
})
}
