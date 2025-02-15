const Error=()=>{
    return (
        <div className="h-full w-full p-10 flex flex-col items-center justify-center border-1 dark:bg-black">
            <img className="h-[300px] w-[400px]" src="https://t3.ftcdn.net/jpg/09/30/40/90/240_F_930328030_bQ6XEQttj3PzNAFlYAGMLTuq8CuZeCW9.png" alt="errorImage" />
            <p className="font-sans text-xl dark:text-white">OOPS!!!, Something has Wronged</p>
        </div>
    )
}

export default Error