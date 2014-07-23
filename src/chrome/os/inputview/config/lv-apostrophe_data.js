goog.require('i18n.input.chrome.inputview.content.util');

(function() {
  var viewIdPrefix_ = '102kbd-k-';

  var keyCharacters = [
    ['\u0060', '\u007e', '\u00b4', '\u007e'], // TLDE
    ['\u0031', '\u0021', '\u00b9', '\u00a1'], // AE01
    ['\u0032', '\u0040', '\u00b2', '\u215b'], // AE02
    ['\u0033', '\u0023', '\u00b3', '\u00a3'], // AE03
    ['\u0034', '\u0024', '\u20ac', '\u00a2'], // AE04
    ['\u0035', '\u0025', '\u00bd', '\u215c'], // AE05
    ['\u0036', '\u005e', '\u00be', '\u215d'], // AE06
    ['\u0037', '\u0026', '\u007b', '\u215e'], // AE07
    ['\u0038', '\u002a', '\u005b', '\u2122'], // AE08
    ['\u0039', '\u0028', '\u005d', '\u00b1'], // AE09
    ['\u0030', '\u0029', '\u007d', '\u00b0'], // AE10
    ['\u002d', '\u005f', '\u005c', '\u00bf'], // AE11
    ['\u003d', '\u002b', '\u2013', '\u2014'], // AE12
    ['\u0071', '\u0051'], // AD01
    ['\u0077', '\u0057'], // AD02
    ['\u0065', '\u0045', '\u0113', '\u0112'], // AD03
    ['\u0072', '\u0052', '\u0157', '\u0156'], // AD04
    ['\u0074', '\u0054'], // AD05
    ['\u0079', '\u0059'], // AD06
    ['\u0075', '\u0055', '\u016b', '\u016a'], // AD07
    ['\u0069', '\u0049', '\u012b', '\u012a'], // AD08
    ['\u006f', '\u004f', '\u014d', '\u014c'], // AD09
    ['\u0070', '\u0050'], // AD10
    ['\u005b', '\u007b', '\u00ab', '\u201c'], // AD11
    ['\u005d', '\u007d', '\u00bb', '\u201d'], // AD12
    ['\u0061', '\u0041', '\u0101', '\u0100'], // AC01
    ['\u0073', '\u0053', '\u0161', '\u0160'], // AC02
    ['\u0064', '\u0044'], // AC03
    ['\u0066', '\u0046'], // AC04
    ['\u0067', '\u0047', '\u0123', '\u0122'], // AC05
    ['\u0068', '\u0048'], // AC06
    ['\u006a', '\u004a'], // AC07
    ['\u006b', '\u004b', '\u0137', '\u0136'], // AC08
    ['\u006c', '\u004c', '\u013c', '\u013b'], // AC09
    ['\u003b', '\u003a'], // AC10
    ['\u0027', '\u0022'], // AC11
    ['\u005c', '\u007c', '\u0060', '\u02d8'], // BKSL
    ['\u003c', '\u003e', '\u007c', '\u00a6'], // LSGT
    ['\u007a', '\u005a', '\u017e', '\u017d'], // AB01
    ['\u0078', '\u0058'], // AB02
    ['\u0063', '\u0043', '\u010d', '\u010c'], // AB03
    ['\u0076', '\u0056'], // AB04
    ['\u0062', '\u0042'], // AB05
    ['\u006e', '\u004e', '\u0146', '\u0145'], // AB06
    ['\u006d', '\u004d'], // AB07
    ['\u002c', '\u003c', '\u0000', '\u00d7'], // AB08
    ['\u002e', '\u003e', '\u00b7', '\u00f7'], // AB09
    ['\u002f', '\u003f', '\u002f', '\u02d9'], // AB10
    ['\u0020', '\u0020', '\u0027', '\u0020'] // SPCE
  ]; // WARNING: lv-apostrophe layout is 102 keyboard, but key count is 48!

  var keyCodes = [
    0xC0, // TLDE
    0x31, // AE01
    0x32, // AE02
    0x33, // AE03
    0x34, // AE04
    0x35, // AE05
    0x36, // AE06
    0x37, // AE07
    0x38, // AE08
    0x39, // AE09
    0x30, // AE10
    0xBD, // AE11
    0xBB, // AE12
    0x51, // AD01
    0x57, // AD02
    0x45, // AD03
    0x52, // AD04
    0x54, // AD05
    0x59, // AD06
    0x55, // AD07
    0x49, // AD08
    0x4F, // AD09
    0x50, // AD10
    0xDB, // AD11
    0xDD, // AD12
    0x41, // AC01
    0x53, // AC02
    0x44, // AC03
    0x46, // AC04
    0x47, // AC05
    0x48, // AC06
    0x4A, // AC07
    0x4B, // AC08
    0x4C, // AC09
    0xBA, // AC10
    0xDE, // AC11
    0xDC, // BKSL
    0xE2, // LTGT
    0x5A, // AB01
    0x58, // AB02
    0x43, // AB03
    0x56, // AB04
    0x42, // AB05
    0x4E, // AB06
    0x4D, // AB07
    0xBC, // AB08
    0xBE, // AB09
    0xBF, // AB10
    0x20  // SPCE
  ];

  var data = i18n.input.chrome.inputview.content.util.createData(
      keyCharacters, viewIdPrefix_, true, true, keyCodes);
  data['id'] = 'lv-apostrophe';
  google.ime.chrome.inputview.onConfigLoaded(data);
}) ();
