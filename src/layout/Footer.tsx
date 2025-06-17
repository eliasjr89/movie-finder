export const Footer = () => {
  return (
    <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p>
        Built by{" "}
        <a
          href="https://github.com/eliasjr89"
          className="underline hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          eliasjr89
        </a>
      </p>
      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Movie Finder. All rights reserved.
      </p>
    </footer>
  );
};
