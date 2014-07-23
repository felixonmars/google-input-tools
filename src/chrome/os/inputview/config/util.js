goog.provide('i18n.input.chrome.inputview.content.util');

goog.require('goog.array');
goog.require('i18n.input.chrome.inputview.Css');
goog.require('i18n.input.chrome.inputview.Direction');
goog.require('i18n.input.chrome.inputview.SpecNodeName');
goog.require('i18n.input.chrome.inputview.StateType');
goog.require('i18n.input.chrome.inputview.elements.ElementType');

goog.scope(function() {
var ElementType = i18n.input.chrome.inputview.elements.ElementType;
var SpecNodeName = i18n.input.chrome.inputview.SpecNodeName;


/**
 * The prefix of the key id.
 *
 * @type {string}
 * @private
 */
i18n.input.chrome.inputview.content.util.keyIdPrefix_ = 'sk-';


/**
 * Creates the hide keyboard key.
 *
 * @return {!Object} The hide keyboard key.
 */
i18n.input.chrome.inputview.content.util.createHideKeyboardKey = function() {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.HIDE_KEYBOARD_ICON;
  spec[SpecNodeName.TYPE] = ElementType.HIDE_KEYBOARD_KEY;
  spec[SpecNodeName.ID] = 'HideKeyboard';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a shift key.
 *
 * @param {boolean} isLeft True if this is the left shift key.
 * @param {boolean=} opt_supportSticky True if support sticky shift key.
 * @return {!Object} The shift key.
 */
i18n.input.chrome.inputview.content.util.createShiftKey = function(isLeft,
    opt_supportSticky) {
  var spec = {};
  spec[SpecNodeName.TO_STATE] = i18n.input.chrome.inputview.StateType.SHIFT;
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.SHIFT_ICON;
  spec[SpecNodeName.TYPE] = ElementType.MODIFIER_KEY;
  spec[SpecNodeName.ID] = isLeft ? 'ShiftLeft' : 'ShiftRight';
  spec[SpecNodeName.SUPPORT_STICKY] = !!opt_supportSticky;
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a globe key.
 *
 * @return {!Object} The globe key.
 */
i18n.input.chrome.inputview.content.util.createGlobeKey = function() {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.GLOBE_ICON;
  spec[SpecNodeName.TYPE] = ElementType.GLOBE_KEY;
  spec[SpecNodeName.ID] = 'Globe';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a menu key.
 *
 * @param {string=} opt_toKeyset The compact keyboard id.
 * @return {!Object} The menu key.
 */
i18n.input.chrome.inputview.content.util.createMenuKey = function(
    opt_toKeyset) {
  var spec = {};
  spec[SpecNodeName.NAME] = '\u22EE';
  spec[SpecNodeName.TO_KEYSET] = opt_toKeyset;
  spec[SpecNodeName.TYPE] = ElementType.MENU_KEY;
  spec[SpecNodeName.ID] = 'Menu';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a ctrl key.
 *
 * @return {!Object} The ctrl key.
 */
i18n.input.chrome.inputview.content.util.createCtrlKey = function() {
  var spec = {};
  spec[SpecNodeName.TO_STATE] = i18n.input.chrome.inputview.StateType.CTRL;
  spec[SpecNodeName.NAME] = 'ctrl';
  spec[SpecNodeName.TYPE] = ElementType.MODIFIER_KEY;
  spec[SpecNodeName.ID] = 'ControlLeft';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a alt key.
 *
 * @return {!Object} The alt key.
 */
i18n.input.chrome.inputview.content.util.createAltKey = function() {
  var spec = {};
  spec[SpecNodeName.TO_STATE] = i18n.input.chrome.inputview.StateType.ALT;
  spec[SpecNodeName.NAME] = 'alt';
  spec[SpecNodeName.TYPE] = ElementType.MODIFIER_KEY;
  spec[SpecNodeName.ID] = 'AltLeft';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a altgr key.
 *
 * @return {!Object} The altgr key.
 */
i18n.input.chrome.inputview.content.util.createAltgrKey = function() {
  var spec = {};
  spec[SpecNodeName.TO_STATE] = i18n.input.chrome.inputview.StateType.ALTGR;
  spec[SpecNodeName.NAME] = 'alt gr';
  spec[SpecNodeName.TYPE] = ElementType.MODIFIER_KEY;
  spec[SpecNodeName.ID] = 'AltRight';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a capslock key.
 *
 * @return {!Object} The capslock key.
 */
i18n.input.chrome.inputview.content.util.createCapslockKey = function() {
  var spec = {};
  spec[SpecNodeName.TO_STATE] = i18n.input.chrome.inputview.StateType.CAPSLOCK;
  spec[SpecNodeName.NAME] = 'caps lock';
  spec[SpecNodeName.TYPE] = ElementType.MODIFIER_KEY;
  spec[SpecNodeName.ID] = 'OsLeft';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a enter key.
 *
 * @return {!Object} The enter key.
 */
i18n.input.chrome.inputview.content.util.createEnterKey = function() {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.ENTER_ICON;
  spec[SpecNodeName.TYPE] = ElementType.ENTER_KEY;
  spec[SpecNodeName.ID] = 'Enter';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a tab key.
 *
 * @return {!Object} The tab key.
 */
i18n.input.chrome.inputview.content.util.createTabKey = function() {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] = i18n.input.chrome.inputview.Css.TAB_ICON;
  spec[SpecNodeName.TYPE] = ElementType.TAB_KEY;
  spec[SpecNodeName.ID] = 'Tab';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a backspace key.
 *
 * @return {!Object} The backspace key.
 */
i18n.input.chrome.inputview.content.util.createBackspaceKey = function() {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.BACKSPACE_ICON;
  spec[SpecNodeName.TYPE] = ElementType.BACKSPACE_KEY;
  spec[SpecNodeName.ID] = 'Backspace';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a space key.
 *
 * @return {!Object} The space key.
 */
i18n.input.chrome.inputview.content.util.createSpaceKey = function() {
  var spec = {};
  spec[SpecNodeName.NAME] = ' ';
  spec[SpecNodeName.TYPE] = ElementType.SPACE_KEY;
  spec[SpecNodeName.ID] = 'Space';
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Create an IME switch key.
 *
 * @param {string} id .
 * @param {string} name .
 * @param {string} css .
 * @return {!Object} The JP IME switch key.
 */
i18n.input.chrome.inputview.content.util.createIMESwitchKey =
    function(id, name, css) {
  var spec = {};
  spec[SpecNodeName.NAME] = name;
  spec[SpecNodeName.TYPE] = ElementType.IME_SWITCH;
  spec[SpecNodeName.ID] = id;
  spec[SpecNodeName.TEXT_CSS_CLASS] = css;
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a normal key.
 *
 * @param {!Object} spec The specification.
 * @return {!Object} The normal key.
 */
i18n.input.chrome.inputview.content.util.createNormalKey = function(spec) {
  spec[SpecNodeName.TYPE] = ElementType.CHARACTER_KEY;
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates an arrow key.
 *
 * @param {!i18n.input.chrome.inputview.Direction} direction The direction.
 * @return {!Object} The arrow key.
 */
i18n.input.chrome.inputview.content.util.createArrowKey = function(direction) {
  var spec = {};
  spec[SpecNodeName.ICON_CSS_CLASS] =
      i18n.input.chrome.inputview.Css.ARROW_KEY + ' ';
  if (direction == i18n.input.chrome.inputview.Direction.UP) {
    spec[SpecNodeName.ID] = 'ArrowUp';
    spec[SpecNodeName.ICON_CSS_CLASS] += i18n.input.chrome.inputview.Css.UP_KEY;
    spec[SpecNodeName.TYPE] = ElementType.ARROW_UP;
  } else if (direction == i18n.input.chrome.inputview.Direction.DOWN) {
    spec[SpecNodeName.ID] = 'ArrowDown';
    spec[SpecNodeName.ICON_CSS_CLASS] +=
        i18n.input.chrome.inputview.Css.DOWN_KEY;
    spec[SpecNodeName.TYPE] = ElementType.ARROW_DOWN;
  } else if (direction == i18n.input.chrome.inputview.Direction.LEFT) {
    spec[SpecNodeName.ID] = 'ArrowLeft';
    spec[SpecNodeName.ICON_CSS_CLASS] +=
        i18n.input.chrome.inputview.Css.LEFT_KEY;
    spec[SpecNodeName.TYPE] = ElementType.ARROW_LEFT;
  } else if (direction == i18n.input.chrome.inputview.Direction.RIGHT) {
    spec[SpecNodeName.ID] = 'ArrowRight';
    spec[SpecNodeName.ICON_CSS_CLASS] +=
        i18n.input.chrome.inputview.Css.RIGHT_KEY;
    spec[SpecNodeName.TYPE] = ElementType.ARROW_RIGHT;
  }
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Creates a soft key.
 *
 * @param {!Object} spec The specification.
 * @return {!Object} The soft key.
 */
i18n.input.chrome.inputview.content.util.createKey = function(spec) {
  var newSpec = {};
  for (var key in spec) {
    newSpec[key] = spec[key];
  }
  return {
    'spec': newSpec
  };
};


/**
 * The physical key codes.
 *
 * @type {!Array.<string>}
 */
i18n.input.chrome.inputview.content.util.KEY_CODES_101 = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash'
];


/**
 * The physical key codes for 102 keyboard.
 *
 * @type {!Array.<string>}
 */
i18n.input.chrome.inputview.content.util.KEY_CODES_102 = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Backslash',
  'IntlBackslash',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash'
];


/**
 * Creates the key data.
 *
 * @param {!Array.<!Array.<string>>} keyCharacters The key characters.
 * @param {string} viewIdPrefix The prefix of the view.
 * @param {boolean} is102 True if it is a 102 keyboard.
 * @param {boolean} hasAltGrKey True if there is altgr key.
 * @param {!Array.<!Array.<number>>=} opt_keyCodes The key codes.
 * @param {string=} opt_compactKeyboardId The compact keyboard id.
 * @return {!Object} The key data.
 */
i18n.input.chrome.inputview.content.util.createData = function(keyCharacters,
    viewIdPrefix, is102, hasAltGrKey, opt_keyCodes, opt_compactKeyboardId) {
  var keyList = [];
  var mapping = {};
  var keyCodes = opt_keyCodes || [];
  var keyIds = is102 ? i18n.input.chrome.inputview.content.util.KEY_CODES_102 :
      i18n.input.chrome.inputview.content.util.KEY_CODES_101;
  for (var i = 0; i < keyCharacters.length - 1; i++) {
    var spec = {};
    spec[SpecNodeName.ID] = keyIds[i];
    spec[SpecNodeName.TYPE] = ElementType.CHARACTER_KEY;
    spec[SpecNodeName.CHARACTERS] = keyCharacters[i];
    spec[SpecNodeName.KEY_CODE] = keyCodes[i];
    var key = i18n.input.chrome.inputview.content.util.createKey(spec);
    keyList.push(key);
  }

  i18n.input.chrome.inputview.content.util.insertModifierKeys_(keyList,
      is102, opt_compactKeyboardId);
  for (var i = 0; i < keyList.length; i++) {
    var key = keyList[i];
    mapping[key['spec'][SpecNodeName.ID]] = viewIdPrefix + i;
  }
  var layout = is102 ? '102kbd' : '101kbd';
  var result = [];
  result[SpecNodeName.KEY_LIST] = keyList;
  result[SpecNodeName.MAPPING] = mapping;
  result[SpecNodeName.LAYOUT] = layout;
  result[SpecNodeName.HAS_ALTGR_KEY] = hasAltGrKey;
  result[SpecNodeName.HAS_COMPACT_KEYBOARD] = !!opt_compactKeyboardId;
  result[SpecNodeName.SHOW_MENU_KEY] = true;
  return result;
};


/**
 * Creates a switcher key which will switch between keyboards.
 *
 * @param {string} id The id.
 * @param {string} name The name.
 * @param {string|undefined} toKeyset The id of keyset this swicher key should
 *     switch to.
 * @param {string} toKeysetName The name of the keyset.
 * @param {string=} opt_iconCssClass The css class for the icon.
 * @param {boolean=} opt_record True to record and next time the keyset will
 *     be recalled.
 * @return {!Object} The switcher key.
 */
i18n.input.chrome.inputview.content.util.createSwitcherKey = function(
    id, name, toKeyset, toKeysetName, opt_iconCssClass, opt_record) {
  var spec = {};
  spec[SpecNodeName.ID] = id;
  spec[SpecNodeName.NAME] = name;
  spec[SpecNodeName.TO_KEYSET] = toKeyset;
  spec[SpecNodeName.TO_KEYSET_NAME] = toKeysetName;
  spec[SpecNodeName.ICON_CSS_CLASS] = opt_iconCssClass;
  spec[SpecNodeName.TYPE] = ElementType.SWITCHER_KEY;
  spec[SpecNodeName.RECORD] = !!opt_record;
  return i18n.input.chrome.inputview.content.util.createKey(spec);
};


/**
 * Inserts modifier keys into the key list.
 *
 * @param {!Array.<!Object>} keyList The key list.
 * @param {boolean} is102 True if it is a 102 keyboard.
 * @param {string=} opt_compactKeyboardId The compact keyboard id.
 * @private
 */
i18n.input.chrome.inputview.content.util.insertModifierKeys_ = function(
    keyList, is102, opt_compactKeyboardId) {
  goog.array.insertAt(keyList, i18n.input.chrome.inputview.content.util.
      createBackspaceKey(), 13);
  goog.array.insertAt(keyList, i18n.input.chrome.inputview.content.util.
      createTabKey(), 14);
  goog.array.insertAt(keyList, i18n.input.chrome.inputview.content.util.
      createCapslockKey(), is102 ? 27 : 28);
  goog.array.insertAt(keyList, i18n.input.chrome.inputview.content.util.
      createEnterKey(), 40);
  goog.array.insertAt(keyList, i18n.input.chrome.inputview.content.util.
      createShiftKey(true), 41);
  keyList.push(i18n.input.chrome.inputview.content.util.createShiftKey(false));
  i18n.input.chrome.inputview.content.util.addLastRowKeys(
      keyList, is102, opt_compactKeyboardId);
};


/**
 * Inserts modifier keys into the key list.
 *
 * @param {!Array.<!Object>} keyList The key list.
 * @param {boolean} is102 True if it is a 102 keyboard.
 * @param {string=} opt_compactKeyboardId The compact keyboard id.
 */
i18n.input.chrome.inputview.content.util.addLastRowKeys =
    function(keyList, is102, opt_compactKeyboardId) {
  keyList.push(i18n.input.chrome.inputview.content.util.createGlobeKey());
  keyList.push(i18n.input.chrome.inputview.content.util.createMenuKey(
      opt_compactKeyboardId));
  keyList.push(i18n.input.chrome.inputview.content.util.createCtrlKey());
  keyList.push(i18n.input.chrome.inputview.content.util.createAltKey());
  keyList.push(i18n.input.chrome.inputview.content.util.createSpaceKey());
  keyList.push(i18n.input.chrome.inputview.content.util.createAltgrKey());
  keyList.push(i18n.input.chrome.inputview.content.util.createArrowKey(
      i18n.input.chrome.inputview.Direction.LEFT));
  keyList.push(i18n.input.chrome.inputview.content.util.createArrowKey(
      i18n.input.chrome.inputview.Direction.RIGHT));
  keyList.push(i18n.input.chrome.inputview.content.util.
      createHideKeyboardKey());
};
});  // goog.scope
