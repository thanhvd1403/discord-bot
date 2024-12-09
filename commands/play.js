const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { QueryType } = require("discord-player");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Chơi một bài nhạc")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Tên bài hát hoặc URL")
        .setRequired(true)
    ),
  execute: async ({ client, interaction }) => {
    if (!interaction.member.voice.channel) {
      await interaction.reply(
        "Bạn không ở trong voice channel thì mình hát cho ai nghe giờ :<"
      );
      return;
    }

    const queue = await client.player.createQueue(interaction.guild);

    if (!queue.connection)
      await queue.connect(interaction.member.voice.channel);

    let embed = new MessageEmbed();
  },
};
