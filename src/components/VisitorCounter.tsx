import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndIncrementCounter = async () => {
      try {
        // Using counterapi.dev to increment and get visitor count
        const response = await fetch(
          "https://api.counterapi.dev/hit/devsharma-portfolio/visitors"
        );
        
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndIncrementCounter();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Eye className="w-4 h-4" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
      <Eye className="w-4 h-4" />
      <span>{visitorCount?.toLocaleString() || "0"} visitors</span>
    </div>
  );
};

export default VisitorCounter;
