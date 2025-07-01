# Pixel-Perfect Clone of Orlance Webflow template

 A 1:1, pixel-perfect clone of the Orlance template by STUDIOP DIGITAL DESIGN
All design and assets remain © STUDIOP DIGITAL DESIGN and are used here only for demonstration.


## Visit [Live Demo](https://orlance.vercel.app) to see it

https://orlance.vercel.app



![DEMO](./public/demo.png)

## Features
13-page, pixel-perfect website built with Next.js, React and Typesctipt

Fully functional shopping cart using React Context, custom hooks, and localStorage (SSR-safe)

Smooth animations using Framer Motion

image optimization with Next.js <code> < Image ></code> for better performance

Dynamic product-card generation from a data array via props and Array.prototype.map

Images slider using Swiper.js

Bugfixes of original template, more about that below



## Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- Framer Motion  
- Swiper.js  

![DEMO](./public/demo2.png)
## Bug Fixes & Improvements

 **Fixed product-card grid layout breaking**
   
> Added h-full to every card element, applied <Code> grid-auto-rows:minmax(0,1fr) </code> to the grid container

**Fixed hover state only activating on the image, not the entire product card**

> Wrapped the card link in a group container, gave image group-hover:

**Fixed "Read Next" navigation (1→2, 2→3 , 3→1 , 4→1)**

> Third article now links to the fourth (1→2→3→4→1), closing the loop properly.

**Fixed inconsistent cart item count across different headers.**
One header was displaying the number of distinct items, the other the total quantity

> Unified all headers cart buttons to display distinct items
