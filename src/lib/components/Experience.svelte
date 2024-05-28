<script>
    import { onMount } from "svelte";

    export let position = "";
    export let company = "";
    export let startDate = "";
    export let endDate = "";
    export let description = "";
    export let skills = [];

    export let link = "";

    let card;

    onMount(() => {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            // Initial gradient setup
            const xPercent = 50; // Center the gradient initially
            const yPercent = 50; // Center the gradient initially

            // Set the radial gradient background with a more saturated blue color
            card.style.setProperty('--gradient-background', `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%)`);

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    });

    function handleMouseMove(event) {
        if (window.innerWidth > 768) { // Only add the event listener if the screen width is greater than 768px
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Calculate percentage positions for the radial gradient
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Set the radial gradient background with a more saturated blue color
            card.style.setProperty('--gradient-background', `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 20%)`);
        }
    }
</script>

<style lang="scss">
  @import 'src/styles.scss';

  .card {
    background: var(--gradient-background, $background-color);
    color: white;
    text-decoration: none;
    padding: 1rem;
    margin: 1rem auto;
    position: relative;
    border-radius: 10px; /* Ensure border-radius is applied */
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
    display: block;
    max-width: 600px; /* Set a max width for the card */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-background, $background-color);
      border-radius: 10px;
      transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
      border: 2px solid transparent; /* Initial transparent border */
      z-index: -1;
    }

    &:hover::before {
      background: lighten($background-color, 10%);
      border-color: white;
    }

    &:hover {
      transform: scale(1.02);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .position {
    font-size: 1.25rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out; /* Ensure smooth color transition */
  }

  .date-range {
    color: #8ea8c3;
    font-size: 0.9rem;
  }

  .company {
    font-size: 1rem;
    font-weight: normal;
    color: lighten($text-color, 30%);
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.4;
    color: $text-color;
    margin-top: 1rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .skill {
    background-color: rgba(45, 212, 191, .1);
    color: rgb(94 234 212);
    border-radius: 15px;
    padding: 0.3rem 0.8rem;
    margin: 0.2rem;
    font-size: 0.8rem;
  }

  .card:hover .position {
    color: #8ea8c3;
  }

  @media (max-width: 768px) {
    .card {
      padding-left:0;
      margin-left: 0; /* Align card to the left with margin */
      margin-right: 1rem; /* Add right margin for spacing */
      max-width: none; /* Remove max width constraint */
    }
  }
</style>

<a class="card" href={link} target="_blank" rel="noopener noreferrer" bind:this={card} on:mousemove={handleMouseMove}>
    <div class="header">
        <div class="position">{position} <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
        <div class="date-range">{startDate} — {endDate}</div>
    </div>
    <div class="company">{company}</div>
    <div class="description">
        {description}
    </div>
    <div class="skills">
        {#each skills as skill}
            <div class="skill">{skill}</div>
        {/each}
    </div>
</a>
