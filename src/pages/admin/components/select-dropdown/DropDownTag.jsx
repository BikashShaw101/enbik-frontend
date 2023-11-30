import AsyncSelect from "react-select/async";

const DropDownTag = ({ defaultValue = [], loadOptions, onChange }) => {
  return (
    <AsyncSelect
      defaultValue={defaultValue}
      defaultOptions
      isMulti
      loadOptions={loadOptions}
      onChange={onChange}
      className="relative z-20"
    />
  );
};

export default DropDownTag;
