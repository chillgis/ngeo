/**
 * @module gmf
 */
goog.provide('gmf');

goog.require('ngeo');


/** @type {!angular.Module} */
gmf.module = angular.module('gmf', [
  ngeo.module.name, 'gettext', 'ngAnimate', 'ngTouch', 'ngSanitize',
  'tmh.dynamicLocale', 'ui.date', 'ui.slider'
]);

gmf.module.config(['tmhDynamicLocaleProvider', 'angularLocaleScript',
  /**
   * @param {tmhDynamicLocaleProvider} tmhDynamicLocaleProvider
   * @param {string} angularLocaleScript the script.
   */
  function(tmhDynamicLocaleProvider, angularLocaleScript) {
    // configure the script URL
    tmhDynamicLocaleProvider.localeLocationPattern(angularLocaleScript);
  }
]);

/**
 * The default template based URL, used as it by the template cache.
 * @type {string}
 */
gmf.baseTemplateUrl = 'gmf';


/**
 * @const
 * @export
 */
gmf.DATALAYERGROUP_NAME = 'data';

/**
 * @const
 * @export
 */
gmf.COORDINATES_LAYER_NAME = 'gmfCoordinatesLayerName';


/**
 * @enum {string}
 */
gmf.PermalinkParam = {
  BG_LAYER: 'baselayer_ref',
  FEATURES: 'rl_features',
  MAP_CROSSHAIR: 'map_crosshair',
  MAP_TOOLTIP: 'map_tooltip',
  MAP_X: 'map_x',
  MAP_Y: 'map_y',
  MAP_Z: 'map_zoom',
  TREE_GROUPS: 'tree_groups',
  WFS_LAYER: 'wfs_layer',
  WFS_NGROUPS: 'wfs_ngroups',
  WFS_SHOW_FEATURES: 'wfs_showFeatures'
};
