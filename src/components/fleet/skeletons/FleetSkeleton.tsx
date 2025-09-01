"use client";

export default function FleetSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="overflow-hidden bg-white">
              <div className="aspect-[3/2] bg-lightestGray rounded-2xl"></div>
              <div className="py-4">
                <div className="h-5 w-3/4 bg-lightestGray rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-4 w-10 bg-lightestGray rounded"></div>
                  <div className="h-4 w-16 bg-lightestGray rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
