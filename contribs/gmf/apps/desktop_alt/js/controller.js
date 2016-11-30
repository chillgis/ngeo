/**
 * Application entry point.
 *
 * This file defines the "app_desktop" Closure namespace, which is be used as
 * the Closure entry point (see "closure_entry_point" in the "build.json"
 * file).
 *
 * This file includes `goog.require`'s for all the components/directives used
 * by the HTML page and the controller to provide the configuration.
 */
goog.provide('app.AlternativeDesktopController');
goog.provide('app_desktop_alt');

goog.require('app');
goog.require('gmf.AbstractDesktopController');
/** @suppress {extraRequire} */
goog.require('ngeo.proj.EPSG2056');
/** @suppress {extraRequire} */
goog.require('ngeo.proj.EPSG21781');


gmf.module.value('ngeoQueryOptions', {
  'limit': 20,
  'queryCountFirst': true
});

/**
 * @param {angular.Scope} $scope Scope.
 * @param {angular.$injector} $injector Main injector.
 * @param {ngeo.File} ngeoFile The file service.
 * @param {angular.$q} $q Angular $q.
 * @constructor
 * @extends {gmf.AbstractDesktopController}
 * @ngInject
 * @export
 */
app.AlternativeDesktopController = function($scope, $injector, ngeoFile, $q) {
  gmf.AbstractDesktopController.call(this, {
    srid: 21781,
    mapViewConfig: {
      center: [632464, 185457],
      zoom: 3,
      resolutions: [250, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
    }
  }, $scope, $injector);

  /**
   * @type {Array.<string>}
   * @export
   */
  this.searchCoordinatesProjections = ['EPSG:21781', 'EPSG:2056', 'EPSG:4326'];

  /**
   * @type {boolean}
   * @export
   */
  this.showInfobar = true;

  /**
   * @type {!Array.<number>}
   * @export
   */
  this.scaleSelectorValues = [250000, 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 250, 100, 50];

  /**
   * @type {Array.<string>}
   * @export
   */
  this.elevationLayers = ['srtm'];

  /**
   * @type {Object.<string, gmfx.ProfileLineConfiguration>}
   * @export
   */
  this.profileLinesconfiguration = {
    'srtm': {}
  };

  /**
   * @type {Array.<gmfx.MousePositionProjection>}
   * @export
   */
  this.mousePositionProjections = [{
    code: 'EPSG:2056',
    label: 'CH1903+ / LV03',
    filter: 'ngeoNumberCoordinates::{x}, {y} m'
  }, {
    code: 'EPSG:21781',
    label: 'CH1903 / LV03',
    filter: 'ngeoNumberCoordinates::{x}, {y} m'
  }, {
    code: 'EPSG:4326',
    label: 'WGS84',
    filter: 'ngeoDMSCoordinates:2'
  }];

  /**
   * @type {gmfx.GridMergeTabs}
   * @export
   */
  this.gridMergeTabs = {
    'merged_osm_times': ['110', '126', '147']
  };

  // Allow angular-gettext-tools to collect the strings to translate
  /** @type {angularGettext.Catalog} */
  var gettextCatalog = $injector.get('gettextCatalog');
  gettextCatalog.getString('merged_osm_times');
  gettextCatalog.getString('Add a theme');
  gettextCatalog.getString('Add a sub theme');
  gettextCatalog.getString('Add a layer');

  /**
   * @export
   */
  this.importOptions = {
    'urls': [
      'https://wms.geo.admin.ch/',
      'http://ogc.heig-vd.ch/mapserver/wms',
      'http://owsproxy.lgl-bw.de/owsproxy/ows/WMS_Maps4BW',
      'https://www.gis.stadt-zuerich.ch/maps/services/wms/WMS-ZH-STZH-OGD/MapServer/WMSServer',
      'https://wms.geo.gl.ch/',
      'http://mapserver1.gr.ch/wms/admineinteilung',
      'http://mapserver1.gr.ch/wms/belastetestandorte',
      'http://mapserver1.gr.ch/wms/beweidbareflaechen',
      'http://mapserver1.gr.ch/wms/generellererschliessungsplan',
      'http://mapserver1.gr.ch/wms/generellergestaltungsplan',
      'http://mapserver1.gr.ch/wms/gewaesserschutz',
      'http://mapserver1.gr.ch/wms/grundlagen_richtplanung',
      'http://mapserver1.gr.ch/wms/grundwasser',
      'http://mapserver1.gr.ch/wms/historischekarten',
      'http://mapserver1.gr.ch/wms/naturgefahren_erfassungsbereiche',
      'http://mapserver1.gr.ch/wms/naturschutz',
      'http://mapserver1.gr.ch/wms/regionen',
      'http://mapserver1.gr.ch/wms/seilbahnen',
      'http://mapserver1.gr.ch/wms/amtlichevermessung_stand',
      'http://mapserver1.gr.ch/wms/wildruhezonen',
      'http://mapserver1.gr.ch/wms/wildschutzgebiete',
      'http://mapserver1.gr.ch/wms/zonenplan',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_geologie.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_gewaesser.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_grundlagen.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_natgef.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_oeko.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_richt.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_verkehr.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_wander.wms',
      'http://www.sogis1.so.ch/wms/avwms',
      'http://www.sogis1.so.ch/wms/grundbuchplan',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_orthofoto.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_bpav.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_strassenkarte.wms',
      'http://www.sogis1.so.ch/cgi-bin/sogis/sogis_dtm_dom.wms',
      'http://www.sogis1.so.ch/wms/wms_lidar',
      'http://wms.vd.ch/public/services/VD_WMS/Mapserver/Wmsserver',
      'https://wms.geo.bs.ch/wmsBS',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_flaechenwidmung_v_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_luftbilder_r_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_hoehen_und_gelaende_r_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_relief_r_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_historischekarten_r_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_naturschutz_v_wms.map',
      'http://vogis.cnv.at/mapserver/mapserv?map=i_topographie_r_wms.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_100000.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_25000.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_250000.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/DTM_20M.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Rete_ferroviaria.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/Vettoriali/Rete_stradale.map',
      'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/ortofoto_colore_06.map',
      'https://wms.zh.ch/ArchWMS',
      'https://wms.zh.ch/TBA9ZHWMS',
      'https://wms.zh.ch/TbaBaustellenZHWMS',
      'https://wms.zh.ch/TBAAnlagenZHWMS',
      'https://wms.zh.ch/DenkmalschutzWMS',
      'https://wms.zh.ch/HaltestellenZHWMS',
      'https://wms.zh.ch/WaldWNBZHWMS',
      'https://wms.zh.ch/OrtsbildschutzZHWMS',
      'https://wms.zh.ch/FnsLRKZHWMS',
      'https://wms.zh.ch/WaldSWZHWMS',
      'https://wms.zh.ch/TBAStr3ZHWMS',
      'https://wms.zh.ch/TBAStr2ZHWMS',
      'https://wms.zh.ch/TBAStr1ZHWMS',
      'https://wms.zh.ch/ZVVZHWMS',
      'https://wms.zh.ch/AFVTempo30ZHWMS',
      'https://wms.zh.ch/WaldVKWMS',
      'https://wms.zh.ch/VeloinfrastrukturZHWMS',
      'https://wms.zh.ch/VelonetzZHWMS',
      'https://wms.zh.ch/VeloparkieranlagenZHWMS',
      'https://wms.zh.ch/TBAVMSZHWMS',
      'https://wms.zh.ch/WaldarealZHWMS',
      'https://wms.zh.ch/WildkarteZHWMS',
      'https://wms.zh.ch/FnsLWZHWMS',
      'https://wms.zh.ch/FNSOEQVZHWMS',
      'https://wms.zh.ch/FNSLRPZHWMS',
      'https://wms.zh.ch/FnsSVOZHWMS',
      'https://wms.zh.ch/FnsInvZHWMS',
      'https://wms.zh.ch/kkgeo_gws_zh',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_basiswms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_grenzenwms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_planungwms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_umweltwms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_geologiewms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_gewaesserwms_d_fk/MapServer/WMSServer?',
      'http://www.geoservice.apps.be.ch/geoservice2/services/a42geo/a42geo_transportwms_d_fk/MapServer/WMSServer?',
      'https://wms.geo.gr.ch/admineinteilung',
      'https://wms.geo.gr.ch/bauzonen_graubuenden',
      'https://wms.geo.gr.ch/belastetestandorte',
      'https://wms.geo.gr.ch/beweidbareflaechen',
      'https://wms.geo.gr.ch/generellererschliessungsplan',
      'https://wms.geo.gr.ch/generellergestaltungsplan',
      'https://wms.geo.gr.ch/gewaesserschutz',
      'https://wms.geo.gr.ch/grundwasser',
      'https://wms.geo.gr.ch/historischekarten',
      'https://wms.geo.gr.ch/landwirtschaft',
      'https://wms.geo.gr.ch/naturgefahren_erfassungsbereiche',
      'https://wms.geo.gr.ch/naturschutz',
      'https://wms.geo.gr.ch/rrip_bregaglia',
      'https://wms.geo.gr.ch/rrip_davos',
      'https://wms.geo.gr.ch/rrip_mesolcina',
      'https://wms.geo.gr.ch/rrip_mittelbuenden',
      'https://wms.geo.gr.ch/rrip_nordbuenden',
      'https://wms.geo.gr.ch/rrip_oberengadin',
      'https://wms.geo.gr.ch/rrip_praettigau',
      'https://wms.geo.gr.ch/rrip_unterengadin',
      'https://wms.geo.gr.ch/rrip_regioviamala',
      'https://wms.geo.gr.ch/regionen',
      'https://wms.geo.gr.ch/schutzwald',
      'https://wms.geo.gr.ch/seilbahnen',
      'https://wms.geo.gr.ch/amtlichevermessung_stand',
      'https://wms.geo.gr.ch/verbauungen',
      'https://wms.geo.gr.ch/waldentwicklungsplan',
      'https://wms.geo.gr.ch/wildruhezonen',
      'https://wms.geo.gr.ch/wildschutzgebiete',
      'https://wms.geo.gr.ch/zonenplan',
      'https://wms.geo.gr.ch/richtplan',
      'https://wms.geo.gr.ch/uebersichtsplan',
      'http://webdienste.zugmap.ch/basisplan_sw/service.svc/get',
      'http://webdienste.zugmap.ch/basisplan_farbig/service.svc/get',
      'http://webdienste.zugmap.ch/kkgeo_gws_zg/service.svc/get',
      'http://webdienste.zugmap.ch/Landwirtschaft_Naturschutz/service.svc/get',
      'http://webdienste.zugmap.ch/luftbild2011/service.svc/get',
      'http://webdienste.zugmap.ch/luftbildplus/service.svc/get',
      'http://webdienste.zugmap.ch/ortsplan/service.svc/get',
      'http://webdienste.zugmap.ch/Zonenplan_WMS/service.svc/get',
      'http://service.lisag.ch/wms',
      'http://wms.geoportal.ch:8080/geoserver/AVAI/wms',
      // non-SwissProjected test urls
      'http://wms.ga.admin.ch/1GE',
      'http://wms.ga.admin.ch/LG_DE_Geologie_und_Tektonik/wms',
      'http://discomap.eea.europa.eu/arcgis/services/Land/CLC2000_Dyna_WM/MapServer/WMSServer',
      'http://eumetview.eumetsat.int/geoserver/wms',
      'http://eusoils.jrc.ec.europa.eu/wrb/wms_Threats.asp',
      'http://osm.omniscale.net/proxy/service',
      'https://ows.terrestris.de/osm/service',
      'https://ows.terrestris.de/osm-gray/service',
      'http://www.webatlasde.de/arcgis/services/Maps4BW/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000017900001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000017400001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000016900001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000013500001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000013300001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000017100001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000013400001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000013600001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000013100001/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000001500003/MapServer/WMSServer',
      'http://rips-gdi.lubw.baden-wuerttemberg.de/arcgis/services/wms/UIS_0100000004200001/MapServer/WMSServer'
    ],
    //'isValidUrl': gaUrlUtils.isValid,
    //'getOlLayerFromGetCapLayer': gaWms.getOlLayerFromGetCapLayer,
    //'addPreviewLayer': function(map, layer) {
    //  gaPreviewLayers.addGetCapWMSLayer(map, layer);
    //},
    //'removePreviewLayer': gaPreviewLayers.removeAll,
    //'transformExtent': gaMapUtils.intersectWithDefaultExtent,
    //'transformUrl': function(url) {
    //  // Transform the url before loading it.
    //  if (/(wms|service\.svc|osm)/i.test(url)) {
    //    // Append WMS GetCapabilities default parameters
    //    url = gaUrlUtils.append(url,
    //        'SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0');

    //    // Use lang param only for admin.ch servers
    //    if (/admin\.ch/.test(url)) {
    //      url = gaUrlUtils.append(url, 'lang=' + gaLang.get());
    //    }
    //  }
    //  return gaUrlUtils.proxifyUrl(url);
    //},
    'handleFileContent': (
      /** Manage data depending on the content
       * @param data<String> Content of the file.
       * @param file<Object> Informations of the file (if available).
       */
      function(data, file) {
        var defer = $q.defer();
        $scope.gpxContent = null;
        $scope.kmlContent = null;
        $scope.wmsGetCap = null;
        $scope.wmtsGetCap = null;
        file = file || {};

        if (ngeoFile.isWmsGetCap(data)) {
          $scope.wmsGetCap = data;
          defer.resolve({
            message: 'upload_succeeded'
          });
        } else if (ngeoFile.isKml(data)) {

          //gaKml.addKmlToMap($scope.map, data, {
          //  url: file.name,
          //  useImageVector: gaKml.useImageVector(file.size),
          //  zoomToExtent: true

          //}).then(function() {
          //  defer.resolve({
          //    message: 'parse_succeeded'
          //  });

          //}, function(reason) {
          //  $window.console.error('KML parsing failed: ', reason);
          //  defer.reject({
          //    message: 'parse_failed',
          //    reason: reason
          //  });

          //}, function(evt) {
          //  defer.notify(evt);
          //});
          defer.reject({
            message: 'parse_failed',
            reason: 'not_implemented_yet'
          });

        } else {

          console.error('Unparseable content: ', data);
          defer.reject({
            message: 'parse_failed',
            reason: 'format_not_supported'
          });
        }
        // WMTS
        // GPX

        return defer.promise;
      }
    )
  };
};
ol.inherits(app.AlternativeDesktopController, gmf.AbstractDesktopController);


app.module.controller('AlternativeDesktopController', app.AlternativeDesktopController);
