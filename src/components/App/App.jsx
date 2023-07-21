import { AppSheet } from "./App.style";
import {Profile} from "../Profile/Profile";
import user from '../Data/user.json';
import {StatisticsList} from "components/Statistics/StatisticsList";
import data from '../Data/data.json'
import {FriendList} from "components/Friends/FriendList";
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json';
import { TransactionHistory } from "components/Transactions/TransactionList";
export const App = () => {
  return (
    <AppSheet
    ><Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <StatisticsList title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppSheet>
      )
}
