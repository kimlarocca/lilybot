/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears(['hi','hey'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Hello human');
    });

    controller.hears('how old are you','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I am 7 years old');
    });

    controller.hears('your middle name','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'My middle name is Ann');
    });

    controller.hears('your last name','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'My last name is Henry');
    });

    controller.hears(['sisters name','sister\'s name'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'My sisters\' names are Zoe and Callie');
    })

    controller.hears('favorite color','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'My favorite color is purple');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `I don't understand what "${ message.text }" means...`);
    });

}
