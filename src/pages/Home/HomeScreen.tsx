import imageHome from "../../assets/image-home.jpg";

function HomeScreen(){
    return (
        <div 
        className="h-screen w-full bg-cover bg-fixed bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${imageHome})` }}>

            <div 
            className=" bg-opacity-50 w-80 h-70 mb-80 ml-17 rounded-xl flex flex-col items-center font-mono"
            style={{ backgroundColor: "rgba(70, 13, 55, 0.1)" }}>
                

                <button
                type="submit"
                className="text-[24px] text-center justify-items-center mt-4  bg-[#4f89c9] hover:bg-violet-600 focus:outline-2 
                focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded w-60"
                >
                    Cadastro
                </button>
                <button
                type="submit"
                className="text-[24px] text-center justify-items-center mt-4  bg-[#4f89c9] hover:bg-violet-600 focus:outline-2 
                focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded w-60"
                >
                    Agendamento
                </button>
                <button
                type="submit"
                className="text-[24px] text-center justify-items-center mt-4  bg-[#4f89c9] hover:bg-violet-600 focus:outline-2 
                focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded w-60"
                >
                    Serviço
                </button>
                <button
                type="submit"
                className="text-[24px] text-center justify-items-center mt-4  bg-[#4f89c9] hover:bg-violet-600 focus:outline-2 
                focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded w-60"
                >
                    Financeiro
                </button>
            </div>
        </div>
    );
}

export default HomeScreen;