---
search: false
---

## Custom

`Ripple` <span class="VPBadge tip">color & duration</span> can configured manually per use.

<DemoContainer>
	<div style="justify-content:space-around">
		<div class="ripple" v-ripple>Default ripple</div>
		<div class="ripple" v-ripple="{ color: 'lightgreen' }">Light-green ripple</div>
		<div class="ripple" v-ripple="{ duration: '1s' }">One second ripple</div>
		<div class="ripple" v-ripple="{ color: 'orangered', duration: '1s' }">One second orange red ripple</div>
	</div>
</DemoContainer>

```vue
<template>
	<div v-ripple style="position:relative;">Default ripple</div>
	<div v-ripple="{ color: 'lightgreen' }" style="position:relative;">Light-green ripple</div>
	<div v-ripple="{ duration: '1s' }" style="position:relative;">One second ripple</div>
	<div v-ripple="{ color: 'orangered', duration: '1s' }" style="position:relative;">One second orange red ripple</div>
</template>
```
