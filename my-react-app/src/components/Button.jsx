function Button ({label}) {
    return (
        <button className="bg-blue-600 
        text-white 
        px-4 
        py-2 
        rounded-lg 
        font-semibold 
        hover:bg-blue-700 
        transition 
        duration-300">{label}

        </button>
    );
}
export default Button;