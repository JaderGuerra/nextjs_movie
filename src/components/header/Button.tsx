'use client';

export const Button = () => {
  return (
    <button
      onClick={() => history.back()}
      type="button"
      className="text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-600"
    >
      Back
    </button>
  );
};
