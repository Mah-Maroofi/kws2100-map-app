import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke, Circle } from 'ol/style';

const MapComponent = () => {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({ source: new OSM() }),
                new VectorLayer({
                    source: new VectorSource({
                        url: 'https://kart.dsb.no/path/to/geojson', // Bytt med riktig URL
                        format: new GeoJSON()
                    }),
                    style: new Style({
                        fill: new Fill({ color: 'rgba(0, 0, 255, 0.1)' }),
                        stroke: new Stroke({ color: 'blue', width: 2 }),
                        image: new Circle({
                            radius: 5,
                            fill: new Fill({ color: 'red' })
                        })
                    })
                })
            ],
            view: new View({
                center: fromLonLat([10.7522, 59.9139]), // Sentrer på Oslo
                zoom: 6
            })
        });
    }, []);

    return <div id='map' style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;