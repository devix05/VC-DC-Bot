const { Client, GatewayIntentBits, ChannelType } = require("discord.js");

const BOT_TOKEN = "YourTokenHere";
const LOBBY_CHANNEL_ID = "LobbyChannelIDHere";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

const tempChannels = new Map();

client.once("ready", () => {
  console.log(`✅ Bot online als ${client.user.tag}`);
});

client.on("voiceStateUpdate", async (oldState, newState) => {
  if (
    newState.channelId === LOBBY_CHANNEL_ID &&
    !tempChannels.has(newState.member.id)
  ) {
    const channel = await newState.guild.channels.create({
      name: `${newState.member.user.username}'s Channel`,
      type: ChannelType.GuildVoice,
      parent: newState.channel.parentId
    });

    await newState.member.voice.setChannel(channel);
    tempChannels.set(newState.member.id, channel.id);
  }

  if (oldState.channelId) {
    const ownedChannel = tempChannels.get(oldState.member.id);
    if (ownedChannel === oldState.channelId) {
      const channel = oldState.guild.channels.cache.get(oldState.channelId);
      if (channel && channel.members.size === 0) {
        await channel.delete();
        tempChannels.delete(oldState.member.id);
      }
    }
  }
});

client.login(BOT_TOKEN);