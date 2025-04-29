const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        future: {
          hoverOnlyWhenSupported: true,
        },
      },
    },
  },
};

export default config;
