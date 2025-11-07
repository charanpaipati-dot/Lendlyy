import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { categories } from '../../lib/data';

const CategoryIcon = ({ category }: { category: string }) => {
    // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
    const icons: { [key: string]: React.ReactElement } = {
        gadgets: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        fashion: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        watches: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        sneakers: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /><path d="M2.5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /><path d="M18.81 10.316a.5.5 0 0 1 .375.492l-1.558 5.454a.5.5 0 0 1-.491.375H10.5a.5.5 0 0 1 0-1h6.636l1.24-4.341a.5.5 0 0 1 .492-.375h.503a.5.5 0 0 1 0 1h-.445l-1.192 4.172a1.5 1.5 0 0 1-1.474 1.128H10.5a1.5 1.5 0 0 1-1.5-1.5v-2.31a.5.5 0 0 1 .18-.39l3.5-3a.5.5 0 0 1 .632.726l-3.21 2.751A.5.5 0 0 1 9.5 14.5v2.31a.5.5 0 0 0 .5.5H16.83a.5.5 0 0 0 .491-.375l1.558-5.454a.5.5 0 0 0-.375-.492H1.5a.5.5 0 0 1 0-1h17.31z" /></svg>,
        bags: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
    };
    return icons[category] || <div className="h-8 w-8"></div>;
};

const CategoriesShowcase: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Browse Top Categories
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Find exactly what you need from our most popular rental categories.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <Link
            to={`/category/${category.slug}`}
            key={category.slug}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full transition-all duration-300 ease-in-out group-hover:bg-brand-50 dark:group-hover:bg-gray-700 group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="mb-4 text-brand-600 dark:text-brand-400">
                <CategoryIcon category={category.slug} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.label}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesShowcase;
