import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

// --- Icons ---
const ChatIcon = () => (
    <svg xmlns="http://www.w.w3.org/2000/svg" className="h-8 w-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

// --- FAQ Item Component ---
interface FAQItemProps {
    question: string;
    children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card>
            <button
                className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="text-lg font-semibold">{question}</h2>
                <ChevronDownIcon isOpen={isOpen} />
            </button>
            {isOpen && (
                <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 pt-4">
                        {children}
                    </div>
                </div>
            )}
        </Card>
    )
}


const Help: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How can we help you?</h1>
        <div className="relative max-w-xl mx-auto">
            <Input type="search" placeholder="Search for help..." className="w-full pl-10" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
            <CardContent className="flex flex-col items-center justify-center p-8">
                <ChatIcon />
                <h2 className="text-xl font-semibold mt-4 mb-2">Live Chat</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Chat with our support team</p>
                <Button variant="outline">Start Chat</Button>
            </CardContent>
        </Card>
         <Card className="text-center">
            <CardContent className="flex flex-col items-center justify-center p-8">
                <EmailIcon />
                <h2 className="text-xl font-semibold mt-4 mb-2">Email Support</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Get help via email</p>
                <Button variant="outline">Send Email</Button>
            </CardContent>
        </Card>
         <Card className="text-center">
            <CardContent className="flex flex-col items-center justify-center p-8">
                <PhoneIcon />
                <h2 className="text-xl font-semibold mt-4 mb-2">Phone Support</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Call us directly</p>
                <p className="font-semibold text-gray-900 dark:text-white">1-800-LENDLYY</p>
            </CardContent>
        </Card>
      </div>

      <div className="text-center mb-8">
         <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        <FAQItem question="How do I rent an item?">
            <p>Renting an item is easy! Just follow these simple steps:</p>
            <ol>
                <li><strong>Browse:</strong> Use our search bar or categories to find the item you need.</li>
                <li><strong>Book:</strong> On the item page, select your desired rental dates and click "Rent Now".</li>
                <li><strong>Checkout:</strong> You'll be taken to the checkout page where you can confirm your details and pay the rental fee and refundable deposit.</li>
                <li><strong>Receive:</strong> Get the item delivered to your door or arrange a pickup with the lender.</li>
                <li><strong>Enjoy & Return:</strong> Use the item for your rental period and return it in the same condition to get your deposit back.</li>
            </ol>
        </FAQItem>
         <FAQItem question="What if an item gets damaged?">
             <p>We understand accidents can happen. Here's what to do:</p>
            <ul>
                <li><strong>Contact Immediately:</strong> Inform both the lender and Lendlyy support as soon as the damage occurs.</li>
                <li><strong>Document:</strong> Take clear photos of the damage to share with our support team.</li>
                <li><strong>Resolution:</strong> Our team will assess the damage. Your refundable deposit may be used to cover the repair costs, in accordance with our terms of service.</li>
            </ul>
        </FAQItem>
        <FAQItem question="What is the cancellation policy?">
            <p>You can cancel a booking for a full refund of the rental fee if you cancel at least 48 hours before your rental period is scheduled to begin. Cancellations made within 48 hours of the start time may not be eligible for a full refund. The service fee is non-refundable. Lenders have their own cancellation policies which may also apply.</p>
        </FAQItem>
        <FAQItem question="What is the refund policy?">
            <p>Our goal is to ensure a satisfying rental experience. You are eligible for a refund under the following circumstances:</p>
            <ul>
                <li>If a rental is cancelled by the lender at any time.</li>
                <li>If you cancel your rental at least 48 hours before the rental period begins.</li>
                <li>If the item received is significantly not as described or is non-functional. You must report this to our support team within 12 hours of receiving the item.</li>
            </ul>
             <p>Once a refund is approved, it may take 5-7 business days to reflect in your original payment account.</p>
        </FAQItem>
      </div>
    </div>
  );
};

export default Help;
