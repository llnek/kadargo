/*Auto generated by Kirby v1.0.0 - Wed Feb 07 2018 03:11:06 GMT-0800 (PST)
  

*/

const K = require("kirby");
const conj_BANG = K["conj_BANG"];
const kirbystdlibref = require("kirby");
const __module_namespace__ = "czlab.elmo.core.CCSX";
////////////////////////////////////////////////////////////////////////////////
//fn: [popScene] in file: CCSX.ky, line: 18
const popScene = function() {
  return cc.director.popScene();
};
////////////////////////////////////////////////////////////////////////////////
//fn: [randomPos] in file: CCSX.ky, line: 21
const randomPos = function(node) {
  let GS__3 = visBox();
  let right = kirbystdlibref.getProp(GS__3, "right");
  let top = kirbystdlibref.getProp(GS__3, "top");
  return node.setPosition(randInt(right), randInt(top));
};
////////////////////////////////////////////////////////////////////////////////
//fn: [mkHMenu] in file: CCSX.ky, line: 26
const mkHMenu = function(items, pad) {
  return mkMenu(items, false, pad);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [mkVMenu] in file: CCSX.ky, line: 29
const mkVMenu = function(items, pad) {
  return mkMenu(items, true, pad);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [mkMenu] in file: CCSX.ky, line: 32
//Menu-items should be same size
const mkMenu = function(items, vert_QMRK, pad) {
  let menu = cc.Menu.create();
  items.forEach(function() {
    let ____args = Array.prototype.slice.call(arguments);
    return menu.addChild(____args[0]);
  });
  if (vert_QMRK) {
    menu.alignItemsVerticallyWithPadding(pad);
  } else {
    menu.alignItemsHorizontallyWithPadding(pad);
  }
  return menu;
};
////////////////////////////////////////////////////////////////////////////////
//fn: [menuOneItem] in file: CCSX.ky, line: 43
const menuOneItem = function(item) {
  return (function() {
    let GS__4 = cc.Menu.create();
    GS__4.addChild(item);
    GS__4.setPosition(0, 0);
    GS__4.setAnchorPoint(_STAR_anchor_DASH_bl_STAR);
    return GS__4;
  }).call(this);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [isDesktop] in file: CCSX.ky, line: 50
const isDesktop = function() {
  return (function() {
    throw new Error("TBD");
  }).call(this);
};
////////////////////////////////////////////////////////////////////////////////
//fn: [splitHexColor] in file: CCSX.ky, line: 53
const splitHexColor = function(rgbstr) {
  let f = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  let s = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/;
  let len = kirbystdlibref.count(rgbstr);
  let arr = (f.exec(rgbstr) || s.exec(rgbstr));
  return null;
};
module.exports = {
  da57bc0172fb42438a11e6e8778f36fb: {
    ns: "czlab.elmo.core.CCSX",
    macros: {}
  },
  popScene: popScene,
  randomPos: randomPos,
  mkHMenu: mkHMenu,
  mkVMenu: mkVMenu,
  menuOneItem: menuOneItem,
  isDesktop: isDesktop,
  splitHexColor: splitHexColor
};