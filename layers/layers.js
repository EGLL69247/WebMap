ol.proj.proj4.register(proj4);
ol.proj.get("OGC:CRS84").setExtent([-99.427237, 19.039256, -98.733730, 19.611003]);
var wms_layers = [];


        var lyr_Abr_0 = new ol.layer.Tile({
            'title': 'Abr',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> {}'
            });
var format_CentrosComercialesCdmx_2 = new ol.format.GeoJSON();
var features_CentrosComercialesCdmx_2 = format_CentrosComercialesCdmx_2.readFeatures(json_CentrosComercialesCdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_CentrosComercialesCdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosComercialesCdmx_2.addFeatures(features_CentrosComercialesCdmx_2);
var lyr_CentrosComercialesCdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosComercialesCdmx_2, 
                style: style_CentrosComercialesCdmx_2,
                interactive: true,
                title: '<img src="styles/legend/CentrosComercialesCdmx_2.png" /> CentrosComercialesCdmx'
            });
var format_EscuelasCdmx_3 = new ol.format.GeoJSON();
var features_EscuelasCdmx_3 = format_EscuelasCdmx_3.readFeatures(json_EscuelasCdmx_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_EscuelasCdmx_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscuelasCdmx_3.addFeatures(features_EscuelasCdmx_3);
var lyr_EscuelasCdmx_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscuelasCdmx_3, 
                style: style_EscuelasCdmx_3,
                interactive: true,
                title: '<img src="styles/legend/EscuelasCdmx_3.png" /> EscuelasCdmx'
            });
var format_HospitalesCdmx_4 = new ol.format.GeoJSON();
var features_HospitalesCdmx_4 = format_HospitalesCdmx_4.readFeatures(json_HospitalesCdmx_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_HospitalesCdmx_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalesCdmx_4.addFeatures(features_HospitalesCdmx_4);
var lyr_HospitalesCdmx_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HospitalesCdmx_4, 
                style: style_HospitalesCdmx_4,
                interactive: true,
                title: '<img src="styles/legend/HospitalesCdmx_4.png" /> HospitalesCdmx'
            });

lyr_Abr_0.setVisible(true);lyr__1.setVisible(true);lyr_CentrosComercialesCdmx_2.setVisible(true);lyr_EscuelasCdmx_3.setVisible(true);lyr_HospitalesCdmx_4.setVisible(true);
var layersList = [lyr_Abr_0,lyr__1,lyr_CentrosComercialesCdmx_2,lyr_EscuelasCdmx_3,lyr_HospitalesCdmx_4];
lyr__1.set('fieldAliases', {'mrg': 'mrg', 'cnt': 'cnt', });
lyr_CentrosComercialesCdmx_2.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'EMPRESA': 'EMPRESA', 'FECHA': 'FECHA', 'AREA_M2': 'AREA_M2', 'RENTA_M2': 'RENTA_M2', 'VISIT_MES': 'VISIT_MES', 'GR_FECHA': 'GR_FECHA', 'MUNICIP': 'MUNICIP', });
lyr_EscuelasCdmx_3.set('fieldAliases', {'_id': '_id', 'id': 'id', 'nombre': 'nombre', 'dmcl_c_': 'dmcl_c_', 'cordnds': 'cordnds', 'geopont': 'geopont', 'domicil': 'domicil', });
lyr_HospitalesCdmx_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', 'tipo': 'tipo', 'nombre': 'nombre', 'titular': 'titular', 'coordenada': 'coordenada', 'layer': 'layer', 'path': 'path', });
lyr__1.set('fieldImages', {'mrg': '', 'cnt': '', });
lyr_CentrosComercialesCdmx_2.set('fieldImages', {'ID': '', 'NOMBRE': '', 'EMPRESA': '', 'FECHA': '', 'AREA_M2': '', 'RENTA_M2': '', 'VISIT_MES': '', 'GR_FECHA': '', 'MUNICIP': '', });
lyr_EscuelasCdmx_3.set('fieldImages', {'_id': '', 'id': '', 'nombre': '', 'dmcl_c_': '', 'cordnds': '', 'geopont': '', 'domicil': '', });
lyr_HospitalesCdmx_4.set('fieldImages', {'fid': '', 'id': '', 'nom_estab': '', 'raz_social': '', 'codigo_act': '', 'nombre_act': '', 'per_ocu': '', 'tipo_vial': '', 'nom_vial': '', 'tipo_v_e_1': '', 'nom_v_e_1': '', 'tipo_v_e_2': '', 'nom_v_e_2': '', 'tipo_v_e_3': '', 'nom_v_e_3': '', 'numero_ext': '', 'letra_ext': '', 'edificio': '', 'edificio_e': '', 'numero_int': '', 'letra_int': '', 'tipo_asent': '', 'nomb_asent': '', 'tipoCenCom': '', 'nom_CenCom': '', 'num_local': '', 'cod_postal': '', 'cve_ent': '', 'entidad': '', 'cve_mun': '', 'municipio': '', 'cve_loc': '', 'localidad': '', 'ageb': '', 'manzana': '', 'telefono': '', 'correoelec': '', 'www': '', 'tipoUniEco': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', 'tipo': '', 'nombre': '', 'titular': '', 'coordenada': '', 'layer': '', 'path': '', });
lyr__1.set('fieldLabels', {'mrg': 'inline label', 'cnt': 'header label', });
lyr_CentrosComercialesCdmx_2.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'EMPRESA': 'no label', 'FECHA': 'no label', 'AREA_M2': 'no label', 'RENTA_M2': 'no label', 'VISIT_MES': 'no label', 'GR_FECHA': 'no label', 'MUNICIP': 'no label', });
lyr_EscuelasCdmx_3.set('fieldLabels', {'_id': 'no label', 'id': 'no label', 'nombre': 'no label', 'dmcl_c_': 'no label', 'cordnds': 'header label', 'geopont': 'no label', 'domicil': 'no label', });
lyr_HospitalesCdmx_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nom_estab': 'no label', 'raz_social': 'no label', 'codigo_act': 'no label', 'nombre_act': 'no label', 'per_ocu': 'no label', 'tipo_vial': 'no label', 'nom_vial': 'no label', 'tipo_v_e_1': 'no label', 'nom_v_e_1': 'no label', 'tipo_v_e_2': 'no label', 'nom_v_e_2': 'no label', 'tipo_v_e_3': 'no label', 'nom_v_e_3': 'no label', 'numero_ext': 'no label', 'letra_ext': 'no label', 'edificio': 'no label', 'edificio_e': 'no label', 'numero_int': 'no label', 'letra_int': 'no label', 'tipo_asent': 'no label', 'nomb_asent': 'no label', 'tipoCenCom': 'no label', 'nom_CenCom': 'no label', 'num_local': 'no label', 'cod_postal': 'no label', 'cve_ent': 'no label', 'entidad': 'inline label', 'cve_mun': 'no label', 'municipio': 'header label', 'cve_loc': 'no label', 'localidad': 'no label', 'ageb': 'no label', 'manzana': 'no label', 'telefono': 'no label', 'correoelec': 'no label', 'www': 'no label', 'tipoUniEco': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'no label', 'tipo': 'no label', 'nombre': 'no label', 'titular': 'no label', 'coordenada': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HospitalesCdmx_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});