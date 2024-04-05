# PAP-2024-Spring-L6-G1 / Hackathon
Our final project is to create a responsive Hackathon website, enabling organization and submission by teams of users.

## Tools we used
* Shared git repository across the team
* Github Projects to organize and assign tasks
* Github Issues to track bugs and review solutions

## Challenges we encountered
* [GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)
  * After some investigation, we found `HashRouter` to be an acceptable compromise
* Hosting our Express API backend on Render.com
  * To avoid local hosting, we wanted our backend to be accessible 24/7 from anywhere
* 