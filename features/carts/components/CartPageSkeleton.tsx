"use client";

export default function CartPageSkeleton() {
  return (
    <main className="bg-[#E7E7E3] min-h-screen mt-12 animate-pulse">
      
      {/* Banner Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-6 bg-gray-300 rounded w-64 mb-3"></div>
        <div className="h-3 bg-gray-300 rounded w-full max-w-xl mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT Skeleton */}
          <div className="flex-1 bg-white p-6 md:p-10 rounded-[2rem] shadow-sm w-full">

            {/* Title */}
            <div className="h-7 bg-gray-300 rounded w-40 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-72 mb-8"></div>

            {/* Items */}
            <div className="space-y-10">

              {[1, 2].map((i) => (
                <div key={i} className="flex flex-row gap-6">

                  {/* Image */}
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-300 rounded-2xl"></div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>
                      <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-36 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-28 mb-4"></div>

                      <div className="flex gap-6">
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>

                  </div>

                  {/* Price */}
                  <div className="hidden sm:block h-5 bg-gray-300 rounded w-16"></div>

                </div>
              ))}

            </div>

          </div>


          {/* RIGHT Skeleton */}
          <div className="w-full lg:w-[400px] bg-white p-8 rounded-[2rem] shadow-sm">

            <div className="h-6 bg-gray-300 rounded w-40 mb-6"></div>

            <div className="space-y-4">

              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>

              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-12"></div>
              </div>

              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-10"></div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="h-5 bg-gray-300 rounded w-16"></div>
                <div className="h-5 bg-gray-300 rounded w-20"></div>
              </div>

            </div>

            <div className="h-12 bg-gray-300 rounded-xl mt-8"></div>

            <div className="h-4 bg-gray-300 rounded w-40 mt-5"></div>

          </div>

        </div>

       
      </div>

    </main>
  );
}