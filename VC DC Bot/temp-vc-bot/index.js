const { Client, GatewayIntentBits, PermissionsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

client.once("ready", () => {
    console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

const LOBBY_CHANNEL_ID = "1417151351514992661";

const userChannels = new Map();

client.on("voiceStateUpdate", async (oldState, newState) => {
    if (newState.channelId === LOBBY_CHANNEL_ID && !userChannels.has(newState.member.id)) {
        const guild = newState.guild;
        const category = newState.channel?.parent;

        const channel = await guild.channels.create({
            name: `${newState.member.user.username}'s Channel`,
            type: 2,
            parent: category ? category.id : null,
            permissionOverwrites: [
                {
                    id: newState.member.id,
                    allow: [PermissionsBitField.Flags.ManageChannels]
                }
            ]
        });

        await newState.member.voice.setChannel(channel);

        userChannels.set(newState.member.id, channel.id);
    }

    if (oldState.channelId && userChannels.get(oldState.member.id) === oldState.channelId) {
        const channel = oldState.guild.channels.cache.get(oldState.channelId);
        if (channel && channel.members.size === 0) {
            await channel.delete();
            userChannels.delete(oldState.member.id);
        }
    }
});

client.login(process.env.BOT_TOKEN);
