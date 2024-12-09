require("dotenv").config();

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents, Collection } = require("discord.js");
const { Player } = require("discord-player");

const fs = require("fs");
const path = require("path");
