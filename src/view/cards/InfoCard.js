import Card from "./Card";
import "../button/button.css";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function InfoCard({ title, href, children }) {
    return (
        <Card href={href}>
            <div className="w-full p-1 flex flex-wrap">
                <div className="w-full flex justify-between">
                    <span className="text-sm font-medium text-gray-500 justify-start">
                        {title.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs text-gray-600 rounded-full border-gray-600 arrowIconBorder">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </span>
                </div>
                <div className="w-full flex justify-start items-center mt-6">
                    <div className="text-2xl font-bold text-green-600">
                        172 391 Kč
                    </div>
                </div>
            </div>
        </Card >
        /*
            
                <h3 className="text-lg font-semibold">{title}</h3>
                <div>
                    <button className="text-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-full p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <a href={href}>Read</a>
            </Card>
            /**/
    );
}