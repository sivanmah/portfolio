<script>
	import { _ } from 'svelte-i18n';
	import CircleLinks from './CircleLinks.svelte';
	let circles = [
		['Github icon', 'github.svg', 'https://github.com/sivanmah'],
		['LinkedIn icon', 'linkedin.svg', 'https://www.linkedin.com/in/sivan-sabir-m-661b10194/'],
		['Email icon', 'email.svg', 'mailto:sivanmahmud@gmail.com/']
	];
</script>

<div
	class="text-white text-center flex flex-col items-center justify-center h-full mx-6 md:mx-12 lg:mx-40"
>
	<h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight md:leading-none">
		{$_('hello')}<span class="text-pastel-blue">Sivan</span>
	</h1>
	<p class="text-xl lg:text-2xl py-4">
		{$_('introduction')}
	</p>
	<CircleLinks {circles} />
</div>
