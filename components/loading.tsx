"use client";

import { useState, useEffect } from "react";

interface LoadingProps {
  onComplete?: () => void;
  duration?: number;
}

export default function Loading({ onComplete, duration = 2 }: LoadingProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showPercentage, setShowPercentage] = useState(false);

  useEffect(() => {
    // Show percentage near the end of loading
    const percentageTimer = setTimeout(() => {
      setShowPercentage(true);
    }, (duration - 0.3) * 1000);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, (duration + 0.5) * 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(percentageTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4 opacity-0 animate-fadeIn">
        <div className="space-y-6 text-center">
          {/* Loading Bar Animation */}
          <div className="space-y-4 opacity-0 animate-fadeInUp animation-delay-200">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>There is no time for caution</span>
              <span className={`transition-opacity duration-300 ${showPercentage ? 'opacity-100' : 'opacity-0'}`}>
                100%
              </span>
            </div>
            
            <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full animate-progressBar"
                style={{ animationDuration: `${duration}s` }}
              />
            </div>
          </div>

          {/* Loading text with pulse effect */}
          <div className="text-sm text-muted-foreground opacity-0 animate-pulse animate-fadeIn animation-delay-400">
            Initializing portfolio...
          </div>
        </div>
      </div>
    </div>
  );
}