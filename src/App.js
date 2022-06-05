
import './App.css';
import LinkCard from './LinkCard/LinkCard';
function App() {
  const info = [
    {
      tittle: "github",
      username: "sakshi_rahangdale",
      link: "https://github.com/sakshi-rah"
    },
    {
      tittle: "facebook",
      username: "sakshi_rahangdale",
      link: "https://www.facebook.com/sakshi.rahangdale.9699/"
    },
    {
      tittle: "instagram",
      username: "sakshi_rahangdale",
      link: "https://www.instagram.com/__lovedoreamon__/"
    },
    {
      tittle: "linkedin",
      username: "sakshi_rahangdale",
      link: "https://www.linkedin.com/in/sakshi-rahangdale-61a68a221/"
    }
  ];
  return (
    <div className="container">
      <h2 className='app-tittle'></h2>
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
