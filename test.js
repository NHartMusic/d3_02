
const yAxis = d3.json('menu.json').then(data => {
    const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.orders)])
        .range([800, 0])

})

const xAxis = d3.json('menu_orders.json').then(data => {
    const x = d3
        .scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)
})

console.log(xAxis, yAxis)