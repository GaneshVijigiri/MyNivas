import { createTheme } from "@mantine/core";

export const theme = createTheme({
    components: {
        Button: {
            defaultProps: {
                radius: "sm",
                size: "sm",
            },
            styles: {
                root: {
                    
                }
            }
        }
    }
})