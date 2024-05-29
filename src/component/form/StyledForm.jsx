import styled from "styled-components";

export const FormLabel = styled.input.attrs({
    className: "text-sm text-gray-600 font-bold",
})``;

export const FormInput = styled.input.attrs({
    className : "w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300",
})``;

export const FormButton = styled.button.attrs({
    className: "w-full px-4 py-2 text-white font-medium rounded-lg",
})``;

export const ErrorMessage = styled.span.attrs({
    className: "text-red-600 font-bold",
})``;

export const FormHeader = ({ children }) => {
    return (
        <div className="text-center">
            <div className="mt-2">
                <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">{children}</h3>
            </div>
        </div>
    );
}