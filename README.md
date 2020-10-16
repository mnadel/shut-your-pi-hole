# Shut Your Pi-Hole

Shut Your Pi-Hole: a Chrome plugin to temporarily disable Pi-hole.

# How It Works

This plugin fires off an HTTP request to your Pi-hole to temporarily disable itself for a specified number of seconds. It's identical to clicking the `Disable > Custom time` in the lefthand navigation bar of your Pi-hole admin screen.

# Installing

In `chrome://extensions`, enable developer mode, select _Load unpacked_ and point Chrome at the directory
containing this repo's `manifest.json` file.

# Configuring

1. Enter your Pi-hole API URL (e.g. http://pi-hole/admin/api.php)
1. Enter your Pi-hole API Token (Settings > API/Web Interface > Show API token)
1. Enter the time in seconds to disable your Pi-hole

# Changelog

| Version | Changes |
| --      | --      |
| 0.2     | Change plugin to not persistently run in the background |
| 0.1     | Initial release |
