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
  
  // Get token position on screen
  // Use token.document for v10+ or token for older versions
  const tokenDoc = token.document || token;
  const tokenObject = token.object || token;
  
  // Calculate screen position
  let x, y;
  
  if (tokenObject.center) {
    // v10+ method
    const center = tokenObject.center;
    x = center.x;
    y = center.y;
  } else if (token.worldTransform) {
    // Fallback using world transform
    x = token.worldTransform.tx + (token.w / 2);
    y = token.worldTransform.ty;
  } else {
    // Last resort - use token position
    x = token.x + (token.w / 2);
    y = token.y;
  }
  
  log("Token position:", {x, y, token});
  
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y - 40}px`;
  
  log("Tooltip shown:", state, "at", x, y);
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
  
  // Only show for actors the player can observe
  if (!actor.testUserPermission(user, "OBSERVER")) {
    log("No observer permission");
    return;
  }
  
  // Check if this is an NPC/enemy (not owned by the player)
  const isPlayerOwned = actor.hasPlayerOwner;
  log("Is player owned:", isPlayerOwned);
  
  // Show for NPCs, or for GMs on any token
  if (hovered && (!isPlayerOwned || user.isGM)) {
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
