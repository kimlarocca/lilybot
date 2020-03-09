/**
 * This module demonstrates the use of the typing indicator in a conversation, and when using bot.reply
 * Tell your bot "typing dialog" or "typing reply" to see this in action.
 */
const {BotkitConversation} = require("botkit");

module.exports = function (controller) {

    let nameConvo = new BotkitConversation('nameConvo', controller);

    nameConvo.say('My name is Lilybot');

    // ask a question, store the response in 'name'
    nameConvo.ask('What is your name?', async (response, nameConvo, bot) => {
        // do something?
    }, 'name');

    // nameConvo.say('What do you like to color in {{vars.name}}');
    nameConvo.say('It\'s nice to meet you {{vars.name}}!');

    controller.addDialog(nameConvo);

    controller.hears(['what is your name', 'what\'s your name', 'whats your name'], 'message', async (bot, message) => {
        await bot.beginDialog('nameConvo');
    });
};
