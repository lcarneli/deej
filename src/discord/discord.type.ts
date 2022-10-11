import { Collection, CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Player } from 'discord-player';

declare module 'discord.js' {
	export interface Client {
		commands: Collection<string, Command>;
		player: Player;
	}
}

export interface Command {
	data: SlashCommandBuilder;
	execute: (interaction: CommandInteraction) => void;
}

export interface Event {
	name: string;
	once: boolean;
	execute: (...args) => void;
}
