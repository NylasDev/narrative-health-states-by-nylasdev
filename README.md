# Narrative Health States by NylasDev

A Foundry VTT module that shows narrative health descriptors when players hover over enemy tokens, inspired by classic CRPGs like **Baldur's Gate**, **Planescape: Torment**, and **Icewind Dale**.

Instead of seeing exact HP numbers, players see colored tooltips displaying states like **"Injured"** or **"Near Death"** when hovering over enemies.

![Version](https://img.shields.io/badge/version-0.1.1-blue)
![Foundry](https://img.shields.io/badge/Foundry-v11--v13-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Token Hover Tooltips**: Colored health states appear when hovering over enemy tokens
- **Narrative Feedback**: Descriptive conditions instead of numbers
- **Player-Focused**: Hides exact HP from players while GMs retain full visibility
- **Classic Immersion**: Faithful recreation of classic CRPG health feedback
- **Beautiful Presentation**: Color-coded tooltips with smooth animations on black backgrounds
- **System-Agnostic**: Works with D&D 5e and other Foundry systems
- **Zero Configuration**: Works out of the box after installation

## 🎮 Health States

The module uses the classic Baldur's Gate health descriptors:

| State | HP Range | Color |
|-------|----------|-------|
| **Unhurt** | 95-100% | Green |
| **Barely Injured** | 75-94% | Light Green |
| **Injured** | 50-74% | Orange |
| **Badly Injured** | 25-49% | Dark Orange |
| **Near Death** | 1-24% | Red (pulsing) |
| **Dead** | 0% | Gray |

These thresholds match the classic feedback from Baldur's Gate and other Infinity Engine games.

## 📦 Installation

### Method 1: Manifest URL (Recommended)
1. In Foundry VTT, go to **Add-on Modules**
2. Click **Install Module**
3. Paste this manifest URL:
```
https://raw.githubusercontent.com/NylasDev/narrative-health-states-by-nylasdev/main/module.json
```
4. Click **Install**

### Method 2: Search (After Package Registry Approval)
1. In Foundry VTT, go to **Add-on Modules**
2. Search for **"Narrative Health States"**
3. Click **Install**

### Method 3: Manual Installation
1. Download the [latest release](https://github.com/NylasDev/narrative-health-states-by-nylasdev/releases)
2. Extract to your Foundry `Data/modules/` folder
3. Restart Foundry VTT
4. Enable the module in your world

## 🚀 Usage

1. **Enable the module** in your world settings
2. **Reload** Foundry VTT
3. **Hover over an enemy token** as a player
4. A colored tooltip appears showing the health state

### What Players See
- **Colored tooltip** above enemy tokens on hover
- Text like "Injured" or "Near Death" on a black background
- Color-coded for quick threat assessment
- "Near Death" state pulses for dramatic effect

### What GMs See
- **Full numeric HP** (unchanged)
- All normal HP controls and inputs
- Complete system functionality

## 🎯 Design Philosophy

This module follows the design philosophy of classic CRPGs:

> *"Show danger through narrative, not calculation"

By hiding precise numbers, players:
- Make risk assessments based on feel, not math
- Experience tension and uncertainty
- Stay immersed in the narrative
- Rely on in-character knowledge

This was a core design pillar of **Baldur's Gate**, **Icewind Dale**, and **Planescape: Torment**.

## 🔧 Compatibility

- **Foundry VTT**: v11, v12, v13 (tested on v13)
- **Game Systems**: D&D 5e (primary), others with standard HP structure
- **Conflicts**: None known (does not modify core data)

## 🛠️ Technical Details

### How It Works
- **Non-invasive**: Does not modify actor HP data
- **Token hover based**: Uses Foundry's `hoverToken` hook
- **Permission-aware**: Respects Foundry's actor permissions
- **Safe**: GM view remains completely unchanged
- **Visual tooltips**: Dynamically positioned above tokens

### For Developers
The module uses a clean approach:
1. Hooks into `hoverToken` event
2. Calculates HP ratio from `actor.system.attributes.hp`
3. Shows positioned tooltip for non-GM users hovering over non-owned actors
4. Hides tooltip on pan or when hover ends
5. Preserves all underlying HP mechanics

## 📸 Screenshots

*Coming soon - screenshots of the module in action*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Roadmap

- [x] Core health state system
- [x] Token HUD integration
- [ ] Localization support (EN, RO, DE, FR)
- [ ] Module settings UI for customization
- [ ] Configurable thresholds
- [ ] Alternative descriptor sets (sci-fi, modern, etc.)
- [ ] Sound effects on state changes
- [ ] GM notification when PC reaches "Near Death"

## 💡 Inspiration

Inspired by the health feedback system from:
- **Baldur's Gate** (1998, BioWare)
- **Baldur's Gate II: Shadows of Amn** (2000)
- **Icewind Dale** (2000, Black Isle)
- **Planescape: Torment** (1999, Black Isle)

All powered by the legendary **Infinity Engine**.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**NylasDev**
- GitHub: [@NylasDev](https://github.com/NylasDev)
- Foundry: nylasdev

## 🙏 Acknowledgments

- BioWare and Black Isle Studios for the original Infinity Engine games
- The Foundry VTT community for excellent documentation
- All playtesters and contributors

---

*"You must gather your party before venturing forth."*
