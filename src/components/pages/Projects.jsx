import React from 'react'

export default function Projects() {
  const divStyles = "flex items-center justify-center my-5 h-auto w-[40rem]"
  const projectDetailStyles = "flex flex-col"
  const imageStyles = "h-[10rem] w-[10rem] object-fill border rounded-xl"


  return (
    <section
      className={`flex flex-row justify-center items-center`}
    >
      <div
        className='flex flex-col'
      >
        <h1>Projects</h1>

        {/* Projects Container Div */}
        <div>
          
          {/* project 1: Gun Shapes Project */}
          <div
            className={`${divStyles}`}
          >
            <img
              className={`${imageStyles}`}
              src="https://i.imgur.com/w0mbclj.jpg"
              alt="Gun Shapes Thumbnail"
            />
            <div
              className={projectDetailStyles}
            >
              <h1>./solo/GunShapes</h1>
              {/* <p>Gunbound-clone: Two players will spawn in their own turrets and take turns firing at each other. First one to hit the other wins. Be forewarned, this game is not as simple as it appears.</p> */}
              <a href='https://github.com/bluz225/GA-425-Unit1-P1'>GitHub</a>
              <a href='https://bluz225.github.io/GA-425-Unit1-P1/'>Delpoyed</a>
            </div>
          </div>


          {/* project 2: Sous Chef Dobbie Project*/}
          <div
            className={`${divStyles}`}
          >
            <img
              className={`${imageStyles}`}
              src="https://i.imgur.com/dXv6omP.jpg"
              alt="Sous Chef Dobbie Thumbnail"
            />
            <div
              className={projectDetailStyles}
            >
              <h1>./solo/SousChefDobbie</h1>
              {/* <p>Welcome to Sous Chef Dobbie, your most (somewhat) useful cooking assistant, he can only help from the sidelines with recipe knowledge.</p> */}
              <a href='https://github.com/bluz225/SousChefDobbie'>GitHub</a>
              <a href='https://souschefdobbie.herokuapp.com/'>Delpoyed</a>
            </div>
          </div>

          {/* project 3 */}
          <div
            className={`${divStyles}`}
          >
            <img
              className={`${imageStyles}`}
              src="https://i.imgur.com/rZsUIZn.jpg"
              alt="Delisha Gram Thumbnail"
            />
            <div
              className={projectDetailStyles}
            >
              <h1>./co-op/DelishaGram</h1>
              {/* <p>Have you ever been scrolling through your Instagram and thought, "Why is my feed full of wack influencers? Where's the food?" Well you'll be downright giddy to hear that the fellas over at Team Codeplay have developed the perfect app to satisfy all your foodie needs. Upon login you'll be directed to a home page that shows a random post from a user with a link that navigates to a page that shows your own posts and a link that allows you to make a new post, as well as one to edit a post. Additionally there will be a search function that allows you to search by dish to see all the posts associated with that dish. Finally, we will also provide the ability to make edits to your account information. With all of this said and done, have a blast navigating through this plethora of food porn. And don't forget, Phone Eats First!</p> */}
              <a href='https://github.com/j-onederful/DelishaGram-client'>GitHub</a>
              <a href='https://delishagram.netlify.app/'>Delpoyed</a>
            </div>
          </div>

          {/* project 4 */}
          <div
            className={`${divStyles}`}
          >
            <img
              className={`${imageStyles}`}
              src="https://i.imgur.com/NVTS3eK.jpg"
              alt="Ensemble Closet App Thumbnail"
            />
            <div
              className={projectDetailStyles}
            >
              <h1>./co-op/Ensemble-Closet</h1>
              {/* <p>Picture this. It's a frosty winter morning, and you wake up to the sound of snow pattering against your window. You need to leave for work in ten minutes, and you forgot to pick out your outfit last night! You're so cozy, but you need to get out of your bed, walk on your cold floor, and spend a few minutes browsing through your closet. Is your blue shirt in the laundry? Yes, it is. But you just spent three minutes looking for it.

                So sad.

                With Ensemble you wont have this problem. You can access your whole closet at the tip of your fingers. Say goodbye to cold, hardwood floors and hello to warm feet in your fluffy blanket.

                Ensemble allows you to add, delete and constantly virtually update your closet.

              </p> */}
              <a href='https://github.com/Emily-Herndon/Ensemble-Client'>GitHub</a>
              <a href='https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/'>Delpoyed</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
