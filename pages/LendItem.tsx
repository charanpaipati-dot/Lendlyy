
import React, { useState, useEffect } from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Textarea from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { categories } from '../lib/data';
import Stepper from '../components/ui/Stepper';

const LendItem: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        brand: '',
        description: '',
        purchaseDate: '',
        condition: 'Gently Used',
        price: '',
        deposit: '',
        city: '',
    });
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    
    const steps = ["Details", "Condition", "Photos", "Pricing", "Review"];

    useEffect(() => {
        // Create previews
        const newImagePreviews = images.map(file => URL.createObjectURL(file));
        setImagePreviews(newImagePreviews);

        // Cleanup
        return () => {
            newImagePreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [images]);


    const handleNext = () => setStep(prev => Math.min(prev + 1, steps.length));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };
    
    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock form submission with all data
        console.log('Item submitted for lending!', { formData, images });
        alert('Your item has been submitted for review!');
    };
    
    const cities = ["Bangalore", "Hyderabad", "Mumbai"];
    
    const renderStepContent = () => {
        switch (step) {
            case 1: // Details
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Item Title</Label>
                            <Input id="title" value={formData.title} onChange={handleChange} placeholder="e.g., Sony Alpha 7 IV" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select id="category" value={formData.category} onChange={handleChange} required>
                                    <option value="" disabled>Select a category</option>
                                    {categories.map(cat => <option key={cat.slug} value={cat.slug}>{cat.label}</option>)}
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="brand">Brand</Label>
                                <Input id="brand" value={formData.brand} onChange={handleChange} placeholder="e.g., Sony" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" value={formData.description} onChange={handleChange} placeholder="Describe your item in detail..." required />
                        </div>
                    </div>
                );
            case 2: // Condition
                return (
                     <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="purchaseDate">Purchase Date</Label>
                            <Input id="purchaseDate" value={formData.purchaseDate} onChange={handleChange} type="date" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Condition</Label>
                            <div className="space-y-2 rounded-md border border-gray-200 dark:border-gray-700 p-4">
                                <label className="flex items-center">
                                    <input type="radio" name="condition" value="New" checked={formData.condition === 'New'} onChange={() => setFormData(p => ({...p, condition: 'New'}))} className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"/>
                                    <span className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">New</span>
                                </label>
                                 <label className="flex items-center">
                                    <input type="radio" name="condition" value="Gently Used" checked={formData.condition === 'Gently Used'} onChange={() => setFormData(p => ({...p, condition: 'Gently Used'}))} className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"/>
                                    <span className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Gently Used</span>
                                </label>
                                 <label className="flex items-center">
                                    <input type="radio" name="condition" value="Used" checked={formData.condition === 'Used'} onChange={() => setFormData(p => ({...p, condition: 'Used'}))} className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"/>
                                    <span className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Used</span>
                                </label>
                            </div>
                        </div>
                    </div>
                );
            case 3: // Photos
                return (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="images">Upload Images</Label>
                             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-brand-600 hover:text-brand-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-500">
                                            <span>Upload files</span>
                                            <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={handleFileChange} accept="image/*" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        {imagePreviews.length > 0 && (
                            <div className="grid grid-cols-3 gap-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative">
                                        <img src={preview} alt={`preview ${index}`} className="h-24 w-full object-cover rounded-md" />
                                        <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs leading-none">&times;</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            case 4: // Pricing
                 return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price per day ($)</Label>
                                <Input id="price" value={formData.price} onChange={handleChange} type="number" placeholder="50" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="deposit">Refundable Deposit ($)</Label>
                                <Input id="deposit" value={formData.deposit} onChange={handleChange} type="number" placeholder="200" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Select id="city" value={formData.city} onChange={handleChange} required>
                                <option value="" disabled>Select city</option>
                                {cities.map(city => <option key={city} value={city}>{city}</option>)}
                            </Select>
                        </div>
                         <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-300">
                            <strong>Pricing Tip:</strong> Consider your item's condition. 'New' items can fetch a higher price, while 'Used' items should be priced more competitively.
                        </div>
                    </div>
                );
            case 5: // Review
                return (
                     <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Review Your Listing</h3>
                        <div className="space-y-2 text-sm">
                            <p><strong>Title:</strong> {formData.title || '...'}</p>
                            <p><strong>Category:</strong> {formData.category || '...'}</p>
                            <p><strong>Brand:</strong> {formData.brand || '...'}</p>
                            <p><strong>Condition:</strong> {formData.condition || '...'}</p>
                            <p><strong>Purchase Date:</strong> {formData.purchaseDate || '...'}</p>
                            <p><strong>Price:</strong> ${formData.price || '0'}/day</p>
                            <p><strong>Deposit:</strong> ${formData.deposit || '0'}</p>
                            <p><strong>City:</strong> {formData.city || '...'}</p>
                        </div>
                        {imagePreviews.length > 0 && (
                            <div>
                                <h4 className="font-medium text-sm">Images:</h4>
                                <div className="grid grid-cols-4 gap-2 mt-2">
                                    {imagePreviews.map((preview, index) => (
                                        <img key={index} src={preview} alt={`preview ${index}`} className="h-16 w-full object-cover rounded-md" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <Stepper steps={steps} currentStep={step} />
            </div>
            <Card>
                <CardHeader>
                    <h1 className="text-2xl font-bold tracking-tight">Lend an Item</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{steps[step-1]}</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                       {renderStepContent()}
                        <div className="mt-8 flex items-center" style={{justifyContent: step > 1 ? 'space-between' : 'flex-end'}}>
                            {step > 1 && (
                                <Button type="button" variant="outline" onClick={handleBack}>
                                    Back
                                </Button>
                            )}
                            {step < steps.length ? (
                                <Button type="button" onClick={handleNext}>
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full sm:w-auto">
                                    List My Item
                                </Button>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LendItem;