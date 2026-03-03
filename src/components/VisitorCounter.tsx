"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { incrementVisitorCount, getVisitorCount } from "@/app/actions/counter";

const VISITOR_KEY = "portfolio_visited";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasVisited = localStorage.getItem(VISITOR_KEY);

        if (!hasVisited) {
          const count = await incrementVisitorCount();
          setVisitorCount(count);
          localStorage.setItem(VISITOR_KEY, "true");
        } else {
          const count = await getVisitorCount();
          setVisitorCount(count);
        }
      } catch {
        setVisitorCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-400">
      <Eye className="h-3.5 w-3.5" />
      {isLoading ? (
        <span className="inline-block h-3 w-8 rounded bg-zinc-200 dark:bg-zinc-800" />
      ) : (
        <span>
          {visitorCount !== null ? visitorCount.toLocaleString() : "—"} visits
        </span>
      )}
    </div>
  );
};

export default VisitorCounter;
