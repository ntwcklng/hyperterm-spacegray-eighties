// Constants
const backgroundColor = '#2d2d2d';
const foregroundColor = '#c0c5ce';
const darkerBackground = '#1e1e1e';

// Colors
const RED = '#B4656F';
const GREEN = '#68A281';
const YELLOW = '#E2EB98';
const BLUE = '#5786B8';
const PINK = '#E0BAD7';
const CYAN = '#38CCD1';
const LIGHT_GRAY = '#a7adba';
const MEDIUM_GRAY = '#4f5b66';
const WHITE = '#ffffff';

const colors = [
  backgroundColor,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  LIGHT_GRAY,
  MEDIUM_GRAY,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  WHITE,
  foregroundColor
];

// Apply theme
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: darkerBackground,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      /* Highlight active tab by making rest of nav darker */
      .tabs_list {
        background-color: ${darkerBackground} !important;
      }

      /* Set tab colors */
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${darkerBackground} !important;
        border-left: 1px solid ${MEDIUM_GRAY};
      }

      /* Hide bottom border if tab is active, make bg lighter */
      .tab_active {
        background-color: ${backgroundColor} !important;
        height: calc(100% + 1px);
      }

      /* Hide hardcoded black bottom border */
      .tab_active:before {
        border-bottom: none !important;
      }

      .tab_text {
        border-color: transparent !important;
      }
    `
  })
);