# HACKTOBERFEST 2020

> Instrucciones en Español [README-ES.md](https://github.com/4rturd13/know-me-Hacktoberfest2020/blob/master/README-ES.md)

![image](https://res.cloudinary.com/dargjxuh5/image/upload/v1603492320/logos/HF2020_Events_640x360_Centered_k5avto.png)

## This project is for beginners

This project is made with React.JS but if you don't know React.JS don't worry I'll be your guide until you make a `pull request`

> To participate follow the instructions below

### Steps

1- Fork this project.

2- Open your **terminal** on mac or linux - **cmd** on windows.

3- Open your terminal on mac or linux - cmd on windows and go to the directory where you will download the project. Example Commands `cd desktop` - `cd documents`

4- With SSH write `git clone git@github.com:<your_username/know-me.git` or with HTTPS write `git clone https://github.com/<your_username>/know-me.git`

5- Insert a photo of yourself or the one you use as a profile on github into the `src/assets/images` (your photo must be called with your github username).

6- Go to `src/App.jsx` you can see that

![image](https://res.cloudinary.com/dargjxuh5/image/upload/v1603508270/logos/code_di6kku.png)

Note that the code that you must duplicate to enter your data starts from `{ /* Start card --> */}` and ends at `{/* End card <-- */}`

> Make sure to duplicate the code from the start card comment to the end card so that the others do not fall into errors and their work is damaged

7- Once the code in point 3 is duplicated, you can replace the data there with your data.
Example:

```
{/* Start card --> */}
<div  className='w-full w-1/2 md:w-1/3 lg:w-1/4 px-2'>
<Card
photo='./assets/images/your_username'
name='Peter Parker'
github_username='spiderman'
position='Front-End Developer'
country='your_country'
city='your_city'
language='your_favorit_language'
github='your_github_username'
/>
</div>
{/* End card <-- */}
```

To get the image of your favorite language at the end of the card, you must choose one of the languages below.
I hope your favorite is one of these! ¯\\_(ツ)_/¯

- JavaScript
- Python
- Java
- Ruby
- C
- C++
- Rust
- C#
- Dotnet
- PHP
- Swift

8- To run the program you need to install Node.js on your computer if you don't have it yet. This is very easy, you just have to go to [https://nodejs.org/en/](https://nodejs.org/en/) and click on the available LTS version.

> If you already have Node.js installed you don't have to reinstall it.

Then you can use the ** npm ** a command mentioned below. If you have yarn you can use the command to run with yarn

`yarn start` or `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### To end

9 - In your terminal or cmd write

- `git add -A`
- `git commit -m 'your_github_username'`
- `git checkout -b your_github_username`
- `git push origin your_github_username`

  Now go to github page and create your `pull request`

I will approve it in less than 24 hours

`Happy Hacking!`
