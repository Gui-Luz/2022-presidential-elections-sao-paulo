function generateGraph(value) {

    var data = {
        type: "sankey",
        orientation: "h",
        node: {
        pad: 15,
        thickness: 10,
        line: {
            color: "black",
            width: 0.0
        },
        label: ["Haddad", "Bolsonaro", "Lula", "Bolsonaro"],
        color: ["#F34A4A", "#5CCE53", "#F34A4A", "#5CCE53"]
            },
        link: {
        source: [0,0,1,1],
        target: [2,3,2,3],
        value:  value,
        }
    }
    var data = [data]
    var layout = {
        width: 300,
        height: 100,
        paper_bgcolor: '#8F3A8400',
        margin: {
            pad:20,
            t:0,
            b:0,
            l:0,
            r:0
        },
        font: {
        size: 10,
        family: "Arial"
        }
    };

    return {data, layout}
}