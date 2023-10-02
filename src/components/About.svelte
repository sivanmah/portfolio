<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Section from './Section.svelte';

	let isInView;
</script>

<div class="mx-10 lg:mx-0">
	<Section id="about">{$_('about')}</Section>
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
			<h3 class="text-white text-3xl xl:text-5xl font-bold my-2 xl:my-6">{$_('about-header')}</h3>
			<p class="text-white xl:text-lg">
				{$_('about-text1')}
			</p>
			<p class="text-white xl:text-lg py-2 xl:py-4">
				{$_('about-text2')}
			</p>
		</div>
		<div in:fade={{ delay: 250, duration: 300 }} class="w-3/5 md:w-2/5 lg:w-full">
			<img src="Sivan.webp" alt="Portrait" class="rounded-3xl" />
		</div>
	{/if}
</div>
