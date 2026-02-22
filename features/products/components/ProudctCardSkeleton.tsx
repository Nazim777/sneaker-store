export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="bg-gray-200 aspect-square skeleton" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-full skeleton rounded" />
        <div className="h-8 skeleton rounded" />
      </div>
    </div>
  );
}