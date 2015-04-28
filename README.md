# SC-Snippets
Collection of common/useful snippets for Spacecraft projects

1. [Modals](#modals)
2. [Filtered Image Gallery](#filtered)

## Modals<a name="modals"></a>

The Modal takes an existing blockWrap, hides it, and appends it to the body of the html document, then displays it when a specified item is clicked. Depending on the task, the modals work slightly differently (ie. the image gallery modal is not immediately hidden). 

### Current methods:

1. Modal that houses video
2. Modal that houses an image gallery

#### Steps 

1. copy and paste the css and js into their respective places.
2. in the JS: specify the page this modal is for, change out the triggers and targets. trigger refers to the block that contains the item to be clicked. the target refers to the block that contains the modal content.

#### Troubleshooting

1. make sure you are using the correct css files. the image gallery modal has to work differently than other modals, because the block can't be hidden before Flexslider loads.

#### Live Examples

1. Video Modal
	- http://narrativeedge.com/work
2. Image Gallery Modal
	- http://levelokc.spacecrafted.com/the-space/level (click on floorplan items, will update once site is on their actual domain)

---

## Filtered Image Gallery<a name="filtered"></a>

An image gallery that allows user to filter which images they see based on a list of filter links.

#### Steps

1. Include css and js files in their respective places, replace example blockWrap classes with correct ones
2. Within Spacecraft tool, find the correct page and create a custom html block and include the filter-links.html inside
3. Create an image gallery block, and include the images for the gallery.
4. Add tags to your images that correspond to the "data-filter" attributes on the filter links, this is how the correct images will be displayed when one of the list items is clicked

#### Troubleshooting

- using an items list: this snippet could possibly be used on an items list as well as an image gallery. However, if the design uses a full-width layout, has the images touching, and needs smooth animated transitions, then it is better to just use an image gallery. The default packery settings on items lists are harder to work with than image galleries
- the css included here creates a full width container with the images flush against each other, remove styles as necessary if this isn't desired for your layout
- style the block as much as you can with the design tool before trying out more complicated solutions

#### Live Examples

1. http://loganandjohnson.com/projects
2. http://tribezaguides.com/dining (with dropdown)
3. http://stonefire.spacecrafted.com/recipes (will update once site is completely live)

---

## Full Page Rotating Background Images

Changes the background image of a specified element periodically. Most often used for background images that take up an entire page.

### Backstretch Method

#### Steps

1. create an image gallery block on desired page and populate with images
2. paste rotating-bg-images.js into js body
3. change out the blockId and bodyBg with correct selectors
4. script will take gallery images, use backstretch, and then remove the block from the html (this lets clients easily edit which images are used and not used)

### Method 2 (used on Odd Duck)

#### Steps

1. paste script into js body
2. change out the url's and bg image paths with correct paths

#### Troubleshooting

- this method was created for Odd Duck so they could have a specific image display depending on the page the user was on. because of that, each page needs have a background-image specified in the css, which should correspond to the one used in the bgImgs array within the js.

#### Live Examples

- barley swine (backstretch)
- http://oddduckaustin.com/ (method 2)

---

## Backstretch

Creates full-width background images. Useful for creating hero images and full-width backgrounds out of generated blocks. Allows users to easily change the images.

info on the plugin can be found here: http://srobbin.com/jquery-plugins/backstretch/

#### Steps

1. include backstretch-example.js in the js body, it includes the plugin itself
2. call the function on a blockWrap/block, then pass it an array of images you'd like to appear as background images in that blockWrap/block
3. in the backstretch-example.js, there are 2 usages. one is basic, and the image paths are strictly defined. the second is more advanced and dynamically creates the array of images sources

<!-- #### Troubleshooting -->

<!-- #### Live Examples -->

---

## Google Tracking Conversion

a script to dynamically add the onclick attribute to text or image links

information from google about it: https://support.google.com/adwords/answer/6095821

#### Steps

1. Create a custom html block and include the google-conversion.html inside
2. to dynamically add the onclick attribut to a text/image, use the onClickGoogleConversion.js file. if you have access to the html itself, then simply include the attribute there.

#### Live Examples

- http://pilgrimagefestival.com/
- http://nflp.com/

---

## Quick Append

a script for easily moving DOM elements to other locations. allows you to specify one array with all the dom elements that will be appended in your project, instead of having them spread out all throughout the js file

#### Steps

1. 

<!-- #### Live Examples -->

---

## ScCaptions

Creates captions for an image based on its title and alt text. The title and alt text is specified in the spacecraft tool.

#### Steps

1. 

<!-- #### Troubleshooting -->

<!-- #### Live Examples -->

