const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

const audioPaths = ['30_tonnii', 'juntti_sapinat', 'kiihkeeta', 'ostan_sen_sit', 'persetta', 'remui', 'rockn_roll_on_musiikkii']

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min, 1);



client.on('message', async message => {
  if (message.content == 'join') {
    message.reply('Khaka');
  }
  // Join the same voice channel of the author of the message
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    if (connection && message.content == 'andy') {
      const dispatcher = connection.play(`audio/${audioPaths[getRandomArbitrary(0, 7)]}.mp3`);

      dispatcher.on('start', () => {
        message.reply('Hiljaa, Andy puhuu!');
        console.log('Audio playing');
      });

      dispatcher.on('finish', () => {
        console.log('Audio has finished playing!');
      });

      dispatcher.on('error', console.error)
    }
  }
});


client.login(token);

