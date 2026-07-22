function showStory(place) {
    let title = document.getElementById("storyTitle");
    let text = document.getElementById("storyText");
    let details = document.getElementById("details");
    let section = document.getElementById("fullStory");
    if(place === "hunza"){
        title.innerHTML = "🏔️ A Journey Through Northern Pakistan";
        text.innerHTML =
        "Last summer, I visited Hunza Valley and it became one of the most memorable journeys of my life. The breathtaking mountains, peaceful lakes and welcoming people made this trip unforgettable.";
        details.innerHTML = `
        <img class="story-image"
        src="https://images.unsplash.com/photo-1528127269322-539801943592">
        <h3>My Experience:</h3>
        <p>
        I explored beautiful places like Attabad Lake and enjoyed
        traditional food and culture of Hunza. The natural beauty
        and peaceful environment helped me connect with nature.
        </p>
        <h3>What I Loved:</h3>
        <ul>
        <li>Beautiful mountain views</li>
        <li>Friendly local people</li>
        <li>Traditional culture</li>
        <li>Peaceful environment</li>
        </ul>
        <h3>Travel Tips:</h3>
        <ul>
        <li>Best time to visit: April to October</li>
        <li>Carry warm clothes</li>
        <li>Explore local markets</li>
        </ul>
        `;
    }
    else if(place === "beach"){
        title.innerHTML = "🌊 Memories From A Beach Escape";
        text.innerHTML =
        "A peaceful beach trip filled with beautiful sunsets, ocean waves and relaxing moments became a wonderful memory.";
        details.innerHTML = `
        <img class="story-image"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
        <h3>My Experience:</h3>
        <p>
        Walking beside the ocean during sunset was one of the most
        relaxing experiences. The sound of waves and fresh air created
        a perfect escape from daily life.
        </p>
        <h3>What I Loved:</h3>
        <ul>
        <li>Beautiful sunset views</li>
        <li>Refreshing ocean breeze</li>
        <li>Relaxing atmosphere</li>
        <li>Photography moments</li>
        </ul>
        <h3>Travel Tips:</h3>
        <ul>
        <li>Visit during evening hours</li>
        <li>Carry sunscreen</li>
        <li>Keep the beach clean</li>
        </ul>
        `;
    }
    else if(place === "turkey"){
        title.innerHTML = "🏛️ Exploring Historical Turkey";
        text.innerHTML =
        "Visiting Istanbul was an amazing cultural experience where history, architecture and traditions came together.";
        details.innerHTML = `
        <img class="story-image"
        src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200">
        <h3>My Experience:</h3>
        <p>
        I explored historical places, beautiful mosques, and famous
        markets of Istanbul. The combination of old architecture and
        modern lifestyle was fascinating.
        </p>
        <h3>What I Loved:</h3>
        <ul>
        <li>Historical buildings</li>
        <li>Traditional food</li>
        <li>Beautiful architecture</li>
        <li>Rich culture</li>
        </ul>
        <h3>Travel Tips:</h3>
        <ul>
        <li>Learn basic local phrases</li>
        <li>Visit museums</li>
        <li>Try traditional dishes</li>
        </ul>
        `;
    }
    section.style.display = "block";
    section.scrollIntoView({
        behavior:"smooth"
    });
}