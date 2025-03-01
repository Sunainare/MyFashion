import { useState } from "react";
import "../css/uploadImage.css";

function UploadImage({ onUpload }) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleDelete = () => {
        setImage(null);
        setPreview("");
    };

    const handleUpload = async () => {
        if (!image) return;
        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            onUpload(data.imageUrl);
        } catch (error) {
            console.log("Error uploading image", error);
        }
    };

    return (
        <div className="UploadImage">
            <div className="upload-container">
                <input type="file" onChange={handleFileChange} />
                {preview && (
                    <div className="preview-container">
                        <img src={preview} alt="Preview" />
                        <div className="upload-buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UploadImage;
