import './App.css';

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      handle: "dog_feelings",
      image: "src/assets/doggo.jpeg",
    },
    timestamp: "1h",
    message: "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      handle: "dog_feelings",
      image: "src/assets/doggo.jpeg",
    },
    timestamp: "2h",
    message: "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      handle: "dog_feelings",
      image: "src/assets/doggo.jpeg",
    },
    timestamp: "3h",
    message: "here is what i plan to accomplish today:\n2. bark loudly. but at nothing\n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];

function App() {
  return (
    <div className="App">
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

function ProfileImage({ image }) {
  return <img src={image} alt="profile" className="profile" />;
}

function User({ name, handle }) {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

function Timestamp({ time }) {
  return <span className="timestamp">{time}</span>;
}

function Message({ message }) {
  return <p className="message">{message}</p>;
}

function Actions() {
  return (
    <div className="actions">
      <i className="far fa-comment" aria-hidden="true"></i>
      <i className="fas fa-retweet" aria-hidden="true"></i>
      <i className="far fa-heart" aria-hidden="true"></i>
      <i className="fas fa-share" aria-hidden="true"></i>
    </div>
  );
}

export default App;
