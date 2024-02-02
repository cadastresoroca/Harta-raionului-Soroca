ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4026").setExtent([149443.544555, 315767.620977, 228581.668636, 357243.949416]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UAT_Iintravilan_Soroca_080124_1 = new ol.format.GeoJSON();
var features_UAT_Iintravilan_Soroca_080124_1 = format_UAT_Iintravilan_Soroca_080124_1.readFeatures(json_UAT_Iintravilan_Soroca_080124_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_UAT_Iintravilan_Soroca_080124_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAT_Iintravilan_Soroca_080124_1.addFeatures(features_UAT_Iintravilan_Soroca_080124_1);
var lyr_UAT_Iintravilan_Soroca_080124_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UAT_Iintravilan_Soroca_080124_1, 
                style: style_UAT_Iintravilan_Soroca_080124_1,
                interactive: true,
                title: '<img src="styles/legend/UAT_Iintravilan_Soroca_080124_1.png" /> UAT_ I (intravilan)_Soroca_08.01.24'
            });
var format_UAT_I_Soroca_080124_2 = new ol.format.GeoJSON();
var features_UAT_I_Soroca_080124_2 = format_UAT_I_Soroca_080124_2.readFeatures(json_UAT_I_Soroca_080124_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_UAT_I_Soroca_080124_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAT_I_Soroca_080124_2.addFeatures(features_UAT_I_Soroca_080124_2);
var lyr_UAT_I_Soroca_080124_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UAT_I_Soroca_080124_2, 
                style: style_UAT_I_Soroca_080124_2,
                interactive: true,
                title: '<img src="styles/legend/UAT_I_Soroca_080124_2.png" /> UAT_ I_Soroca_08.01.24'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_UAT_Iintravilan_Soroca_080124_1.setVisible(true);lyr_UAT_I_Soroca_080124_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UAT_Iintravilan_Soroca_080124_1,lyr_UAT_I_Soroca_080124_2];
lyr_UAT_Iintravilan_Soroca_080124_1.set('fieldAliases', {'name': 'name', 'name_up': 'name_up', 'aria': 'aria', });
lyr_UAT_I_Soroca_080124_2.set('fieldAliases', {'name': 'name', 'gfullname': 'gfullname', 'gfullname_': 'gfullname_', 'aria': 'aria', });
lyr_UAT_Iintravilan_Soroca_080124_1.set('fieldImages', {'name': 'TextEdit', 'name_up': 'TextEdit', 'aria': 'TextEdit', });
lyr_UAT_I_Soroca_080124_2.set('fieldImages', {'name': 'TextEdit', 'gfullname': 'TextEdit', 'gfullname_': 'TextEdit', 'aria': 'TextEdit', });
lyr_UAT_Iintravilan_Soroca_080124_1.set('fieldLabels', {'name': 'no label', 'name_up': 'no label', 'aria': 'no label', });
lyr_UAT_I_Soroca_080124_2.set('fieldLabels', {'name': 'no label', 'gfullname': 'no label', 'gfullname_': 'no label', 'aria': 'no label', });
lyr_UAT_I_Soroca_080124_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});