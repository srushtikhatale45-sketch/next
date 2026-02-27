### Step 1.To Install Next js in your System

-Open terminal type this command
-npx create-next-app@latest
-->if want to visit website -->
https://nextjs.org/docs
-Need to install the following packages:
-create-next-app@16.1.6
-Ok to proceed? (y) y

## Follow Steps

√ What is your project named? ...project name in small case
√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... No -> if you dont want to use/ Yes -> if you want to use it
√ Which linter would you like to use? » ESLint -->it helps to show errors in the code
√ Would you like to use React Compiler? ... No / Yes ---no
√ Would you like to use Tailwind CSS? ... No / Yes --- yes
√ Would you like your code inside a `src/` directory? ... No / Yes --no
√ Would you like to use App Router? (recommended) ... No / Yes --yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes --no
Creating a new Next.js app

Using npm.

Initializing project with template: app-tw

Installing dependencies:

- next
- react
- react-dom

Installing devDependencies:

- @tailwindcss/postcss
- eslint
- eslint-config-next
- tailwindcss

## Step2:Now check the folders

-->Inside app folder the layout.js and page.js is present
-->work of layout is to handle what should present on your website like
1)Navbar,2)Footer,3)Childrens
-work of page is to handle what should present on your homepage just like react app.jsx
-->Now you have to make folder according to tabs present in the website and inside those folder crete file as page.js
-->make folder of assets for images and index page
-->make folder of components so that you can write code of react inside those component seperately and then render them into the next js files
-->inside the components folder itself make folder of Seowrapper to handle the webpages titles
it handles the factory functions

-->create utils folder inside the your project and inside that create one file SeoConfig.js it contains the all data about all pages title ,keywords functions presents here.

-->use seo wrapper in every file so that it is applicable for whole websites.

-->To check which folder is missing
npx-broken-link-checker nameofwebsite
