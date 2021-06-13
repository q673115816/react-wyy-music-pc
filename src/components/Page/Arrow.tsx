import classNames from "classnames";

export default ({
                  handleClick = () => void 0,
                  status = false,
                  current = false,
                  children
                }) => (
  <button
    type="button"
    onClick={handleClick}
    className={classNames(
      'border px-2 h-6 flex-center rounded',
      status ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200',
      current && 'cursor-auto ui_theme_bg_color text-white'
    )}
  >
    {children}
  </button>
)
