let height = window.innerHeight
let width = window.innerWidth

let projection = d3.geo.mercator()
    .center([116, 39])
    .scale(800)
    .translate([width/2, height/2])

let svg = d3.select('body').append('svg')
    .attr('height', height)
    .attr('width', width)
    .call(d3.behavior.zoom().scaleExtent([1, 8000]).on("zoom", zoom))


d3.json('../../tmp/china_province1.json', (err, state) => {

    svg.append('path')
        .datum(topojson.feature(state, state.objects.china_province))
        .attr("d", d3.geo.path().projection(d3.geo.mercator()))

})

function zoom() {
    console.log('zoom');
    svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
}