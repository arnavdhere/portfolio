---
layout: post
title: About
permalink: /about/
comments: true
---

## As a conversation Starter

Here are some places I have lived.

<comment>
Flags are made using Wikipedia images
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [[
  {
    flag: "data:image/webp;base64,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",
    greeting: "Hullo",
    description: "United Kingdom of Great Britain and North Ireland - 225 years"
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
    greeting: "Alright mate",
    description: "England - 2 years"
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg?",
    greeting: "Helo",
    description: "Wales - 67 years"
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
    greeting: "Awrite?",
    description: "Scotland - 23 years"
  },
];
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Journey through Life

Here is what I did at those places

- 🏫 Lots of Elementary Schools in Tucson, LA, Honolulu, and Glendale (CA)
- 🏫 Middle and High School in Glendale (CA), Hoover High graduated '77
- 🎓 Glendale CA Community College, UCLA Extension, LA Wilshire Computer Tech School '77 to '79
- ⛪ England, London Missionary for Church of Jesus Christ of Latter-day Saints '79 to '81
- 💼 Culver City, Glendale CA founder at Ashton-Tate, original PC's dBase 2 and 3 '82 to '87
- 🎓 Eugene Oregon Undergraduate CompSci Degree at University of Oregon (Go Ducks!) '89 to '91
- 💼 Eugene Oregon, founder and owner @ Microniche `88, Point Control CAD CAM developer '91 to '96
- 🏢 San Diego CA Qualcomm, Satellite Comm and 1st Mobile OS (BREW) '96 to '19
- 👨‍🏫 San Diego CA Teacher of Computer Science @ Del Norte High School San Diego '19 to present

### Culture, Family, and Fun

Everything for me, as for many others, revolves around family and faith.

- My mother told me that I was Danish, English. and Irish, here is my researched [family tree]({{site.baseurl}}/images/about/familytree.png)
- My family is pretty big as I have been married twice, my 1st wife passed away.  We have had 5 kids, 4 adopted by me, 1 biological.  Plus, there are three grandkids.  My name to my grandkids is Abuilito.
- The gallery of pics has some of my family, fun, culture and faith memories.

<comment>
Gallery of Pics, scroll to the right for more ...
</comment>
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/missionary.jpg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/john_tamara.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/tamara_fam.jpg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/surf.jpg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/john_lora.jpg" alt="Image 5">
  <img src="{{site.baseurl}}/images/about/lora_fam.jpg" alt="Image 6">
  <img src="{{site.baseurl}}/images/about/lora_fam2.jpg" alt="Image 7">
  <img src="{{site.baseurl}}/images/about/pj_party.jpg" alt="Image 8">
  <img src="{{site.baseurl}}/images/about/trent_family.png" alt="Image 9">
  <img src="{{site.baseurl}}/images/about/claire.jpg" alt="Image 10">
  <img src="{{site.baseurl}}/images/about/grandkids.jpg" alt="Image 11">
  <img src="{{site.baseurl}}/images/about/farm.jpg" alt="Image 12">
</div>
