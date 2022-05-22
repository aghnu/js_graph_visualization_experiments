import cytoscape from 'cytoscape';
import { createHTMLElement } from "./utilities";
import "./style/style.scss";


function graphInit() {
    let cy = cytoscape({
        container: document.getElementById('cy-container'),
        elements: [
            {group: 'nodes', data: {id: 'a'}},
            {group: 'nodes', data: {id: 'b'}},
            {group: 'edges', data: {id: 'ab', source: 'a', target: 'b'}},
        ],
        style: cytoscape.stylesheet()
            .selector('node')
                .css({
                    'height': '80px',
                    'width':  '80px',
                    'border': 'solid',
                    'border-width': '3px',
                    'border-color': '#000'
                })
    })
}

function loaded() {
    // when loaded
    graphInit();
}


function main() {
    // structures    
    let cy_container = createHTMLElement('div', '', {'id': 'cy-container'});

    document.body.appendChild(cy_container)

    // when loaded
    window.addEventListener('load', () => loaded())
}

main()