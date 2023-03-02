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
	<div class="spacer layer1" />
</div>
<div class="bg-palatinate">
	<div class="container mx-auto min-h-1/2 mb-52">
		<About />
	</div>
	<div class="spacer layer2" />
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
		margin-top: -600px;
	}

	.layer1 {
		background-image: url('../../palatinate.svg');
	}
	.layer2 {
		background-image: url('../../green.svg');
	}
</style>
