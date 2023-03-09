<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Section from './Section.svelte';

	let isInView;
</script>

<Section id="about">Om meg</Section>
<div
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
	class="flex space-x-20"
>
	{#if isInView}
		<div in:fade={{ delay: 250, duration: 300 }} class="2xl:mr-40 xl:mr-20">
			<h3 class="text-white text-5xl font-bold my-6">Hvem jeg er</h3>
			<p class="text-white text-lg">
				Mitt navn er Sivan Mahmud, og jeg er 22 år gammel. Nå går jeg mitt siste semester på NTNU,
				hvor jeg studerer Webutvikling. Jeg vokste opp i et lite sted som heter Hov, men i 2015
				flyttet familien min til Gjøvik og jeg har bodd her siden.
			</p>
			<p class="text-white text-lg py-4">
				Helt siden jeg var at barn hadde jeg alltid stor interesse for datamaskiner, og jeg visste
				at jeg ville jobbe med noe innenfor det. Derfor valgte jeg å gå IKT-SK linjen på Gjøvik
				videregående skole. Der fikk jeg lære om blant annet grunnleggende programmering med Python,
				og HTML + CSS. Men jeg ville lære mer, så jeg valgte å studere webutvikling, og jeg har
				svært fornøyd med det valget.
			</p>
		</div>

		<div in:fade={{ delay: 250, duration: 300 }} class="bg-gray py-20 px-40" />
	{/if}
</div>
