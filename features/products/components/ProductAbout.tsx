export default function ProductAbout({ description }: { description?: string }) {
  return (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <h3 className="text-sm font-bold uppercase mb-3">About the Product</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}