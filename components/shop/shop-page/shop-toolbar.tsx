'use client';

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewMode } from "./shop-container";

type Props = {
  total: number;
  view: ViewMode;
  setView: (v: ViewMode) => void;
  limit: number;
  setLimit: (n: number) => void;
};

export default function ShopToolbar({
  total,
  view,
  setView,
  limit,
  setLimit,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-6 border-b pb-4">
      <p className="text-sm text-muted-foreground">
        {total} Item On List
      </p>

      <div className="flex items-center gap-4">
        <Select defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by (default)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Sort by (default)</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={String(limit)}
          onValueChange={(v) => setLimit(Number(v))}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12 per page</SelectItem>
            <SelectItem value="24">24 per page</SelectItem>
            <SelectItem value="36">36 per page</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setView("list")}
          className={view === "list" ? "border-pink-600 text-pink-600" : ""}
        >
          ☰
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setView("grid")}
          className={view === "grid" ? "border-pink-600 text-pink-600" : ""}
        >
          ▦
        </Button>
      </div>
    </div>
  );
}
