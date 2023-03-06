<script>
	import CircleLinks from './CircleLinks.svelte';
	let circles = [
		['Github icon', 'github.svg', 'https://github.com/sivanmah'],
		['LinkedIn icon', 'linkedin.svg', 'https://www.linkedin.com/in/sivan-mahmud-661b10194/'],
		['Email icon', 'email.svg', 'mailto:sivanmahmud@gmail.com/']
	];
</script>

<div class="text-white text-center flex flex-col items-center justify-center h-full mx-8">
	<h1 class="text-6xl font-bold mb-8 leading-tight md:leading-none">
		Hei, jeg heter <span class="text-pastel-blue">Sivan</span>
	</h1>
	<p class="text-2xl py-4">
		Jeg er en full-stack utvikler som brenner for å utvikle bærekraftige løsninger som møter alle
		krav på et lynrask nivå.
	</p>
	<CircleLinks {circles} />
</div>
