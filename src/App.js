
import './App.css';
import LinkCard from './LinkCard/LinkCard';
import Profile from './Profile/Profile';

function App() {
  const info = [
    {
      tittle: "github",
      username: "Github",
      link: "https://github.com/sakshi-rah"
    },
    {
      tittle: "facebook",
      username: "Facebook",
      link: "https://www.facebook.com/sakshi.rahangdale.9699/"
    },
    {
      tittle: "instagram",
      username: "Instagram",
      link: "https://www.instagram.com/__lovedoreamon__/"
    },
    {
      tittle: "linkedin",
      username: "LinkedIn",
      link: "https://www.linkedin.com/in/sakshi-rahangdale-61a68a221/"
    }
  ];
  return (
    <div className="container">
      <Profile/>
      {
        info.map((carditeam) => {
          return (
            <LinkCard
              tittle={carditeam.tittle}
              username={carditeam.username}
              link={carditeam.link}
            />
          );
        })
      }
      

    </div>
  );
}

export default App;
