# Browser Extension: _FkYourPayOrConsent_ - Pay-or-Consent Overlay Remover

Extension that detects and removes Cookie Pay-or-Consent overlays for Schibsted sites

This repository contains a Manifest V3 extension for Chrome/Edge and a Manifest V2 extension for Firefox.

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

## Load in Edge

1. Open `edge://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this folder: `FkYourPayOrConsent`.
