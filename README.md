VC/DC Bot – Temporäre Voice Channels für Discord

Übersicht

Der VC/DC Bot ist ein Discord-Bot, der es ermöglicht, temporäre Voice Channels zu erstellen. Benutzer können automatisch private Sprachkanäle erstellen, die nach dem Verlassen aller Mitglieder automatisch gelöscht werden. Ideal für Gaming-Sessions, Team-Meetings oder private Chats.

Funktionen

Temporäre Voice Channels: Nutzer erstellen eigene Voice Channels per Befehl oder über einen “Join-to-Create”-Channel.

Automatisches Löschen: Leere Kanäle werden automatisch entfernt.

Rechteverwaltung: Jeder Benutzer hat volle Kontrolle über seinen temporären Kanal.

Anpassbare Einstellungen: Maximalanzahl an Kanälen, Standardnamen, Berechtigungen.

Installation

Repository klonen:

git clone https://github.com/DEIN-BENUTZERNAME/vc-dc-bot.git
cd vc-dc-bot


Abhängigkeiten installieren:

npm install


Bot Token einrichten:
Erstelle eine .env Datei im Hauptverzeichnis:

DISCORD_TOKEN=DEIN_BOT_TOKEN
GUILD_ID=DEINE_GUILD_ID

Nutzung

Bot starten:

node index.js


Voice Channel erstellen:

Entweder automatisch über einen "Join-to-Create"-Channel

Oder per Befehl, z. B.:

!createvc Mein Channel


Channel löschen:

Leer gelassene temporäre Kanäle werden automatisch entfernt.

Konfiguration

Du kannst folgende Optionen in der config.json oder .env Datei anpassen:

{
  "prefix": "!",
  "tempChannelCategoryId": "ID_DER_KATEGORIE",
  "defaultChannelName": "Temp VC",
  "maxTempChannels": 10
}

Mitwirken

Beiträge sind willkommen!

Pull Requests

Bug Reports

Feature Requests

Lizenz

MIT License © Dein Name
