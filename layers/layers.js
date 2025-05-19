var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reaurbanaTezuitln_1 = new ol.format.GeoJSON();
var features_reaurbanaTezuitln_1 = format_reaurbanaTezuitln_1.readFeatures(json_reaurbanaTezuitln_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaurbanaTezuitln_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbanaTezuitln_1.addFeatures(features_reaurbanaTezuitln_1);
var lyr_reaurbanaTezuitln_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbanaTezuitln_1, 
                style: style_reaurbanaTezuitln_1,
                popuplayertitle: 'Área urbana Tezuitlán',
                interactive: false,
                title: '<img src="styles/legend/reaurbanaTezuitln_1.png" /> Área urbana Tezuitlán'
            });
var format_RedVial_2 = new ol.format.GeoJSON();
var features_RedVial_2 = format_RedVial_2.readFeatures(json_RedVial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_2.addFeatures(features_RedVial_2);
var lyr_RedVial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedVial_2, 
                style: style_RedVial_2,
                popuplayertitle: 'Red Vial',
                interactive: false,
                title: '<img src="styles/legend/RedVial_2.png" /> Red Vial'
            });
var format_Alturadeedificios_3 = new ol.format.GeoJSON();
var features_Alturadeedificios_3 = format_Alturadeedificios_3.readFeatures(json_Alturadeedificios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alturadeedificios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alturadeedificios_3.addFeatures(features_Alturadeedificios_3);
var lyr_Alturadeedificios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alturadeedificios_3, 
                style: style_Alturadeedificios_3,
                popuplayertitle: 'Altura de edificios',
                interactive: true,
    title: 'Altura de edificios<br />\
    <img src="styles/legend/Alturadeedificios_3_0.png" /> 0 - 3 m<br />\
    <img src="styles/legend/Alturadeedificios_3_1.png" /> 3.1 - 5 m<br />\
    <img src="styles/legend/Alturadeedificios_3_2.png" /> 5.1 - 8 m<br />\
    <img src="styles/legend/Alturadeedificios_3_3.png" /> 8.1 - 10 m<br />\
    <img src="styles/legend/Alturadeedificios_3_4.png" /> 10.1 - 24 m<br />' });
var format_Hospitales_4 = new ol.format.GeoJSON();
var features_Hospitales_4 = format_Hospitales_4.readFeatures(json_Hospitales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_4.addFeatures(features_Hospitales_4);
var lyr_Hospitales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitales_4, 
                style: style_Hospitales_4,
                popuplayertitle: 'Hospitales',
                interactive: true,
                title: '<img src="styles/legend/Hospitales_4.png" /> Hospitales'
            });
var format_Refugios_5 = new ol.format.GeoJSON();
var features_Refugios_5 = format_Refugios_5.readFeatures(json_Refugios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refugios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refugios_5.addFeatures(features_Refugios_5);
var lyr_Refugios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Refugios_5, 
                style: style_Refugios_5,
                popuplayertitle: 'Refugios',
                interactive: true,
                title: '<img src="styles/legend/Refugios_5.png" /> Refugios'
            });
var format_Inundaciones_6 = new ol.format.GeoJSON();
var features_Inundaciones_6 = format_Inundaciones_6.readFeatures(json_Inundaciones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundaciones_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundaciones_6.addFeatures(features_Inundaciones_6);
var lyr_Inundaciones_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundaciones_6, 
                style: style_Inundaciones_6,
                popuplayertitle: 'Inundaciones',
                interactive: true,
                title: '<img src="styles/legend/Inundaciones_6.png" /> Inundaciones'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_reaurbanaTezuitln_1.setVisible(true);lyr_RedVial_2.setVisible(true);lyr_Alturadeedificios_3.setVisible(true);lyr_Hospitales_4.setVisible(true);lyr_Refugios_5.setVisible(true);lyr_Inundaciones_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_reaurbanaTezuitln_1,lyr_RedVial_2,lyr_Alturadeedificios_3,lyr_Hospitales_4,lyr_Refugios_5,lyr_Inundaciones_6];
lyr_reaurbanaTezuitln_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'PobTot': 'PobTot', });
lyr_RedVial_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_Alturadeedificios_3.set('fieldAliases', {'id': 'id', 'type': 'type', 'height': 'height', 'ele': 'ele', 'area': 'area', 'date': 'date', 'heightScor': 'heightScor', 'name': 'name', 'levels': 'levels', 'orient': 'orient', 'country': 'country', });
lyr_Hospitales_4.set('fieldAliases', {'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CONDICION': 'CONDICION', 'NOMSERV': 'NOMSERV', 'TIPO': 'TIPO', 'DIRECCIÓN': 'DIRECCIÓN', 'tyoe': 'tyoe', });
lyr_Refugios_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Nombre': 'Nombre', 'Capacidad': 'Capacidad', 'Direccion': 'Direccion', 'Albergue': 'Albergue', 'Colonias': 'Colonias', });
lyr_Inundaciones_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Riesgo': 'Riesgo', });
lyr_reaurbanaTezuitln_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_AGEB': 'TextEdit', 'PobTot': 'TextEdit', });
lyr_RedVial_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_Alturadeedificios_3.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', 'ele': 'TextEdit', 'area': 'TextEdit', 'date': 'TextEdit', 'heightScor': 'TextEdit', 'name': 'TextEdit', 'levels': 'TextEdit', 'orient': 'TextEdit', 'country': 'TextEdit', });
lyr_Hospitales_4.set('fieldImages', {'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CONDICION': 'TextEdit', 'NOMSERV': 'TextEdit', 'TIPO': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'tyoe': 'Range', });
lyr_Refugios_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Nombre': 'TextEdit', 'Capacidad': 'TextEdit', 'Direccion': 'TextEdit', 'Albergue': 'TextEdit', 'Colonias': 'TextEdit', });
lyr_Inundaciones_6.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Riesgo': 'TextEdit', });
lyr_reaurbanaTezuitln_1.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'CVE_LOC': 'hidden field', 'CVE_AGEB': 'hidden field', 'PobTot': 'hidden field', });
lyr_RedVial_2.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', });
lyr_Alturadeedificios_3.set('fieldLabels', {'id': 'hidden field', 'type': 'hidden field', 'height': 'header label - visible with data', 'ele': 'hidden field', 'area': 'hidden field', 'date': 'hidden field', 'heightScor': 'hidden field', 'name': 'hidden field', 'levels': 'hidden field', 'orient': 'hidden field', 'country': 'hidden field', });
lyr_Hospitales_4.set('fieldLabels', {'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'CONDICION': 'hidden field', 'NOMSERV': 'header label - visible with data', 'TIPO': 'inline label - visible with data', 'DIRECCIÓN': 'hidden field', 'tyoe': 'hidden field', });
lyr_Refugios_5.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id': 'hidden field', 'Nombre': 'header label - always visible', 'Capacidad': 'inline label - visible with data', 'Direccion': 'hidden field', 'Albergue': 'inline label - visible with data', 'Colonias': 'hidden field', });
lyr_Inundaciones_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Riesgo': 'no label', });
lyr_Inundaciones_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});