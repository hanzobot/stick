import { ApplicationCommandOptionType, type CommandInteraction } from "@buape/carbon"
import BaseCommand from "./base.js"

const guideLink = "https://discord.com/channels/1456350064065904867/@home"

export default class GuideCommand extends BaseCommand {
	name = "guide"
	description = "Share the server guide"
	options = [
		{
			name: "user",
			description: "User to mention",
			type: ApplicationCommandOptionType.User
		}
	]

	async run(interaction: CommandInteraction) {
		const user = interaction.options.getUser("user")
		const prefix = user ? `<@${user.id}>\n` : ""
		const message = `${prefix}## Your question is answered in the server FAQ in our [Server Guide](${guideLink})`

		await interaction.reply({
			content: message
		})
	}
}
