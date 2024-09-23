var wms_layers = [];


        var lyr_CouchedebasePositron_0 = new ol.layer.Tile({
            'title': 'Couche de base (Positron)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Occupationdusolde2021_1 = new ol.format.GeoJSON();
var features_Occupationdusolde2021_1 = format_Occupationdusolde2021_1.readFeatures(json_Occupationdusolde2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Occupationdusolde2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Occupationdusolde2021_1.addFeatures(features_Occupationdusolde2021_1);
var lyr_Occupationdusolde2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Occupationdusolde2021_1, 
                style: style_Occupationdusolde2021_1,
                popuplayertitle: "Occupation du sol de 2021",
                interactive: true,
    title: 'Occupation du sol de 2021<br />\
    <img src="styles/legend/Occupationdusolde2021_1_0.png" /> eau<br />\
    <img src="styles/legend/Occupationdusolde2021_1_1.png" /> sol nu<br />\
    <img src="styles/legend/Occupationdusolde2021_1_2.png" /> empreinte urbaine<br />\
    <img src="styles/legend/Occupationdusolde2021_1_3.png" /> végétation<br />'
        });
var format_Localits_2 = new ol.format.GeoJSON();
var features_Localits_2 = format_Localits_2.readFeatures(json_Localits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_2.addFeatures(features_Localits_2);
var lyr_Localits_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_2, 
                style: style_Localits_2,
                popuplayertitle: "Localités",
                interactive: true,
                title: '<img src="styles/legend/Localits_2.png" /> Localités'
            });
var format_Limitesdesdpartements_3 = new ol.format.GeoJSON();
var features_Limitesdesdpartements_3 = format_Limitesdesdpartements_3.readFeatures(json_Limitesdesdpartements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdesdpartements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdesdpartements_3.addFeatures(features_Limitesdesdpartements_3);
var lyr_Limitesdesdpartements_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdesdpartements_3, 
                style: style_Limitesdesdpartements_3,
                popuplayertitle: "Limites des départements",
                interactive: true,
                title: '<img src="styles/legend/Limitesdesdpartements_3.png" /> Limites des départements'
            });
var format_DlimitationduSngal_4 = new ol.format.GeoJSON();
var features_DlimitationduSngal_4 = format_DlimitationduSngal_4.readFeatures(json_DlimitationduSngal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DlimitationduSngal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DlimitationduSngal_4.addFeatures(features_DlimitationduSngal_4);
var lyr_DlimitationduSngal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DlimitationduSngal_4, 
                style: style_DlimitationduSngal_4,
                popuplayertitle: "Délimitation du Sénégal",
                interactive: true,
                title: '<img src="styles/legend/DlimitationduSngal_4.png" /> Délimitation du Sénégal'
            });
var format_Verbatims_5 = new ol.format.GeoJSON();
var features_Verbatims_5 = format_Verbatims_5.readFeatures(json_Verbatims_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbatims_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbatims_5.addFeatures(features_Verbatims_5);
var lyr_Verbatims_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbatims_5, 
                style: style_Verbatims_5,
                popuplayertitle: "Verbatims",
                interactive: true,
                title: '<img src="styles/legend/Verbatims_5.png" /> Verbatims'
            });
var format_Vuesdeterrain_6 = new ol.format.GeoJSON();
var features_Vuesdeterrain_6 = format_Vuesdeterrain_6.readFeatures(json_Vuesdeterrain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vuesdeterrain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vuesdeterrain_6.addFeatures(features_Vuesdeterrain_6);
var lyr_Vuesdeterrain_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vuesdeterrain_6, 
                style: style_Vuesdeterrain_6,
                popuplayertitle: "Vues de terrain",
                interactive: true,
                title: '<img src="styles/legend/Vuesdeterrain_6.png" /> Vues de terrain'
            });

lyr_CouchedebasePositron_0.setVisible(true);lyr_Occupationdusolde2021_1.setVisible(true);lyr_Localits_2.setVisible(true);lyr_Limitesdesdpartements_3.setVisible(true);lyr_DlimitationduSngal_4.setVisible(true);lyr_Verbatims_5.setVisible(true);lyr_Vuesdeterrain_6.setVisible(true);
var layersList = [lyr_CouchedebasePositron_0,lyr_Occupationdusolde2021_1,lyr_Localits_2,lyr_Limitesdesdpartements_3,lyr_DlimitationduSngal_4,lyr_Verbatims_5,lyr_Vuesdeterrain_6];
lyr_Occupationdusolde2021_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'superficie': 'superficie', 'sup_hect': 'sup_hect', 'classes': 'classes', 'Taux': 'Taux de couverture (%)', });
lyr_Localits_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'Nom': 'Nom', });
lyr_Limitesdesdpartements_3.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'Nom', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'area': 'area', });
lyr_DlimitationduSngal_4.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_Verbatims_5.set('fieldAliases', {'Verbatim': 'Verbatim', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'document': 'document', });
lyr_Vuesdeterrain_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Path': 'Path', 'RelPath': 'RelPath', 'Images': 'Images', 'Label': 'Titre', });
lyr_Occupationdusolde2021_1.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'superficie': 'Hidden', 'sup_hect': 'Hidden', 'classes': 'TextEdit', 'Taux': 'TextEdit', });
lyr_Localits_2.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'population': 'Hidden', 'Nom': 'TextEdit', });
lyr_Limitesdesdpartements_3.set('fieldImages', {'GID_2': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', 'area': 'Hidden', });
lyr_DlimitationduSngal_4.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_Verbatims_5.set('fieldImages', {'Verbatim': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'y_proj': 'Hidden', 'x_proj': 'Hidden', 'document': 'TextEdit', });
lyr_Vuesdeterrain_6.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Name': 'Hidden', 'Date': 'Hidden', 'Time': 'Hidden', 'Lon': 'Hidden', 'Lat': 'Hidden', 'Path': 'ExternalResource', 'RelPath': 'Hidden', 'Images': 'Hidden', 'Label': 'TextEdit', });
lyr_Occupationdusolde2021_1.set('fieldLabels', {'classes': 'inline label - always visible', 'Taux': 'inline label - always visible', });
lyr_Localits_2.set('fieldLabels', {'Nom': 'inline label - always visible', });
lyr_Limitesdesdpartements_3.set('fieldLabels', {'NAME_2': 'hidden field', });
lyr_DlimitationduSngal_4.set('fieldLabels', {});
lyr_Verbatims_5.set('fieldLabels', {'Verbatim': 'inline label - always visible', 'document': 'inline label - always visible', });
lyr_Vuesdeterrain_6.set('fieldLabels', {'Path': 'no label', 'Label': 'inline label - always visible', });
lyr_Vuesdeterrain_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});