import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import "./uploadFiles.css"
import { IoArrowUpCircle } from "react-icons/io5";


// Get production API keys from Upload.io


// Render the file upload button:
export const MyButtonComponent = ({uploadFiles2, text, nameClient}) => {

    const uploader = Uploader({
      apiKey: "public_W142hX67PwCeWgQq4jxqKL5gQYu7"
    });
    

    // Customize the file upload UI (see "customization"):
    const options = {
        styles: {
            colors: {
              primary: "#E0282F",     // Hex codes only.
              active: "#d51942"
            },
            fontFamilies: {
              base: "Archivo, sans-serif;"
            },
            fontSizes: {
              base: 16
            }
          },

        maxFileCount: 1,
        multi: false,
          editor: {
            images: {
              preview: true,
              crop: true,        
              cropRatio: 4 / 3,
              cropShape: "circ"
              // "rect" | "circ"       
            }
        },
          path: {   // Each supports path variables (e.g. {ORIGINAL_FILE_EXT}). See your
           folderPath: `/uploads/suachave/Client/${nameClient}/Avatar-${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()} | ${new Date().getHours()}:${new Date().getMinutes()}`     // API key's config in the Upload Dashboard for all path variables.
          },
     }

     let list = []

    return (

  <UploadButton uploader={uploader}         // Required.
                options={options}           // Optional.
                onComplete={files => {      // Optional.
                  if (files.length === 0) {
                    console.log('No files selected.')
                  } else {
                    console.log('Files uploaded:');
                    console.log(files.map(f => f.fileUrl));
                    uploadFiles2(files[0].fileUrl)
                  }
                }}>
    {({onClick}) =>
      <button className="btnUpload2" onClick={onClick}>
        <IoArrowUpCircle/>
      </button>
    }
  </UploadButton>
    )
}
