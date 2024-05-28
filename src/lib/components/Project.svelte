<script>
    import {onMount} from "svelte";

    export let title = "";
    export let description = "";
    export let imageUrl = "";
    export let link = "";

    export let skills = [];

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
    display: flex;
    align-items: center;
    background: var(--gradient-background, $background-color);
    padding: 1rem;
    color: $text-color;
    margin: 1rem auto;
    text-decoration: none;
    position: relative;
    border-radius: 10px; /* Added here to ensure proper border-radius */
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

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

      .title {
        color: #8ea8c3;
      }
    }
  }

  .image-container {
    flex-shrink: 0;
    margin-right: 1.5rem;
  }

  .image-container img {
    width: 150px;
    height: auto;
    border-radius: 8px;
  }

  .content {
    flex-grow: 1;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease-in-out;
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.4;
    color: $text-color;
    margin-bottom: 1rem;
    transition: color 0.3s ease-in-out;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    width: 100%;
  }

  .skill {
    background-color: rgba(45, 212, 191, .1);
    color: rgb(94 234 212);
    border-radius: 15px;
    padding: 0.3rem 0.8rem;
    margin: 0.2rem;
    font-size: 0.8rem;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media(max-width: 768px) {
    .card {
      padding-left: 0;
    }
  }
</style>

<a class="card" href={link} target="_blank" rel="noopener noreferrer" bind:this={card} on:mousemove={handleMouseMove}>
    <div class="image-container">
        <img src={imageUrl} alt="{title} image">
    </div>
    <div class="card-container">
        <div class="content">
            <div class="title">{title} <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            <div class="description">{description}</div>
        </div>
        <div class="skills">
            {#each skills as skill}
                <div class="skill">{skill}</div>
            {/each}
        </div>
    </div>
</a>
