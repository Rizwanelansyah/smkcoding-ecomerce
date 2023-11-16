import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
 theme: {
    extend: {
        colors: {
            primary: "white",
        },
    },
    container: {
        screens: {
            sm: "470px",
            md: "598px",
            lg: "854px",
            xl: "1110px",
        },
        center: true,
     },
  }
}