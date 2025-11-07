
import React from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';

const Wallet: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">My Wallet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Current Balance</h2>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-brand-500">$0.00</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              This is your placeholder earnings balance.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Payment Methods</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Placeholder for managing saved payment methods.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
