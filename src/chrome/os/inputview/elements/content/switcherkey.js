goog.provide('i18n.input.chrome.inputview.elements.content.SwitcherKey');

goog.require('i18n.input.chrome.inputview.elements.content.FunctionalKey');



goog.scope(function() {
var FunctionalKey = i18n.input.chrome.inputview.elements.content.FunctionalKey;



/**
 * The switcher key which can lead user to a new keyset.
 *
 * @param {string} id The id.
 * @param {!i18n.input.chrome.inputview.elements.ElementType} type The element
 *     type.
 * @param {string} text The text.
 * @param {string} iconCssClass The css class for the icon.
 * @param {string} toKeyset The keyset id.
 * @param {string} toKeysetName The name of the keyset.
 * @param {boolean} record True to record the keyset as the default.
 * @param {goog.events.EventTarget=} opt_eventTarget The event target.
 * @constructor
 * @extends {i18n.input.chrome.inputview.elements.content.FunctionalKey}
 */
i18n.input.chrome.inputview.elements.content.SwitcherKey = function(id, type,
    text, iconCssClass, toKeyset, toKeysetName, record, opt_eventTarget) {
  goog.base(this, id, type, text, iconCssClass, opt_eventTarget);

  /**
   * The id of the key set to go after this switcher key is pressed.
   *
   * @type {string}
   */
  this.toKeyset = toKeyset;

  /**
   * The name of the keyset.
   *
   * @type {string}
   */
  this.toKeysetName = toKeysetName;

  /**
   * True to record this keyset and brings it back next time.
   *
   * @type {boolean}
   */
  this.record = record;
};
goog.inherits(i18n.input.chrome.inputview.elements.content.SwitcherKey,
    FunctionalKey);
var SwitcherKey = i18n.input.chrome.inputview.elements.content.SwitcherKey;


/** @override */
SwitcherKey.prototype.createDom = function() {
  goog.base(this, 'createDom');

  this.setAriaLabel(this.getChromeVoxMessage());
};


/** @override */
SwitcherKey.prototype.getChromeVoxMessage = function() {
  return chrome.i18n.getMessage('SWITCH_TO') + this.toKeysetName;
};

});  // goog.scope
