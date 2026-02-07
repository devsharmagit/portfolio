import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const NAMESPACE = "dev-sharmas-team-1-2803";
  const KEY = "portfolio-visitors";
  const API_BASE = "https://api.counterapi.dev/v1";
  const VISITOR_KEY = "portfolio_visitor_tracked";

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        setIsLoading(true);

        // Check if this visitor has been counted before
        const hasVisited = localStorage.getItem(VISITOR_KEY);

        if (!hasVisited) {
          // New visitor - increment counter
          const response = await fetch(
            `${API_BASE}/${NAMESPACE}/${KEY}/up`,
            {
              method: "PUT",
            }
          );

          if (response.ok) {
            const data = await response.json();
            setVisitorCount(data.count);
            // Mark this visitor as counted
            localStorage.setItem(VISITOR_KEY, "true");
          }
        } else {
          // Returning visitor - just get count
          const response = await fetch(
            `${API_BASE}/${NAMESPACE}/${KEY}/get`
          );

          if (response.ok) {
            const data = await response.json();
            setVisitorCount(data.count);
          }
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Eye className="w-4 h-4 animate-pulse" />
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