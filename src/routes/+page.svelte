<script>
	import About from '../components/About.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Welcome from '../components/Welcome/Welcome.svelte';
</script>

<Navbar />

<div class="bg-blue-zodiac">
	<div class="container mx-auto h-screen">
		<Welcome />
	</div>
	<div class="spacer layer1 -mt-60 md:-mt-80 lg:-mt-96 2xl:-mt-140" />
</div>
<div class="bg-palatinate">
	<div class="container mx-auto min-h-1/2 ">
		<About />
	</div>
	<div class="spacer layer2 2xl:-mt-80" />
</div>
<div class="bg-green p-10 min h-screen">
	<div class="container mx-auto">test</div>
</div>

<style>
	.spacer {
		aspect-ratio: 960/300;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layer1 {
		background-image: url('../../palatinate.svg');
	}
	.layer2 {
		background-image: url('../../green.svg');
	}
</style>
