# GeoJSON
http://geojson.org/geojson-spec.html
https://en.wikipedia.org/wiki/GeoJSON
http://blog.xcatliu.com/2015/04/24/geojson-and-topojson/

GeoJSON is a format for encoding a variety of geographic data structures. A GeoJSON object may represent a geometry, a feature, or a collection of features. GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection. Features in GeoJSON contain a geometry object and additional properties, and a feature collection represents a list of features.

```
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [102.0, 0.5] },
            "properties": { "prop0": "value0" }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
                ]
            },
            "properties": {
                "prop0": "value0",
                "prop1": 0.0
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
                        [100.0, 1.0], [100.0, 0.0]]
                ]
            },
            "properties": {
                "prop0": "value0",
                "prop1": { "this": "that" },
                "style": {
                    weight: 2,
                    color: "#999",
                    opacity: 1,
                    fillColor: "#B0DE5C",
                    fillOpacity: 0.8
                }
            }
        }
    ]
}
```

// TopoJSON
https://github.com/mbostock/topojson-specification/blob/master/README.md

https://github.com/mbostock/topojson/wiki/Command-Line-Reference
`npm i -g topojson`
`topojson -o output.json input.json`
// use pre-projected geometry render fast. d3.geo.mercator() is heavy.
// no need. load topojson file and then use projection(point) transform.
` topojson -o china_p.json china_province.json --projection 'd3.geo.mercator()'`

https://github.com/mbostock/topojson/wiki/API-Reference
`topojson.mesh(china, china.objects.china_province, function(a, b) { return a === b; })`
