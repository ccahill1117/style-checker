// content/content.js

/**
 * lets first request the `config` key from
 * the chrome api storage
 */
chrome.storage.sync.get(['config'], ({ config }) => {
  /**
   * lets see if the `window.location.origin`
   * matches any entry from our
   * options page
   */
  let match = config.find((entry) => {
    let regex = RegExp(`${entry.domain}\/?$`);

    return regex.test(window.location.origin);
  });

  /**
   * if no match, don't do anything
   */
  if (!match) return;

  /**
   * lets create the style attribute
   * by building up an object
   * then using join to combine it
   */
  let node = document.createElement('div');
  let nodeStyleProperties = {
    'background-color': match.color,
    height: '25px',
    left: '5px',
    opacity: 0.5,
    'pointer-events': 'none',
    position: 'fixed',
    top: '5px',
    width: '25px',
    'z-index': '999999',
  };
  let nodeStyle = Object.entries(nodeStyleProperties)
    .map(([key, value]) => {
      return `${key}: ${value}`;
    })
    .join('; ');

  /**
   * apply the style to the node
   * and a class flag (doesn't do anything)
   */
  node.setAttribute('style', nodeStyle);
  node.setAttribute('class', 'chrome-extension-environment-flag');

  /**
   * append the node to the document
   */
  document.body.appendChild(node);
});