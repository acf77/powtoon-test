export const SortingOptions = ({ selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      <option value=""></option>
      <option value="name_asc">A to Z</option>
      <option value="name_desc">Z to A</option>
      <option value="rating_high">High rated</option>
      <option value="rating_low">Low rated</option>
    </select>
  );
};
