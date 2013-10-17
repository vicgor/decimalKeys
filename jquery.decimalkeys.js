/*
 * Translate keys "dot", "comma", "slash" (the dot and comma in the russian keyboard layout) и "decimal dot" on the numeric pad
 * 
 *
 */

(function ($) {
    "use strict";

    $.fn.decimalkeys = function (decimal) {
        var keyDown = {
                codes: {
                    '.': 190,
                    ',': 188
                }
            },
            key = keyDown.codes[decimal];
        if (typeof decimal === 'undefined') {
            return this;
        }
        return this.on({
            'keydown.format': function (e) {
                if (188 === e.keyCode || 190 === e.keyCode || 191 === e.keyCode) {
                    e.keyCode = key;
                }
                if (188 === e.which || 190 === e.which || 191 === e.which) {
                    e.which = key;
                }

                return e;
            },

            'keyup.format': function (e) {
                if (188 === e.keyCode || 190 === e.keyCode || 191 === e.keyCode) {
                    e.keyCode = key;
                }
                if (188 === e.which || 190 === e.which || 191 === e.which) {
                    e.which = key;
                }

                return e;
            }
        });
    };
})(jQuery);
