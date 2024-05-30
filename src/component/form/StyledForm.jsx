import styled from 'styled-components';

export const FormLabel = styled.label.attrs({
  className: 'pt-2 text-sm text-gray-600 font-bold',
})``;

export const FormInput = styled.input.attrs({
  className:
    'w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300',
})``;

const FormInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

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

export const FormSelect = styled.select.attrs({
  className:
    'w-full mt-2 px-2.5 py-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300',
})``;

export const FormButton = styled.button.attrs({
  className: 'w-full px-4 py-2 text-white font-medium rounded-lg',
})``;

export const ErrorMessage = styled.span.attrs({
  className: 'text-red-600 font-bold',
})``;

export const CenterContainer = styled.main.attrs({
  className: 'w-full h-screen flex self-center place-content-center place-items-center bg-white',
})``;

export const FormContainer = styled.div.attrs({
  className: 'w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl bg-white',
})``;

export const FormItem = styled.div.attrs({
  className: 'pt-4',
})``;

export const FormMessage = styled.p.attrs({
  className: 'mt-2 text-xs text-gray-500',
})``;

export const FormHeader = ({ children }) => {
  return (
    <div className="text-center">
      <div className="mt-2">
        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">{children}</h3>
      </div>
    </div>
  );
};
