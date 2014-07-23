goog.provide('i18n.input.chrome.inputview.elements.content.KeyboardView');

goog.require('goog.dom.classlist');
goog.require('goog.object');
goog.require('i18n.input.chrome.inputview.Css');
goog.require('i18n.input.chrome.inputview.elements.ElementType');
goog.require('i18n.input.chrome.inputview.elements.layout.VerticalLayout');


goog.scope(function() {
var layout = i18n.input.chrome.inputview.elements.layout;
var content = i18n.input.chrome.inputview.elements.content;
var ElementType = i18n.input.chrome.inputview.elements.ElementType;



/**
 * The layout view.
 *
 * @param {string} id The id.
 * @param {goog.events.EventTarget=} opt_eventTarget The event target.
 * @constructor
 * @extends {layout.VerticalLayout}
 */
content.KeyboardView = function(id, opt_eventTarget) {
  goog.base(this, id, opt_eventTarget, ElementType.LAYOUT_VIEW);
};
goog.inherits(content.KeyboardView, layout.VerticalLayout);
var KeyboardView = content.KeyboardView;


/**
 * The maps of all the soft key view.
 *
 * @type {!Object.<string, !layout.SoftKeyView>}
 * @private
 */
KeyboardView.prototype.softKeyViewMap_;


/**
 * The soft key map.
 * Key: The character belongs to this key.
 *
 * @type {!Object.<string, !content.SoftKey>}
 * @private
 */
KeyboardView.prototype.softKeyMap_;


/**
 * The mapping between soft key view id and soft key id.
 *
 * @type {!Object.<string, string>}
 * @private
 */
KeyboardView.prototype.mapping_;


/**
 * The squared factor of the key width * key width. Assumes key1 and key2
 * here, if the squared distance from the center of the key2 to the nearest
 * edge of key1 is less than this factor * key1 width * key1 width, we
 * take key2 as the nearby key of key1.
 *
 * @type {number}
 * @private
 */
KeyboardView.SQUARED_NEARBY_FACTOR_ = 1.2;


/** @override */
KeyboardView.prototype.createDom = function() {
  goog.base(this, 'createDom');

  var elem = this.getElement();
  goog.dom.classlist.add(elem, i18n.input.chrome.inputview.Css.LAYOUT_VIEW);
};


/**
 * Sets up this keyboard view.
 *
 * @param {!Array.<content.SoftKey>} softKeyList The soft
 *     key map.
 * @param {!Object.<string, layout.SoftKeyView>} softKeyViewMap The soft key
 *     view map.
 * @param {!Object.<string, string>} mapping The mapping from soft key id
 *     to soft key view id.
 */
KeyboardView.prototype.setUp = function(softKeyList, softKeyViewMap, mapping) {
  this.softKeyMap_ = {};
  this.softKeyViewMap_ = softKeyViewMap;
  this.mapping_ = mapping;

  for (var i = 0; i < softKeyList.length; i++) {
    var sk = softKeyList[i];
    var skv = this.softKeyViewMap_[mapping[sk.id]];
    if (skv) {
      skv.bindSoftKey(sk);
    }
    this.softKeyMap_[sk.id] = sk;
  }
};


/**
 * Gets the soft key whose id is equal to the code.
 *
 * @param {string} code The code of the key.
 * @return {content.SoftKey} The soft key.
 */
KeyboardView.prototype.getViewForKey = function(code) {
  if (code) {
    return this.softKeyMap_[code];
  }
  return null;
};


/**
 * Sets up the nearby keys mapping for each non-Functional key.
 *
 * @private
 */
KeyboardView.prototype.setUpNearbyKeys_ = function() {
  var softKeys = goog.object.getValues(this.softKeyMap_);
  for (var i = 0; i < softKeys.length; i++) {
    var key1 = softKeys[i];
    if (!this.isQualifiedForSpatial_(key1)) {
      continue;
    }
    for (var j = i + 1; j < softKeys.length; j++) {
      var key2 = softKeys[j];
      if (this.isQualifiedForSpatial_(key2) && this.isNearby(key1, key2)) {
        // We assume that if key2 is a nearby key for key1, then key1 is
        // also a nearby key for key2.
        key1.nearbyKeys.push(key2);
        key2.nearbyKeys.push(key1);
      }
    }
  }
};


/**
 * We only consider character key or compact key to be qualified for spatial
 * module.
 *
 * @param {!content.SoftKey} key .
 * @return {boolean} .
 * @private
 */
KeyboardView.prototype.isQualifiedForSpatial_ = function(key) {
  return key.type == ElementType.CHARACTER_KEY ||
      key.type == ElementType.COMPACT_KEY;
};


/**
 * Checks if key2 is near key1, the algorithm is:
 * 1. Finds out the nearest edge point of key1 to the center of key2.
 * 2. Calculate the distance from the center of key2 to the nearest edge point.
 * 3. If the distance is less than the factor(1.2) * key1 width * key1 width,
 *     the key2 is nearby key1.
 *
 * @param {!content.SoftKey} key1 .
 * @param {!content.SoftKey} key2 .
 * @return {boolean} .
 */
KeyboardView.prototype.isNearby = function(key1, key2) {
  var key2Center = key2.centerCoordinate;
  var key1Left = key1.topLeftCoordinate.x;
  var key1Right = key1Left + key1.width;
  var key1Top = key1.topLeftCoordinate.y;
  var key1Bottom = key1Top + key1.height;
  var edgeX = key2Center.x < key1Left ? key1Left : (key2Center.x > key1Right ?
      key1Right : key2Center.x);
  var edgeY = key2Center.y < key1Top ? key1Top : (key2Center.y > key1Bottom ?
      key1Bottom : key2Center.y);
  var dx = key2Center.x - edgeX;
  var dy = key2Center.y - edgeY;
  return (dx * dx + dy * dy) < KeyboardView.
      SQUARED_NEARBY_FACTOR_ * (key1.availableWidth * key1.availableWidth);
};


/** @override */
KeyboardView.prototype.resize = function(width, height) {
  goog.base(this, 'resize', width, height);

  this.setUpNearbyKeys_();
};

});  // goog.scope
