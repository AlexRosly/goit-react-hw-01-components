import ProfileCard from "./components/ProfileCard/ProfileCard";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friend/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      <h2>Task 1</h2>
      <ProfileCard
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section>
        <h2>Task 2</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
        <h2>Task 3</h2>
        <FriendList friends={friends} />
        <h2>Task 4</h2>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
