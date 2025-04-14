<script setup>
import RGBEdit from './RGBEdit.vue'
import PreviewColor from './PreviewColor.vue'
</script>

<template>
<h1>Color Editor</h1>

<p>
Use the sliders below to set the red, green, and blue values for a color.
</p>

<div class="twocol">
	<RGBEdit></RGBEdit>
	<PreviewColor></PreviewColor>
</div>
</template>

<style>
.twocol {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
}
</style>
