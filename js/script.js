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
    { category: "building-construction", image: "img/all.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a1.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a2.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a3.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a4.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a5.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a6.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a7.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a8.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a9.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a10.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a11.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a12.jpg", title: "Construction" },
    { category: "building-construction", image: "img/a13.jpg", title: "Construction" },


    { category: "fixing-support", image: "img/fixx2.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx3.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx4.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx5.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx6.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/fixx7.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe2.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe3.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe4.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe5.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe6.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe7.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe8.jpg", title: "fixing-support" },
    { category: "fixing-support", image: "img/pipe9.jpg", title: "fixing-support" },


    { category: "building-construction", image: "img/building4.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building5.jpg", title: "Construction" },
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
    { category: "architecture-design", image: "img/naj.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj2.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj3.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj4.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj5.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj6.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj7.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj8.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj9.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj10.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj11.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj12.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj13.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj14.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj15.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj16.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj17.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj18.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj19.jpg", title: "architecture-design" },
    { category: "architecture-design", image: "img/naj20.jpg", title: "architecture-design" },



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
    { category: "interior-design", image: "img/d.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d1.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d2.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d3.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d4.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d5.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d6.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d7.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d8.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d9.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d10.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d11.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d12.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d13.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d14.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d15.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d16.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d17.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d18.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d19.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d20.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d21.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d22.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d23.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d24.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d25.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d26.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d27.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d28.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d29.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d30.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d31.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d32.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d33.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d34.jpg", title: "interior-design" },
    { category: "interior-design", image: "img/d35.jpg", title: "interior-design" },


    { category: "architecture-design", image: "img/conc5.jpg", title: "architecture-design" },
    { category: "building-construction", image: "img/building13.jpg", title: "Construction" },
    { category: "building-construction", image: "img/building14.jpg", title: "Construction" },



    // Add more data for other categories...
];
