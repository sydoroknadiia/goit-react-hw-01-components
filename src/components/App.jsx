import React from 'react';

import Profile from '../components/profile/Profile';
import userData from '../JSON/user';

import Statistics from '../components/statistics/Statistics';
import statisticalData from '../JSON/statistical-data';

import FriendList from '../components/friend-list/FriendList';
import friendsData from '../JSON/friends';

import TransactionHistory from '../components/transaction-history/TransactionHistory';
import transactionsData from '../JSON/transactions';

const App = () => (
    <div >
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statisticalData}/>
      <FriendList friends={friendsData} />,
      <TransactionHistory items={transactionsData} />,
    </div>
  );
  
  export default App;
