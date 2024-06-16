
interface ImgProps {
    files: File[]
    setFiles: Function
    label: string
}

export function Img(props: ImgProps) {

    return (


        <div className="flex  flex-col h-11 space-y-2">

            <div>
                <label className="form-control w-full max-w-xs">
                     <input multiple  onChange={(e) => props.setFiles(e)} type="file" className="h-12 border-none " /> 
                  
                    <div className="label">
                        <span className="label-text-alt">*{props.label}</span>
                    </div>
                </label>
            </div>

            <div>

                <ul>
                    {props.files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    )



}

export default Img;