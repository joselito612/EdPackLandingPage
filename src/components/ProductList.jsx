import ProducData from '../../data/ProductData';
import ProductCard from './ProductCard';


export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4" id='products'>
      {ProducData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// export default function ProductList({
//   gray,
//   img,
//   imagePosition = "right",
//   children
// }) {
//   const defaultImg = "/images/tri1x2.jpg";
//   const sectionBg = gray ? "bg-gray-100" : "bg-white";
//   const direction =
//     imagePosition === "left" ? "flex-row-reverse" : "flex-row";

//   return (
//     <section
//       className={`flex items-center justify-between gap-6 p-8 ${sectionBg} ${direction}`}
//     >
//       {/* TEXTO */}
//       <div className="">
//         <p className="text-lg font-bold max-w-md">
//           {children}
//         </p>
//       </div>

//       {/* IMAGEN */}
//       <div className=" ">
//         <img
//           src={img || defaultImg}
//           className="h-[40vh] w-[40vh] object-cover rounded-lg"
//           alt=""
//         />
//       </div>
//     </section>
//   );
// }
