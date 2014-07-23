goog.provide('i18n.input.chrome.inputview.elements.content.CharacterModel');

goog.require('i18n.input.chrome.inputview.StateType');



goog.scope(function() {



/**
 * The character model.
 *
 * @param {string} character The character.
 * @param {boolean} belongToLetterKey True if this characters belongs to a
 *     letter key.
 * @param {boolean} hasAltGrCharacterInTheKeyset True if this kind of key has
 *     altgr character.
 * @param {boolean} alwaysRenderAltGrCharacter True if always renders the altgr
 *     character.
 * @param {number} stateType The state type for this character.
 * @param {!i18n.input.chrome.inputview.StateManager} stateManager The state
 *     manager.
 * @constructor
 */
i18n.input.chrome.inputview.elements.content.CharacterModel = function(
    character, belongToLetterKey, hasAltGrCharacterInTheKeyset,
    alwaysRenderAltGrCharacter, stateType, stateManager) {

  /**
   * The character.
   *
   * @type {string}
   * @private
   */
  this.character_ = character;

  /**
   * Whether this character is belong to a letter key.
   *
   * @type {boolean}
   * @private
   */
  this.belongToLetterKey_ = belongToLetterKey;

  /**
   * The state.
   *
   * @type {number}
   * @private
   */
  this.stateType_ = stateType;

  /**
   * The state manager.
   *
   * @type {!i18n.input.chrome.inputview.StateManager}
   * @private
   */
  this.stateManager_ = stateManager;

  /**
   * Whether to always renders the altgr character..
   *
   * @type {boolean}
   * @private
   */
  this.alwaysRenderAltGrCharacter_ = alwaysRenderAltGrCharacter;

  /**
   * True if this key set has altgr character.
   *
   * @type {boolean}
   * @private
   */
  this.hasAltGrCharacterInTheKeyset_ = hasAltGrCharacterInTheKeyset;
};
var CharacterModel = i18n.input.chrome.inputview.elements.content.
    CharacterModel;


/**
 * The alignment type.
 *
 * @enum {number}
 */
CharacterModel.AlignType = {
  CENTER: 0,
  CORNER: 1
};


/**
 * The position attributes.
 *
 * @type {!Array.<!Array.<string>>}
 * @private
 */
CharacterModel.CORNERS_ = [
  ['bottom', 'left'],
  ['top', 'left'],
  ['bottom', 'right'],
  ['top', 'right']
];


/**
 * True if this character is highlighed.
 *
 * @return {boolean} True if the character is highlighted.
 */
CharacterModel.prototype.isHighlighted = function() {
  var state = this.stateManager_.getState();
  state = state & (i18n.input.chrome.inputview.StateType.SHIFT |
      i18n.input.chrome.inputview.StateType.ALTGR);
  return this.stateType_ == state;
};


/**
 * True if this character is visible.
 *
 * @return {boolean} True if the character is visible.
 */
CharacterModel.prototype.isVisible = function() {
  if (this.stateType_ == i18n.input.chrome.inputview.StateType.DEFAULT) {
    return !this.stateManager_.hasState(
        i18n.input.chrome.inputview.StateType.ALTGR) && (
        !this.belongToLetterKey_ || !this.stateManager_.hasState(
        i18n.input.chrome.inputview.StateType.SHIFT));
  }
  if (this.stateType_ == i18n.input.chrome.inputview.StateType.SHIFT) {
    return !this.stateManager_.hasState(
        i18n.input.chrome.inputview.StateType.ALTGR) && (
        !this.belongToLetterKey_ || this.stateManager_.hasState(
        i18n.input.chrome.inputview.StateType.SHIFT));
  }
  if ((this.stateType_ & i18n.input.chrome.inputview.StateType.ALTGR) != 0) {
    // AltGr or AltGr+Shift character.
    return this.alwaysRenderAltGrCharacter_ || this.stateManager_.
        hasState(i18n.input.chrome.inputview.StateType.ALTGR);
  }
  return false;
};


/**
 * Gets the reversed case character.
 *
 * @return {string} The reversed character
 * @private
 */
CharacterModel.prototype.toReversedCase_ = function() {
  var reversed;
  if (this.character_.toUpperCase() == this.character_) {
    reversed = this.character_.toLowerCase();
  } else {
    reversed = this.character_.toUpperCase();
  }
  return reversed;
};


/**
 * Gets the content of this character..
 *
 * @return {string} The content.
 */
CharacterModel.prototype.getContent = function() {
  if (this.stateManager_.hasState(
      i18n.input.chrome.inputview.StateType.CAPSLOCK)) {
    return this.toReversedCase_();
  }

  return this.character_;
};


/**
 * True if align the character in the center horizontally.
 *
 * @return {boolean} True to align in the center.
 */
CharacterModel.prototype.isHorizontalAlignCenter = function() {
  if (this.stateType_ == i18n.input.chrome.inputview.StateType.DEFAULT ||
      this.stateType_ == i18n.input.chrome.inputview.StateType.SHIFT) {
    return !this.alwaysRenderAltGrCharacter_ ||
        !this.hasAltGrCharacterInTheKeyset_;
  }

  return false;
};


/**
 * True to align the character in the center vertically.
 *
 * @return {boolean} True to be in the center.
 */
CharacterModel.prototype.isVerticalAlignCenter = function() {
  if (this.stateType_ == i18n.input.chrome.inputview.StateType.DEFAULT ||
      this.stateType_ == i18n.input.chrome.inputview.StateType.SHIFT) {
    return this.belongToLetterKey_;
  }

  return false;
};


/**
 * Gets the attribute for position.
 *
 * @return {!Array.<string>} The attributes.
 */
CharacterModel.prototype.getPositionAttribute = function() {
  var index;
  switch (this.stateType_) {
    case i18n.input.chrome.inputview.StateType.DEFAULT:
      return CharacterModel.CORNERS_[0];
    case i18n.input.chrome.inputview.StateType.SHIFT:
      return CharacterModel.CORNERS_[1];
    case i18n.input.chrome.inputview.StateType.ALTGR:
      return CharacterModel.CORNERS_[2];
    default:
      return CharacterModel.CORNERS_[3];
  }
};


});  // goog.scope

