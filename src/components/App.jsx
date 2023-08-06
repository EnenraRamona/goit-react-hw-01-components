import { Profile } from './Profile/Profile';
import UserItems from "../data/user.json";
import { Statistic } from './Stats/Stats';
import StatsData from '../data/data.json'
import { FriendList } from './FriendList/FriendList';
import ItemList from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionList from '../data/transactions.json';


export const App = () => {
  const userData=UserItems
  return (
    <div>
      <Profile user={userData} />
      <Statistic stats={StatsData} />
      <FriendList friends={ItemList} />
      <TransactionHistory items={transactionList} />
    </div>

  );
};
