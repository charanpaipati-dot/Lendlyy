
import React from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/wallet">
            <Card className="hover:border-brand-500 transition-colors">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Wallet</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">View your balance and payment methods.</p>
                </CardContent>
            </Card>
        </Link>
        <Card>
            <CardHeader>
                <h2 className="text-xl font-semibold">Profile Information</h2>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Manage your personal details.</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <h2 className="text-xl font-semibold">Settings</h2>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Adjust your notification and privacy settings.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;
