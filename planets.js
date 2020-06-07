const svg = d3.select('svg')

d3.json('planets.json').then(data => {
    const circs = svg.selectAll('circle')
        .data(data)

    //add attributes to circles already in dom
    circs
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)

    //append circles from enter selection to dom
    circs
        .enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)
})