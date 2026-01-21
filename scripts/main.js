/**
 * Narrative Health States
 * by NylasDev
 * 
 * Shows narrative health descriptors when hovering over enemy tokens
 * Inspired by classic CRPGs like Baldur's Gate, Planescape: Torment, and Icewind Dale
 */

// Define the classic Baldur's Gate health thresholds
function getHealthState(current, max) {
  if (max <= 0) return "Unknown";
  
  const ratio = current / max;

  if (current <= 0) return "Dead";
  if (ratio >= 0.95) return "Unhurt";
  if (ratio >= 0.75) return "Barely Injured";
  if (ratio >= 0.50) return "Injured";
  if (ratio >= 0.25) return "Badly Injured";
  if (ratio > 0) return "Near Death";
  
  return "Dead";
}

// Create and manage the health tooltip
let healthTooltip = null;

function createHealthTooltip() {
  if (healthTooltip) return healthTooltip;
  
  healthTooltip = document.createElement('div');
  healthTooltip.id = 'narrative-health-tooltip';
  healthTooltip.style.display = 'none';
  document.body.appendChild(healthTooltip);
  
  return healthTooltip;
}

function showHealthTooltip(token, state) {
  const tooltip = createHealthTooltip();
  
  tooltip.textContent = state;
  tooltip.className = `narrative-health-tooltip ${state.toLowerCase().replace(/\s+/g, '-')}`;
  tooltip.style.display = 'block';
  
  // Position above the token
  const bounds = token.bounds;
  const scale = canvas.stage.scale.x;
  
  tooltip.style.left = `${bounds.x + (bounds.width / 2)}px`;
  tooltip.style.top = `${bounds.y - 40}px`;
}

function hideHealthTooltip() {
  if (healthTooltip) {
    healthTooltip.style.display = 'none';
  }
}

// Hook into token hover events
Hooks.on("hoverToken", (token, hovered) => {
  const user = game.user;
  
  // GMs always see numeric HP
  if (user.isGM) return;
  
  const actor = token.actor;
  if (!actor) return;
  
  // Only show for actors the player can observe
  if (!actor.testUserPermission(user, "OBSERVER")) return;
  
  // Check if this is an NPC/enemy (not owned by the player)
  const isPlayerOwned = actor.hasPlayerOwner;
  
  if (hovered && !isPlayerOwned) {
    const hp = actor.system?.attributes?.hp;
    if (!hp || hp.max <= 0) return;
    
    const state = getHealthState(hp.value, hp.max);
    showHealthTooltip(token, state);
  } else {
    hideHealthTooltip();
  }
});

// Also hide tooltip when canvas is panned or deselected
Hooks.on("canvasPan", () => {
  hideHealthTooltip();
});

// Log module initialization
Hooks.once("ready", () => {
  console.log("Narrative Health States | Module loaded by NylasDev");
  console.log("Narrative Health States | Hover over enemy tokens to see their health state");
  
  // Create tooltip element on ready
  createHealthTooltip();
});
