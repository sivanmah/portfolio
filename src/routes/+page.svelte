<script>
	import About from '../components/About.svelte';
	import Navbar from '../components/Navigation/Navbar.svelte';
	import Welcome from '../components/Welcome/Welcome.svelte';
	import Projects from '../components/Projects/Projects.svelte';
</script>

<Navbar />

<div class="bg-blue-zodiac">
	<div class="container mx-auto h-90vh">
		<Welcome />
	</div>
	<div class="spacer layer1 -mt-60 md:-mt-80 lg:-mt-96 xl:-mt-110 3xl:-mt-140" />
</div>
<div class="bg-palatinate">
	<div class="container mx-auto min-h-1/2 2xl:px-10">
		<About />
	</div>
	<div class="spacer layer2 md:-mt-20 lg:-mt-40 2xl:-mt-60 3xl:-mt-80" />
</div>
<div class="bg-dark-purple">
	<div class="container mx-auto min-h-1/2 2xl:px-40 p-20">
		<Projects />
	</div>
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
		background-image: url('../../waves/palatinate.svg');
	}
	.layer2 {
		background-image: url('../../waves/dark-purple.svg');
	}
</style>
