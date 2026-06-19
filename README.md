# _FkYourPayOrConsent_ - Pay-or-Consent Overlay Remover

Extension that detects and removes Cookie Pay-or-Consent overlays for Schibsted sites

This repository contains:
- Manifest V3 extension for Microsoft Edge and Google Chrome
- Manifest V2 extension for Mozilla Firefox.

## Target sites

- https://www.vg.no/
- https://www.aftenposten.no/
- https://www.e24.no/
- https://www.tek.no/
- https://www.bt.no/
- https://www.aftenbladet.no/

## Behavior

- Detects and removes consent overlays with ids starting with `sp_message_container_`.
- Re-enables page scrolling by restoring `overflow` and related style properties on `<html>` and `<body>`.
- Watches for dynamically injected overlays and removes them if they appear later.
- Periodically checks for scroll lock styles and re-enables scrolling as needed.

# Loading the extension

## Microsoft Edge

1. Open `edge://extensions/` in the address bar.
2. Enable **Developer mode** (toggle in the bottom-left corner).
3. Click **Load unpacked**.
4. Browse to and select this folder: `FkYourPayOrConsent`.
5. The extension will now appear in your extensions list.

## Mozilla Firefox

1. Open `about:debugging#/runtime/this-firefox` in the address bar.
2. Click **Load Temporary Add-on**.
3. Browse to and select any file in `FkYourPayOrConsent` (e.g., `manifest.json`).
4. The extension will appear in your temporary add-ons list.

NOTE: The extension will be **automatically unloaded when Firefox restarts**.

## Google Chrome

1. Open `chrome://extensions/` in the address bar.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Browse to and select this folder: `FkYourPayOrConsent`.
5. The extension will now appear in your extensions list.
