'use strict';

module.exports = mix;

function mix (r, s, or, cl) {
  if (!s || !r) {
    return r;
  }

  var i = 0,
    c, len;

  or = or || or === undefined;

  if (cl && (len = cl.length)) {
    for (; i < len; i++) {
      c = cl[i];
      if ((c in s) && (or || !(c in r))) {
        r[c] = s[c];
      }
    }
  } else {
    for (c in s) {
      if (or || !(c in r)) {
        r[c] = s[c];
      }
    }
  }
  return r;
};
