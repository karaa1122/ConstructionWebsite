document.addEventListener("DOMContentLoaded", function() {
    const portfolio = document.getElementById("portfolio");
    const categories = document.querySelectorAll("nav a");

    function populatePortfolio(categoryFilter) {
        portfolio.innerHTML = ""; // Clear portfolio

        // Filter images based on selected category
        const filteredImages = portfolioData.filter(item => {
            return item.category === categoryFilter || categoryFilter === "all";
        });

        filteredImages.forEach(item => {
            const imgElement = document.createElement("div");
            imgElement.classList.add("portfolio-item");
            imgElement.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
            portfolio.appendChild(imgElement);
        });
    }

    // Populate portfolio with all images on page load
    populatePortfolio("all");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const categoryFilter = this.dataset.category;
            populatePortfolio(categoryFilter);
        });
    });
});
    


// Sample data for portfolio items
const portfolioData = [
    { category: "building-construction", image: "img/building2.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building1.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building3.jpg", title: "Construction" },
    
    { category: "fixing-support", image: "img/fixx.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx2.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx3.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx4.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx5.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx6.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx7.jpg", title: "fixing-support" },


    { category: "building-construction", image: "img/building4.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building5.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/conc1.jpg", title: "architecture-design" },
    { category: "painting", image: "img/pai1.jpg", title: "Painting" },
    { category: "painting", image: "img/pai2.jpg", title: "Painting" },
    { category: "painting", image: "img/pai3.jpg", title: "Painting" },
    { category: "painting", image: "img/pai4.jpg", title: "Painting" },
    { category: "painting", image: "img/pai5.jpg", title: "Painting" },
    { category: "painting", image: "img/pai6.jpg", title: "Painting" },


    { category: "house-renovation", image: "img/hs1.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs2.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs3.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs4.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs5.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs6.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs7.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs8.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs9.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs10.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs11.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs19.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs12.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs13.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs14.jpg", title: "house-renovation" },
    { category: "house-renovation", image: "img/hs15.jpg", title: "house-renovation" },

    { category: "building-construction", image: "img/building6.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/conc2.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/building7.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building8.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building9.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building10.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/conc3.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/building11.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/conc4.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/building12.jpg", title: "Construction" },
    { category: "interior-design", image: "img/arc1.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc2.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc3.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc4.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc5.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc6.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc7.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/arc8.jpg", title: "interior-design" },
    { category: "architecture-design", image: "img/conc5.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/building13.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building14.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/conc6.jpg", title: "architecture-design" },



    // Add more data for other categories...
];
