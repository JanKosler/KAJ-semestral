import styled from 'styled-components';

/**
 * Form label component
 */
export const FormLabel = styled.label.attrs({
  className: 'pt-2 text-sm text-gray-600 font-bold',
})``;

/**
 * Form input component
 */
export const FormInput = styled.input.attrs({
  className:
    'w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300',
})``;

/**
 * Form input wrapper component
 */
const FormInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

/**
 * Form input with span component after the input (can be used for currency, percentage, etc.)
 */
export const FormInputWithAfter = ({
  className,
  id,
  name,
  type,
  value,
  onChange,
  disabled,
  required,
  afterContent,
}) => {
  return (
    <FormInputWrapper>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`${className} block w-full pl-3 pr-12 py-2.5 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300 sm:text-sm read-only:cursor-not-allowed read-only:border-gray-200 read-only:bg-gray-50 read-only:text-gray-500`}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span className="text-gray-500 sm:text-sm">{afterContent}</span>
      </div>
    </FormInputWrapper>
  );
};

/**
 * Form select component
 */
export const FormSelect = styled.select.attrs({
  className:
    'w-full mt-2 px-2.5 py-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300',
})``;

/**
 * Form button component
 */
export const FormButton = styled.button.attrs({
  className: 'w-full px-4 py-2 text-white font-medium rounded-lg',
})``;

/**
 * Form error message component
 */
export const ErrorMessage = styled.span.attrs({
  className: 'text-red-600 font-bold',
})``;

/**
 * Form centering container component, used to center the form in the middle of the screen
 */
export const CenterContainer = styled.section.attrs({
  className: 'w-full h-screen flex self-center place-content-center place-items-center bg-white',
})``;

/**
 * Form container component, note that this is not "form" tag, but a "div" tag
 */
export const FormContainer = styled.div.attrs({
  className: 'w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl bg-white',
})``;

/**
 * Form item component
 */
export const FormItem = styled.div.attrs({
  className: 'pt-4',
})``;

/**
 * Form message component
 */
export const FormMessage = styled.p.attrs({
  className: 'mt-2 text-xs text-gray-500',
})``;

/**
 * Form header component
 */
export const FormHeader = ({ children }) => {
  return (
    <div className="text-center">
      <div className="mt-2">
        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">{children}</h3>
      </div>
    </div>
  );
};
