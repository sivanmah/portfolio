<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Section from './Section.svelte';

	let isInView;
</script>

<div class="mx-10 lg:mx-0">
	<Section id="about">Om meg</Section>
</div>
<div
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="flex lg:space-x-20 flex-col lg:flex-row items-center lg:mx-0"
>
	{#if isInView}
		<div in:fade={{ delay: 250, duration: 300 }} class="2xl:mr-40 lg:mr-20 mx-10 lg:mx-0">
			<h3 class="text-white text-3xl xl:text-5xl font-bold my-2 xl:my-6">Hvem jeg er</h3>
			<p class="text-white xl:text-lg">
				Mitt navn er Sivan Mahmud, og jeg er 23 år gammel. Nå går jeg mitt siste semester på NTNU,
				hvor jeg studerer Webutvikling. Jeg vokste opp på et lite sted som heter Hov, men i 2015
				flyttet familien min til Gjøvik og jeg har bodd her siden.
			</p>
			<p class="text-white xl:text-lg py-2 xl:py-4">
				Helt siden jeg var et barn hadde jeg alltid stor interesse for datamaskiner, og jeg visste
				at jeg ville jobbe med noe innenfor det. Derfor valgte jeg å gå IKT-SK linjen på Gjøvik
				videregående skole. Der fikk jeg lære om blant annet grunnleggende programmering med Python,
				og HTML + CSS. Men jeg ville lære mer, så jeg valgte å studere webutvikling, og jeg har
				svært fornøyd med det valget.
			</p>
		</div>
		<div in:fade={{ delay: 250, duration: 300 }} class="w-3/5 md:w-2/5 lg:w-full">
			<img src="Sivan.webp" alt="Portrait" class="rounded-3xl" />
		</div>
	{/if}
</div>
