<script>
    import Profile from '$lib/components/Profile.svelte';
    import About from '$lib/components/About.svelte';
    import Resume from "$lib/components/Resume.svelte";
    import Projects from '$lib/components/Projects.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import {onMount} from "svelte";

    let appContainer;

    function handleMouseMove(event) {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            const x = event.clientX;
            const y = event.clientY + window.scrollY;

            // Calculate percentage positions for the radial gradient
            const xPercent = (x / window.innerWidth) * 100;
            const yPercent = (y / document.documentElement.scrollHeight) * 100;

            // Set the radial gradient background
            appContainer.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 216, 255, 0.1) 0%, rgba(0, 216, 255, 0) 20%), var(--background-color)`;
        }
    }

    // Add the mousemove event listener when the component is mounted
    onMount(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<main bind:this={appContainer} class="app-container">
    <div class="layout">
        <div class="profile-container">
            <Profile />
        </div>
        <div class="content-container">
            <About/>
            <Resume/>
            <Projects/>
            <Footer/>
        </div>
    </div>
</main>

<style lang="scss">
  @import 'src/styles.scss';

  .app-container {
    background-color: var(--background-color);
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
  }

  .layout {
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding-left: 2rem; /* Padding on the left for the profile */
    padding-right: 2rem; /* Padding on the right for the content */
    box-sizing: border-box; /* Ensure padding is included in the total width */
  }

  .profile-container {
    flex: 1; /* Take up half of the layout */
    height: 85vh; /* Full viewport height */
    position: sticky;
    top: 0;
    align-self: flex-start;
    padding-top: 2rem;
    margin-right: 1rem; /* Space between profile and content */
  }

  .content-container {
    flex: 1; /* Take up the other half of the layout */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align the content */
    padding-top: 2rem;
  }

  .content-container > * {
    width: 100%;
    padding-left: 1rem; /* Add padding to the left */
    padding-right: 1rem; /* Add padding to the right */
    box-sizing: border-box; /* Ensure padding is included in the total width */
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
      padding-left: 1rem; /* Reduce padding on smaller screens */
      padding-right: 1rem;
    }

    .profile-container,
    .content-container {
      width: 100%; /* Ensure full width on smaller screens */
      margin-right: 0;
      height: auto;
      padding-top: 1rem;
      align-items: normal;
    }

    .profile-container {
      position: static; /* Remove sticky positioning */
      margin-bottom: 2rem; /* Space between stacked elements */
    }
  }

  @media (max-width: 480px) {
    .layout {
      padding-left: 0; /* Remove padding on very small screens */
      padding-right: 0;
    }

    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem;
      margin-bottom: 2rem;
    }

    .profile-container > :not(:last-child) {
      margin-bottom: 1rem; /* Space between elements */
    }

    .content-container {
      padding-left: 1rem; /* Add padding to the left */
      padding-right: 1rem; /* Add padding to the right */
    }
  }

  :global(:root) {
    --background-color: #0f172a; /* Your background color */
  }

  :global(html, body) {
    background-color: var(--background-color);
    margin: 0;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  :global(body) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Ensure body is at least full viewport height */
  }

  footer {
    margin-top: 2rem;
  }
</style>
