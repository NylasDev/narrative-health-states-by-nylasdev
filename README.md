# Narrative Health States

A Foundry VTT module that replaces numeric HP values with narrative health descriptors inspired by classic CRPGs like **Baldur's Gate**, **Planescape: Torment**, and **Icewind Dale**.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Foundry](https://img.shields.io/badge/Foundry-v10--v11-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Narrative Health States**: Shows descriptive health conditions instead of numbers
- **Player-Focused**: Hides numeric HP from players while GMs retain full visibility
- **Classic Immersion**: Faithful recreation of Infinity Engine health feedback
- **System-Agnostic**: Works with D&D 5e and other Foundry systems
- **Token HUD Support**: Health states appear on token hover (optional)
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
3. **Open any character sheet** as a player (not GM)
4. Numeric HP is automatically replaced with health descriptions

### What Players See
- **Health descriptor** instead of HP numbers
- Visual color coding for quick assessment
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

- **Foundry VTT**: v10, v11 (tested)
- **Game Systems**: D&D 5e (primary), others with standard HP structure
- **Conflicts**: None known (does not modify core data)

## 🛠️ Technical Details

### How It Works
- **Non-invasive**: Does not modify actor HP data
- **Permission-aware**: Respects Foundry's actor permissions
- **Hook-based**: Uses `renderActorSheet` and `renderTokenHUD` hooks
- **Safe**: GM view remains completely unchanged

### For Developers
The module uses a clean approach:
1. Calculates HP ratio from `actor.system.attributes.hp`
2. Hides numeric input via CSS for non-GM users
3. Injects narrative descriptor with color coding
4. Preserves all underlying HP mechanics

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
