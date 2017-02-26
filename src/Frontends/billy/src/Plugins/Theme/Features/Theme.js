import cursor from '../Features/Cursor.js'
let constructors = {
    cursor
}

export default function(options) {
    // merge default and user options

    let defaultOpts = {
        name: 'default',
        layers: ['bg', 'content', 'overlay', 'modal', 'cursor' ]
    }

    for (var p in defaultOpts) {
        if (options[p] == undefined) {
            options[p] = defaultOpts[p]
        }
    }
 /*   let _opts = Object.assign({
        name: 'default',
        layers: ['bg', 'content', 'overlay', 'modal', 'cursor' ]
    }, options)*/

    // will be public properties
    let name = options.name
    let layers = {}

    // will remain private
    let doms = {}
    let linkElems = []
    let jobs = {}
    let htmlHead = document.getElementsByTagName('head')[0]
    let htmlTitle = document.getElementsByTagName('title')[0]
    let htmlBody = document.body

    // init supported layers
    options.layers.forEach(function(layerName) {
        layers[layerName] = null;
    })

    // construct layer
    let setLayer = function(name, dom) {
        if (dom instanceof Element) {
            // trying to set
            if (dom === layers[name]) {
                // allready set
                return
            }
            layers[name] = new constructors[name](this);
            layers[name].create(dom);
            doJobs(name)
        } else {
            if (layers[name]) {
                // unset
                layers[name].destroy(dom);

            } else {
                // nothing to do
            }

        }
    }

    
    // create link elem
    let createLinkElem = function(name) {
        let link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.media = 'all';
        link.href = options.paths.css + name + '.css'

        linkElems.push(link)

        htmlHead.appendChild(link)

        return link
    }
    let destroyLinkElem = function(link) {
        link.parentNode.removeChild(link)
    }

    let pushJob = function(layer, callable) {
        if (layers[layer]) {
            callable()
        } else {
            if (!jobs[layer]) {
                jobs[layer] = []
            }

            jobs[layer].push(callable)
        }
    }

    let doJobs = function(layer) {
        if (jobs[layer] instanceof Array) {
            while(jobs[layer].length) {
                let job = jobs[layer].shift()
                job();
            }
        }
    }

    return {
        name,
        options,
        layers,
        setLayer,
        pushJob,
        createLinkElem,
        destroyLinkElem
    }
}