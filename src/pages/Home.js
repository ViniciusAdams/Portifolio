import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'>
  	  <h2> Hi,My name is Vinicius </h2>
      <div className='prompt'>
        <p> A software developer </p> 
        <LinkedInIcon/>
        <EmailIcon/>
        <GithubIcon/>

         </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className ="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>React.JS,Angular,Redux,HTML,CSS,React Native,Flutter,NPM,Ionic,Bootstrap,MaterialUI,Yarn,TaiwlWindCSS,StyledComponents
          </span>
        </li>
        <li className="item">
          <h2> Back-End</h2>
          <span>NodeJS,Java Spring,.NET,ExpressJS,GraphQL,ApolloServer,MySQL,MongoDB,DynamoDB,DigitalOcean,AWS S3,MS SQL</span>
        </li>
        <li className="item">
          <h2> Languages</h2>
          <span>JavaScript,Java,Pyhton,C#,c,C++,TypeScript</span>
        </li>
        </ol>
        </div>
    </div>
);
  
}

export default Home;
  