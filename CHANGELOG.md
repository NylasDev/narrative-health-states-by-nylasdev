# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.4] - 2026-01-21

### Fixed
- **Players can now see all tooltips**: Removed permission checks that blocked tooltips for player-owned PCs and allies
- Players now see health states on their own characters, allied characters, and enemies
- Players see only descriptive text (e.g., "Injured")
- GMs continue to see both descriptive text and exact HP (e.g., "Injured (12/25)")

### Changed
- Tooltip positioned 3x higher above tokens (120px instead of 40px) for better visibility

## [0.1.3] - 2026-01-21

### Fixed
- **Critical positioning bug**: Tooltips now appear correctly above tokens
- Fixed coordinate conversion from canvas world space to screen space
- Tooltips now properly follow zoom and pan

## [0.1.2] - 2026-01-21

### Added
- GM tooltip support: GMs now see health state + numeric HP (e.g., "Injured (12/25)")
- GMs can hover over any token including player-owned characters
- Enhanced debugging mode with verbose logging
- Multiple fallback methods for token positioning (improved v13 compatibility)

### Changed
- Debug mode enabled by default to help troubleshooting
- Improved token position calculation for various Foundry versions

## [0.1.1] - 2026-01-21

### Changed
- Complete redesign: Health states now appear as tooltips when hovering over enemy tokens
- Removed character sheet HP replacement in favor of token hover system
- Improved visual presentation with black backgrounds and colored borders
- Enhanced animations and smooth tooltip transitions
- Updated compatibility to Foundry VTT v11-v13

## [0.1.0] - 2026-01-21

### Added
- Initial release of Narrative Health States module
- Token hover tooltips showing health states for enemy actors
- Classic CRPG-inspired health state descriptors (Unhurt, Barely Injured, Injured, Badly Injured, Near Death, Dead)
- Automatic hiding of exact HP for players
- Full GM visibility of numeric HP maintained
- Color-coded health states on black backgrounds for quick visual assessment
- Pulsing animation for "Near Death" state
- Smooth tooltip animations
- English localization support
- System-agnostic design (works with D&D 5e and compatible systems)

### Features
- Non-invasive design - does not modify core HP data
- Permission-aware - respects Foundry's actor permission system
- Zero configuration required - works out of the box

[Unreleased]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/NylasDev/narrative-health-states-by-nylasdev/releases/tag/v0.1.0
