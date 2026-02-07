import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const NAMESPACE = "dev-sharmas-team-1-2803";
  const KEY = "portfolio-visitors";
  const VISITOR_KEY = "portfolio_visitor_tracked";

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const hasVisited = localStorage.getItem(VISITOR_KEY);

        if (!hasVisited) {
          // New visitor - increment counter
          const response = await fetch(
            `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`
          );

          if (!response.ok) {
            throw new Error(`Failed to increment counter: ${response.status}`);
          }

          const data = await response.json();
          setVisitorCount(data.count);
          localStorage.setItem(VISITOR_KEY, "true");
        } else {
          // Returning visitor - just get the count
          const response = await fetch(
            `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`
          );

          if (!response.ok) {
            throw new Error(`Failed to get counter: ${response.status}`);
          }

          const data = await response.json();
          setVisitorCount(data.count);
        }
      } catch (err) {
        console.error("Error tracking visitor:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
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

  if (error) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Eye className="w-4 h-4" />
        <span>Visitors</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
      <Eye className="w-4 h-4" />
      <span>
        {visitorCount !== null ? visitorCount.toLocaleString() : "0"} visitors
      </span>
    </div>
  );
};

export default VisitorCounter;