/**
 * Narrative Health States
 * by NylasDev
 * 
 * Shows narrative health descriptors when hovering over enemy tokens
 * Inspired by classic CRPGs like Baldur's Gate, Planescape: Torment, and Icewind Dale
 */

const DEBUG = true; // Set to false to disable logging

function log(...args) {
  if (DEBUG) console.log("[Narrative Health States]", ...args);
}

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
  
  log("Tooltip element created");
  return healthTooltip;
}

function showHealthTooltip(token, state, hp = null) {
  const tooltip = createHealthTooltip();
  
  // Show state + HP for GMs, just state for players
  if (game.user.isGM && hp) {
    tooltip.textContent = `${state} (${hp.value}/${hp.max})`;
  } else {
    tooltip.textContent = state;
  }
  
  tooltip.className = `narrative-health-tooltip ${state.toLowerCase().replace(/\s+/g, '-')}`;
  tooltip.style.display = 'block';
  
  // Get token center in WORLD coordinates
  const tokenCenter = token.center;
  
  // Convert world coordinates to screen coordinates
  const transform = canvas.stage.worldTransform;
  const screenX = tokenCenter.x * transform.a + transform.tx;
  const screenY = tokenCenter.y * transform.d + transform.ty;
  
  log("World position:", tokenCenter.x, tokenCenter.y);
  log("Screen position:", screenX, screenY);
  
  // Position tooltip above token (40px up from center)
  tooltip.style.left = `${screenX}px`;
  tooltip.style.top = `${screenY - 40}px`;
  
  log("Tooltip shown:", state, "at screen coords", screenX, screenY);
}

function hideHealthTooltip() {
  if (healthTooltip) {
    healthTooltip.style.display = 'none';
    log("Tooltip hidden");
  }
}

// Hook into token hover events
Hooks.on("hoverToken", (token, hovered) => {
  log("hoverToken hook fired:", {token, hovered});
  
  const user = game.user;
  
  const actor = token.actor || token.document?.actor;
  if (!actor) {
    log("No actor found");
    return;
  }
  
  log("Actor:", actor.name, "Type:", actor.type);
  
  // Check if this is an NPC/enemy (not owned by players)
  const isPlayerOwned = actor.hasPlayerOwner;
  log("Is player owned:", isPlayerOwned);
  
  if (hovered) {
    const hp = actor.system?.attributes?.hp;
    if (!hp || hp.max <= 0) {
      log("No valid HP data:", hp);
      return;
    }
    
    log("HP:", hp.value, "/", hp.max);
    const state = getHealthState(hp.value, hp.max);
    showHealthTooltip(token, state, hp);
  } else {
    hideHealthTooltip();
  }
});

// Also hide tooltip when canvas is panned or deselected
Hooks.on("canvasPan", () => {
  log("Canvas panned, hiding tooltip");
  hideHealthTooltip();
});

// Log module initialization
Hooks.once("ready", () => {
  console.log("Narrative Health States | Module loaded by NylasDev");
  console.log("Narrative Health States | Hover over enemy tokens to see their health state");
  console.log("Narrative Health States | Set DEBUG=true in main.js for verbose logging");
  
  // Create tooltip element on ready
  createHealthTooltip();
});
