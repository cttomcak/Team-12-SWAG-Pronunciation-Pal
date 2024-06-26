<script lang="ts">
    import WordVisemes from "./WordVisemes.svelte";
	import WhisperRecord from "./WhisperRecord.svelte";
	import { userData } from './userData';
	import { onDestroy } from "svelte";
	
	/** User favorites list */
    let userFavorites: string[] = [];

	/** Function to unsub from the userData store */
    const unsubscribe = userData.subscribe(value => {
		if (value)
		{
			userFavorites = JSON.parse((value as any).favorite_words || '[]')
		}
    });

	onDestroy(unsubscribe);

	/** If browser speech-to-text is enabled */
	let speech_enabled: boolean = false;
	/** Speech recognition object */
    let recognizer: any;
	/** Whether the browser is recording right now */
	let recording: boolean = false;
	/** Search bar text value */
	let search_text: string = '';
	/** List of words currently searched */
	let word_list: string[] = [];
	/** List to store errors if they happen */
	let errors: string[] = [];
	/** Whether to show favorites or not */
	let showFavorites: boolean = true;
	// let generated_words: string[] = [];

	// Check if window is defined (running on the client side)
	if (typeof window !== 'undefined') {
		// Use type assertion to inform TypeScript about 'webkitSpeechRecognition'
		let SpeechRecognition =
			(window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
		if (SpeechRecognition) {
			recognizer = new SpeechRecognition();
			if (recognizer) {
				recognizer.onresult = results_callback;
				speech_enabled = true;
				recognizer.onstart = function () {
					recording = true;
				};
				recognizer.onend = function () {
					recording = false;
				};
				recognizer.onerror = function () {
					recording = false;
				};
			}
		} else {
			console.error('SpeechRecognition API not supported on this browser');
		}
	}

	/**
     * Starts recording speech using the browser's speech recognition API.
     */
	function record_speech() {
		// Don't need to check since the button won't exist if feature not supported
		recognizer.start();
	}

	/**
     * Callback function for speech recognition results.
     * @param {SpeechRecognitionEvent} result - The result object from speech recognition.
     */
	function results_callback(result: SpeechRecognitionEvent) {
		search_text = result.results[0][0].transcript;
		update_word_list();
	}

	/**
     * Displays an error message for a certain duration.
     * @param {CustomEvent<string>} event - The error message to display.
     */
	function show_error(event: CustomEvent<string>) {
		console.log("test");
		errors.push(event.detail);
		errors = errors;
		setTimeout(() => {
			errors.shift();
			errors = errors;
		}, 5000);
	}

	/**
	 * Removes a word from the word list.
	 * @param {CustomEvent<number>} event - The index of the word to remove.
	 */
	function remove_word(event: CustomEvent<number>) {
		word_list.splice(event.detail, 1);
		word_list = word_list;
	}

	/**
     * Handles keydown event for input textbox.
     * @param {KeyboardEvent} event - The keydown event object.
     */
	function handle_keydown(event: KeyboardEvent)
	{
		if (event.key === 'Enter' || event.code === 'Enter') {
			update_word_list();
		}
	}

	/**
	 * Updates the word list, inserting new words at the start.
	 */
	function update_word_list() {
		// Add in new words if they exist
		if (search_text.length > 0) {
			word_list = [...search_text.split(' '), ...word_list];
			if (word_list.length > 10) {
				word_list = word_list.slice(0, 10);
			}
		}
	}

	/**
     * Handles event emitted by WhisperRecord component.
     * @param {CustomEvent} event - The custom event object.
     */
	function handleWhisperEvent(event: CustomEvent)
	{
		const transcription = event.detail.transcription;
		if (transcription)
		{
			search_text = transcription;
			update_word_list();
		}
	}

	/**
	 * Handles if favorite word was pressed; fills the text input and updates the word list.
	 * @param event Button Press Event
	 */
	function handleFavButtonPress(event: Event) {
		search_text = (event.target as HTMLButtonElement).id;
		update_word_list();
	}
</script>

<div class="search-wrapper">
	<div class="record-buttons">
		<WhisperRecord on:set_parent_text={handleWhisperEvent}/>
		<!-- Record button, hides itself if not supported -->
		{#if speech_enabled}
			<button id="recording_button" on:click={record_speech}>
				{#if recording}
					Recording...
				{:else}
					Record (Browser)
				{/if}
			</button>
		{/if}
	</div>
	<span style="display: inline-block;">
		<div class="search">
			<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
			<input type="search" class="input" id="words_text_box" placeholder="Search" bind:value={search_text} on:keydown={handle_keydown}/>
		</div>
	</span>
	<div class="favorites_section">
		{#if userFavorites.length > 0}
			<div>
				<label for="show_favorites">Show Favorites</label>
				<input name="show_favorites" type="checkbox" bind:checked={showFavorites}>
			</div>
			<div class='favorites_box'>
				{#if showFavorites}
					{#each userFavorites as favWord}
						<button class="fav-button" on:click={handleFavButtonPress} id={favWord}>{favWord.charAt(0).toUpperCase() + favWord.slice(1)}</button>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
	{#if errors.length > 0}
		<div id="display_errors_here">
			<strong>Errors:</strong>
			{#each errors as error}
				<p style="padding:0%; margin:0%;">{error}</p>
			{/each}
		</div>
	{/if}
	<div class="viseme_container">
		{#each word_list as word, index}
			<WordVisemes word={word} index={index} on:error={show_error} on:remove={remove_word}/>
		{/each}
	</div>
</div>

<style>
	.search-wrapper {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.record-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		margin: 5px;
		padding: 10px;
		background-color: #4942E4;
		color: #ffffff;
		border: 3px solid #11009E;
		border-radius: 5px;
		cursor: pointer;
	}

	.search {
		margin: 5px;
		padding: 10px;
		display: flex;
		line-height: 28px;
		align-items: center;
		position: relative;
		max-width: 300px;
		z-index: 1;
	}

	.input {
		width: 100%;
		height: 40px;
		line-height: 28px;
		padding: 0 1rem;
		padding-left: 2.5rem;
		border: 2px solid black;
		border-radius: 50px;
		background-color: #ffffff;
		color: #0d0c22;
		transition: .3s ease;
	}

	.input::placeholder {
		color: #9e9ea7;
	}

	.input:focus, input:hover {
		outline: none;
		border-color: rgb(0, 0, 0);
		background-color: #ffffff;
		box-shadow: 0 0 0 2px rgb(0, 0, 0);
	}

	.icon {
		position: absolute;
		left: 1rem;
		fill: #9e9ea7;
		width: 1rem;
		height: 1rem;
	}

	#display_errors_here {
		margin: 5px;
		padding: 10px;
		background-color: #ffc6c6;
		color: #000000;
		border: 3px solid #ff0000;
		border-radius: 5px;
		width: fit-content;
		max-height: 120px;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: rgb(255, 66, 66) rgb(255, 153, 153);
	}

	.viseme_container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}
	.favorites_section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.favorites_box {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		min-width: 14rem;
		max-width: 40%;
		padding: 5px;
		margin: 5px;
	}
	.fav-button {
		margin: 2px;
		padding: 5px;
		background-color: #4942E4;
		color: #ffffff;
		border: 3px solid #11009E;
		border-radius: 4px;
		cursor: pointer;
	}
</style>