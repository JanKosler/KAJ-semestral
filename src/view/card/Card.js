export default function Card({ bgColor, href, children }) {
    if (!bgColor) {
        bgColor = "bg-white";
    }

    return (
        <a href={href}>
            <div className={`${bgColor} max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`} >
                {children}
            </div >
        </a>
    );
}