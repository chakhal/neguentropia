import Theme from '../Features/Theme.js'

export default {
    bind: function(el, binding, vnode) {
    },
    inserted: function(el, binding, vnode) {
        //debugger
        let _themer = vnode.context.$themer

        // set layers 
        Object.keys(_themer.layers).forEach(function(name){
           // debugger;
            _themer.setLayer(name, el.__vue__.$refs['theme-'+name])
        })
    },
    updated: function(el, binding, vnode) {
	}
}