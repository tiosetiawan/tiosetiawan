export const Footer = () => {
  return (
    <div>
      <footer className="bg-black rounded-lg shadow-sm dark:bg-gray-900 mx-2 md:mx-4 my-4">
        <div className="w-full max-w-screen-xl mx-auto p-3 md:p-4 lg:py-8">
          <span className="block text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://tiosetiawan.com/" className="hover:underline">
              tiosetiawan.com
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
