
# React-js


### Installation :-

#### Install React With Vite [ React + Vite ] :- ` npm create vite@latest `

#### To Start React App With Vite Use :- ` npm run dev `


### Tailwind-CSS :-

- [ Tailwind-CSS ](https://tailwindcss.com/)

## Tailwind Installation Run :- 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### #Add the Paths To All of Your Template Files In Your Tailwind.config.js file.

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

####  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file .

@tailwind base;
@tailwind components;
@tailwind utilities;

#### All The Dependencies Need For Project :- ` npm i appwrite react-router-dom lucide-react @reduxjs/toolkit  react-redux @tinymce/tinymce-react html-react-parser react-hook-form `

#### React Router Dom :- ` npm install react-router-dom `

#### HeadlessUI :- ` npm install @headlessui/react `

#### Google Charts :- `npm install react-google-charts`

#### HeroIcon :- ` npm install @heroicons/react `
`import { BeakerIcon } from '@heroicons/react/24/solid'`pm

` npm install react-router-dom @headlessui/react @heroicons/react`

### Gitgnore  

` 
node_modules
dist
dist-ssr
package.json
package-lock.json
README.md
vite.config.js
.eslintrc.cjs
*.local 

 `




#### open Weather API :- `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} `


#### coinGerko API-Key `CG-RJ1BV71DDH75DRRPvskzkv8U	`

#### https://www.coingecko.com/en/developers/dashboard

#### https://docs.coingecko.com/v3.0.1/reference/introduction

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.coingecko.com/api/v3/coins/markets', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  ### https://docs.coingecko.com/v3.0.1/reference/coins-markets

  
#### Currancy Api:- `https://latest.currency-api.pages.dev/v1/currencies/usd.json`

#### GitHub Api :- `https://api.github.com/users/Vivekjadhav0511`
 
#### React Router Dom :- `npm install react-router-dom`

#### Lucide React :- `npm install lucide-react`
 
 react Redux toolkit :- npm install @reduxjs/toolkit

 #### npm install react-redux

  `npm i appwrite react-router-dom lucide-react @reduxjs/toolkit  react-redux @tinymce/tinymce-react html-react-parser react-hook-form`

  #### GSAP CDN :- ` <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> `