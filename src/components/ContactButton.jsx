export default function ContactButton({color,children,href,size ="medium"}){
    const colorStyles = {
  green: "bg-green-700 hover:bg-green-900",
  blue: "bg-blue-700 hover:bg-blue-900",
  brown: "bg-amber-800 hover:bg-amber-900",
  black: "bg-black hover:bg-gray-800"
};
    const sizes = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
    };
    return(
        <div>
            <a href={href} className={`flex items-center gap-2 ${colorStyles[color]} text-white font-bold py-2 px-4 rounded shadow-lg ${sizes[size]}`}>
                {children}
            </a>
        </div>
    );
}

