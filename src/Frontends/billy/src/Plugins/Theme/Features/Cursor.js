export default function(theme) {
	this.theme = theme;
	this.links = [];
	this.ui = {};






	this.create = function(dom) {
		let ui = this.ui
		ui.layer = dom

		let link = this.theme.createLinkElem('cursor')
		this.links.push(link);

		ui.cursor = document.createElement('div')
        ui.cursor.classList.add('cursor')

        ui.follow = document.createElement('div')
        ui.follow.classList.add('cursor--follow')

        Object.assign(ui.cursor.style, {
            position: 'fixed',
            pointerEvents: 'none',
            willChange: 'transform'
        })

        ui.layer.appendChild(ui.cursor)
        ui.cursor.appendChild(ui.follow)

        document.body.addEventListener('mousemove', function(e) {
            ui.cursor.style.transform = 'translate3D('+e.x+'px, '+e.y+'px, 0)';
            ui.cursor.style.transformOrigin = e.x+'px '+e.y+'px';
        }, true);
        document.body.addEventListener('mouseenter', function(e) {
            //debugger;
            switch(e.target.nodeName) {
                case 'A':
                case 'INPUT':
                case 'SELECT':
                case 'TEXTAREA':
                case 'NAV':
                    ui.cursor.classList.add('cursor__hover')
                    break;
            }
            if (!isNaN(e.target.tabIndex) && e.target.tabIndex >=0) {
                    ui.cursor.classList.add('cursor__focusable')
            }
        }, true);
        document.body.addEventListener('mouseleave', function(e) {
            //debugger;
            switch(e.target.nodeName) {
                case 'A':
                case 'INPUT':
                case 'SELECT':
                case 'TEXTAREA':
                case 'NAV':
                    ui.cursor.classList.remove('cursor__hover')
                    break;
            }
            if (!isNaN(e.target.tabIndex) && e.target.tabIndex >=0) {
                    ui.cursor.classList.remove('cursor__focusable')
            }
        }, true);
		console.log('create cursor');
	}
	this.destroy = function(dom) {
		console.log('destroy cursor');
	}

	return this;
}