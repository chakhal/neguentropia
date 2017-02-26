<template>
	<div>
		
	<svg v-if="name == 'recycle'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<path d="M3.18,201.694l38.31,29.933L5.433,300.7c-18.028,31.851,12.943,62.878,32.676,73.679
		c19.426,10.632,49.577,11.896,77.746,11.513l50.704-82.889l38.31,20.722l-66.479-123.181L3.18,201.694z M8.813,370.78
		l82.253,151.962c16.526,21.105,47.7,26.094,80,25.327h86.76V404.166l-164.506-1.151C67.781,404.548,34.353,399.176,8.813,370.78z
		 M526.309,90.732l-44.752,18.995l-42.933-65.022c-19.116-31.209-61.27-19.164-80.282-7.141
		c-18.716,11.836-34.44,37.594-47.761,62.417l47.914,84.532l-36.697,23.46l139.966,1.576L526.309,90.732z M375.692,13.686
		l-172.786-1.732c-26.471,4.221-45.948,29.067-60.936,57.691l-42.062,75.882l125.861,69.766L306.53,71.97
		C317.569,48.887,338.474,22.256,375.692,13.686z M383.208,600.046l5.082-48.351l77.685-6.025
		c36.563-1.59,46.465-44.297,45.167-66.755c-1.277-22.108-16.184-48.348-31.437-72.033l-97.162,0.925l-2.729-43.47l-69.235,121.653
		L383.208,600.046z M523.615,505.667l85.283-150.281c9.142-25.199-3.146-54.28-20.915-81.266l-45.976-73.577l-122.037,76.257
		l86.199,140.12C521.006,437.765,534.163,468.959,523.615,505.667z"/>
</g>
</svg>
<svg v-if="name == 'chessboard'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
<g>
	<path style="fill:#fff;" d="M6,0h2v2H6V0z"/>
	<path style="fill:#030104;" d="M0,2h2v2H0V2z"/>
	<path style="fill:#030104;" d="M2,0h2v2H2V0z"/>
	<path style="fill:#030104;" d="M0,10h2v2H0V10z"/>
	<path style="fill:#0ff;" d="M0,6h2v2H0V6z"/>
	<path style="fill:#030104;" d="M6,8h2v2H6V8z"/>
	<path style="fill:#030104;" d="M14,0h2v2h-2V0z"/>
	<path style="fill:#ff0;" d="M10,0h2v2h-2V0z"/>
	<path style="fill:#030104;" d="M12,14h2v2h-2V14z"/>
	<path style="fill:#030104;" d="M14,12h2v2h-2V12z"/>
	<path style="fill:#030104;" d="M4,2h2v2H4V2z"/>
	<path style="fill:#f0f;" d="M14,4h2v2h-2V4z"/>
	<path style="fill:#030104;" d="M14,8h2v2h-2V8z"/>
	<path style="fill:#030104;" d="M4,14h2v2H4V14z"/>
	<path style="fill:#030104;" d="M8,14h2v2H8V14z"/>
	<path style="fill:#00f;" d="M12,2h2v2h-2V2z"/>
	<path style="fill:#030104;" d="M0,14h2v2H0V14z"/>
	<path style="fill:#030104;" d="M2,12h2v2H2V12z"/>
	<path style="fill:#030104;" d="M10,8h2v2h-2V8z"/>
	<path style="fill:#f00;" d="M10,12h2v2h-2V12z"/>
	<path style="fill:#030104;" d="M10,4h2v2h-2V4z"/>
	<path style="fill:#030104;" d="M8,10h2v2H8V10z"/>
	<path style="fill:#0f0;" d="M8,2h2v2H8V2z"/>
	<path style="fill:#030104;" d="M6,12h2v2H6V12z"/>
	<path style="fill:#030104;" d="M4,6h2v2H4V6z"/>
	<path style="fill:#030104;" d="M12,10h2v2h-2V10z"/>
	<path style="fill:#030104;" d="M12,6h2v2h-2V6z"/>
	<path style="fill:#030104;" d="M2,8h2v2H2V8z"/>
	<path style="fill:#030104;" d="M6,4h2v2H6V4z"/>
	<path style="fill:#030104;" d="M4,10h2v2H4V10z"/>
	<path style="fill:#030104;" d="M8,6h2v2H8V6z"/>
	<path style="fill:#030104;" d="M2,4h2v2H2V4z"/>
</g>
</svg>
	</div>

</template>

<script>
	export default {
		props: ['name']
	}
</script>
<style>
svg {
	height: 100%;
	width: 100%;
}
</style>