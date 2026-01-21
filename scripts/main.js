/**
 * Baldur's Gate Health Descriptions
 * by NylasDev
 * 
 * Replaces numeric HP with classic Infinity Engine-style health states
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

// Hook into actor sheet rendering
Hooks.on("renderActorSheet", (app, html, data) => {
  const actor = app.actor;
  const user = game.user;

  // GMs always see full numeric HP - don't modify their view
  if (user.isGM) return;

  // Only show for actors the player can observe
  if (!actor.testUserPermission(user, "OBSERVER")) return;

  // Get HP data - handle different system structures
  const hp = actor.system?.attributes?.hp;
  if (!hp || hp.max <= 0) return;

  const state = getHealthState(hp.value, hp.max);

  // Hide the numeric HP input field
  const hpInput = html.find('input[name="system.attributes.hp.value"]');
  if (hpInput.length > 0) {
    hpInput.closest(".attribute").hide();
  }

  // Also hide any HP bars or numeric displays
  html.find('.resource[data-name="hp"]').hide();
  html.find('.attribute.hp').hide();

  // Inject our narrative health descriptor
  const healthHtml = `
    <div class="bg-health-state resource">
      <label>Health</label>
      <div class="health-value ${state.toLowerCase().replace(/\s+/g, '-')}">${state}</div>
      <div class="health-subtitle">Baldur's Gate Style</div>
    </div>
  `;

  // Find the best place to inject (try multiple locations for compatibility)
  const resources = html.find(".resources");
  const attributes = html.find(".attributes");
  
  if (resources.length > 0) {
    resources.prepend(healthHtml);
  } else if (attributes.length > 0) {
    attributes.prepend(healthHtml);
  } else {
    // Fallback: try to find the header section
    html.find(".sheet-header").append(healthHtml);
  }
});

// Optional: Hook into token HUD for quick reference
Hooks.on("renderTokenHUD", (hud, html, data) => {
  const token = canvas.tokens.get(data._id);
  if (!token) return;

  const actor = token.actor;
  if (!actor) return;

  const user = game.user;

  // GMs see numeric HP on token HUD
  if (user.isGM) return;

  // Only show for observable actors
  if (!actor.testUserPermission(user, "OBSERVER")) return;

  const hp = actor.system?.attributes?.hp;
  if (!hp || hp.max <= 0) return;

  const state = getHealthState(hp.value, hp.max);

  // Find and modify the HP display in token HUD
  const hpDiv = html.find('.attribute.bar1, .attribute[data-attribute="bar1"]');
  if (hpDiv.length > 0) {
    const currentValue = hpDiv.find('input');
    if (currentValue.length > 0) {
      currentValue.val(state).prop('disabled', true);
    }
  }
});

// Log module initialization
Hooks.once("ready", () => {
  console.log("Baldur's Gate Health Descriptions | Module loaded by NylasDev");
  console.log("Baldur's Gate Health Descriptions | Players will now see narrative health states instead of numeric HP");
});
