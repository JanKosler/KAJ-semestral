import "./button.css";


const ButtonSimple = ({ children }) => {
    return (
        <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800">
            <span>{children}</span>
        </button>
    );
};

export default ButtonSimple;