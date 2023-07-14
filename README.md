## Welcome to Compo-X-Direct!

## Getting Started

To pull and develop from here:


  - fork from main
  - install dependencies
``` npm install ```
  - create an .env.local file
  - here create a variable called ``` NEXT_PUBLIC_OPENAI_API_KEY ``` and set it equal to your API key from openai
  - from here you should be able to run ``` npm run dev ``` and start up a local server and start prompting the AI to generate components 


## Learn More

- The builder is running on GrapesJS. Here are the docs to help with all things Editor.js https://grapesjs.com/docs/ 
- The codeview is built using react-ace https://github.com/securingsincity/react-ace/blob/master/docs/Ace.md

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

How CompoX works. For a demo please sign up here: http://208.167.242.63:3000/ (not a secure sign on (please remove security on any chrome tab prior)).

Welcome to Compo, Its made with GrapeJS as the rendering agent, Next JS, Vue and then our magically component driven AI uses GPT-4 and our fine tunning model. 
[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
![image](https://github.com/HexigonAI/compo-x/assets/99493456/3ca1ac55-da2f-4875-80d0-e6cd98d98151)

You need to first add an Open AI API key to properly run program. Afterwards you will be prompted to start a sandbox AND a new project. After you have opened the prompt-dom you will be prompted with a test prompt here: Create a hero section for an e-commerce site with an intro on the left and a graphic on the right

![image](https://github.com/HexigonAI/compo-x/assets/99493456/1d020578-2583-489b-8ea0-77d25a46a044)

You can alter the demensions of the prompt, delete the prompt output OR add to the prompt with the a series of commands to the right. To change HTML based input please view the bottom console and re-render the changes after saving.
![image](https://github.com/HexigonAI/compo-x/assets/99493456/812997e2-75b6-4c79-a133-a727449143e6)


During hte prompting, all images will be defaulted images per grapejs or the rendering agent. We do not generate images at this time. PRESS ENTER TO COMMAND THE PROMPT: 
![image](https://github.com/HexigonAI/compo-x/assets/99493456/ecc7c02f-9d16-481a-bda2-c9f10dd4d3cf)

Please save your project should you need too by pressing this up button to push it to the server: 
![image](https://github.com/HexigonAI/compo-x/assets/99493456/80b33766-cf44-46b9-b40d-771d24e64569)


