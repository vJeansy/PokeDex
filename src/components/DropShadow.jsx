import { useEffect, useRef, useState } from "react";

const DynamicShadowImage = ({ src, alt }) => {
    const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.3)"); // Default shadow color
    const imgRef = useRef();

    useEffect(() => {
        const applyDynamicShadow = () => {
            const img = imgRef.current;
            if (!img.complete) return; // Ensures the image has loaded

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            // Set canvas size to match the image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image onto the canvas
            context.drawImage(img, 0, 0, img.width, img.height);

            // Get pixel data
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            let r = 0, g = 0, b = 0;
            const length = data.length / 4; // Each pixel has 4 values: R, G, B, A

            // Sum up all RGB values
            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            // Calculate the average color
            r = Math.floor(r / length);
            g = Math.floor(g / length);
            b = Math.floor(b / length);

            // Update shadow color state
            setShadowColor(`rgba(${r}, ${g}, ${b}, 0.7)`);
        };

        // Run applyDynamicShadow when image loads
        if (imgRef.current) {
            imgRef.current.addEventListener("load", applyDynamicShadow);
            if (imgRef.current.complete) {
                applyDynamicShadow(); // Apply immediately if the image is already loaded
            }
        }

        // Clean up event listener
        return () => {
            if (imgRef.current) {
                imgRef.current.removeEventListener("load", applyDynamicShadow);
            }
        };
    }, [src]); // Re-run if the src changes

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            style={{
                filter: `drop-shadow(0px 0px 10px ${shadowColor})`
            }}
        />
    );
};

export default DynamicShadowImage;