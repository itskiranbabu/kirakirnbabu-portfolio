import React from 'react';
import ReactDOM from 'react-dom/client';
import { GrowthWidget } from '../components/ui/growth-widget';

const rootElement = document.getElementById('orbit-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <GrowthWidget />
        </React.StrictMode>
    );
}
