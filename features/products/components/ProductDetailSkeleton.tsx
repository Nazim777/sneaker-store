export default function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {[1, 2].map((i) => (
            <div key={i} className="w-20 h-20 skeleton rounded-sm" />
          ))}
        </div>
        <div className="flex-1 skeleton rounded-sm aspect-[4/3]" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="space-y-3">
          <div className="h-3 w-24 skeleton rounded" />
          <div className="h-10 w-3/4 skeleton rounded" />
          <div className="h-8 w-24 skeleton rounded" />
        </div>
        <div className="h-20 skeleton rounded" />
        <div className="h-24 skeleton rounded" />
        <div className="flex gap-3">
          <div className="flex-1 h-12 skeleton rounded" />
          <div className="flex-1 h-12 skeleton rounded" />
        </div>
      </div>
    </div>
  );
}
