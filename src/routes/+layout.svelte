<!-- The layout file gives the consistent structure of the website,
like the header and footer. Just has some basic css right now. -->

<script>
	import Header from './Header.svelte';
	// For global styles
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Visit
			<a href="https://github.com/cttomcak/Team-12-SWAG-Pronunciation-Pal">
				SWAG Team GitHub
			</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* Ensure the app takes up at least the full viewport height */
	}

	main {
		flex: 1; /* Allow main to take up remaining space */
		display: flex;
		justify-content: center;
		/* align-items: center; */
		padding: 15px;
		background-color: rgb(245, 245, 245);
	}

	footer {
		margin-top: auto; /* Push footer to the bottom */
		padding: 10px; /* Add some padding for better appearance */
		display: flex;
		justify-content: center; /* Centers content on horizontal axis */
		align-items: center; /* Centers content on vertical axis */
	}

	footer a {
		font-weight: bold;
	}
</style>
