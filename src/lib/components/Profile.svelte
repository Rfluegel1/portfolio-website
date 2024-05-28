<script>
    import {onMount} from "svelte";

    export let name = "Reid Fluegel";
    export let title = "Full Stack Software Engineer";
    export let description = "I am a problem solver and software is my toolkit.";
    export let socialLinks = [
        {href: "https://www.linkedin.com/in/reid-fluegel/", icon: "fab fa-linkedin"},
        {href: "https://github.com/Rfluegel1", icon: "fab fa-github"},
        {href: "Software Engineer Resume.pdf", icon: "fa-regular fa-file-pdf"},
        {href: "mailto:reid.fluegel@gmail.com", icon: "fa-solid fa-address-book"}
    ];

    let card;

    onMount(() => {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            // Initial gradient setup
            const xPercent = 50; // Center the gradient initially
            const yPercent = 50; // Center the gradient initially

            // Set the radial gradient background with a more saturated blue color
            card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    });

    function handleMouseMove(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calculate percentage positions for the radial gradient
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Set the radial gradient background with a more saturated blue color
        card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%), var(--card-background-color)`;
    }
</script>

<style lang="scss">
  @import 'src/styles.scss';

  .profile {
    padding-top: 2rem; /* Reduced padding-top */
    background-color: $background-color;
    border-radius: 10px;
    color: $text-color;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to the top */
    height: 85vh; /* Full viewport height */
    position: sticky;
    top: 0;
  }

  .name {
    font-size: 3rem;
    font-weight: bold;
    color: $button-text;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: normal;
    color: lighten($text-color, 30%);
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.4;
    color: $text-color;
    margin-bottom: 1.5rem;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Reduced gap between sections */
    margin-bottom: 1rem; /* Added margin-bottom to push social links down */
  }

  .sections a {
    font-size: 1rem;
    color: $text-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: lighten($text-color, 10%);
      transform: scale(1.02);
    }
  }

  .social-links {
    display: flex;
    justify-content: left;
    gap: 1rem;
    margin-top: auto; /* Pushes social links to the bottom */
    margin-bottom: 1rem; /* Adjust margin-bottom to raise the icons */
  }

  .social-links a {
    color: lighten($text-color, 40%);
    font-size: 2rem;
    transition: color 0.3s ease;
    padding-right: .5rem;

    &:hover {
      color: $button-text;
    }

    i {
      &:hover {
        color: #8ea8c3;
        transition: color 0.3s ease;
      }
    }
  }

  @media (max-width: 768px) {
    .profile {
      height: auto; /* Set height to auto for smaller screens */
      padding: 1rem; /* Adjust padding */
      text-align: center; /* Center text */
      justify-content: center; /* Center content vertically */
    }

    .social-links {
      flex-direction: row; /* Ensure social links are in a row */
      justify-content: center; /* Center the social links */
      gap: 0.5rem; /* Adjust gap */
      margin-top: 1rem; /* Adjust margin-top */
      margin-bottom: 0; /* Remove bottom margin */
    }

    /* Remove highlighting effect on smaller screens */
    .sections a {
      display: none; /* Remove scaling effect */
    }
  }

  @media (max-width: 480px) {
    .profile {
      padding: 1rem; /* Further adjust padding for very small screens */
    }
  }
</style>

<div class="profile" bind:this={card} on:mousemove={handleMouseMove}>
    <div>
        <div class="name">{name}</div>
        <div class="title">{title}</div>
        <div class="description">{description}</div>
    </div>
    <div class="sections">
        <a href="#about">ABOUT</a>
        <a href="#resume">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
    </div>
    <div class="social-links">
        {#each socialLinks as {href, icon}}
            <a href={href} target="_blank" rel="noopener noreferrer">
                <i class={icon}></i>
            </a>
        {/each}
    </div>
</div>
