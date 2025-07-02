"use client";
import React from 'react';

// This is needed for TypeScript to recognize the custom element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string; }, HTMLElement>;
        }
    }
}

export function EducationSplineModel() {
    return (
        <div className="w-full h-full">
            <spline-viewer url="https://prod.spline.design/nI9ZIzO6Z1wWnIph/scene.splinecode"></spline-viewer>
        </div>
    );
}
