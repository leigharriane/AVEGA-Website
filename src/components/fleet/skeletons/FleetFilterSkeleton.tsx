"use client";

export default function FleetFilterSkeleton() {
  return (
    <div className="w-full lg:max-w-[326px] lg:flex-shrink-0">
      <div className="border border-lightestGray shadow-sm rounded-2xl p-[32px] space-y-8 animate-pulse">
        <div>
          <div className="h-6 w-40 bg-lightestGray rounded mb-4" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-lightestGray rounded-full" />
            ))}
          </div>
        </div>
        <div>
          <div className="h-6 w-48 bg-lightestGray rounded mb-4" />
          <div className="h-4 w-full bg-lightestGray rounded-full" />
        </div>
        <div>
          <div className="h-6 w-40 bg-lightestGray rounded mb-4" />
          <div className="h-10 w-full bg-lightestGray rounded" />
        </div>
      </div>
    </div>
  );
}
