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
	/>
	<Project title={'QR code website'} image={'/images/qrcode_website.webp'} />
	<Project title={'QR code website'} image={'/images/qrcode_website.webp'} />
</div>
