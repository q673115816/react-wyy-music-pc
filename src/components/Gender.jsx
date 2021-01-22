export const DomMale = ({ size = 0 }) => (
  <span
    className="ui_gender"
    style={{
      backgroundColor: '#BCEFFB', padding: 4, borderRadius: '50%', color: '#359CCF',
    }}
  >
    <svg viewBox="0 0 1024 1024" width={size} height={size} className="fill-current">
      <path d="M364 404c34.4 0 67.8 6.7 99.2 20 30.4 12.8 57.6 31.2 81.1 54.7 23.4 23.4 41.8 50.7 54.7 81.1 13.3 31.4 20 64.8 20 99.2s-6.7 67.8-20 99.2c-12.8 30.4-31.2 57.6-54.7 81.1-23.4 23.4-50.7 41.8-81.1 54.7-31.4 13.3-64.8 20-99.2 20s-67.8-6.7-99.2-20c-30.4-12.8-57.6-31.2-81.1-54.7-23.4-23.4-41.8-50.7-54.7-81.1-13.3-31.4-20-64.8-20-99.2s6.7-67.8 20-99.2c12.8-30.4 31.2-57.6 54.7-81.1 23.4-23.4 50.7-41.8 81.1-54.7 31.4-13.3 64.8-20 99.2-20m0-45C198.3 359 64 493.3 64 659s134.3 300 300 300 300-134.3 300-300-134.3-300-300-300z" />
      <path d="M571.5 477c-5.8 0-11.5-2.2-15.9-6.6-8.8-8.8-8.8-23 0-31.8l333.8-334c8.8-8.8 23-8.8 31.8 0s8.8 23 0 31.8l-333.8 334c-4.4 4.4-10.1 6.6-15.9 6.6z" />
      <path d="M905.3 466.5c-12.4 0-22.5-10.1-22.5-22.5V120.5c0-12.4 10.1-22.5 22.5-22.5s22.5 10.1 22.5 22.5V444c0 12.4-10.1 22.5-22.5 22.5z" />
      <path d="M905.3 143h-323c-12.4 0-22.5-10.1-22.5-22.5S569.9 98 582.3 98h322.9c12.4 0 22.5 10.1 22.5 22.5s-10 22.5-22.4 22.5z" />
    </svg>
  </span>
);

export const DomFamale = ({ size = 0 }) => (
  <span
    className="ui_gender"
    style={{
      backgroundColor: '#FBC9E4', padding: 4, borderRadius: '50%', color: '#E54786',
    }}
  >
    <svg viewBox="0 0 1024 1024" width={size} height={size} className="fill-current"><path d="M583.423 98.169c-189.286 0-343.274 153.988-343.274 343.274 0 87.447 32.883 167.344 86.911 228.021l-74.885 74.885-100.31-100.305c-7.827-7.827-20.506-7.827-28.332 0-7.827 7.827-7.827 20.506 0 28.332l100.31 100.305-121.246 121.246c-7.827 7.827-7.827 20.506 0 28.332a19.972 19.972 0 0 0 14.166 5.87 19.972 19.972 0 0 0 14.166-5.87l121.246-121.246 100.324 100.32a19.972 19.972 0 0 0 14.166 5.87 19.972 19.972 0 0 0 14.166-5.87c7.827-7.827 7.827-20.506 0-28.332l-100.324-100.32 74.884-74.884c60.678 54.033 140.579 86.92 228.031 86.92 189.286 0 343.274-153.988 343.274-343.274S772.709 98.169 583.423 98.169z m0 646.475c-167.176 0-303.202-136.016-303.202-303.202S416.247 138.24 583.423 138.24s303.202 136.016 303.202 303.202-136.027 303.202-303.202 303.202z" /></svg>
  </span>
);
