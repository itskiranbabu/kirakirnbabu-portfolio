import React from 'react';
import ReactDOM from 'react-dom/client';
import IntroAnimation from '../components/ui/scroll-morph-hero';
import '../components/ui/globals.css'; // Ensure styles are loaded

const rootElement = document.getElementById('digital-products-hero-root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <div className="w-full h-[800px] border rounded-lg overflow-hidden relative shadow-2xl my-8">
                <IntroAnimation />
            </div>
        </React.StrictMode>
    );
}
