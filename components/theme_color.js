
export function Colors() {
    
    const Light = {
        background: "burlywood",
        farground: "#e8d0b1",
        header:"#615442",
        link: '#4169E1',
        primary: "black", // text color for paragraphs, labels and other essentials
        secondary: "#e1ac66" //text color like form microcopy, captions, and table headings
    }
    
    const Dark = {
        background: "black",
        header: "#201f1f",
        farground: "#272625",
        link: "#3cb371",
        primary: "gray", // text color for paragraphs, labels and other essentials
        secondary: "#151414" //text color like form microcopy, captions, and table headings
        
    }


    let theme;
    if (typeof window !== "undefined") {
        theme = localStorage.getItem("theme") || "Dark"
        }

   const themeColor = theme === "Dark" ? Dark : Light;
   return  themeColor
}

export const initial = {
    background: "black",
    brown: "brown",
    farground: "#272625",
    link: "#3cb371",
    primary: "#cecece", // text color for paragraphs, labels and other essentials
    secondary: "#151414" //text color like form microcopy, captions, and table headings
    
}