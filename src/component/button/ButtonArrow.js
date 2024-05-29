import "./button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonArrow = ({ children }) => {
    return (
        <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800">
            Get Started
            <span class="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-white bg-blue-500 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
        </button>
    );
};

export default ButtonArrow;

/*
Custom made arrow icon

<svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 12h14m-7-7l7 7-7 7"></path>
</svg>
 */