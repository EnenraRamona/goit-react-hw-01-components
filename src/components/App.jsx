import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistic } from './Stats/Stats';
import StatsData from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionList from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={StatsData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionList} />
    </div>
  );
};
