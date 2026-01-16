export default function ProductCard({ product }) {
  return (
    <div className="product-card p-4 border rounded-lg shadow-md text-center bg-white">
      <img src={product.img} className="h-[40vh] w-[40vh] object-cover rounded-lg" alt=""/>
      <h3 className="font-bold">{product.name}</h3>
      <p className="font-bold">Precio: ${product.price}</p>
      
    </div>
  );
}