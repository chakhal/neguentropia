export default {
    bind: function(el, binding, vnode) {
    },
    inserted: function(el, binding, vnode) {
    	let follow
    	let _v = binding.value
    	let _refs = vnode.context.$refs
    	let $theme = vnode.context.__theme
    	let $themer = vnode.context.$themer



    	if (_v instanceof Array) {
    		follow = _refs[_v[0]][_v[1]]
    	} else {
    		if (_v != undefined) {
    			follow = _refs[_v]
    		} else {
    			// use title as default content
    			if (el.hasAttribute('title')) {
	    			follow = document.createElement('div')
	    			//debugger
	    			follow.textContent = el.getAttribute('title')
    				el.removeAttribute('title')
    			} else {
    				// nothing to do
    				return
    			}
    		}
    	}
    	if (follow.parentNode) {
    		follow.parentNode.removeChild(follow)
    	}



    	$themer.pushJob('cursor', function(){
    		// closure
    		if (el || binding || vnode) {}
    		
	    	let style = {}
	    	let _c = window.getComputedStyle(el)

	    	let props = [
	    		'color',
	    		'background',
	    		'fontSize'
	    	]
	    	props.map(function(prop){
	    		//debugger
	    		follow.style[prop] = _c.getPropertyValue(prop) 
	    	})

    		//Object.assign(follow.style, style)

    		let cursor = $themer.layers.cursor

	    	el.addEventListener('mouseenter', function(){
	    		cursor.ui.follow.appendChild(follow)
	    	})

	    	el.addEventListener('mouseleave', function(){
	    		cursor.ui.follow.removeChild(follow)
	    	})

    	})

 //       let _theme = new Theme(vnode.context.__theme)

        // set layers 
 //       Object.keys(_theme.layers).forEach(function(name){
           // debugger;
 //           _theme.setLayer(name, el.__vue__.$refs['theme-'+name])
 //       }) 
        
    },
    updated: function(el, binding, vnode) {
	}
}