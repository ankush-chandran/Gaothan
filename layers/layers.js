var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: false,
                title: '<img src="styles/legend/LandUse_0.png" /> LandUse'
            });
var format_BuildingFootprints_1 = new ol.format.GeoJSON();
var features_BuildingFootprints_1 = format_BuildingFootprints_1.readFeatures(json_BuildingFootprints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingFootprints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_1.addFeatures(features_BuildingFootprints_1);
var lyr_BuildingFootprints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_1, 
                style: style_BuildingFootprints_1,
                popuplayertitle: "Building Footprints",
                interactive: true,
    title: 'Building Footprints<br />\
    <img src="styles/legend/BuildingFootprints_1_0.png" /> 2 - 3.8<br />\
    <img src="styles/legend/BuildingFootprints_1_1.png" /> 3.8 - 5.6<br />\
    <img src="styles/legend/BuildingFootprints_1_2.png" /> 5.6 - 7.4<br />\
    <img src="styles/legend/BuildingFootprints_1_3.png" /> 7.4 - 9.2<br />\
    <img src="styles/legend/BuildingFootprints_1_4.png" /> 9.2 - 11<br />\
    <img src="styles/legend/BuildingFootprints_1_5.png" /> 11 - 12.8<br />\
    <img src="styles/legend/BuildingFootprints_1_6.png" /> 12.8 - 14.6<br />\
    <img src="styles/legend/BuildingFootprints_1_7.png" /> 14.6 - 16.4<br />\
    <img src="styles/legend/BuildingFootprints_1_8.png" /> 16.4 - 18.2<br />\
    <img src="styles/legend/BuildingFootprints_1_9.png" /> 18.2 - 20<br />'
        });

lyr_LandUse_0.setVisible(true);lyr_BuildingFootprints_1.setVisible(true);
var layersList = [lyr_LandUse_0,lyr_BuildingFootprints_1];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_BuildingFootprints_1.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'Height of building (in no. of storeys)', 'BLDG_COND': 'Condition of building', 'BLDG_USE': 'Current use of building', 'HERITAGE': 'Is it a classified heritage building ?', 'GRADE': 'Heritage grade of the building ', 'AGE': 'Age of the building in decades', 'REDEV': 'Has the building undergone redevelopment ?', 'OCCUPIED': 'Occupied or not ? (Y/N)', 'ROOF_TYPE': 'Type of roof ', 'MODIF': 'Has the building undergone modifications ?', 'NUMBER_FAM': 'Number of families occupying the building', 'NUMBER_SHO': 'Number of shops in the building', 'SEMIPUBLIC': 'Does the building have a semi-public interface ? (verandah, balcao, etc)', 'BLDG_OWNER': 'Ownership of the building', 'COMMUNITY': 'Community occupying the building', 'REMARKS': 'Remarks', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_BuildingFootprints_1.set('fieldImages', {'ID': 'TextEdit', 'BLDG_HT': 'TextEdit', 'BLDG_COND': 'TextEdit', 'BLDG_USE': 'TextEdit', 'HERITAGE': 'TextEdit', 'GRADE': 'TextEdit', 'AGE': 'TextEdit', 'REDEV': 'TextEdit', 'OCCUPIED': 'TextEdit', 'ROOF_TYPE': 'TextEdit', 'MODIF': 'TextEdit', 'NUMBER_FAM': 'TextEdit', 'NUMBER_SHO': 'TextEdit', 'SEMIPUBLIC': 'TextEdit', 'BLDG_OWNER': 'TextEdit', 'COMMUNITY': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'inline label - always visible', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_BuildingFootprints_1.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_BuildingFootprints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});