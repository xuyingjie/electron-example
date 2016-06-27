let height = window.innerHeight
let width = window.innerWidth

let projection = d3.geo.mercator()
    .center([116, 39])
    .scale(800)
    .translate([width/2, height/2])


d3.json('../../tmp/us.json', (err, state) => {

    let canvas = d3.select('body').append('canvas')
        .attr('height', height)
        .attr('width', width)
        .call(d3.behavior.zoom().scaleExtent([1, 8000]).on("zoom", zoom))

    let ctx = canvas.node().getContext('2d')

    let path = d3.geo.path()
        .projection(projection)
        .context(ctx)

    draw()

    function zoom() {
        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(d3.event.translate[0], d3.event.translate[1]);
        ctx.scale(d3.event.scale, d3.event.scale);
        draw();
        ctx.restore()
    }

    function  draw() {
        let begin = Date.now()
        ctx.beginPath()
        topojson.presimplify(state);
        path(topojson.mesh(state, state.objects.counties))
        // ctx.fillStyle = '#dcd8d2'
        // ctx.fill()
        ctx.lineWidth = '1'
        ctx.strokeStyle = '#c9c4bc'
        ctx.stroke()
        let diff = Date.now() - begin
        console.log(diff)
    }

})

// 缩放
// canvas ArrayBuffer
// (Scaling canvas using CSS transforms)[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas#Scaling_canvas_using_CSS_transforms]

