import { useRef } from 'react';

const Test = () => {
    const inpFile = useRef("");
    console.log("input", inpFile)
    const handleFile = (e) => {
        console.log(e.target.files[0])

        // for (const file of inpFile.files) {
        //     if (file.size > 300000) {
        //         alert(`${file.name} is too big size`);
        //     }
        // }
    }
    return (
        <div className="file-api">
            <h1>File API</h1>
            <form className="form" action="./upload" method="post" encType="multipart/form-data">
                <input type="file" name="inpFile" onChange={(e) => handleFile(e)} ref={inpFile} multiple />
                <button onClick={(e) => fileUpload()} type="submit">Upload File</button>
            </form>
        </div>
    );
};

export default Test;