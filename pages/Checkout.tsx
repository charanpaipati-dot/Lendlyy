import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Alert from '../components/ui/Alert';
import { useCart } from '../context/CartContext';

type PaymentMethod = 'card' | 'paypal' | 'stripe';
type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';

const Checkout: React.FC = () => {
    const { cartItems, removeFromCart, updateCartItemDays } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [status, setStatus] = useState<PaymentStatus>('idle');
    const [alertMessage, setAlertMessage] = useState<{title: string, desc: string} | null>(null);
    const [includeCleaning, setIncludeCleaning] = useState(false);

    const subtotal = cartItems.reduce((acc, cartItem) => acc + cartItem.item.pricePerDay * cartItem.days, 0);
    const deliveryFee = subtotal * 0.03;
    const platformFee = subtotal * 0.20;
    const cleaningFee = includeCleaning ? cartItems.length * 10 : 0;
    const deposit = cartItems.reduce((acc, cartItem) => acc + cartItem.item.deposit, 0);
    const total = subtotal + deliveryFee + platformFee + cleaningFee + deposit;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('processing');
        setAlertMessage(null);

        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // 80% success rate
            if (isSuccess) {
                setStatus('success');
                setAlertMessage({title: 'Payment Successful!', desc: 'Your order has been confirmed. You will receive an email shortly.'});
            } else {
                setStatus('error');
                setAlertMessage({title: 'Payment Failed', desc: 'We were unable to process your payment. Please check your details and try again.'});
            }
        }, 2000);
    };

  if (cartItems.length === 0) {
    return (
        <div className="text-center py-20">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/categories">
                <Button size="lg">Start Shopping</Button>
            </Link>
        </div>
    )
  }

  return (
    <div>
      <div className="mb-4">
        <Link to="/categories" className="inline-flex items-center text-sm font-medium text-brand-600 hover:underline dark:text-brand-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to shopping
        </Link>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-6 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Payment Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Payment Information</h2>
            </CardHeader>
            <CardContent>
                <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                    <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                        <button onClick={() => setPaymentMethod('card')} className={`${paymentMethod === 'card' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Credit/Debit Card</button>
                        <button onClick={() => setPaymentMethod('paypal')} className={`${paymentMethod === 'paypal' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>PayPal</button>
                        <button onClick={() => setPaymentMethod('stripe')} className={`${paymentMethod === 'stripe' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Stripe</button>
                    </nav>
                </div>

                {status === 'success' && alertMessage && <Alert title={alertMessage.title} description={alertMessage.desc} className="mb-4" />}
                {status === 'error' && alertMessage && <Alert variant="destructive" title={alertMessage.title} description={alertMessage.desc} className="mb-4" />}


                <form onSubmit={handlePayment}>
                    {paymentMethod === 'card' && (
                         <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="cardName">Cardholder Name</Label>
                                <Input id="cardName" placeholder="John Doe" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiryDate">Expiry Date</Label>
                                    <Input id="expiryDate" placeholder="MM/YY" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" required />
                                </div>
                            </div>
                             <Button type="submit" size="lg" className="w-full mt-4" disabled={status === 'processing'}>
                                {status === 'processing' ? 'Processing...' : `Pay Now ($${total.toFixed(2)})`}
                            </Button>
                        </div>
                    )}
                    {paymentMethod === 'paypal' && (
                         <div className="text-center py-8">
                            <p className="mb-4 text-gray-600 dark:text-gray-300">You will be redirected to PayPal to complete your payment.</p>
                            <Button type="submit" size="lg" className="w-full bg-[#00457C] hover:bg-[#003057]" disabled={status === 'processing'}>
                                {status === 'processing' ? 'Redirecting...' : 'Pay with PayPal'}
                            </Button>
                        </div>
                    )}
                    {paymentMethod === 'stripe' && (
                         <div className="text-center py-8">
                            <p className="mb-4 text-gray-600 dark:text-gray-300">Complete your payment securely with Stripe.</p>
                            <Button type="submit" size="lg" className="w-full bg-[#635BFF] hover:bg-[#534dff]" disabled={status === 'processing'}>
                                {status === 'processing' ? 'Processing...' : 'Pay with Stripe'}
                            </Button>
                        </div>
                    )}
                </form>

            </CardContent>
          </Card>
        </div>
        {/* Right Side: Order Summary */}
        <div className="lg:col-span-1">
           <Card>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {cartItems.map(cartItem => (
                             <div key={cartItem.item.id} className="flex items-start justify-between space-x-2">
                                <img src={cartItem.item.images[0]} alt={cartItem.item.title} className="w-16 h-16 rounded-md object-cover" />
                                <div className="flex-grow">
                                    <p className="font-semibold text-sm leading-tight">{cartItem.item.title}</p>
                                    <p className="text-xs text-gray-500">${cartItem.item.pricePerDay}/day</p>
                                    <button onClick={() => removeFromCart(cartItem.item.id)} className="text-xs text-red-500 hover:underline mt-1">Remove</button>
                                </div>
                                <div className="text-right">
                                     <div className="flex items-center space-x-1">
                                         <Input 
                                            type="number" 
                                            min="1" 
                                            value={cartItem.days} 
                                            onChange={(e) => updateCartItemDays(cartItem.item.id, parseInt(e.target.value, 10) || 1)}
                                            className="w-14 h-8 text-center"
                                            aria-label={`Rental days for ${cartItem.item.title}`}
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-300">days</span>
                                     </div>
                                    <p className="text-sm font-medium mt-1">${(cartItem.item.pricePerDay * cartItem.days).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-2">
                         <div className="flex justify-between text-sm">
                            <p className="text-gray-600 dark:text-gray-300">Subtotal</p>
                            <p className="font-medium">${subtotal.toFixed(2)}</p>
                        </div>
                         <div className="flex justify-between text-sm">
                            <p className="text-gray-600 dark:text-gray-300">Delivery Fee (3%)</p>
                            <p className="font-medium">${deliveryFee.toFixed(2)}</p>
                        </div>
                         <div className="flex justify-between text-sm">
                            <p className="text-gray-600 dark:text-gray-300">Platform Fee (20%)</p>
                            <p className="font-medium">${platformFee.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="cleaning-fee"
                                    checked={includeCleaning}
                                    onChange={(e) => setIncludeCleaning(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                                />
                                <label htmlFor="cleaning-fee" className="ml-2 text-gray-600 dark:text-gray-300">Add Cleaning ($10/item)</label>
                            </div>
                            <p className="font-medium">${cleaningFee.toFixed(2)}</p>
                        </div>
                         <div className="flex justify-between text-sm">
                            <p className="text-gray-600 dark:text-gray-300">Refundable Deposit</p>
                            <p className="font-medium">${deposit.toFixed(2)}</p>
                        </div>
                         <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;