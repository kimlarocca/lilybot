/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears(['hi','hey'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Hello human');
    });

    controller.hears(['how are you'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'good');
    });

    controller.hears(['good toys'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'stuffed animal bunnies, butterflies, and hatchimals');
    });

    controller.hears(['what do you eat'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'pesto pasta');
    });

    controller.hears(['favorite ice cream'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'vanilla');
    });

    controller.hears(['favorite month'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'december');
    });

    controller.hears(['favorite country'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'america');
    });

    controller.hears(['favorite shape'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'a heart');
    });

    controller.hears(['your birthday'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'october 16th!');
    });

    controller.hears(['favorite teacher'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'miss mastro <3');
    });

    controller.hears(['favorite clothing'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'my butterfly dress');
    });

    controller.hears(['favorite book'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'i forgot the name, but it is about butterflies');
    });

    controller.hears(['favorite shoe'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'i do not care about shoes');
    });

    controller.hears(['favorite sport'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'aerial silks');
    });

    controller.hears(['favorite animal'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'a fox!');
    });

    controller.hears(['one million plus one million'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'two million');
    });

    controller.hears(['one million times one million'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'one billion!!!');
    });

    controller.hears(['good app'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'youtube');
    });

    controller.hears(['favorite color'],'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'purple');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `I don't understand what "${ message.text }" means...`);
    });

}
