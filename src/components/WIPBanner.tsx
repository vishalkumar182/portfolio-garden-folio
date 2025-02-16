
import { AlertCircle } from 'lucide-react';

const WIPBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary/10 backdrop-blur-md py-2 z-50">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <AlertCircle className="h-4 w-4 text-primary" />
        <span>This portfolio is a work in progress. New features and content are being added regularly.</span>
      </div>
    </div>
  );
};

export default WIPBanner;
