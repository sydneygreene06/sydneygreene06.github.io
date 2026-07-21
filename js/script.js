const artContainer = document.querySelector(".art-container");
const titleElement = document.querySelector(".title");
const specsElement = document.querySelector(".specs");
const descElement = document.querySelector(".desc");
const drawingElement = document.querySelector(".drawing");

const artPieces = {
    art1: {
        title: "Oceanscape Game Cover",
        size: "digital",
        description: "This was a mockup I did a while back for Business Professionals of America. The prompt was to create a video game cover and merch.",
        image: "images/cover.jpg"
      
    },
    art2: {
        title: "Oceanscape Shirt Mockup",
        size: "digital",
        description: "Here is the merch part of the Oceanscape game mockup.",
        image: "images/shirt.png"
        
    },
    art3: {
        title: "The Odyssey",
        size: "18 x 24 inches, multi-media",
        description: "A multi-media project centered around the Odyssey and Odysseus.",
        image: "images/odyssey.jpg"
        
    },
    art4: {
        title: "Predator vs. Prey",
        size: "oil painting on panel",
        description: "This painting represents the push and pull of societal systems and natural systems.",
        image: "images/orca.png"
       
    },
    art5: {
        title: "Sea/Space Diptych",
        size: "charcoal painting on 2 sheets of 22x30 inches",
        description: 'This drawing represents the sentiment "per aspera ad astra," which translates to "through hardships to the stars." It also draws parallels between deep space and sea. Partially inspired by the movie Project Hail Mary.',
        image: "images/space.png"
      
    },
    art6: {
        title: "Lynx Portrait",
        size: "30x44 inches, charcoal on paper",
        description: "A large-sized charcoal drawing of a lynx. A test of my technical skills on a large scale.",
        image: "images/lynx.jpg"
        
    },
    art7: {
        title: "Grandma Gardening",
        size: "11 x 14 inches, oil paint on canvas board",
        description: "A Van Gogh inspired painting that represents the serenity and beauty we as humans achieve from nature.",
        image: "images/grandmagardening.jpg"
        
    },
    art8:{
        title: "Identity Drawing",
        size: "digital",
        description: "A digitial drawing that symbolizes who I am and how I have changed, using colors and light to represent this.",
        image: "images/identity.jpg"
    },
    art9:{
        title: "Vote for Joe Poster",
        size: "8x10, multimedia",
        description: "A campaign poster for my friend's student government run. This is one of a few posters I have made for him, but the only hand-drawn one. It was made with a collage of magazine cutouts and paper, drawn with pencil and marker.",
        image: "images/joe.jpg"
    },
    art10:{
        title: "GamesRUs Case Mockup",
        size: "digital",
        description: "A project for Business Professionals of America. The prompt was to design electronic cases and stickers and a logo for a game store company. This is the iPhone case mockup.",
        image: "images/case.png"
    },
    art11:{
        title: "Champion Dog Food",
        size: "digital",
        description: "Another project for Business Professionals of America. This prompt was to create a logo and mockups for a dog food brand.",
        image: "images/foodbag.png"
    }
};

function displayArt(artKey) {
    if (artPieces.hasOwnProperty(artKey)) {
        titleElement.textContent = artPieces[artKey].title;
        specsElement.textContent = artPieces[artKey].size;
        descElement.textContent = artPieces[artKey].description;
        
        drawingElement.innerHTML = "";
        
        const img = document.createElement("img");
        img.src = artPieces[artKey].image;
        img.alt = artPieces[artKey].title;
        img.classList.add(artKey);
     //   img.style.maxWidth = artPiece[artKey].width || "70%" ;
       // img.style.height = "auto";
        drawingElement.appendChild(img);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            displayArt(this.id);
        });
    });
});
