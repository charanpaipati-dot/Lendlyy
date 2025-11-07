import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';

const GoogleIcon = () => (
    <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 110.3 512 0 401.7 0 265.9c0-132.3 93.5-245.3 218.5-263.1C244.5 0 248.5 0 252.5 0c11.3 0 20.5 9.2 20.5 20.5v101c0 11.3-9.2 20.5-20.5 20.5-29.3 0-55.9 11.2-76.3 29.8-19.1 17.5-31.1 41.5-31.1 68.3 0 26.8 12 50.8 31.1 68.3 20.4 18.6 47 29.8 76.3 29.8 28.1 0 52.8-9.8 71.9-26.1 19.1-16.3 30.6-39.1 30.6-63.9 0-20.5-9.2-39.1-24.1-53.1-14.9-14-34.9-22.3-57.5-22.3-2.1 0-4.1.1-6.2.3-5.2.5-10.1-3.6-10.6-8.8-.5-5.2 3.6-10.1 8.8-10.6 2.4-.2 4.8-.4 7.2-.4 42.6 0 80 16.3 108.4 43.8 28.4 27.5 44.1 66.2 44.1 107.9z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
);


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your credentials to access your account.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/help" className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-400">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full">
                <GoogleIcon />
                Login with Google
            </Button>
             <Button variant="outline" className="w-full">
                <FacebookIcon />
                Login with Facebook
            </Button>
          </div>

           <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;