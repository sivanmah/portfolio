<script>
	import Section from '../Section.svelte';
	import Project from './Project.svelte';
</script>

<div class="mx-10 mb-5 lg:mx-0">
	<Section id="projects">Prosjekter</Section>
</div>
<div class="grid grid-cols-2 gap-4 [&>*]:bg-gray [&>*]:h-60">
	<Project
		title={'QR code website'}
		image={'/images/qrcode_website.webp'}
		alt={'QR website screenshot'}
	>
		Her jobbet jeg sammen med en annen student for å lage en nettside der brukere kan generere,
		redigere, slette, og organisere QR koder. Brukere må være registrert og på-logget for å bruke
		verktøyet. Jeg hadde mest ansvar for back-end. Vi brukte PHP, MySQL, og JavaScript for å bygge
		nettsida.
	</Project>
	<Project
		title={'ExamMatcher'}
		image={'/images/exammatcher_website.webp'}
		alt={'ExamMatcher website screenshot'}
	>
		Jeg var en del av en gruppe med studenter som lagde en nettside som skal hjelpe
		universitetslektorer med å finne en annen lektor som kan hjelpe med å være sensor på eksamen. Vi
		brukte MERN-stack, det vil si MongoDB, Express.js, React, og Node.js.
	</Project>
	<Project
		title={'Portfolio'}
		image={'/images/portfolio_website.webp'}
		alt={'Portfolio website screenshot'}
	>
		Nettsiden du er på akkurat nå. Jeg lagde denne nettsiden for å vise frem mine ferdigheter og
		prosjekter. Jeg brukte Svelte og TailwindCSS for å bygge denne nettsiden.
	</Project>
</div>
